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
    hero_home:       'assets/images/gallery/PMH_1524.JPG',
    hero_property:   'assets/images/gallery/PMH_1536.JPG',
    hero_about:      'assets/images/gallery/PMH_1525.JPG',
    hero_gallery:    'assets/images/gallery/PMH_1529.JPG',

    exterior_1:      'assets/images/gallery/PMH_1524.JPG',
    exterior_2:      'assets/images/gallery/PMH_1525.JPG',
    exterior_3:      'assets/images/gallery/PMH_1531.JPG',
    exterior_4:      'assets/images/gallery/PMH_1529.JPG',

    bedroom1_main:   'assets/images/gallery/PMH_1553.JPG',
    bedroom1_alt:    'assets/images/gallery/PMH_1554.JPG',
    bedroom2_main:   'assets/images/gallery/PMH_1562.JPG',
    bedroom2_alt:    'assets/images/gallery/PMH_1560.JPG',
    bedroom2_room:   'assets/images/gallery/PMH_1611.JPG',

    living_main:     'assets/images/gallery/PMH_1545.JPG',
    living_alt:      'assets/images/gallery/PMH_1546.JPG',
    dining:          'assets/images/gallery/PMH_1546.JPG',
    kitchen:         'assets/images/gallery/PMH_1571.JPG',

    exp_garden:      'assets/images/gallery/PMH_1535.JPG',
    exp_gazebo:      'assets/images/gallery/PMH_1536.JPG',
    exp_exterior:    'assets/images/gallery/PMH_1527.JPG',
    exp_stars:       'https://picsum.photos/seed/kodai-night-sky/400/533',

    gallery: [
      { src: 'assets/images/gallery/PMH_1524.JPG', thumb: 'assets/images/gallery/PMH_1524.JPG', alt: 'Homestay entrance with ornate gate and brick driveway, Kodaikanal hills behind',      category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1525.JPG', thumb: 'assets/images/gallery/PMH_1525.JPG', alt: 'Homestay exterior with flowering bougainvillea garden and covered porch',             category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1526.JPG', thumb: 'assets/images/gallery/PMH_1526.JPG', alt: 'Lush garden with banana trees and bougainvillea alongside the property',             category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1527.JPG', thumb: 'assets/images/gallery/PMH_1527.JPG', alt: 'Garden gazebo surrounded by dahlia flowers with stepping stone path',               category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1529.JPG', thumb: 'assets/images/gallery/PMH_1529.JPG', alt: 'Garden with purple flowers, stepping stone path and rear entrance gate',            category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1530.JPG', thumb: 'assets/images/gallery/PMH_1530.JPG', alt: "Bird's-eye view of the garden stepping stones, driveway and entrance gate",        category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1531.JPG', thumb: 'assets/images/gallery/PMH_1531.JPG', alt: 'Overhead view of the garden gazebo, brick driveway and surrounding greenery',      category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1533.JPG', thumb: 'assets/images/gallery/PMH_1533.JPG', alt: 'Rooftop terrace with panoramic view of the Kodaikanal hills',                     category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1535.JPG', thumb: 'assets/images/gallery/PMH_1535.JPG', alt: 'Buddha statue nestled among purple and yellow flowers in the garden',             category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1536.JPG', thumb: 'assets/images/gallery/PMH_1536.JPG', alt: 'Garden gazebo with dahlia flowers, bench seating and Kodaikanal hills behind',    category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1537.JPG', thumb: 'assets/images/gallery/PMH_1537.JPG', alt: 'Covered entrance porch with stone-effect brick wall, chairs and ornate wooden door', category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1540.JPG', thumb: 'assets/images/gallery/PMH_1540.JPG', alt: 'Balcony seating area with red chairs, tea table and garden and hill views',       category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1583.JPG', thumb: 'assets/images/gallery/PMH_1583.JPG', alt: 'Traditional brass uruli with floating fuchsia flowers at the entrance',           category: 'exterior', width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1545.JPG', thumb: 'assets/images/gallery/PMH_1545.JPG', alt: 'Living room with TV unit, wooden sofa set, yellow accent wall and dining area',   category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1546.JPG', thumb: 'assets/images/gallery/PMH_1546.JPG', alt: 'Dining area with glass-top table, chairs and traditional Rajasthani artwork',     category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1553.JPG', thumb: 'assets/images/gallery/PMH_1553.JPG', alt: 'Bedroom with ornately carved wooden double bed and warm yellow walls',            category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1554.JPG', thumb: 'assets/images/gallery/PMH_1554.JPG', alt: 'Bedroom with yellow accent wall, wardrobe and wooden dressing area',             category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1560.JPG', thumb: 'assets/images/gallery/PMH_1560.JPG', alt: 'Bedroom with yellow wall, ornate wooden door, dressing mirror and wardrobe',     category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1562.JPG', thumb: 'assets/images/gallery/PMH_1562.JPG', alt: 'Bedroom with wooden slatted bed frame and bright yellow walls',                  category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1564.JPG', thumb: 'assets/images/gallery/PMH_1564.JPG', alt: 'Clean bathroom with decorative tiled walls, western toilet and shower',          category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1571.JPG', thumb: 'assets/images/gallery/PMH_1571.JPG', alt: 'Fully equipped kitchen with wooden cabinets, gas hob and electric kettle',       category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/images/gallery/PMH_1611.JPG', thumb: 'assets/images/gallery/PMH_1611.JPG', alt: 'Bedroom dressing corner with wooden chair, dresser and mirror',                  category: 'rooms',    width: 600, height: 400 },
      { src: 'assets/other-images/kodaikanal-lake.jpg',       thumb: 'assets/other-images/kodaikanal-lake.jpg',       alt: 'Kodaikanal Lake — 5 miles from the homestay',  category: 'nearby',   width: 400, height: 300 },
      { src: 'assets/other-images/silver-cascade-falls.jpg',  thumb: 'assets/other-images/silver-cascade-falls.jpg',  alt: 'Silver Cascade Falls near Kodaikanal',          category: 'nearby',   width: 400, height: 300 },
      { src: 'assets/other-images/bryant-park.jpg',           thumb: 'assets/other-images/bryant-park.jpg',           alt: 'Bryant Park gardens, Kodaikanal',               category: 'nearby',   width: 400, height: 300 }
    ]
  }

};
