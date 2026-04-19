/* ============================================================
   MAIN.JS — Navigation, scroll effects, reveal animations
   Kodai Countryside Homestay
   ============================================================ */

(function () {
  'use strict';

  /* ── DOM ready helper ─────────────────────────────────────── */
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* ── Sticky nav scroll state ──────────────────────────────── */
  function initStickyNav() {
    var header = document.querySelector('.site-header');
    if (!header) return;

    var sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;left:0;height:1px;pointer-events:none;';
    document.body.insertBefore(sentinel, document.body.firstChild);

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            header.classList.remove('scrolled');
          } else {
            header.classList.add('scrolled');
          }
        });
      }, { threshold: 0 });
      observer.observe(sentinel);
    } else {
      /* Fallback: scroll event */
      window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }, { passive: true });
    }
  }

  /* ── Mobile navigation ────────────────────────────────────── */
  function initMobileNav() {
    var hamburger    = document.querySelector('.hamburger');
    var mobileNav    = document.querySelector('.mobile-nav');
    var overlay      = document.querySelector('.mobile-nav-overlay');
    var closeBtn     = document.querySelector('.mobile-nav__close');

    if (!hamburger || !mobileNav) return;

    function openNav() {
      document.body.classList.add('nav-open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileNav.setAttribute('aria-hidden', 'false');
      /* Trap focus inside mobile nav */
      mobileNav.querySelector('a, button') && mobileNav.querySelector('a, button').focus();
    }

    function closeNav() {
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      hamburger.focus();
    }

    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeNav() : openNav();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeNav);
    if (overlay)  overlay.addEventListener('click', closeNav);

    /* Close on ESC */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeNav();
      }
    });

    /* Close when a nav link is clicked */
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });
  }

  /* ── Smooth scroll for anchor links ──────────────────────── */
  function initSmoothScroll() {
    document.addEventListener('click', function (e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;

      var href = target.getAttribute('href');
      if (href === '#') return;

      var el = document.querySelector(href);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      /* Update URL without jump */
      if (history.pushState) {
        history.pushState(null, null, href);
      }
    });
  }

  /* ── Scroll reveal ────────────────────────────────────────── */
  function initScrollReveal() {
    var elements = document.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

      elements.forEach(function (el) { observer.observe(el); });
    } else {
      /* Fallback: reveal all immediately */
      elements.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  /* ── Active nav link ──────────────────────────────────────── */
  function setActiveNavLink() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-links a, .mobile-nav__links a');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ── Room filter tabs (rooms.html) ───────────────────────── */
  function initRoomFilter() {
    var tabs = document.querySelectorAll('.filter-tab');
    var grid = document.querySelector('.rooms-grid');
    if (!tabs.length || !grid) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); t.removeAttribute('aria-selected'); });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        var filter = tab.getAttribute('data-filter');
        var cards  = grid.querySelectorAll('.room-card');

        cards.forEach(function (card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── Testimonial carousel ─────────────────────────────────── */
  function initTestimonials() {
    var track = document.querySelector('.testimonials-track');
    var prev  = document.querySelector('.testimonials__prev');
    var next  = document.querySelector('.testimonials__next');
    if (!track || !next) return;

    var current = 0;
    var cards   = track.querySelectorAll('.testimonial-card');
    var total   = cards.length;

    function getVisible() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768)  return 2;
      return 1;
    }

    function update() {
      var visible = getVisible();
      var max     = Math.max(0, total - visible);
      current     = Math.max(0, Math.min(current, max));
      var offset  = current * (100 / visible);
      track.style.transform = 'translateX(-' + offset + '%)';
    }

    if (next) next.addEventListener('click', function () { current++; update(); });
    if (prev) prev.addEventListener('click', function () { current--; update(); });

    window.addEventListener('resize', update, { passive: true });
  }

  /* ── Init all ─────────────────────────────────────────────── */
  ready(function () {
    initStickyNav();
    initMobileNav();
    initSmoothScroll();
    initScrollReveal();
    setActiveNavLink();
    initRoomFilter();
    initTestimonials();
  });

})();
