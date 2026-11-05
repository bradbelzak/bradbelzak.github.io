#!/usr/bin/env python3
"""
build_feed.py - refresh agp/assets/feed.json for the acuityglobalpartners.com
government affairs and global risk news ticker.

Run on a schedule by .github/workflows/refresh-feed.yml. Pulls Washington and
foreign policy press RSS plus presidential documents from the Federal Register
API, drops anything older than MAX_AGE_DAYS, asks Haiku to pick and categorise
the strongest items for an executive audience watching U.S. policy and global
risk, and writes feed.json.

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
MAX_CANDIDATES = 160    # cap on what we score and hand the model (12 feeds x up to 12 items, plus Federal Register)
PER_FEED = 12           # entries pulled per RSS source

FEEDS = [
    # Government affairs: Congress, the White House, agencies
    ("Roll Call", "https://rollcall.com/feed/"),
    ("Politico Congress", "https://rss.politico.com/congress.xml"),
    ("Government Executive", "https://www.govexec.com/rss/all/"),
    ("Federal News Network", "https://federalnewsnetwork.com/feed/"),
    # Global risk as it bears on the United States
    ("Foreign Policy", "https://foreignpolicy.com/feed/"),
    ("War on the Rocks", "https://warontherocks.com/feed/"),
    ("Just Security", "https://www.justsecurity.org/feed/"),
    ("Atlantic Council", "https://www.atlanticcouncil.org/feed/"),
    ("State Department", "https://www.state.gov/rss-feed/press-releases/feed/"),
    ("Defense One", "https://www.defenseone.com/rss/all/"),
    ("Breaking Defense", "https://breakingdefense.com/feed/"),
    ("CyberScoop", "https://cyberscoop.com/feed/"),
]

# Categories the ticker displays. Keep this list short; it renders as a chip.
CATEGORIES = [
    "Congress and Legislation",
    "White House and Agencies",
    "Trade, Tariffs and Sanctions",
    "Defense and National Security",
    "Geopolitics and Global Risk",
    "Cyber and Technology Risk",
]

# Fallback category by source, used only when the model call fails.
SOURCE_CATEGORY = {
    "Roll Call": "Congress and Legislation",
    "Politico Congress": "Congress and Legislation",
    "Government Executive": "White House and Agencies",
    "Federal News Network": "White House and Agencies",
    "Federal Register": "White House and Agencies",
    "Foreign Policy": "Geopolitics and Global Risk",
    "War on the Rocks": "Defense and National Security",
    "Just Security": "Geopolitics and Global Risk",
    "Atlantic Council": "Geopolitics and Global Risk",
    "State Department": "Geopolitics and Global Risk",
    "Defense One": "Defense and National Security",
    "Breaking Defense": "Defense and National Security",
    "CyberScoop": "Cyber and Technology Risk",
}

# Relevance scoring for the no-model path. Retargeted 2026-11-02 from
# contractor news to government affairs and global risk as they bear on the
# United States. Each candidate is scored on policy and risk keywords, a U.S.
# anchor is rewarded, campaign horse-race and culture content is pushed down,
# source balance is enforced, and the Federal Register is capped.
KEYWORD_WEIGHTS = [
    # government affairs: Congress, the White House, agencies, courts
    (r"\bcongress|\bsenate\b|\bhouse\b|\blawmakers?\b|\bcommittee\b", 3),
    (r"\bbill\b|\blegislation\b|\bndaa\b|\bappropriation|\bbudget\b|\bfunding\b", 4),
    (r"\bcontinuing resolution\b|\bshutdown\b|\bdebt ceiling\b|\breconciliation\b", 5),
    (r"\bwhite house\b|\bexecutive order\b|\badministration\b|\bproclamation\b|\bmemorandum\b", 3),
    (r"\bregulat|\brule\b|\brulemaking\b|\bagency\b|\bagencies\b|\bdelegation of authority\b", 2),
    (r"\bsupreme court\b|\bfederal judge\b|\bcourt\b", 1),
    (r"\bconfirm(ed|ation)\b|\bnominee\b|\bhearing\b|\boversight\b|\binspector general\b", 3),
    # trade, sanctions and economic statecraft
    (r"\btariffs?\b|\bduties\b|\badjusting imports\b|\bsection 232\b|\bsection 301\b|\btrade\b", 5),
    (r"\bsanction|\bofac\b|\bexport control|\bentity list\b|\bcfius\b|\boutbound investment\b", 6),
    (r"\bdefense production act\b|\bcritical minerals?\b|\bsupply chains?\b|\brare earth", 5),
    # geopolitics and global risk
    (r"\bchina\b|\bbeijing\b|\btaiwan\b|\brussia\b|\bukraine\b|\biran\b|\bnorth korea\b", 4),
    (r"\bisrael\b|\bgaza\b|\bhouthi|\bred sea\b|\bstrait of hormuz\b|\bmiddle east\b|\bgulf\b", 3),
    (r"\bnato\b|\ballies\b|\balliance\b|\bquad\b|\bg7\b|\bg20\b|\bindo-pacific\b|\bpacific\b", 3),
    (r"\bwar\b|\bconflict\b|\bmissiles?\b|\bnuclear\b|\bdeterren|\bescalat|\bceasefire\b", 3),
    (r"\bpentagon\b|\bdefense\b|\bmilitary\b|\btroops?\b|\bforce posture\b|\bintelligence\b", 2),
    (r"\bterror|\bespionage\b|\bspy|\bcounterintelligence\b|\bforeign interference\b", 3),
    (r"\bstate department\b|\bsecretary of state\b|\brubio\b|\bdiplomat|\bsummit\b|\btreaty\b", 2),
    # cyber and technology risk
    (r"\bcyber|\bransomware\b|\bhack|\bvulnerabilit|\bcisa\b|\bcritical infrastructure\b", 3),
    (r"\bartificial intelligence\b|\bai\b|\bsemiconductor|\bchips?\b|\bquantum\b", 2),
    # the U.S. anchor
    (r"\bu\.s\.|\bunited states\b|\bamerica|\bwashington\b|\bfederal\b", 2),
]
NEGATIVE_WEIGHTS = [
    # campaign horse race, partisan personalities, polling
    (r"\bcampaign\b|\bpolls?\b|\bpolling\b|\bsurvey\b|\bballots?\b|\bvoters?\b|\bmidterm|\bprimary\b", -4),
    (r"\braid\b|\bfeud\b|\bslams?\b|\brips\b|\bblasts?\b", -5),
    # culture, reviews, quizzes, lifestyle, personal finance
    (r"\breview\b|\bbooks?\b|\bnetflix\b|\bfilm\b|\bmovie\b|\bculture\b|\bbaseball\b|\bsports?\b", -8),
    (r"\bquiz\b|\bwhat in the world\b|\bpodcast\b|\bwebinar\b|\bvideo\b|\bobituar", -6),
    (r"\bretire(e|es|ment)\b|\btsp\b|\bfers\b|\bpurchasing power\b|\bwi-fi\b|\bmovers (&|and) shakers\b", -6),
    (r"\bnational day\b|\bindependence day\b|\b(month|week|day), 20\d\d\b|\bon the occasion\b|\bcongratulat", -8),
    (r"\bearly edition\b|\bcorrection\b|\btechnical amendment", -6),
    # press-mention and collection pages that point elsewhere instead of reporting
    (r"\bquoted in\b|\bjoins .* (podcast|panel|show)\b|^collection:|\bfor the [a-z ]+(tribune|review|journal):", -10),
    # electoral contests and personnel moves
    (r"\bendorse|\bchalleng(e|es|ing) [a-z]+ [a-z]+$|\bincumbent|\bcandidates?\b|\bsenate nominee\b|\brace\b|\bbacklash\b", -5),
    (r"\bacting role\b|\bsteps down\b|\bnamed (as )?(new )?(chief|director|head)\b|\bappointed\b", -5),
]
FEDREG_CAP = 1            # at most this many Federal Register items in the ticker
PER_SOURCE_CAP = 2        # keep the ticker from reading like one outlet


def relevance(item):
    text = (item.get("title", "") + " " + item.get("summary", "")).lower()
    score = 0
    for pat, w in KEYWORD_WEIGHTS + NEGATIVE_WEIGHTS:
        if re.search(pat, text):
            score += w
    base = item["source"].split(" - ")[0]
    if base == "Federal Register":
        score += 1          # presidential documents are primary-source policy moves
    return score


def category_for(item):
    """Keyword-first category, source fallback. Used on the no-model path.
    Title is checked before summary so a passing word in a blurb (a "bigger
    bill", a "trade-off") does not override what the headline is about."""
    title = item.get("title", "").lower()
    summary = item.get("summary", "").lower()
    rules = [
        ("Trade, Tariffs and Sanctions", r"\btariffs?\b|\bduties\b|\badjusting imports\b|\bsection (232|301)\b|\bsanction|\bofac\b|\bexport controls?\b|\bentity list\b|\bcfius\b|\btrade (deal|war|policy|talks)\b|\busmca\b"),
        ("Cyber and Technology Risk", r"\bcyber|\bransomware\b|\bhack|\bvulnerabilit|\bcisa\b|\bspyware\b|\bsemiconductor|\bquantum\b"),
        ("Congress and Legislation", r"\bcongress(ional)?\b|\bsenate\b|\bhouse (passes|votes|committee|republicans|democrats)\b|\blawmakers?\b|\bbill\b|\blegislation\b|\bndaa\b|\bappropriations?\b|\bcontinuing resolution\b|\bshutdown\b"),
        ("Geopolitics and Global Risk", r"\bchina\b|\btaiwan\b|\brussia\b|\bukrain|\biran\b|\bnorth korea\b|\bisrael\b|\bgaza\b|\bhouthi|\bnato\b|\bquad\b|\bg(7|20)\b|\bmiddle east\b|\bvenezuela\b|\bsaudi\b|\bturk(ey|ish)\b|\btaliban\b"),
        ("Defense and National Security", r"\bpentagon\b|\bdefense\b|\bmilitary\b|\barmy\b|\bnavy\b|\bair force\b|\bspace force\b|\btroops?\b|\bintelligence\b|\bmissiles?\b"),
        ("White House and Agencies", r"\bwhite house\b|\bexecutive order\b|\badministration\b|\bproclamation\b|\bmemorandum\b|\bdetermination\b|\bagenc(y|ies)\b|\bregulat|\bpresidential\b"),
    ]
    for text in (title, summary):
        for cat, pat in rules:
            if re.search(pat, text):
                return cat
    base = item["source"].split(" - ")[0]
    return SOURCE_CATEGORY.get(base, "Geopolitics and Global Risk")

SELECTION_PROMPT = """You are curating a news ticker on the website of Acuity Global Partners, a Washington DC firm that advises companies, investors, and boards on government strategy and global risk. The audience is executives, investors, and boards whose businesses are exposed to U.S. government decisions and to international events that affect the United States.

Pick the {n} items most useful to that audience. Favour: actions by Congress, the White House, and federal agencies; budget and appropriations; tariffs, sanctions, export controls, and investment screening; defense and national security policy; and international developments with clear consequences for the United States, its allies, or U.S. companies operating abroad. Avoid campaign horse-race coverage, partisan personality stories, polls, opinion columns, book and culture reviews, personnel trivia, and anything without a clear U.S. policy or risk implication. Stay strictly nonpartisan.

For each item you pick, return:
- i: the item's index
- category: exactly one of {categories}
- why: one sentence, max 20 words, on why it matters to an executive or investor watching U.S. policy and global risk. Plain declarative prose, no hype, no em dashes.

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
    """Presidential documents (executive orders, proclamations, memoranda,
    determinations) from the Federal Register API. No key needed."""
    try:
        resp = requests.get(
            "https://www.federalregister.gov/api/v1/documents.json",
            params={
                "per_page": 20,
                "order": "newest",
                "fields[]": ["title", "html_url", "publication_date",
                             "type", "subtype", "agencies", "abstract"],
                "conditions[type][]": ["PRESDOCU"],
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
        subtype = _clean(d.get("subtype", "")) or "document"
        summary = _clean(d.get("abstract", "")) or (
            f"Presidential {subtype.lower()} published in the Federal Register.")
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

    Ranked by government affairs and global risk relevance (recency breaks ties), with
    a per-source cap and a Federal Register cap so the ticker reads like a
    policy and risk desk, not the newest eight lines of whatever came in. Blurb comes from the item's own RSS description.
    """
    ranked = sorted(items, key=lambda it: (relevance(it), it["published"]), reverse=True)
    picked, per_source = [], {}
    for it in ranked:
        base = it["source"].split(" - ")[0]
        cap = FEDREG_CAP if base == "Federal Register" else PER_SOURCE_CAP
        if per_source.get(base, 0) >= cap:
            continue
        if relevance(it) < 0:
            continue
        per_source[base] = per_source.get(base, 0) + 1
        picked.append({
            "title": it["title"],
            "url": it["url"],
            "source": it["source"],
            "category": category_for(it),
            "published": it["published"],
            "why": _first_sentence(it.get("summary", "")),
        })
        if len(picked) >= MAX_STORIES:
            break
    # Newest first inside the chosen set so the ticker still reads as current.
    picked.sort(key=lambda x: x["published"], reverse=True)
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
                                      "Geopolitics and Global Risk")
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
