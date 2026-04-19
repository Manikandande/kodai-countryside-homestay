/* ============================================================
   CONTACT.JS — Form validation and WhatsApp link
   Kodai Countryside Homestay
   ============================================================ */

(function () {
  'use strict';

  /* Read WhatsApp number from config.js (updated via admin panel) */
  var WHATSAPP_NUMBER = (window.SITE_CONFIG && window.SITE_CONFIG.contact && window.SITE_CONFIG.contact.whatsapp_number)
    ? window.SITE_CONFIG.contact.whatsapp_number
    : '919XXXXXXXXX';

  /* ── Form validation ──────────────────────────────────────── */
  function initContactForm() {
    var form = document.querySelector('.booking-form');
    if (!form) return;

    var statusEl = document.querySelector('.form-status');

    function showStatus(msg, isSuccess) {
      if (!statusEl) return;
      statusEl.textContent = msg;
      statusEl.className   = 'form-status ' + (isSuccess ? 'form-success' : 'form-error');
      statusEl.setAttribute('role', 'alert');
      statusEl.style.display = 'block';
      statusEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function clearError(input) {
      input.classList.remove('is-invalid');
      var errEl = document.getElementById(input.id + '-error');
      if (errEl) errEl.textContent = '';
    }

    function setError(input, msg) {
      input.classList.add('is-invalid');
      var errEl = document.getElementById(input.id + '-error');
      if (errEl) errEl.textContent = msg;
    }

    function validateEmail(val) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }

    function validatePhone(val) {
      return /^[\d\s\+\-\(\)]{7,15}$/.test(val);
    }

    function validateForm() {
      var valid = true;

      var name       = form.querySelector('#name');
      var email      = form.querySelector('#email');
      var phone      = form.querySelector('#phone');
      var checkin    = form.querySelector('#checkin');
      var checkout   = form.querySelector('#checkout');
      var guests     = form.querySelector('#guests');

      /* Clear previous errors */
      form.querySelectorAll('.form-control').forEach(clearError);

      /* Name */
      if (name && !name.value.trim()) {
        setError(name, 'Please enter your full name.');
        valid = false;
      }

      /* Email */
      if (email && !validateEmail(email.value.trim())) {
        setError(email, 'Please enter a valid email address.');
        valid = false;
      }

      /* Phone (optional but validate format if provided) */
      if (phone && phone.value.trim() && !validatePhone(phone.value.trim())) {
        setError(phone, 'Please enter a valid phone number.');
        valid = false;
      }

      /* Check-in date */
      if (checkin && !checkin.value) {
        setError(checkin, 'Please select your check-in date.');
        valid = false;
      }

      /* Check-out after check-in */
      if (checkin && checkout && checkin.value && checkout.value) {
        var inDate  = new Date(checkin.value);
        var outDate = new Date(checkout.value);
        if (outDate <= inDate) {
          setError(checkout, 'Check-out must be after check-in.');
          valid = false;
        }
      }

      return valid;
    }

    /* Set min date for check-in/check-out to today */
    var today = new Date().toISOString().split('T')[0];
    var checkinEl  = form.querySelector('#checkin');
    var checkoutEl = form.querySelector('#checkout');

    if (checkinEl)  checkinEl.setAttribute('min', today);
    if (checkoutEl) checkoutEl.setAttribute('min', today);

    if (checkinEl && checkoutEl) {
      checkinEl.addEventListener('change', function () {
        if (checkinEl.value) {
          var next = new Date(checkinEl.value);
          next.setDate(next.getDate() + 1);
          checkoutEl.setAttribute('min', next.toISOString().split('T')[0]);
          if (checkoutEl.value && new Date(checkoutEl.value) <= new Date(checkinEl.value)) {
            checkoutEl.value = '';
          }
        }
      });
    }

    /* Build WhatsApp pre-fill message */
    function buildWhatsAppURL() {
      var name    = (form.querySelector('#name') || {}).value || '';
      var checkin = (form.querySelector('#checkin') || {}).value || '';
      var checkout= (form.querySelector('#checkout') || {}).value || '';
      var guests  = (form.querySelector('#guests') || {}).value || '';
      var room    = (form.querySelector('#room') || {}).value || '';
      var msg     = [
        'Hello Kodai Homestay!',
        'I would like to make a booking enquiry.',
        name    ? 'Name: ' + name : '',
        checkin ? 'Check-in: ' + checkin : '',
        checkout? 'Check-out: ' + checkout : '',
        guests  ? 'Guests: ' + guests : '',
        room    ? 'Room preference: ' + room : ''
      ].filter(Boolean).join('\n');

      return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    }

    /* Update WhatsApp button dynamically */
    var waBtn = document.querySelector('.whatsapp-enquiry-btn');
    if (waBtn) {
      form.addEventListener('change', function () {
        waBtn.href = buildWhatsAppURL();
      });
      waBtn.href = buildWhatsAppURL();
    }

    /* Form submission — Netlify handles the POST */
    form.addEventListener('submit', function (e) {
      if (!validateForm()) {
        e.preventDefault();
        showStatus('Please fix the errors above and try again.', false);
        return;
      }

      /* Let Netlify handle submission — show optimistic message */
      var submitBtn = form.querySelector('[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled    = true;
        submitBtn.textContent = 'Sending…';
      }
    });
  }

  /* ── FAQ accordion accessibility enhancement ──────────────── */
  function initAccordion() {
    document.querySelectorAll('.accordion details').forEach(function (detail) {
      detail.addEventListener('toggle', function () {
        var summary = detail.querySelector('summary');
        if (summary) {
          summary.setAttribute('aria-expanded', detail.open ? 'true' : 'false');
        }
      });
    });
  }

  /* ── Init ─────────────────────────────────────────────────── */
  if (document.readyState !== 'loading') {
    initContactForm();
    initAccordion();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      initContactForm();
      initAccordion();
    });
  }

})();
