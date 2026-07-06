/* Acuity Global Partners: motion engine (GSAP + Lenis via CDN, graceful static fallback) */
(function () {
  "use strict";
  if (typeof window === "undefined") return;

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---- always-on basics (no library needed) ---- */
  function basics() {
    var btn = document.querySelector(".menu-btn");
    var links = document.getElementById("navLinks");
    if (btn && links) {
      btn.addEventListener("click", function () { links.classList.toggle("open"); });
      links.addEventListener("click", function (e) {
        if (e.target.tagName === "A") links.classList.remove("open");
      });
    }
    /* Swap the SVG logo lockup for the real PNG the moment assets/agp-logo.png exists */
    var logoHolder = document.querySelector(".brand-logo");
    if (logoHolder) {
      var probe = new Image();
      probe.onload = function () {
        var img = document.createElement("img");
        img.src = probe.src;
        img.alt = "Acuity Global Partners";
        img.className = "brand-img";
        while (logoHolder.firstChild) logoHolder.removeChild(logoHolder.firstChild);
        logoHolder.appendChild(img);
      };
      probe.src = "assets/agp-logo.png";
    }

    var nav = document.querySelector("nav.agp-nav");
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("scrolled", window.scrollY > 40);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = src; s.async = true;
      s.onload = resolve; s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function init() {
    basics();
    if (reduced) return; // static, fully readable experience

    Promise.all([
      loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js")
        .then(function () { return loadScript("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"); }),
      loadScript("https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js").catch(function () { return null; })
    ]).then(function () {
      if (!window.gsap || !window.ScrollTrigger) return;
      run();
    }).catch(function () { /* CDN blocked: site stays static */ });
  }

  function run() {
    var gsap = window.gsap;
    gsap.registerPlugin(window.ScrollTrigger);
    var ST = window.ScrollTrigger;

    /* Lenis smooth scroll bridged to GSAP ticker */
    if (window.Lenis) {
      var lenis = new window.Lenis({ autoRaf: false, lerp: 0.11 });
      lenis.on("scroll", ST.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    }

    /* Scroll progress bar */
    var bar = document.getElementById("agp-progress");
    if (bar) {
      gsap.to(bar, {
        scaleX: 1, ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 }
      });
    }

    /* Hero: headline words rise on mount */
    var words = document.querySelectorAll(".hero .hwi");
    if (words.length) {
      gsap.from(words, { yPercent: 112, duration: 1.15, ease: "power4.out", stagger: 0.06, delay: 0.15 });
    }
    var sub = document.querySelector(".hero .sub");
    var ctas = document.querySelectorAll(".hero-ctas > *");
    if (sub) gsap.from(sub, { y: 26, opacity: 0, duration: 1, ease: "power3.out", delay: 0.7 });
    if (ctas.length) gsap.from(ctas, { y: 22, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.9 });

    /* Hero: gold trajectory line draws itself */
    var traj = document.querySelector(".hero-svg .traj");
    if (traj) {
      gsap.fromTo(traj, { strokeDashoffset: 2400 }, { strokeDashoffset: 0, duration: 2.6, ease: "power2.inOut", delay: 0.3 });
    }

    /* Hero: video + field parallax on scroll (transform only) */
    var hv = document.querySelector(".hero-video");
    if (hv) {
      gsap.to(hv, {
        yPercent: 12, scale: 1.06, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.5 }
      });
    }

    /* Section reveals: scroll-linked rise, transform only (screenshot-safe) */
    document.querySelectorAll(".rv").forEach(function (el) {
      gsap.fromTo(el, { y: 42 }, {
        y: 0, ease: "none",
        scrollTrigger: { trigger: el, start: "top 96%", end: "top 68%", scrub: 0.5 }
      });
    });

    /* Counters */
    document.querySelectorAll("[data-count]").forEach(function (el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var prefix = el.getAttribute("data-prefix") || "";
      var suffix = el.getAttribute("data-suffix") || "";
      var proxy = { v: 0 };
      ST.create({
        trigger: el, start: "top 88%", once: true,
        onEnter: function () {
          gsap.to(proxy, {
            v: target, duration: 2, ease: "power3.out",
            onUpdate: function () {
              el.firstChild.nodeValue = prefix + Math.round(proxy.v).toLocaleString("en-US");
            },
            onComplete: function () {
              el.firstChild.nodeValue = prefix + target.toLocaleString("en-US");
            }
          });
        }
      });
      // suffix lives in <em> so it keeps the gold color
      if (suffix && !el.querySelector("em")) {
        var em = document.createElement("em");
        em.textContent = suffix;
        el.appendChild(em);
      }
    });

    /* Practice cards: 3D tilt + gold spotlight (desktop only) */
    if (finePointer) {
      document.querySelectorAll(".card").forEach(function (card) {
        var rx = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power3.out" });
        var ry = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power3.out" });
        card.addEventListener("mousemove", function (e) {
          var r = card.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width;
          var py = (e.clientY - r.top) / r.height;
          ry(gsap.utils.clamp(-7, 7, (px - 0.5) * 14));
          rx(gsap.utils.clamp(-7, 7, (0.5 - py) * 14));
          card.style.setProperty("--mx", (px * 100) + "%");
          card.style.setProperty("--my", (py * 100) + "%");
        });
        card.addEventListener("mouseleave", function () { rx(0); ry(0); });
      });

      /* Magnetic CTAs */
      document.querySelectorAll("[data-mag]").forEach(function (el) {
        var qx = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
        var qy = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
        el.addEventListener("mousemove", function (e) {
          var r = el.getBoundingClientRect();
          qx((e.clientX - (r.left + r.width / 2)) * 0.28);
          qy((e.clientY - (r.top + r.height / 2)) * 0.28);
        });
        el.addEventListener("mouseleave", function () { qx(0); qy(0); });
      });
    }

    /* Global reach: scroll scrubs the film + slides the region track */
    var film = document.querySelector(".film");
    if (film) {
      var video = film.querySelector(".film-video");
      var track = film.querySelector(".film-track");
      var fbar = film.querySelector(".film-bar i");
      var targetT = 0;

      if (video) {
        video.pause();
        var scrubLoop = function () {
          if (video.duration && Math.abs(video.currentTime - targetT) > 0.02) {
            video.currentTime += (targetT - video.currentTime) * 0.22;
          }
        };
        gsap.ticker.add(scrubLoop);
      }

      ST.create({
        trigger: film, start: "top top", end: "bottom bottom", scrub: true,
        onUpdate: function (self) {
          var p = self.progress;
          if (video && video.duration) targetT = p * (video.duration - 0.05);
          if (fbar) fbar.style.transform = "scaleX(" + p + ")";
          if (track) {
            var max = track.scrollWidth - window.innerWidth;
            if (max > 0) track.style.transform = "translateX(" + (-max * p) + "px)";
          }
        }
      });
    }

    /* Proof rules: staggered slide-in from the ledger line */
    var proof = document.querySelectorAll(".proof li");
    if (proof.length) {
      gsap.fromTo(proof, { x: -28 }, {
        x: 0, ease: "none", stagger: 0.08,
        scrollTrigger: { trigger: ".proof", start: "top 92%", end: "top 55%", scrub: 0.5 }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
