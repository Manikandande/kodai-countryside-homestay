/* ============================================================
   CONFIG.JS — Kodai Countryside Homestay
   ============================================================
   Edit this file to update contact details, images, and settings
   across the ENTIRE website at once. No coding required — just
   replace the placeholder values below with your real information.
   ============================================================ */

window.SITE_CONFIG = {

  /* ── Contact Details ──────────────────────────────────────────
     Replace ALL placeholder values below with your real details  */
  contact: {
    phone_display:   '+91 99623 55660',
    phone_tel:       '+919962355660',
    whatsapp_number: '919962355660',
    email:           'stay@kodaihomestay.com',
    address_line1:   'Kodaikanal, Tamil Nadu — 624101',
    address_city:    'Kodaikanal, Tamil Nadu — 624101',
    checkin:         '11:00 AM – 2:00 PM',
    checkout:        '7:00 AM – 10:00 AM'
  },

  /* ── Social Media ─────────────────────────────────────────────
     Just the handle (without the URL). Leave blank to hide icon. */
  social: {
    instagram: 'kodayhomestay',   /* e.g. kodaicountryside */
    facebook:  'kodayhomestay',   /* e.g. kodaicountryside */
    youtube:   ''                  /* e.g. kodaicountryside (optional) */
  },

  /* ── Site Settings ────────────────────────────────────────────
     Update these after you have your real domain and GA4 ID      */
  site: {
    domain:  'www.kodayhomestay.com',   /* your real domain, no trailing slash */
    ga4_id:  'G-XXXXXXXXXX'            /* Google Analytics 4 Measurement ID */
  },

  /* ── Admin ────────────────────────────────────────────────────
     Change this password before going live!                       */
  admin_password: 'kodai2025',

  /* ── Images ───────────────────────────────────────────────────
     PLACEHOLDER IMAGES: These use picsum.photos (free, beautiful
     nature photos) so your site looks great immediately.

     TO ADD YOUR OWN PHOTOS:
     1. Put your WebP files in the assets/images/ folders
     2. Replace the picsum URLs below with local paths like:
        "assets/images/hero/hero-home.webp"
     3. Save this file — all pages update automatically.           */
  images: {
    hero_home:       'assets/property-images/IMG_4914.jpeg',
    hero_property:   'assets/property-images/IMG_3472.jpeg',
    hero_about:      'assets/property-images/IMG_3470.jpeg',
    hero_gallery:    'assets/property-images/IMG_3708.jpeg',

    exterior_1:      'assets/property-images/IMG_4914.jpeg',
    exterior_2:      'assets/property-images/IMG_3472.jpeg',
    exterior_3:      'assets/property-images/IMG_3470.jpeg',
    exterior_4:      'assets/property-images/IMG_3708.jpeg',

    bedroom1_main:   'assets/property-images/IMG_3993.jpeg',
    bedroom1_alt:    'assets/property-images/IMG_3994.jpeg',
    bedroom2_main:   'assets/property-images/IMG_3998.jpeg',
    bedroom2_alt:    'assets/property-images/IMG_4001.jpeg',
    bedroom2_room:   'assets/property-images/IMG_4003.jpeg',

    living_main:     'assets/property-images/IMG_4035.jpeg',
    living_alt:      'assets/property-images/IMG_4049.jpeg',
    dining:          'assets/property-images/IMG_4047.jpeg',
    kitchen:         'assets/property-images/IMG_4052.jpeg',

    exp_garden:      'assets/property-images/IMG_3470.jpeg',
    exp_gazebo:      'assets/property-images/IMG_3472.jpeg',
    exp_exterior:    'assets/property-images/IMG_3707.jpeg',
    exp_stars:       'https://picsum.photos/seed/kodai-night-sky/400/533',

    gallery: [
      { src: 'assets/property-images/IMG_4914.jpeg',  thumb: 'assets/property-images/IMG_4914.jpeg',  alt: 'Kodai Countryside Homestay exterior with bougainvillea garden',    category: 'exterior', width: 400, height: 533 },
      { src: 'assets/property-images/IMG_3472.jpeg',  thumb: 'assets/property-images/IMG_3472.jpeg',  alt: 'Garden gazebo with green mountain hills in the background',        category: 'exterior', width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3993.jpeg',  thumb: 'assets/property-images/IMG_3993.jpeg',  alt: 'Bedroom 1 — spacious double bed with carved wooden furniture',      category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3998.jpeg',  thumb: 'assets/property-images/IMG_3998.jpeg',  alt: 'Bedroom 2 — double bed with blue accent wall',                      category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4035.jpeg',  thumb: 'assets/property-images/IMG_4035.jpeg',  alt: 'Spacious living room with traditional carved wooden sofa set',      category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4049.jpeg',  thumb: 'assets/property-images/IMG_4049.jpeg',  alt: 'Living area with TV unit, sofa and warm yellow accent wall',        category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4047.jpeg',  thumb: 'assets/property-images/IMG_4047.jpeg',  alt: 'Dining area with glass-top dining table and wooden chairs',         category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4052.jpeg',  thumb: 'assets/property-images/IMG_4052.jpeg',  alt: 'Fully equipped shared kitchen with wooden cabinets',                category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3470.jpeg',  thumb: 'assets/property-images/IMG_3470.jpeg',  alt: 'Garden patio with outdoor gazebo and mountain backdrop',            category: 'exterior', width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3708.jpeg',  thumb: 'assets/property-images/IMG_3708.jpeg',  alt: 'Homestay exterior view with flowering garden',                      category: 'exterior', width: 400, height: 533 },
      { src: 'assets/property-images/IMG_3994.jpeg',  thumb: 'assets/property-images/IMG_3994.jpeg',  alt: 'Bedroom 1 — single bed with built-in overhead storage',             category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4003.jpeg',  thumb: 'assets/property-images/IMG_4003.jpeg',  alt: 'Bedroom 2 wardrobe and window with natural light',                  category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3707.jpeg',  thumb: 'assets/property-images/IMG_3707.jpeg',  alt: 'Homestay property surrounded by lush garden and flowers',           category: 'exterior', width: 400, height: 533 },
      { src: 'assets/other-images/kodaikanal-lake.jpg',       thumb: 'assets/other-images/kodaikanal-lake.jpg',       alt: 'Kodaikanal Lake — 5 miles from the homestay',  category: 'nearby',   width: 400, height: 300 },
      { src: 'assets/other-images/silver-cascade-falls.jpg',  thumb: 'assets/other-images/silver-cascade-falls.jpg',  alt: 'Silver Cascade Falls near Kodaikanal',          category: 'nearby',   width: 400, height: 300 },
      { src: 'assets/other-images/bryant-park.jpg',           thumb: 'assets/other-images/bryant-park.jpg',           alt: 'Bryant Park gardens, Kodaikanal',               category: 'nearby',   width: 400, height: 300 }
    ]
  }

};
