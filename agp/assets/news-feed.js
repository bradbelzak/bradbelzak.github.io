/* Acuity Global Partners — public-sector news ticker (client).
   v3: the long-form card section under the hero was retired 2026-07-30 at
   Brad's direction. This script now (1) removes that legacy section if its
   markup is still present in index.html, and (2) renders the scrolling
   headline ticker between the header and the hero, part of the landing screen. Every failure
   path degrades to "no ticker" — the page never breaks. */
(function () {
  "use strict";

  var CFG = window.AGP_FEED_CONFIG || {};
  var ENDPOINT = CFG.endpoint || "/api/public-sector-feed";

  /* Retire the legacy card section (markup may still ship in index.html). */
  var legacy = document.getElementById("news-feed");
  if (legacy) legacy.remove();

  var state = { stories: [] };

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function safeHref(u) {
    try { var p = new URL(String(u)); return (p.protocol === "http:" || p.protocol === "https:") ? p.href : "#"; }
    catch (e) { return "#"; }
  }

  /* ---------- analytics: reuse whatever the site already has ---------- */
  function track(event, params) {
    try {
      if (typeof window.gtag === "function") window.gtag("event", event, params || {});
      else if (Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event: event }, params));
      else if (typeof window.plausible === "function") window.plausible(event, { props: params });
    } catch (e) { /* analytics must never break the page */ }
  }

  /* ---------- top-of-page scrolling ticker (injected above the hero) ---------- */
  function ticker() {
    var list = state.stories;
    if (!list.length) return;
    var bar = document.getElementById("nf-ticker");
    if (!bar) {
      var hero = document.querySelector(".hero");
      if (!hero || !hero.parentNode) return;
      bar = document.createElement("div");
      bar.id = "nf-ticker"; bar.className = "nf-ticker";
      bar.setAttribute("role", "region");
      bar.setAttribute("aria-label", "Latest U.S. public sector developments — scrolling headlines");
      bar.innerHTML =
        '<span class="nf-ticker-label">' +
          '<span class="nf-tdot" aria-hidden="true"></span><span>Public Sector News</span></span>' +
        '<div class="nf-ticker-viewport"><div class="nf-ticker-track" id="nf-tick-track"></div></div>';
      hero.parentNode.insertBefore(bar, hero);
      /* Not pinned. The ticker belongs to the landing screen and scrolls away
         with it, so only the topbar covers content further down. Anchor jumps
         clear the topbar alone. */
      var pad = function () {
        var tb = document.querySelector(".topbar");
        document.documentElement.style.scrollPaddingTop = ((tb ? tb.offsetHeight : 0) + 8) + "px";
      };
      pad();
      window.addEventListener("resize", pad);
    }
    var html = list.map(function (s) {
      return '<a class="nf-ticker-item" href="' + esc(safeHref(s.url)) + '" target="_blank" rel="noopener noreferrer nofollow">' +
        '<span class="nf-ticker-cat">' + esc(s.category) + "</span>" +
        '<span class="nf-ticker-headline">' + esc(s.title) + "</span></a>";
    }).join("");
    var trk = bar.querySelector("#nf-tick-track");
    trk.innerHTML = '<div class="nf-ticker-group">' + html + "</div>" +
      '<div class="nf-ticker-group" aria-hidden="true">' + html + "</div>";
    trk.querySelectorAll('[aria-hidden="true"] a').forEach(function (a) { a.tabIndex = -1; });
    requestAnimationFrame(function () {
      var w = trk.scrollWidth / 2;
      if (w > 0) trk.style.setProperty("--nf-tick-dur", Math.max(22, Math.round(w / 75)) + "s");
    });
    trk.querySelectorAll(".nf-ticker-item").forEach(function (a) {
      a.addEventListener("click", function () {
        track("news_ticker_click", { headline: a.textContent });
      });
    });
  }

  /* ---------- data ---------- */
  var LS = "agp-feed-cache-v1";
  function readCache() { try { return JSON.parse(localStorage.getItem(LS)); } catch (e) { return null; } }
  function writeCache(p) { try { localStorage.setItem(LS, JSON.stringify(p)); } catch (e) {} }

  function apply(p) {
    if (!p || !Array.isArray(p.stories) || !p.stories.length) return false;
    state.stories = p.stories.filter(function (s) { return s && s.title && s.url; });
    ticker();
    return true;
  }

  function load() {
    fetch(ENDPOINT, { headers: { accept: "application/json" } })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (p) { if (apply(p)) writeCache(p); else throw new Error("empty"); })
      .catch(function () { apply(readCache()); /* no cache -> no ticker; page is simply itself */ });
  }

  /* ---------- boot ---------- */
  load();
  var mins = Math.min(60, Math.max(5, CFG.refreshMinutes || 15));
  setInterval(load, mins * 6e4);
})();


/* ---------------------------------------------------------------------------
   Freshness guard (added 2026-08-03)
   feed.json is rebuilt on a schedule by .github/workflows/refresh-feed.yml.
   If that pipeline stalls, the ticker must not keep implying the news is live.
   This watches the feed's updatedAt and, past STALE_AFTER_HOURS, drops the
   pulsing green dot to a muted state and relabels it. It also hangs each
   story's one-line 'why it matters' on the link as a hover title.
   --------------------------------------------------------------------------- */
(function () {
  "use strict";

  var STALE_AFTER_HOURS = 12;
  var CFG = window.AGP_FEED_CONFIG || {};
  var ENDPOINT = CFG.endpoint || "agp/assets/feed.json";

  function applyFreshness(payload) {
    var bar = document.getElementById("nf-ticker");
    if (!bar || !payload || !payload.updatedAt) return;

    var ageH = (Date.now() - Date.parse(payload.updatedAt)) / 3600000;
    if (!isFinite(ageH)) return;

    var dot = bar.querySelector(".nf-tdot");
    var label = bar.querySelector(".nf-ticker-label span:last-child");
    var stale = ageH > STALE_AFTER_HOURS;

    if (dot) {
      dot.style.background = stale ? "#8a8f98" : "";
      dot.style.animation = stale ? "none" : "";
      dot.style.boxShadow = stale ? "none" : "";
    }
    if (label) {
      label.textContent = stale ? "Public Sector News (delayed)" : "Public Sector News";
    }
    bar.setAttribute("data-state", stale ? "stale" : "live");
    bar.setAttribute(
      "title",
      "Feed updated " + (ageH < 1
        ? Math.max(1, Math.round(ageH * 60)) + " minutes ago"
        : Math.round(ageH) + " hours ago")
    );
  }

  function annotate(payload) {
    if (!payload || !Array.isArray(payload.stories)) return;
    var byUrl = {};
    payload.stories.forEach(function (s) {
      if (s && s.url && s.why) byUrl[s.url] = s.why;
    });
    document.querySelectorAll(".nf-ticker-item").forEach(function (a) {
      var why = byUrl[a.getAttribute("href")];
      if (why && !a.getAttribute("title")) a.setAttribute("title", why);
    });
  }

  function check() {
    fetch(ENDPOINT, { headers: { accept: "application/json" }, cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (p) {
        if (!p) return;
        applyFreshness(p);
        annotate(p);
      })
      .catch(function () { /* never break the page over a status dot */ });
  }

  // Wait for the ticker to be injected by the loader above, then annotate it.
  var tries = 0;
  var poll = setInterval(function () {
    tries += 1;
    if (document.getElementById("nf-ticker")) {
      clearInterval(poll);
      check();
      setInterval(check, 10 * 60 * 1000);
    } else if (tries > 40) {
      clearInterval(poll);
    }
  }, 500);
})();
