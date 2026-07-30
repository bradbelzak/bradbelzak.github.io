/* Acuity Global Partners — public-sector news feed (client).
   Progressive enhancement: server markup is not required, the section reserves
   its own height, and every failure path renders something useful.
   v2: adds a top-of-page scrolling headline ticker injected above the hero. */
(function () {
  "use strict";

  var CFG = window.AGP_FEED_CONFIG || {};
  var ENDPOINT = CFG.endpoint || "/api/public-sector-feed";
  var root = document.getElementById("news-feed");
  if (!root) return;

  var state = { stories: [], filter: "All", expanded: false, updatedAt: null, live: false };

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
  function rel(iso) {
    var t = Date.parse(iso); if (isNaN(t)) return "";
    var m = Math.round((Date.now() - t) / 6e4);
    if (m < 2) return "just now";
    if (m < 60) return m + " min ago";
    var h = Math.round(m / 60); if (h < 24) return h + (h === 1 ? " hour ago" : " hours ago");
    var d = Math.round(h / 24); if (d < 8) return d + (d === 1 ? " day ago" : " days ago");
    return new Date(t).toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }
  function absDate(iso) {
    var t = Date.parse(iso); if (isNaN(t)) return "";
    return new Date(t).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }
  var EXT_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">' +
    '<path d="M7 17 17 7M9 7h8v8"/></svg>';

  /* ---------- rendering ---------- */
  function card(s, lead, hiddenOnMobile) {
    var href = safeHref(s.url);
    var cls = "nf-card " + (lead ? "nf-card--lead" : "nf-card--sm") + (hiddenOnMobile ? " nf-hidden" : "");
    var why = s.why ? '<p class="nf-why"><span class="nf-whylabel">Why it matters</span>' + esc(s.why) + "</p>" : "";
    return '<a class="' + cls + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer nofollow"' +
      ' data-cat="' + esc(s.category) + '"' +
      ' aria-label="' + esc(s.title) + ' — ' + esc(s.source) + ', opens in a new tab">' +
        '<span class="nf-kicker">' +
          '<span class="nf-cat">' + esc(s.category) + "</span>" +
          '<span class="nf-src">' + esc(s.source) + "</span>" +
          '<span class="nf-time"><time datetime="' + esc(s.published) + '" title="' + esc(absDate(s.published)) + '">' +
            esc(rel(s.published)) + "</time></span>" +
        "</span>" +
        (lead ? '<h3 class="nf-title">' : '<h4 class="nf-title">') + esc(s.title) + (lead ? "</h3>" : "</h4>") +
        why +
        '<span class="nf-ext">Read at ' + esc(s.source) + " " + EXT_ICON +
          '<span class="nf-sr">(opens in a new tab)</span></span>' +
      "</a>";
  }

  function skeleton() {
    var bar = '<div class="nf-bar"></div>';
    var box = '<div class="nf-skel">' + bar + bar + '<div class="nf-bar" style="width:60%"></div></div>';
    return '<div class="nf-grid" aria-hidden="true">' + box +
      '<div class="nf-list">' + box + box + "</div></div>";
  }

  function paint() {
    var body = root.querySelector("#nf-body");
    var list = state.filter === "All" ? state.stories
      : state.stories.filter(function (s) { return s.category === state.filter; });

    if (!list.length) {
      body.innerHTML = '<p class="nf-note">No qualifying developments in this category right now. ' +
        'Select <strong>All</strong> to see the full feed.</p>';
      return;
    }
    var lead = list[0], rest = list.slice(1);
    body.className = "nf-fade";
    body.innerHTML = '<div class="nf-grid">' + card(lead, true, false) +
      '<div class="nf-list">' +
        rest.map(function (s, i) { return card(s, false, !state.expanded && i >= 2); }).join("") +
      "</div></div>" +
      (rest.length > 2
        ? '<button type="button" class="nf-more" id="nf-more" aria-expanded="' + (state.expanded ? "true" : "false") +
          '" aria-controls="nf-body">' + (state.expanded ? "Show fewer stories" : "Show " + (rest.length - 2) + " more stories") + "</button>"
        : "");

    var more = body.querySelector("#nf-more");
    if (more) more.addEventListener("click", function () {
      state.expanded = !state.expanded; paint();
      track("news_show_more", { expanded: state.expanded });
      var b = root.querySelector("#nf-more"); if (b) b.focus();
    });

    body.querySelectorAll(".nf-card").forEach(function (a) {
      a.addEventListener("click", function () {
        track("news_item_click", { headline: a.querySelector(".nf-title").textContent, category: a.dataset.cat });
      });
    });
  }

  function paintMeta() {
    var live = root.querySelector("#nf-live");
    var upd = root.querySelector("#nf-updated");
    if (!live || !upd) return;
    var ageMin = state.updatedAt ? (Date.now() - Date.parse(state.updatedAt)) / 6e4 : Infinity;
    var staleAfter = CFG.staleAfterMinutes || 90;
    var fresh = state.live && ageMin < staleAfter;
    live.dataset.state = fresh ? "live" : "stale";
    live.querySelector(".nf-live-text").textContent = fresh ? "Live" : "Latest";
    upd.textContent = state.updatedAt ? "Updated " + rel(state.updatedAt) : "";
    upd.setAttribute("title", state.updatedAt ? absDate(state.updatedAt) : "");
  }

  function paintFilters() {
    var wrap = root.querySelector("#nf-filters");
    if (!wrap) return;
    var present = {}; state.stories.forEach(function (s) { present[s.category] = (present[s.category] || 0) + 1; });
    var allowed = (CFG.visibleFilters || ["All"]).filter(function (f) { return f === "All" || present[f]; }).slice(0, 4);
    if (allowed.length < 3) { wrap.hidden = true; return; }   // no filters if they add nothing
    wrap.hidden = false;
    wrap.innerHTML = allowed.map(function (f) {
      return '<button type="button" class="nf-filter" data-f="' + esc(f) + '" aria-pressed="' +
        (state.filter === f ? "true" : "false") + '">' + esc(f) + "</button>";
    }).join("");
    wrap.querySelectorAll(".nf-filter").forEach(function (b) {
      b.addEventListener("click", function () {
        state.filter = b.dataset.f; state.expanded = false;
        paintFilters(); paint(); track("news_filter", { category: state.filter });
      });
    });
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
        '<a class="nf-ticker-label" href="#news-feed">' +
          '<span class="nf-tdot" aria-hidden="true"></span><span>Public Sector Intel</span></a>' +
        '<div class="nf-ticker-viewport"><div class="nf-ticker-track" id="nf-tick-track"></div></div>';
      hero.parentNode.insertBefore(bar, hero);
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
      if (w > 0) trk.style.setProperty("--nf-tick-dur", Math.max(30, Math.round(w / 55)) + "s");
    });
    trk.querySelectorAll(".nf-ticker-item").forEach(function (a) {
      a.addEventListener("click", function () {
        track("news_ticker_click", { headline: a.textContent });
      });
    });
  }

  /* ---------- analytics: reuse whatever the site already has ---------- */
  function track(event, params) {
    try {
      if (typeof window.gtag === "function") window.gtag("event", event, params || {});
      else if (Array.isArray(window.dataLayer)) window.dataLayer.push(Object.assign({ event: event }, params));
      else if (typeof window.plausible === "function") window.plausible(event, { props: params });
    } catch (e) { /* analytics must never break the page */ }
  }

  /* ---------- data ---------- */
  var LS = "agp-feed-cache-v1";
  function readCache() { try { return JSON.parse(localStorage.getItem(LS)); } catch (e) { return null; } }
  function writeCache(p) { try { localStorage.setItem(LS, JSON.stringify(p)); } catch (e) {} }

  function apply(p, fromCache) {
    if (!p || !Array.isArray(p.stories) || !p.stories.length) return false;
    state.stories = p.stories.filter(function (s) { return s && s.title && s.url; });
    state.updatedAt = p.updatedAt; state.live = !!p.live && !fromCache;
    paintFilters(); paintMeta(); paint(); ticker();
    return true;
  }

  function load() {
    fetch(ENDPOINT, { headers: { accept: "application/json" } })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (p) { if (apply(p, false)) writeCache(p); else throw new Error("empty"); })
      .catch(function () {
        var c = readCache();
        if (!apply(c, true)) {
          root.querySelector("#nf-body").innerHTML =
            '<p class="nf-note">Live intelligence is briefly unavailable. ' +
            'For a direct read on what current federal developments mean for your company, ' +
            '<a href="' + esc(CFG.ctaHref || "#contact") + '">get in touch</a>.</p>';
          paintMeta();
        }
      });
  }

  /* ---------- boot: load immediately so the top ticker appears with the hero.
       feed.json is a ~3 KB static file, so there is no cost to eager loading,
       and this also removes the background-tab IntersectionObserver stall. ---------- */
  root.querySelector("#nf-body").innerHTML = skeleton();
  load();
  var mins = Math.min(60, Math.max(5, CFG.refreshMinutes || 15));
  setInterval(load, mins * 6e4);

  var cta = root.querySelector("#nf-cta-btn");
  if (cta) cta.addEventListener("click", function () { track("news_cta_click", {}); });
})();
