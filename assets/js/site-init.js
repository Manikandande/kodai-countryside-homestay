/* ============================================================
   SITE-INIT.JS — Reads config.js (+ localStorage admin overrides)
   and injects contact details, images, and WhatsApp links into
   every page. Load this after config.js, before </body>.
   ============================================================ */

(function () {
  'use strict';

  /* Merge localStorage admin overrides on top of file config */
  var cfg = window.SITE_CONFIG || {};
  var fileGallery = (cfg.images && cfg.images.gallery) ? cfg.images.gallery : null;
  try {
    var stored = localStorage.getItem('kodai_admin_config');
    if (stored) {
      var override = JSON.parse(stored);
      cfg = deepMerge(cfg, override);
    }
  } catch (e) { /* ignore parse errors */ }
  /* Gallery images always come from config.js — never from stale admin overrides */
  if (fileGallery) {
    if (!cfg.images) cfg.images = {};
    cfg.images.gallery = fileGallery;
  }

  function deepMerge(base, override) {
    var result = {};
    Object.keys(base).forEach(function (k) {
      result[k] = (override[k] !== null && typeof override[k] === 'object' && !Array.isArray(override[k]))
        ? deepMerge(base[k] || {}, override[k])
        : (override[k] !== undefined ? override[k] : base[k]);
    });
    Object.keys(override).forEach(function (k) {
      if (!(k in result)) result[k] = override[k];
    });
    return result;
  }

  var c = cfg.contact || {};
  var s = cfg.social  || {};
  var img = cfg.images || {};
  var waNum = c.whatsapp_number || '';
  var waBase = waNum ? ('https://wa.me/' + waNum) : '#';

  function fill(selector, value, attr) {
    document.querySelectorAll(selector).forEach(function (el) {
      if (attr) { el.setAttribute(attr, value); }
      else       { el.textContent = value; }
    });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  ready(function () {

    /* ── Contact text ──────────────────────────────────────── */
    fill('[data-cfg="phone"]',   c.phone_display || '');
    fill('[data-cfg="email"]',   c.email || '');
    fill('[data-cfg="address"]', (c.address_line1 ? c.address_line1 + '\n' : '') + (c.address_city || ''));
    fill('[data-cfg="checkin"]',  c.checkin  || '12:00 noon');
    fill('[data-cfg="checkout"]', c.checkout || '11:00 AM');

    /* ── Links ─────────────────────────────────────────────── */
    fill('[data-cfg="phone-href"]',    c.phone_tel ? 'tel:' + c.phone_tel : '#', 'href');
    fill('[data-cfg="email-href"]',    c.email ? 'mailto:' + c.email : '#',      'href');
    fill('[data-cfg="wa-enquiry"]',    waBase + '?text=' + encodeURIComponent('Hello Kodai Countryside Homestay! I\'d like to enquire about a stay.'), 'href');
    fill('[data-cfg="wa-booking"]',    waBase + '?text=' + encodeURIComponent('Hi Kodai Countryside Homestay! I would like to make a booking enquiry.'), 'href');
    fill('[data-cfg="wa-fab"]',        waBase + '?text=' + encodeURIComponent('Hi Kodai Countryside Homestay! I\'d like to enquire about a stay.'), 'href');

    /* ── Social links ──────────────────────────────────────── */
    var igLink = document.querySelector('[data-cfg="instagram-href"]');
    if (igLink) {
      if (s.instagram) { igLink.href = 'https://www.instagram.com/' + s.instagram; igLink.style.display = ''; }
      else             { igLink.style.display = 'none'; }
    }
    var fbLink = document.querySelector('[data-cfg="facebook-href"]');
    if (fbLink) {
      if (s.facebook) { fbLink.href = 'https://www.facebook.com/' + s.facebook; fbLink.style.display = ''; }
      else            { fbLink.style.display = 'none'; }
    }

    /* ── WhatsApp contact.js integration ───────────────────── */
    if (window.SITE_CONFIG) {
      window.SITE_CONFIG._waNumber = waNum;
    }

    /* ── Images — hero ─────────────────────────────────────── */
    setImg('[data-img="hero-home"]',   img.hero_home,    true);
    setImg('[data-img="hero-rooms"]',  img.hero_rooms,   false);
    setImg('[data-img="hero-about"]',  img.hero_about,   false);
    setImg('[data-img="hero-gallery"]',img.hero_gallery, false);

    /* Apply hero BG images (for page-hero divs using background-image) */
    applyBgImg('[data-bg="hero-rooms"]',  img.hero_rooms);
    applyBgImg('[data-bg="hero-about"]',  img.hero_about);
    applyBgImg('[data-bg="hero-gallery"]',img.hero_gallery);

    /* ── Images — rooms ─────────────────────────────────────── */
    setImg('[data-img="room-valley-1"]',  img.room_valley_1);
    setImg('[data-img="room-valley-2"]',  img.room_valley_2);
    setImg('[data-img="room-forest-1"]',  img.room_forest_1);
    setImg('[data-img="room-forest-2"]',  img.room_forest_2);
    setImg('[data-img="room-cottage"]',   img.room_cottage);

    /* ── Images — about ─────────────────────────────────────── */
    setImg('[data-img="about-family"]',   img.about_family);
    setImg('[data-img="about-exterior"]', img.about_exterior);
    setImg('[data-img="about-garden"]',   img.about_garden);

    /* ── Images — experiences ──────────────────────────────── */
    setImg('[data-img="exp-fog"]',        img.exp_fog);
    setImg('[data-img="exp-breakfast"]',  img.exp_breakfast);
    setImg('[data-img="exp-firepit"]',    img.exp_firepit);
    setImg('[data-img="exp-stars"]',      img.exp_stars);

    /* ── Gallery — render from config ──────────────────────── */
    var grid = document.querySelector('.gallery-grid');
    if (grid && img.gallery && img.gallery.length) {
      grid.innerHTML = '';
      var zoomSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>';
      img.gallery.forEach(function (item) {
        var fig = document.createElement('figure');
        fig.className = 'gallery-item';
        fig.setAttribute('data-category', item.category);
        fig.setAttribute('role', 'listitem');
        var imgEl = document.createElement('img');
        imgEl.src           = item.thumb || item.src;
        imgEl.setAttribute('data-full', item.src);
        imgEl.alt           = item.alt || '';
        imgEl.width         = item.width  || 400;
        imgEl.height        = item.height || 300;
        imgEl.loading       = 'lazy';
        imgEl.decoding      = 'async';
        var zoom = document.createElement('div');
        zoom.className      = 'gallery-item__zoom';
        zoom.setAttribute('aria-hidden', 'true');
        zoom.innerHTML      = zoomSVG;
        fig.appendChild(imgEl);
        fig.appendChild(zoom);
        grid.appendChild(fig);
      });
      /* Notify gallery.js that items are ready */
      window.dispatchEvent(new Event('gallery-populated'));
    }
  });

  function setImg(selector, src, isPriority) {
    if (!src) return;
    document.querySelectorAll(selector).forEach(function (el) {
      el.src = src;
      if (isPriority) { el.setAttribute('fetchpriority', 'high'); }
    });
  }

  function applyBgImg(selector, src) {
    if (!src) return;
    document.querySelectorAll(selector).forEach(function (el) {
      el.style.backgroundImage = 'url(' + src + ')';
      el.style.backgroundSize  = 'cover';
      el.style.backgroundPosition = 'center';
    });
  }

})();
