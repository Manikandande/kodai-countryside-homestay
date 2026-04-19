/* ============================================================
   ANALYTICS.JS — Google Analytics 4 (async, non-blocking)
   Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
   Kodai Countryside Homestay
   ============================================================ */

(function () {
  'use strict';

  /* GA4 ID is read from config.js — update it there, not here */
  var GA_MEASUREMENT_ID = (window.SITE_CONFIG && window.SITE_CONFIG.site && window.SITE_CONFIG.site.ga4_id)
    ? window.SITE_CONFIG.site.ga4_id
    : 'G-XXXXXXXXXX';
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return; /* Skip until real ID is set */

  function loadGA4() {
    var script = document.createElement('script');
    script.async = true;
    script.src   = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure'
    });
  }

  /* Load GA4 after page is interactive to avoid blocking render */
  if (document.readyState === 'complete') {
    loadGA4();
  } else {
    window.addEventListener('load', loadGA4, { once: true });
  }

})();
