#!/usr/bin/env python3
"""
build_feed.py - refresh agp/assets/feed.json for the acuityglobalpartners.com
public sector news ticker and the "What We Are Watching" strip.

Run on a schedule by .github/workflows/refresh-feed.yml. Pulls public sector
trade press RSS plus the Federal Register API, drops anything older than
MAX_AGE_DAYS, asks Haiku to pick and categorise the strongest items for an
executive public sector advisory audience, and writes feed.json.

Failure philosophy: degrade, never freeze, never lie.
  - Model call fails  -> publish the freshest headlines, categories by source,
                         blurb taken from the item's own RSS description.
  - Retrieval is thin -> publish what we have.
  - Retrieval fails   -> exit non-zero and leave the existing file untouched,
                         so the site shows genuinely old data rather than an
                         empty ticker. The stale indicator on the page then
                         tells the reader the feed is behind.

STRUCTURE NOTE: the __main__ guard is the LAST thing in this file on purpose.
Anything appended below it would be defined only after main() has already run,
which is exactly the bug that shipped blank blurbs on 3 Aug 2026. Add new code
ABOVE the guard.
"""

import json
import os
import re
import sys
from datetime import datetime, timedelta, timezone
from html import unescape

import feedparser
import requests

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

OUT_PATH = os.path.join(
    os.path.dirname(os.path.abspath(__file__)), "..", "agp", "assets", "feed.json"
)

MAX_AGE_DAYS = 7        # nothing older than this ever reaches the ticker
MAX_STORIES = 8         # how many end up in the ticker
MAX_CANDIDATES = 45     # cap on what we hand the model
PER_FEED = 12           # entries pulled per RSS source

FEEDS = [
    ("FedScoop", "https://fedscoop.com/feed/"),
    ("DefenseScoop", "https://defensescoop.com/feed/"),
    ("Nextgov", "https://www.nextgov.com/rss/all/"),
    ("MeriTalk", "https://www.meritalk.com/feed/"),
    ("Federal News Network", "https://federalnewsnetwork.com/feed/"),
    ("Government Executive", "https://www.govexec.com/rss/all/"),
    ("Breaking Defense", "https://breakingdefense.com/feed/"),
    ("CyberScoop", "https://cyberscoop.com/feed/"),
]

# Categories the ticker displays. Keep this list short; it renders as a chip.
CATEGORIES = [
    "Acquisition and Contracting",
    "AI and Cybersecurity",
    "Compliance and Security",
    "Budget and Appropriations",
    "Defense and National Security",
    "Policy and Regulation",
    "Technology Modernization",
]

# Fallback category by source, used only when the model call fails.
SOURCE_CATEGORY = {
    "DefenseScoop": "Defense and National Security",
    "Breaking Defense": "Defense and National Security",
    "CyberScoop": "AI and Cybersecurity",
    "Federal Register": "Policy and Regulation",
}

SELECTION_PROMPT = """You are curating a public sector news ticker on the website of Acuity Global Partners, a Washington DC advisory that helps technology companies and their investors enter, operate, and win in government markets. The audience is agency executives, govtech founders, and investors.

Pick the {n} items most useful to that audience. Favour: procurement and contract actions, budget and appropriations moves, compliance gates such as FedRAMP and CMMC, agency technology adoption, defense acquisition, and regulation that changes how companies sell into government. Avoid personnel trivia, routine event notices, opinion columns, and anything that is not actionable for a company selling to government.

For each item you pick, return:
- i: the item's index
- category: exactly one of {categories}
- why: one sentence, max 20 words, on why it matters to a company selling into government. Plain declarative prose, no hype, no em dashes.

Items:
{items}

Return ONLY a JSON array, no prose, no markdown:
[{{"i": <index>, "category": "<category>", "why": "<one sentence>"}}]"""


# ---------------------------------------------------------------------------
# Retrieval
# ---------------------------------------------------------------------------

def _clean(text):
    """Strip HTML tags and collapse whitespace out of RSS summary blobs."""
    text = re.sub(r"<[^>]+>", " ", text or "")
    return re.sub(r"\s+", " ", unescape(text)).strip()


def _entry_summary(entry):
    """Pull a usable description out of an RSS/Atom entry.

    Feeds disagree about where the description lives. WordPress feeds use
    <description> (feedparser: summary), Atom feeds often carry only
    <content>, and a few publish <subtitle> instead. Try each in turn and
    take the first that yields real text after tag stripping.
    """
    candidates = []

    for key in ("summary", "subtitle", "description"):
        val = entry.get(key)
        if isinstance(val, str):
            candidates.append(val)

    for key in ("content", "summary_detail", "subtitle_detail"):
        val = entry.get(key)
        if isinstance(val, dict):
            candidates.append(val.get("value", ""))
        elif isinstance(val, (list, tuple)):
            for block in val:
                if isinstance(block, dict):
                    candidates.append(block.get("value", ""))
                elif isinstance(block, str):
                    candidates.append(block)

    for raw in candidates:
        cleaned = _clean(raw)
        # Skip boilerplate stubs some feeds emit in place of a description.
        if len(cleaned) >= 40:
            return cleaned[:400]

    for raw in candidates:
        cleaned = _clean(raw)
        if cleaned:
            return cleaned[:400]

    return ""


def _first_sentence(text, limit=160):
    """First sentence of a description, trimmed to fit a card."""
    text = (text or "").strip()
    if not text:
        return ""
    parts = re.split(r"(?<=[.!?])\s+", text)
    out = parts[0].strip() if parts else text
    if len(out) > limit:
        out = out[:limit].rsplit(" ", 1)[0].rstrip(",;:") + "..."
    return out


def _parse_date(entry):
    for key in ("published_parsed", "updated_parsed"):
        st = entry.get(key)
        if st:
            try:
                return datetime(*st[:6], tzinfo=timezone.utc)
            except Exception:
                continue
    return None


def fetch_rss(cutoff):
    items = []
    for source, url in FEEDS:
        try:
            parsed = feedparser.parse(url)
        except Exception as exc:
            print(f"[rss] {source} failed: {exc}")
            continue
        if not parsed.entries:
            print(f"[rss] {source} returned no entries")
            continue
        kept = 0
        blurbed = 0
        for e in parsed.entries[:PER_FEED]:
            title = _clean(e.get("title", ""))
            link = (e.get("link") or "").strip()
            when = _parse_date(e)
            if not title or not link or not when or when < cutoff:
                continue
            summary = _entry_summary(e)
            if summary:
                blurbed += 1
            items.append({
                "title": title,
                "url": link,
                "source": source,
                "published": when.isoformat().replace("+00:00", "Z"),
                "summary": summary,
            })
            kept += 1
        print(f"[rss] {source}: {kept} within window, {blurbed} with a description")
    return items


def fetch_federal_register(cutoff):
    """Rules and proposed rules from the Federal Register API. No key needed."""
    try:
        resp = requests.get(
            "https://www.federalregister.gov/api/v1/documents.json",
            params={
                "per_page": 20,
                "order": "newest",
                "fields[]": ["title", "html_url", "publication_date",
                             "type", "agencies", "abstract"],
                "conditions[type][]": ["RULE", "PRORULE"],
                "conditions[publication_date][gte]": cutoff.strftime("%Y-%m-%d"),
            },
            timeout=25,
            headers={"User-Agent": "acuityglobalpartners.com feed builder"},
        )
        resp.raise_for_status()
        data = resp.json()
    except Exception as exc:
        print(f"[fedreg] failed: {exc}")
        return []

    out = []
    for d in data.get("results", []):
        title = _clean(d.get("title", ""))
        url = (d.get("html_url") or "").strip()
        pub = d.get("publication_date")
        if not title or not url or not pub:
            continue
        agencies = d.get("agencies") or []
        agency = ""
        if agencies and isinstance(agencies[0], dict):
            agency = agencies[0].get("name", "") or ""
        summary = _clean(d.get("abstract", "")) or _clean(d.get("type", ""))
        out.append({
            "title": title,
            "url": url,
            "source": f"Federal Register - {agency}" if agency else "Federal Register",
            "published": f"{pub}T12:00:00Z",
            "summary": summary[:400],
        })
    print(f"[fedreg] {len(out)} within window")
    return out


def dedupe(items):
    seen_url, seen_title, out = set(), set(), []
    for it in items:
        u = it["url"].split("?")[0].rstrip("/").lower()
        t = it["title"].lower()[:80]
        if u in seen_url or t in seen_title:
            continue
        seen_url.add(u)
        seen_title.add(t)
        out.append(it)
    return out


# ---------------------------------------------------------------------------
# Selection
# ---------------------------------------------------------------------------

def heuristic_pick(items):
    """Used when the model call is unavailable.

    Newest first, category by source, blurb taken from the item's own RSS
    description. Descriptive rather than analytical, but never blank when the
    feed gave us anything to work with.
    """
    picked = []
    for it in items[:MAX_STORIES]:
        base = it["source"].split(" - ")[0]
        picked.append({
            "title": it["title"],
            "url": it["url"],
            "source": it["source"],
            "category": SOURCE_CATEGORY.get(base, "Technology Modernization"),
            "published": it["published"],
            "why": _first_sentence(it.get("summary", "")),
        })
    return picked


def model_pick(items):
    api_key = os.environ.get("ANTHROPIC_API_KEY", "")
    if not api_key:
        print("[model] no ANTHROPIC_API_KEY; using heuristic selection")
        return heuristic_pick(items)

    try:
        import anthropic
    except Exception as exc:
        print(f"[model] anthropic sdk unavailable: {exc}")
        return heuristic_pick(items)

    catalog = [
        {"i": i, "title": it["title"], "source": it["source"],
         "summary": it["summary"][:180]}
        for i, it in enumerate(items)
    ]
    prompt = SELECTION_PROMPT.format(
        n=MAX_STORIES,
        categories=" | ".join(CATEGORIES),
        items=json.dumps(catalog, ensure_ascii=False),
    )

    try:
        client = anthropic.Anthropic(api_key=api_key)
        resp = client.messages.create(
            model="claude-haiku-4-5-20251001",
            max_tokens=2000,
            messages=[{"role": "user", "content": prompt}],
        )
        raw = "".join(b.text for b in resp.content if b.type == "text").strip()
        raw = raw.replace("```json", "").replace("```", "").strip()
        picks = json.loads(raw)
    except Exception as exc:
        print(f"[model] selection failed, falling back: {exc}")
        return heuristic_pick(items)

    out = []
    for p in picks:
        try:
            it = items[int(p["i"])]
        except (KeyError, ValueError, IndexError, TypeError):
            continue
        cat = str(p.get("category", "")).strip()
        if cat not in CATEGORIES:
            cat = SOURCE_CATEGORY.get(it["source"].split(" - ")[0],
                                      "Technology Modernization")
        why = str(p.get("why", "")).strip()[:200]
        if not why:
            why = _first_sentence(it.get("summary", ""))
        out.append({
            "title": it["title"],
            "url": it["url"],
            "source": it["source"],
            "category": cat,
            "published": it["published"],
            "why": why,
        })
        if len(out) >= MAX_STORIES:
            break

    if not out:
        print("[model] returned nothing usable; falling back")
        return heuristic_pick(items)
    print(f"[model] selected {len(out)} items")
    return out


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    now = datetime.now(timezone.utc)
    cutoff = now - timedelta(days=MAX_AGE_DAYS)
    print(f"[feed] window starts {cutoff.isoformat()}")

    items = fetch_rss(cutoff) + fetch_federal_register(cutoff)
    items = dedupe(items)
    items.sort(key=lambda x: x["published"], reverse=True)
    print(f"[feed] {len(items)} unique candidates in window")

    if not items:
        # Do not overwrite a good file with an empty one. Exit loud; the page's
        # stale indicator will tell readers the feed is behind.
        sys.exit("[feed] no items retrieved; leaving existing feed.json untouched")

    stories = model_pick(items[:MAX_CANDIDATES])

    payload = {
        "updatedAt": now.isoformat().replace("+00:00", "Z"),
        "live": True,
        "generator": "build_feed.py",
        "windowDays": MAX_AGE_DAYS,
        "stories": stories,
    }

    out_path = os.path.normpath(OUT_PATH)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(payload, f, indent=1, ensure_ascii=False)
        f.write("\n")

    with_why = sum(1 for s in stories if s.get("why"))
    newest = stories[0]["published"] if stories else "n/a"
    print(f"[feed] wrote {len(stories)} stories to {out_path}; "
          f"{with_why} with a blurb; newest {newest}")


# Keep this guard last. See the STRUCTURE NOTE at the top of the file.
if __name__ == "__main__":
    main()
