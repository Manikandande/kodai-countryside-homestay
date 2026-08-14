/* ============================================================
   GALLERY.JS — Filter and lightbox
   Kodai Countryside Homestay
   ============================================================ */

(function () {
  'use strict';

  /* ── Gallery filter ───────────────────────────────────────── */
  function initGalleryFilter() {
    var tabs = document.querySelectorAll('.gallery-filters .filter-tab');
    var grid = document.querySelector('.gallery-grid');
    if (!tabs.length || !grid) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        var filter = tab.getAttribute('data-filter') || 'all';
        grid.setAttribute('data-filter', filter);
      });
    });
  }

  /* ── Lightbox ─────────────────────────────────────────────── */
  function initLightbox() {
    var grid   = document.querySelector('.gallery-grid');
    if (!grid) return;

    var items  = [];   /* [{src, alt}, ...] built from gallery items */
    var current = 0;
    var isOpen  = false;

    /* Build lightbox DOM */
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Photo viewer');
    lb.setAttribute('aria-hidden', 'true');

    lb.innerHTML = [
      '<button class="lightbox__close" aria-label="Close photo viewer">',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
      '</button>',
      '<button class="lightbox__prev" aria-label="Previous photo">',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
      '</button>',
      '<div class="lightbox__inner">',
        '<img class="lightbox__img" src="" alt="" loading="eager">',
        '<p class="lightbox__caption"></p>',
      '</div>',
      '<button class="lightbox__next" aria-label="Next photo">',
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
      '</button>',
      '<div class="lightbox__counter" aria-live="polite"></div>'
    ].join('');

    document.body.appendChild(lb);

    var lbImg     = lb.querySelector('.lightbox__img');
    var lbCaption = lb.querySelector('.lightbox__caption');
    var lbCounter = lb.querySelector('.lightbox__counter');
    var lbClose   = lb.querySelector('.lightbox__close');
    var lbPrev    = lb.querySelector('.lightbox__prev');
    var lbNext    = lb.querySelector('.lightbox__next');

    /* Collect gallery items */
    function buildIndex() {
      items = [];
      grid.querySelectorAll('.gallery-item').forEach(function (item) {
        var img = item.querySelector('img');
        if (!img) return;
        items.push({
          src: img.getAttribute('data-full') || img.src,
          alt: img.alt || ''
        });
        item.addEventListener('click', function () {
          var idx = items.indexOf(items.find(function (x) {
            return x.src === (img.getAttribute('data-full') || img.src);
          }));
          openAt(idx);
        });
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-label', 'View photo: ' + (img.alt || 'photo'));
        item.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.click();
          }
        });
      });
    }

    function showCurrent(animate) {
      var item = items[current];
      if (!item) return;
      lbImg.src = item.src;
      lbImg.alt = item.alt;
      lbCaption.textContent = item.alt;
      lbCounter.textContent = (current + 1) + ' / ' + items.length;
      lbPrev.disabled = current === 0;
      lbNext.disabled = current === items.length - 1;
      if (animate) {
        lbImg.classList.remove('is-animating');
        void lbImg.offsetWidth; /* force reflow to restart animation */
        lbImg.classList.add('is-animating');
      }
    }

    function openAt(idx) {
      current = idx;
      isOpen  = true;
      lb.classList.add('is-open');
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      showCurrent();
      lbClose.focus();
    }

    function close() {
      isOpen  = false;
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function prev() { if (current > 0) { current--; showCurrent(true); } }
    function next() { if (current < items.length - 1) { current++; showCurrent(true); } }

    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', prev);
    lbNext.addEventListener('click', next);

    /* Close on backdrop click */
    lb.addEventListener('click', function (e) {
      if (e.target === lb) close();
    });

    /* Keyboard navigation */
    document.addEventListener('keydown', function (e) {
      if (!isOpen) return;
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    });

    /* Touch swipe support */
    var touchStartX = 0;
    lb.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    lb.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? next() : prev();
      }
    }, { passive: true });

    buildIndex();

    /* Rebuild if filter changes (items may be hidden) */
    document.querySelectorAll('.gallery-filters .filter-tab').forEach(function (tab) {
      tab.addEventListener('click', function () {
        setTimeout(buildIndex, 10);
      });
    });
  }

  /* ── Init ─────────────────────────────────────────────────── */
  /* Wait for site-init.js to populate the gallery grid first,
     then initialise filter + lightbox on the populated items. */
  window.addEventListener('gallery-populated', function () {
    initGalleryFilter();
    initLightbox();
  });

  /* Fallback: if no gallery grid on this page, still init filter tabs */
  document.addEventListener('DOMContentLoaded', function () {
    if (!document.querySelector('.gallery-grid')) {
      initGalleryFilter();
    }
  });

})();
