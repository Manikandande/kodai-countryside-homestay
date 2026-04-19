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
    hero_property:   'assets/property-images/IMG_3472.JPEG',
    hero_about:      'assets/property-images/IMG_3470.JPEG',
    hero_gallery:    'assets/property-images/IMG_3708.JPEG',

    exterior_1:      'assets/property-images/IMG_4914.jpeg',
    exterior_2:      'assets/property-images/IMG_3472.JPEG',
    exterior_3:      'assets/property-images/IMG_3470.JPEG',
    exterior_4:      'assets/property-images/IMG_3708.JPEG',

    bedroom1_main:   'assets/property-images/IMG_3993.JPEG',
    bedroom1_alt:    'assets/property-images/IMG_3994.jpeg',
    bedroom2_main:   'assets/property-images/IMG_3998.JPEG',
    bedroom2_alt:    'assets/property-images/IMG_4001.JPEG',
    bedroom2_room:   'assets/property-images/IMG_4003.JPEG',

    living_main:     'assets/property-images/IMG_4035.JPEG',
    living_alt:      'assets/property-images/IMG_4049.JPEG',
    dining:          'assets/property-images/IMG_4047.JPEG',
    kitchen:         'assets/property-images/IMG_4052.JPEG',

    exp_garden:      'assets/property-images/IMG_3470.JPEG',
    exp_gazebo:      'assets/property-images/IMG_3472.JPEG',
    exp_exterior:    'assets/property-images/IMG_3707.JPEG',
    exp_stars:       'https://picsum.photos/seed/kodai-night-sky/400/533',

    gallery: [
      { src: 'assets/property-images/IMG_4914.jpeg',  thumb: 'assets/property-images/IMG_4914.jpeg',  alt: 'Kodai Countryside Homestay exterior with bougainvillea garden',    category: 'exterior', width: 400, height: 533 },
      { src: 'assets/property-images/IMG_3472.JPEG',  thumb: 'assets/property-images/IMG_3472.JPEG',  alt: 'Garden gazebo with green mountain hills in the background',        category: 'exterior', width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3993.JPEG',  thumb: 'assets/property-images/IMG_3993.JPEG',  alt: 'Bedroom 1 — spacious double bed with carved wooden furniture',      category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3998.JPEG',  thumb: 'assets/property-images/IMG_3998.JPEG',  alt: 'Bedroom 2 — double bed with blue accent wall',                      category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4035.JPEG',  thumb: 'assets/property-images/IMG_4035.JPEG',  alt: 'Spacious living room with traditional carved wooden sofa set',      category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4049.JPEG',  thumb: 'assets/property-images/IMG_4049.JPEG',  alt: 'Living area with TV unit, sofa and warm yellow accent wall',        category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4047.JPEG',  thumb: 'assets/property-images/IMG_4047.JPEG',  alt: 'Dining area with glass-top dining table and wooden chairs',         category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4052.JPEG',  thumb: 'assets/property-images/IMG_4052.JPEG',  alt: 'Fully equipped shared kitchen with wooden cabinets',                category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3470.JPEG',  thumb: 'assets/property-images/IMG_3470.JPEG',  alt: 'Garden patio with outdoor gazebo and mountain backdrop',            category: 'exterior', width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3708.JPEG',  thumb: 'assets/property-images/IMG_3708.JPEG',  alt: 'Homestay exterior view with flowering garden',                      category: 'exterior', width: 400, height: 533 },
      { src: 'assets/property-images/IMG_3994.jpeg',  thumb: 'assets/property-images/IMG_3994.jpeg',  alt: 'Bedroom 1 — single bed with built-in overhead storage',             category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_4003.JPEG',  thumb: 'assets/property-images/IMG_4003.JPEG',  alt: 'Bedroom 2 wardrobe and window with natural light',                  category: 'rooms',    width: 400, height: 300 },
      { src: 'assets/property-images/IMG_3707.JPEG',  thumb: 'assets/property-images/IMG_3707.JPEG',  alt: 'Homestay property surrounded by lush garden and flowers',           category: 'exterior', width: 400, height: 533 },
      { src: 'assets/other-images/Lake_Kodaikanal.jpg',       thumb: 'assets/other-images/Lake_Kodaikanal.jpg',       alt: 'Kodaikanal Lake — 5 miles from the homestay',  category: 'nearby',   width: 400, height: 300 },
      { src: 'assets/other-images/silver cascade falls.jpg',  thumb: 'assets/other-images/silver cascade falls.jpg',  alt: 'Silver Cascade Falls near Kodaikanal',          category: 'nearby',   width: 400, height: 300 },
      { src: 'assets/other-images/Bryant park.jpg',           thumb: 'assets/other-images/Bryant park.jpg',           alt: 'Bryant Park gardens, Kodaikanal',               category: 'nearby',   width: 400, height: 300 }
    ]
  }

};
