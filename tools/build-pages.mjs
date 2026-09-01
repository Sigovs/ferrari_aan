#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════════════════════
   Purosangue American Grand Tour Atelier Collection — retailer page builder.

   Ferrari supplied one copy deck per retailer and one set of renders. Three
   US retailers show the collection, and the decks are almost identical — the
   difference that matters is buried in each deck's Heritage module and it is
   the compositions:

     Cauley Ferrari       Mountain Pass · The Mountains
     Ferrari of Las Vegas Overlook · The Sands
     Ferrari of Greenwich Byway · The Sands · The Great Plains   ← three

   That is the single easiest thing on this job to get wrong, which is the
   reason the pages are generated rather than copied: the set of compositions
   is data, declared once per retailer below, and it cannot drift between the
   panel stack, the gallery and the meta description because all three read
   the same array.

   Everything a retailer owns — its host, address, telephone, logo, header nav,
   footer nav, socials and legal links — is likewise data. Everything the
   campaign owns — the hero, the manifesto, the heritage chapter, the form —
   is a constant, because it is Ferrari's copy and it is the same on all three
   pages. Nothing here invents a value: every string was taken from the
   retailer's own live site or from its own copy deck.

   Run:  node tools/build-pages.mjs
   Out:  _deploy/Ferrari_Purosangue/{index,index_cauley,index_lasvegas,
         index_greenwich}.html

   The static layers — css/, js/, img/, fonts/, video/ — are not generated and
   are left untouched.
   ═══════════════════════════════════════════════════════════════════════════ */

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const OUT = join(dirname(dirname(fileURLToPath(import.meta.url))), '_deploy', 'Ferrari_Purosangue');

/* ── the campaign's own copy — Ferrari's words, identical on all three pages ── */

const COLLECTION = 'Purosangue American Grand Tour Atelier Collection';

const HERO = {
  video: 'great-plains',
  alt: 'Ferrari Purosangue crossing the American Great Plains under a breaking storm.',
};

const HERITAGE = {
  video: 'sands',
  alt: 'Ferrari Purosangue on the white sands of an American desert.',
  eyebrow: 'American Grand Tour',
  title: 'A landscape made for grand touring',
  copy: 'America&rsquo;s extraordinary scale and beauty have made it a natural home for grand touring. From windswept coastal cliffs to alpine summits, sun-bleached deserts, and forest roads that vanish beneath towering canopies, America&rsquo;s roads unfold like a series of cinematic landscapes. For generations, this unique driving landscape has inspired a distinguished lineage of Ferrari V12 Grand Touring vehicles conceived for journeys where the road itself becomes the destination.',
};

/* v2 carries no video at all. Both frames below are cut from the supplied
   1920x1080 masters in assets/raw at t=2.0s — the same instant the web posters
   were made from, matched numerically against them, so the pages look as they
   did and the source is the master rather than a 1600x900 re-encode. */
const STILLS = {
  /* The hero is the retailer's own lead composition, cut from the 6400 x 3600
     master in assets/raw — the first car its deck names, so no two retailers
     open on the same frame. The chapter still is cut from the Sands master at
     t=2.0s, the instant its web poster was made from. */
  chapter: { file: 'chapter-sands', alt: HERITAGE.alt },
};
const heroStill = (r) => ({ file: `hero-${r.compositions[0].slug}`, alt: r.compositions[0].alt });

const MANIFESTO = 'Drawing inspiration from the roads and landscapes that have shaped the American grand tour, the Purosangue American Grand Tour Atelier Collection writes the next chapter of a story that began in the 1950s.';

/* The social marks are drawn as glyphs at one size on one stroke weight, so
   they live here as a set rather than as five separate files. A retailer lists
   the networks it actually has; nobody gets an icon for an account that does
   not exist. */
const SOCIAL_ICONS = {
  Facebook:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.117 0H0.883047C0.395303 0 0 0.395302 0 0.883044V15.1169C0 15.6046 0.395303 16 0.883047 16H8.54613V9.80395H6.46099V7.38921H8.54613V5.60844C8.54613 3.54189 9.8083 2.41659 11.6518 2.41659C12.535 2.41659 13.2939 2.48229 13.5151 2.51167V4.67138L12.2365 4.67198C11.2339 4.67198 11.0397 5.14839 11.0397 5.84751V7.38921H13.4309L13.1196 9.80395H11.0397V16H15.117C15.6046 16 16 15.6046 16 15.1169V0.883044C16 0.395302 15.6046 0 15.117 0Z" fill="currentColor"/></svg>',
  Instagram:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="14" height="14" rx="4.4" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="8" r="3.6" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12.4" cy="3.7" r="1.05" fill="currentColor"/></svg>',
  X:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12.6009 0.75H15.0544L9.69434 6.89205L16 15.25H11.0627L7.19566 10.1809L2.77087 15.25H0.31595L6.04904 8.68038L0 0.75H5.06262L8.55811 5.38331L12.6009 0.75ZM11.7399 13.7777H13.0993L4.32392 2.14497H2.86506L11.7399 13.7777Z" fill="currentColor"/></svg>',
  YouTube:
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.6656 4.41686C15.4816 3.72845 14.9394 3.18635 14.251 3.00236C13.0034 2.66797 7.99993 2.66797 7.99993 2.66797C7.99993 2.66797 2.99665 2.66797 1.74889 3.00236C1.06048 3.18635 0.518253 3.72845 0.334264 4.41686C0 5.66462 0 8.268 0 8.268C0 8.268 0 10.8713 0.334264 12.119C0.518253 12.8074 1.06048 13.3496 1.74889 13.5336C2.99665 13.8679 7.99993 13.8679 7.99993 13.8679C7.99993 13.8679 13.0034 13.8679 14.251 13.5336C14.9394 13.3496 15.4816 12.8074 15.6656 12.119C16 10.8713 16 8.268 16 8.268C16 8.268 16 5.66462 15.6656 4.41686ZM6.39996 10.668V5.86802L10.5567 8.26805L6.39996 10.668Z" fill="currentColor"/></svg>',
};

/* ── the retailers ───────────────────────────────────────────────────────── */

const RETAILERS = {
  cauley: {
    key: 'cauley',
    name: 'Cauley Ferrari',
    host: 'cauleyferrari.com',
    img: 'cauley',
    place: 'West Bloomfield, MI',
    logoAlt: 'Official Ferrari Dealer — Cauley Ferrari of Detroit',
    address: '7070 Orchard Lake Rd. West Bloomfield, MI 48322',
    addressHref: 'https://www.cauleyferrari.com/directions/',
    phone: '(248) 538-9600',
    tel: '2485389600',
    contactHref: 'https://www.cauleyferrari.com/contact-us/',
    purosangue: 'https://www.cauleyferrari.com/ferrari-model-range/purosangue/',
    legal: {
      cookie: 'https://www.cauleyferrari.com/cookie/',
      privacy: 'https://www.cauleyferrari.com/privacy-policy/',
      terms: 'https://www.cauleyferrari.com/terms-of-use/',
    },
    social: [
      { network: 'Facebook', href: 'https://www.facebook.com/Cauley.Ferrari' },
      { network: 'Instagram', href: 'https://www.instagram.com/cauleyferrari' },
      { network: 'X', href: 'https://twitter.com/CauleyFerrari' },
      { network: 'YouTube', href: 'https://www.youtube.com/user/CauleyFerrari' },
    ],
    nav: [
      { label: 'New Model Range', href: 'https://www.cauleyferrari.com/ferrari-model-range/', children: [
        { label: 'All models', href: 'https://www.cauleyferrari.com/ferrari-model-range/' },
        { label: '849 Testarossa', href: 'https://www.cauleyferrari.com/ferrari-model-range/849-testarossa/' },
        { label: '849 Testarossa Spider', href: 'https://www.cauleyferrari.com/ferrari-model-range/849-testarossa-spider/' },
        { label: '12Cilindri', href: 'https://www.cauleyferrari.com/ferrari-model-range/12-cilindri/' },
        { label: '12Cilindri Spider', href: 'https://www.cauleyferrari.com/ferrari-model-range/12-cilindri-spider/' },
        { label: '296 GTB', href: 'https://www.cauleyferrari.com/ferrari-model-range/296-gtb/' },
        { label: '296 GTS', href: 'https://www.cauleyferrari.com/ferrari-model-range/296-gts/' },
        { label: 'Amalfi', href: 'https://www.cauleyferrari.com/ferrari-model-range/amalfi/' },
        { label: 'Amalfi Spider', href: 'https://www.cauleyferrari.com/ferrari-model-range/amalfi-spider/' },
        { label: 'Purosangue', href: 'https://www.cauleyferrari.com/ferrari-model-range/purosangue/' },
        { label: 'Luce', href: 'https://www.cauleyferrari.com/ferrari-model-range/luce/' },
      ] },
      { label: 'Pre-Owned', href: 'https://www.cauleyferrari.com/ferrari-inventory/', children: [
        { label: 'Ferrari Inventory', href: 'https://www.cauleyferrari.com/ferrari-inventory/' },
        { label: 'Other Inventory', href: 'https://www.cauleyferrari.com/other-inventory/' },
        { label: 'Finance', href: 'https://www.cauleyferrari.com/financing/' },
        { label: 'Value Your Car', href: 'https://www.cauleyferrari.com/value-your-trade/' },
        { label: 'Previously Sold Inventory', href: 'https://www.cauleyferrari.com/sold-inventory/' },
      ] },
      { label: 'Service', href: 'https://www.cauleyferrari.com/schedule-appointment/', children: [
        { label: 'Schedule Appointment', href: 'https://www.cauleyferrari.com/schedule-appointment/' },
        { label: 'Roadside Assistance', href: 'https://www.cauleyferrari.com/roadside-assistance/' },
        { label: 'Parts', href: 'https://www.cauleyferrari.com/order-parts/' },
        { label: 'Q &amp; A', href: 'https://www.cauleyferrari.com/commonqa/' },
      ] },
      { label: 'Collision', href: 'https://www.cauleyferrari.com/collision-center/overview-2/', children: [
        { label: 'Schedule Appointment', href: 'https://www.cauleyferrari.com/schedule-appointment/' },
        { label: 'Collision Center', href: 'https://www.cauleyferrari.com/collision-center/overview-2/' },
      ] },
      { label: 'About Us', href: 'https://www.cauleyferrari.com/about-us/', children: [
        { label: 'Our Team', href: 'https://www.cauleyferrari.com/our-team/' },
        { label: 'Contact', href: 'https://www.cauleyferrari.com/contact-us/' },
        { label: 'Our History', href: 'https://www.cauleyferrari.com/about-us/' },
        { label: 'Our Videos', href: 'https://www.cauleyferrari.com/our-videos/' },
        { label: 'Our News &amp; Events', href: 'https://www.cauleyferrari.com/news/' },
        { label: 'Work With Us', href: 'https://www.cauleyferrari.com/careers/' },
        { label: 'Virtual Tour', href: 'https://www.cauleyferrari.com/virtual-tour/' },
      ] },
      { label: 'Owners', href: 'https://www.cauleyferrari.com/owners-resources/', children: [
        { label: 'Owners Resources', href: 'https://www.cauleyferrari.com/owners-resources/' },
        { label: 'Aftersales Services', href: 'https://www.cauleyferrari.com/aftersales-services/' },
        { label: 'Personalization', href: 'https://www.cauleyferrari.com/personalization/' },
      ] },
      { label: 'Motorsports', href: 'https://www.cauleyferrari.com/ferrari-challenge/', children: [
        { label: 'Corso Pilota', href: 'https://www.cauleyferrari.com/news/ferraridrivingschool/' },
        { label: 'Ferrari Challenge', href: 'https://www.cauleyferrari.com/ferrari-challenge/' },
      ] },
      { label: 'News &amp; Events', href: 'https://www.ferrari.com/en-EN/news', blank: true },
    ],
    mobileNav: [
      { label: 'New Model Range', href: 'https://www.cauleyferrari.com/ferrari-model-range/' },
      { label: 'Pre-Owned', href: 'https://www.cauleyferrari.com/ferrari-inventory/' },
      { label: 'Service', href: 'https://www.cauleyferrari.com/schedule-appointment/' },
      { label: 'Collision', href: 'https://www.cauleyferrari.com/collision-center/overview-2/' },
      { label: 'About Us', href: 'https://www.cauleyferrari.com/about-us/' },
      { label: 'Owners', href: 'https://www.cauleyferrari.com/owners-resources/' },
      { label: 'Motorsports', href: 'https://www.cauleyferrari.com/ferrari-challenge/' },
      { label: 'News &amp; Events', href: 'https://www.ferrari.com/en-EN/news', blank: true },
    ],
    footerNav: [
      { label: 'Model range', href: 'https://www.cauleyferrari.com/ferrari-model-range/', children: [
        { label: 'Line Up', href: 'https://www.cauleyferrari.com/ferrari-model-range/' },
        { label: '849 Testarossa', href: 'https://www.cauleyferrari.com/ferrari-model-range/849-testarossa/' },
        { label: '849 Testarossa Spider', href: 'https://www.cauleyferrari.com/ferrari-model-range/849-testarossa-spider/' },
        { label: '12Cilindri', href: 'https://www.cauleyferrari.com/ferrari-model-range/12-cilindri/' },
        { label: '12Cilindri Spider', href: 'https://www.cauleyferrari.com/ferrari-model-range/12-cilindri-spider/' },
        { label: '296 GTB', href: 'https://www.cauleyferrari.com/ferrari-model-range/296-gtb/' },
        { label: '296 GTS', href: 'https://www.cauleyferrari.com/ferrari-model-range/296-gts/' },
        { label: 'Amalfi', href: 'https://www.cauleyferrari.com/ferrari-model-range/amalfi/' },
        { label: 'Amalfi Spider', href: 'https://www.cauleyferrari.com/ferrari-model-range/amalfi-spider/' },
        { label: 'Purosangue', href: 'https://www.cauleyferrari.com/ferrari-model-range/purosangue/' },
        { label: 'Luce', href: 'https://www.cauleyferrari.com/ferrari-model-range/luce/' },
      ] },
      { label: 'Pre-Owned', href: 'https://www.cauleyferrari.com/certified-pre-owned/', children: [
        { label: 'Certified Pre-Owned', href: 'https://www.cauleyferrari.com/certified-pre-owned/' },
        { label: 'Ferrari Inventory', href: 'https://www.cauleyferrari.com/ferrari-inventory/' },
        { label: 'Previously Sold Inventory', href: 'https://www.cauleyferrari.com/sold-inventory/' },
        { label: 'Value Your Car', href: 'https://www.cauleyferrari.com/value-your-trade/' },
      ] },
      { label: 'Service', href: 'https://www.cauleyferrari.com/service-appointment/', children: [
        { label: 'Schedule Service', href: 'https://www.cauleyferrari.com/service-appointment/' },
        { label: 'Roadside Assistance', href: 'https://www.cauleyferrari.com/roadside-assistance/' },
        { label: 'Collision Center', href: 'https://www.cauleyferrari.com/collision-center/' },
        { label: 'Q &amp; A', href: 'https://www.cauleyferrari.com/commonqa/' },
      ] },
      { label: 'Owners', href: 'https://www.cauleyferrari.com/owners-resources/', children: [
        { label: 'Ferrari Classiche', href: 'https://www.cauleyferrari.com/ferrari-classiche/' },
        { label: 'Owner&rsquo;s Club', href: 'https://www.cauleyferrari.com/owners-resources/' },
        { label: 'My Ferrari', href: 'https://www.ferrari.com/en-EN/auto/myferrari', blank: true },
        { label: 'Ferrari store', href: 'https://store.ferrari.com/en-us/', blank: true },
      ] },
      { label: 'About Us', href: 'https://www.cauleyferrari.com/about-us/', children: [
        { label: 'Our History', href: 'https://www.cauleyferrari.com/about-us/' },
        { label: 'Our Team', href: 'https://www.cauleyferrari.com/our-team/' },
        { label: 'Virtual Tour', href: 'https://www.cauleyferrari.com/virtual-tour/' },
        { label: 'Contact Us', href: 'https://www.cauleyferrari.com/contact-us/' },
        { label: 'Work With Us', href: 'https://www.cauleyferrari.com/employment/' },
      ] },
    ],
    compositions: [
      {
        id: 'mountain-pass',
        slug: 'road-mountain-pass',
        eyebrow: 'The Roads',
        title: 'Mountain Pass',
        alt: 'Purosangue Mountain Pass composition: Rosso Racing 2025 with Bianco King livery.',
        copy: 'A composition of Rosso Racing 2025 with Bianco King livery and Blu Sterling leather. It evokes the character of a road carved through changing elevation, where beauty and exhilaration are deepened through a sense of reverence.',
        record: [
          ['Exterior', 'Rosso Racing 2025'],
          ['Livery', 'Bianco King'],
          ['Interior', 'Blu Sterling'],
        ],
      },
      {
        id: 'the-mountains',
        slug: 'landscape-mountains',
        eyebrow: 'The Landscapes',
        title: 'The Mountains',
        alt: 'Purosangue The Mountains composition in Verde Menthe.',
        copy: 'A composition of Verde Menthe and Beige Honolulu leather, inspired by the luminous color of glacial lakes framed by rugged stone peaks. It captures a landscape where the most vivid natural tones emerge from the most timeless and imposing forms.',
        record: [
          ['Exterior', 'Verde Menthe'],
          ['Interior', 'Beige Honolulu'],
        ],
      },
    ],
  },

  lasvegas: {
    key: 'lasvegas',
    name: 'Ferrari of Las Vegas',
    host: 'ferrarilasvegas.com',
    img: 'lasvegas',
    place: 'Las Vegas, NV',
    logoAlt: 'Official Ferrari Dealer — Ferrari of Las Vegas',
    address: '5540 West Sahara Avenue Las Vegas, NV 89146',
    addressHref: 'https://www.ferrarilasvegas.com/hours-directions/',
    phone: '(702) 659-6600',
    tel: '7026596600',
    contactHref: 'https://www.ferrarilasvegas.com/contact-us/',
    purosangue: 'https://www.ferrarilasvegas.com/ferrari-model-range/purosangue/',
    legal: {
      cookie: 'https://www.ferrarilasvegas.com/cookie/',
      privacy: 'https://www.ferrarilasvegas.com/privacy-policy/',
      terms: 'https://www.ferrarilasvegas.com/terms-of-use/',
    },
    social: [
      { network: 'Facebook', href: 'https://www.facebook.com/FerrariOfLasVegas/' },
      { network: 'Instagram', href: 'https://www.instagram.com/ferrarioflasvegas/' },
    ],
    nav: [
      { label: 'New Model Range', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/', children: [
        { label: 'All Models', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/' },
        { label: '849 Testarossa', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/849-testarossa/' },
        { label: '849 Testarossa Spider', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/849-testarossa-spider/' },
        { label: '12Cilindri', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/12-cilindri/' },
        { label: '12Cilindri Spider', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/12-cilindri-spider/' },
        { label: '296 GTB', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/296-gtb/' },
        { label: '296 GTS', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/296-gts/' },
        { label: 'Amalfi', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/amalfi/' },
        { label: 'Amalfi Spider', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/amalfi-spider/' },
        { label: 'Purosangue', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/purosangue/' },
        { label: 'Luce', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/luce/' },
      ] },
      { label: 'Pre-Owned', href: 'https://www.ferrarilasvegas.com/ferrari-pre-owned-inventory/', children: [
        { label: 'Ferrari Pre-Owned', href: 'https://www.ferrarilasvegas.com/ferrari-pre-owned-inventory/' },
        { label: 'All Inventory', href: 'https://www.ferrarilasvegas.com/inventory/' },
        { label: 'My Collection', href: 'https://www.ferrarilasvegas.com/my-collection/' },
        { label: 'Finance', href: 'https://www.ferrarilasvegas.com/finance-application/' },
        { label: 'Value Your Car', href: 'https://www.ferrarilasvegas.com/value-your-trade/' },
      ] },
      { label: 'Service', href: 'https://www.ferrarilasvegas.com/schedule-ferrari-service/', children: [
        { label: 'Schedule Ferrari Service', href: 'https://www.ferrarilasvegas.com/schedule-ferrari-service/' },
        { label: 'Roadside Assistance', href: 'https://www.ferrarilasvegas.com/roadside-assistance/' },
        { label: 'Order Parts', href: 'https://www.ferrarilasvegas.com/order-parts/' },
        { label: 'Ferrari Certified', href: 'https://www.ferrarilasvegas.com/service-parts/' },
        { label: 'Genuine Parts', href: 'https://www.ferrarilasvegas.com/genuine-parts/' },
      ] },
      { label: 'About Us', href: 'https://www.ferrarilasvegas.com/dealership/', children: [
        { label: 'Our Dealership', href: 'https://www.ferrarilasvegas.com/dealership/' },
        { label: 'Our Team', href: 'https://www.ferrarilasvegas.com/our-team/' },
        { label: 'Work With Us', href: 'https://www.ferrarilasvegas.com/work-with-us/' },
        { label: 'Map &amp; Hours', href: 'https://www.ferrarilasvegas.com/hours-directions/' },
        { label: 'Contact', href: 'https://www.ferrarilasvegas.com/contact-us/' },
      ] },
      { label: 'Owners', href: 'https://www.ferrarilasvegas.com/owners-resources/', children: [
        { label: 'Owners Resources', href: 'https://www.ferrarilasvegas.com/owners-resources/' },
        { label: 'Aftersales Services', href: 'https://www.ferrarilasvegas.com/aftersales-services/' },
        { label: 'Personalization', href: 'https://www.ferrarilasvegas.com/personalization/' },
      ] },
      { label: 'Motorsports', href: 'https://www.ferrarilasvegas.com/ferrari-challenge/', children: [
        { label: 'Corso Pilota', href: 'https://www.ferrarilasvegas.com/corso-pilota/' },
        { label: 'Ferrari Challenge', href: 'https://www.ferrarilasvegas.com/ferrari-challenge/' },
      ] },
      { label: 'News &amp; Events', href: 'https://www.ferrari.com/en-EN/news', blank: true },
    ],
    mobileNav: [
      { label: 'New Model Range', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/' },
      { label: 'Pre-Owned', href: 'https://www.ferrarilasvegas.com/ferrari-pre-owned-inventory/' },
      { label: 'Service', href: 'https://www.ferrarilasvegas.com/schedule-ferrari-service/' },
      { label: 'About Us', href: 'https://www.ferrarilasvegas.com/dealership/' },
      { label: 'Owners', href: 'https://www.ferrarilasvegas.com/owners-resources/' },
      { label: 'Motorsports', href: 'https://www.ferrarilasvegas.com/ferrari-challenge/' },
      { label: 'News &amp; Events', href: 'https://www.ferrari.com/en-EN/news', blank: true },
    ],
    footerNav: [
      { label: 'Model range', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/', children: [
        { label: 'Line Up', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/' },
        { label: '849 Testarossa', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/849-testarossa/' },
        { label: '849 Testarossa Spider', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/849-testarossa-spider/' },
        { label: '12Cilindri', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/12-cilindri/' },
        { label: '12Cilindri Spider', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/12-cilindri-spider/' },
        { label: '296 GTB', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/296-gtb/' },
        { label: '296 GTS', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/296-gts/' },
        { label: 'Amalfi', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/amalfi/' },
        { label: 'Amalfi Spider', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/amalfi-spider/' },
        { label: 'Purosangue', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/purosangue/' },
        { label: 'Luce', href: 'https://www.ferrarilasvegas.com/ferrari-model-range/luce/' },
      ] },
      { label: 'Pre-Owned', href: 'https://www.ferrarilasvegas.com/ferrari-pre-owned-inventory/', children: [
        { label: 'Ferrari Pre-Owned', href: 'https://www.ferrarilasvegas.com/ferrari-pre-owned-inventory/' },
        { label: 'Ferrari Inventory', href: 'https://www.ferrarilasvegas.com/ferrari-inventory/' },
        { label: 'Value Your Car', href: 'https://www.ferrarilasvegas.com/value-your-trade/' },
      ] },
      { label: 'Service', href: 'https://www.ferrarilasvegas.com/schedule-ferrari-service/', children: [
        { label: 'Schedule Ferrari Service', href: 'https://www.ferrarilasvegas.com/schedule-ferrari-service/' },
        { label: 'Roadside Assistance', href: 'https://www.ferrarilasvegas.com/roadside-assistance/' },
      ] },
      { label: 'Owners', href: 'https://www.ferrarilasvegas.com/owners-resources/', children: [
        { label: 'Ferrari Classiche', href: 'https://www.ferrarilasvegas.com/ferrari-classiche/' },
        { label: 'Owner&rsquo;s Club', href: 'https://www.ferrarilasvegas.com/owners-resources/' },
        { label: 'My Ferrari', href: 'https://www.ferrari.com/en-EN/auto/myferrari', blank: true },
        { label: 'Ferrari store', href: 'https://store.ferrari.com/en-us/', blank: true },
      ] },
      { label: 'About Us', href: 'https://www.ferrarilasvegas.com/dealership/', children: [
        { label: 'Our History', href: 'https://www.ferrarilasvegas.com/dealership/' },
        { label: 'Our Team', href: 'https://www.ferrarilasvegas.com/our-team/' },
        { label: 'Contact Us', href: 'https://www.ferrarilasvegas.com/contact-us/' },
        { label: 'Work With Us', href: 'https://www.ferrarilasvegas.com/employment/' },
      ] },
    ],
    compositions: [
      {
        id: 'overlook',
        slug: 'road-overlook',
        eyebrow: 'The Roads',
        title: 'Overlook',
        alt: 'Purosangue Overlook composition in Rosso California with Blu America livery.',
        copy: 'A composition of Rosso California with Blu America livery and Bianco leather. It embodies the spirit of a winding road that opens to reveal a sweeping view beyond, balancing drama and clarity in equal measure.',
        record: [
          ['Exterior', 'Rosso California'],
          ['Livery', 'Blu America'],
          ['Interior', 'Bianco'],
        ],
      },
      {
        id: 'the-sands',
        slug: 'landscape-sands',
        eyebrow: 'The Landscapes',
        title: 'The Sands',
        alt: 'Purosangue The Sands composition in Blu Genziana Storico with Oro Chiaro livery.',
        copy: 'A composition of Blu Genziana Storico with Oro Chiaro livery and Sabbia leather, inspired by the luminous contrast of pale gypsum dunes set against a cloudless desert sky. It portrays a landscape where wind and light continuously reshape the horizon, creating an ever-changing interplay of form, shadow, and colour.',
        record: [
          ['Exterior', 'Blu Genziana Storico'],
          ['Livery', 'Oro Chiaro'],
          ['Interior', 'Sabbia'],
        ],
      },
    ],
  },

  greenwich: {
    key: 'greenwich',
    name: 'Ferrari of Greenwich',
    host: 'ferrariofgreenwich.com',
    img: 'greenwich',
    place: 'Greenwich, CT &nbsp;·&nbsp; Miller Motorcars in the deck',
    logoAlt: 'Official Ferrari Dealer — Ferrari of Greenwich',
    address: '342 West Putnam Avenue Greenwich, CT 06830',
    addressHref: 'https://www.ferrariofgreenwich.com/directions/',
    phone: '866-692-1036',
    tel: '8666921036',
    contactHref: 'https://www.ferrariofgreenwich.com/contact/',
    purosangue: 'https://www.ferrariofgreenwich.com/ferrari-model-range/purosangue/',
    legal: {
      cookie: 'https://www.ferrariofgreenwich.com/cookie/',
      privacy: 'https://www.ferrariofgreenwich.com/privacy-policy/',
      terms: 'https://www.ferrariofgreenwich.com/terms-of-use/',
    },
    social: [
      { network: 'Facebook', href: 'https://www.facebook.com/FerrariGreenwich/' },
      { network: 'Instagram', href: 'https://www.instagram.com/millermotorcarsferrari' },
    ],
    nav: [
      { label: 'New Model Range', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/', children: [
        { label: 'All models', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/' },
        { label: '849 Testarossa', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/849-testarossa/' },
        { label: '849 Testarossa Spider', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/849-testarossa-spider/' },
        { label: '12Cilindri', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/12-cilindri/' },
        { label: '12Cilindri Spider', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/12-cilindri-spider/' },
        { label: '296 GTB', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/296-gtb/' },
        { label: '296 GTS', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/296-gts/' },
        { label: 'Amalfi', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/amalfi/' },
        { label: 'Amalfi Spider', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/amalfi-spider/' },
        { label: 'Purosangue', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/purosangue/' },
        { label: 'Luce', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/luce/' },
      ] },
      { label: 'Pre-Owned', href: 'https://www.ferrariofgreenwich.com/pre-owned-ferrari/', children: [
        { label: 'Pre-Owned Ferrari Inventory', href: 'https://www.ferrariofgreenwich.com/pre-owned-ferrari/' },
        { label: 'Pre-Owned Inventory', href: 'https://www.ferrariofgreenwich.com/pre-owned-inventory/' },
        { label: 'Schedule Test Drive', href: 'https://www.ferrariofgreenwich.com/schedule-test-drive/' },
        { label: 'Car Finder', href: 'https://www.ferrariofgreenwich.com/my-garage/' },
        { label: 'Value Your Car', href: 'https://www.ferrariofgreenwich.com/value-your-trade/' },
        { label: 'Quick Quote', href: 'https://www.ferrariofgreenwich.com/quick-quote/' },
        { label: 'Sale Pending Inventory', href: 'https://www.ferrariofgreenwich.com/sale-pending-inventory/' },
        { label: 'Previously Sold Inventory', href: 'https://www.ferrariofgreenwich.com/sold-inventory/' },
      ] },
      { label: 'Financing', href: 'https://www.ferrariofgreenwich.com/financing/', children: [
        { label: 'Finance Center', href: 'https://www.ferrariofgreenwich.com/financing/' },
        { label: 'Finance Application', href: 'https://www.ferrariofgreenwich.com/finance/' },
      ] },
      { label: 'Service', href: 'https://www.ferrariofgreenwich.com/service/', children: [
        { label: 'Make An Appointment', href: 'https://www.ferrariofgreenwich.com/service/' },
        { label: 'Ferrari Classiche', href: 'https://www.ferrariofgreenwich.com/ferrari-classiche/' },
        { label: 'Pick-Up And Delivery', href: 'https://www.ferrariofgreenwich.com/pickup-and-delivery/' },
        { label: 'Roadside Assistance', href: 'https://www.ferrariofgreenwich.com/roadside-assistance/' },
        { label: 'Body Shop', href: 'https://www.ferrariofgreenwich.com/ferrari-certified/' },
      ] },
      { label: 'Parts &amp; Accessories', href: 'https://www.ferrariofgreenwich.com/order-parts/', children: [
        { label: 'Accessories &amp; Parts Store', href: 'https://store.millermotorcars.com/collections/ferrari', blank: true },
        { label: 'Order Parts', href: 'https://www.ferrariofgreenwich.com/order-parts/' },
      ] },
      { label: 'Owners', href: 'https://www.ferrariofgreenwich.com/aftersales-services/', children: [
        { label: 'Aftersales Services', href: 'https://www.ferrariofgreenwich.com/aftersales-services/' },
        { label: 'Personalization', href: 'https://www.ferrariofgreenwich.com/personalization/' },
        { label: 'Corso Pilota', href: 'https://www.ferrariofgreenwich.com/news/ferraridrivingschool/' },
        { label: 'Ferrari Challenge', href: 'https://www.ferrariofgreenwich.com/ferrari-challenge/' },
        { label: 'Passione Ferrari Club Challenge', href: 'https://www.ferrariofgreenwich.com/club_challenge/' },
        { label: 'My Ferrari App', href: 'https://www.ferrariofgreenwich.com/my-ferrari-app/' },
      ] },
      { label: 'News &amp; Events', href: 'https://www.ferrari.com/en-EN/news', blank: true },
    ],
    mobileNav: [
      { label: 'New Model Range', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/' },
      { label: 'Pre-Owned', href: 'https://www.ferrariofgreenwich.com/pre-owned-ferrari/' },
      { label: 'Financing', href: 'https://www.ferrariofgreenwich.com/financing/' },
      { label: 'Service', href: 'https://www.ferrariofgreenwich.com/service/' },
      { label: 'Parts &amp; Accessories', href: 'https://www.ferrariofgreenwich.com/order-parts/' },
      { label: 'Owners', href: 'https://www.ferrariofgreenwich.com/aftersales-services/' },
      { label: 'News &amp; Events', href: 'https://www.ferrari.com/en-EN/news', blank: true },
    ],
    footerNav: [
      { label: 'Model range', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/', children: [
        { label: 'Line Up', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/' },
        { label: '849 Testarossa', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/849-testarossa/' },
        { label: '849 Testarossa Spider', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/849-testarossa-spider/' },
        { label: '12Cilindri', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/12-cilindri/' },
        { label: '12Cilindri Spider', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/12-cilindri-spider/' },
        { label: '296 GTB', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/296-gtb/' },
        { label: '296 GTS', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/296-gts/' },
        { label: 'Amalfi', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/amalfi/' },
        { label: 'Amalfi Spider', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/amalfi-spider/' },
        { label: 'Purosangue', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/purosangue/' },
        { label: 'Luce', href: 'https://www.ferrariofgreenwich.com/ferrari-model-range/luce/' },
      ] },
      { label: 'Pre-Owned', href: 'https://www.ferrariofgreenwich.com/certified-pre-owned/', children: [
        { label: 'Certified Pre-Owned Inventory', href: 'https://www.ferrariofgreenwich.com/certified-pre-owned/' },
        { label: 'Used Inventory', href: 'https://www.ferrariofgreenwich.com/pre-owned-inventory/' },
        { label: 'Value Your Car', href: 'https://www.ferrariofgreenwich.com/value-your-trade/' },
      ] },
      { label: 'Service', href: 'https://www.ferrariofgreenwich.com/service-appointment/', children: [
        { label: 'Schedule Service', href: 'https://www.ferrariofgreenwich.com/service-appointment/' },
        { label: 'Roadside Assistance', href: 'https://www.ferrariofgreenwich.com/roadside-assistance/' },
      ] },
      { label: 'Owners', href: 'https://www.ferrariofgreenwich.com/owners-resources/', children: [
        { label: 'Ferrari Classiche', href: 'https://www.ferrariofgreenwich.com/ferrari-classiche/' },
        { label: 'Owner&rsquo;s Club', href: 'https://www.ferrariofgreenwich.com/owners-resources/' },
        { label: 'My Ferrari', href: 'https://www.ferrari.com/en-EN/auto/myferrari', blank: true },
        { label: 'Ferrari store', href: 'https://store.ferrari.com/en-us/', blank: true },
      ] },
      { label: 'About Us', href: 'https://www.ferrariofgreenwich.com/about-us/', children: [
        { label: 'Our History', href: 'https://www.ferrariofgreenwich.com/about-us/' },
        { label: 'Meet Our Staff', href: 'https://www.ferrariofgreenwich.com/meet-our-staff/' },
        { label: 'Virtual Facility Tour', href: 'https://www.ferrariofgreenwich.com/virtual_tour/' },
        { label: 'Contact Us', href: 'https://www.ferrariofgreenwich.com/contact/' },
      ] },
    ],
    compositions: [
      {
        id: 'byway',
        slug: 'road-byway',
        eyebrow: 'The Roads',
        title: 'Byway',
        alt: 'Purosangue Byway composition in Blu NART with Bianco King livery.',
        copy: 'A composition of Blu NART with Bianco King livery and Rosso Giudecca leather. It evokes the spirit of a road that balances scenic beauty with driving engagement, finding harmony between understated beauty and dynamic character.',
        record: [
          ['Exterior', 'Blu NART'],
          ['Livery', 'Bianco King'],
          ['Interior', 'Rosso Giudecca'],
        ],
      },
      {
        id: 'the-sands',
        slug: 'landscape-sands',
        eyebrow: 'The Landscapes',
        title: 'The Sands',
        alt: 'Purosangue The Sands composition in Blu Genziana Storico with Oro Chiaro livery.',
        copy: 'A composition of Blu Genziana Storico with Oro Chiaro livery and Sabbia leather, inspired by the luminous contrast of pale gypsum dunes set against a cloudless desert sky. It portrays a landscape where wind and light continuously reshape the horizon, creating an ever-changing interplay of form, shadow, and colour.',
        record: [
          ['Exterior', 'Blu Genziana Storico'],
          ['Livery', 'Oro Chiaro'],
          ['Interior', 'Sabbia'],
        ],
      },
      {
        id: 'the-great-plains',
        slug: 'landscape-great-plains',
        eyebrow: 'The Landscapes',
        title: 'The Great Plains',
        alt: 'Purosangue The Great Plains composition in Bronzo Montecarlo.',
        copy: 'A composition of Bronzo Montecarlo and Testa di Moro Java leather, inspired by the rich, tonal earth hues of the Great Plains. It captures a landscape whose depth and understated beauty emerge through layers of monochromatic tone and texture.',
        record: [
          ['Exterior', 'Bronzo Montecarlo'],
          ['Interior', 'Testa di Moro Java'],
        ],
      },
    ],
  },
};

/* ── renderers ───────────────────────────────────────────────────────────── */

/* An external link carries target and rel; an internal one carries neither.
   Written once so no hand-edited anchor can forget the rel. */
const rel = (item) => (item.blank ? 'target="_blank" rel="noopener" ' : '');

const chevron = '<svg class="btn__chev" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const headerNav = (nav) => nav.map((item) => (item.children
  ? `          <li class="has-children">
            <a href="${item.href}">${item.label}</a>
            <ul class="sub-menu">
${item.children.map((c) => `              <li><a ${rel(c)}href="${c.href}">${c.label}</a></li>`).join('\n')}
            </ul>
          </li>`
  : `          <li><a ${rel(item)}href="${item.href}">${item.label}</a></li>`)).join('\n');

const mobileNav = (nav) => nav
  .map((item) => `    <a ${rel(item)}href="${item.href}">${item.label}</a>`).join('\n');

const footerNav = (nav) => nav.map((col) => `            <li>
              <a class="footer__col-head" href="${col.href}">${col.label}</a>
              <ul class="sub-menu">
${col.children.map((c) => `                <li><a ${rel(c)}href="${c.href}">${c.label}</a></li>`).join('\n')}
              </ul>
            </li>`).join('\n');

const social = (list) => list.map((s) =>
  `            <a href="${s.href}" target="_blank" rel="noopener noreferrer" title="${s.network}" aria-label="${s.network}">${SOCIAL_ICONS[s.network]}</a>`).join('\n');

/* The plate: the supplied render at two widths, the colour facts beside it as
   a record on hairlines. `sizes` follows the 60rem breakpoint at which the
   panel becomes two columns — change one and the other has to move with it. */
const panel = (c, v2 = false) => `          <article class="panel" id="${c.id}">
            <div class="panel__inner">
              <figure class="panel__media">
                <img src="img/${c.slug}-plate-900.webp"
                     srcset="img/${c.slug}-plate-900.webp 900w, img/${c.slug}-plate-1800.webp 1800w"
                     sizes="(min-width: 60rem) 45vw, 100vw"
                     width="1800" height="1944" loading="lazy"
                     alt="${c.alt}">
              </figure>
              <div class="panel__type">${v2 ? '' : `
                <p class="eyebrow">${c.eyebrow}</p>`}
                <h3 class="h2">${c.title}</h3>
                <p class="copy">${c.copy}</p>
                <div class="record">
${c.record.map(([k, v]) => `                  <div><p class="record__k">${k}</p><p class="record__v">${v}</p></div>`).join('\n')}
                </div>${v2 ? '' : `
                <div class="actions">
                  <a class="btn btn--primary" href="#inquire">Inquire</a>
                </div>`}
              </div>
            </div>
          </article>`;

const gallery = (compositions) => compositions.map((c) =>
  `      <img src="img/${c.slug}-plate-900.webp" width="1800" height="1944" loading="lazy" alt="${c.title}, exterior.">
      <img src="img/${c.slug}-int-700.webp" width="700" height="394" loading="lazy" alt="${c.title}, interior.">`).join('\n');

/* v2 — the gallery grid replaced by one Tier-1 pair per composition.
   Ferrari's own page sets the exterior at 695 and the interior at 489 with a
   32px gap on a 1216 content width, tops aligned: 57 / 40. Those are the
   numbers below, and they are the reason the exterior is the uncropped 16:9
   frame here rather than the portrait `plate` crop the panel above uses — the
   pair only reads as a pair when both halves share a ratio. */
const pairs = (compositions) => compositions.map((c) =>
  `      <figure class="pair">
        <img class="pair__ext" src="img/${c.slug}-ext-1000.webp"
             srcset="img/${c.slug}-ext-1000.webp 1000w, img/${c.slug}-ext-2000.webp 2000w"
             sizes="(min-width: 60rem) 57vw, 100vw"
             width="2000" height="1125" loading="lazy" alt="${c.title}, exterior.">
        <img class="pair__int" src="img/${c.slug}-int-700.webp"
             srcset="img/${c.slug}-int-700.webp 700w, img/${c.slug}-int-1400.webp 1400w"
             sizes="(min-width: 60rem) 40vw, 100vw"
             width="1400" height="787" loading="lazy" alt="${c.title}, interior.">
      </figure>`).join('\n\n');

/* ── the page ────────────────────────────────────────────────────────────── */

const page = (r, v2 = false) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${COLLECTION} — ${r.name}</title>
<meta name="description" content="The ${COLLECTION} at ${r.name}: ${r.compositions.length} Atelier compositions drawn from the roads and landscapes of the American grand tour.">
<!-- Generated by tools/build-pages.mjs — edit that, not this file.
     No font preload: it must carry crossorigin, and over file:// that is
     refused by CORS. Add it back when this is served over http. -->
<link rel="stylesheet" href="css/page.css">${v2 ? '\n<link rel="stylesheet" href="css/page-v2.css">' : ''}
</head>
<body>

<a class="skip" href="#main">Skip to content</a>

<!-- ══ HEADER — reproduced from ${r.host} ══ -->
<header class="header" id="masthead">

  <div class="header__top-bar">
    <div class="h-container">
      <a class="header__contact header__contact--address" href="${r.addressHref}">
        <img src="img/${r.img}/geo-pin.svg" width="16" height="16" alt="">
        <span>${r.address}</span>
      </a>

      <a class="header__top-bar-logo" href="https://www.${r.host}/" title="${r.name}">
        <img class="header__horse" src="img/${r.img}/prancing-horse.svg" width="21" height="28" alt="${r.name}">
      </a>

      <div class="header__top-bar-right">
        <a class="header__contact header__contact--phone" href="tel:${r.tel}">
          <img src="img/${r.img}/telephone.svg" width="16" height="16" alt="">
          <span>${r.phone}</span>
        </a>
        <div class="header__search">
          <label class="sr-only" for="header-search-input">Search</label>
          <input id="header-search-input" type="text" name="stockno" placeholder="Search by Keyword">
          <button type="button" class="header__search-btn" aria-label="Search">
            <img src="img/${r.img}/search-icon.svg" width="16" height="16" alt="">
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="header__mobile-section">
    <button class="header__burger-text" type="button" id="burger" aria-expanded="false" aria-controls="mobile-menu">Menu</button>
    <a class="header__mobile-logo" href="https://www.${r.host}/" title="${r.name}">
      <img class="header__horse" src="img/${r.img}/prancing-horse.svg" width="21" height="28" alt="${r.name}">
    </a>
    <a class="header__mobile-action" href="${r.contactHref}">Contact us</a>
  </div>

  <div class="header__navigation-section">
    <div class="h-container">
      <div class="header__logo">
        <a href="https://www.${r.host}/" title="${r.name}">
          <img class="header__logo-img" src="img/${r.img}/logo.svg" width="360" height="48" alt="${r.logoAlt}">
        </a>
      </div>

      <nav class="header__nav" aria-label="Main">
        <ul class="header__menu">
${headerNav(r.nav)}
        </ul>
        <div class="header__submenu-backdrop" aria-hidden="true"></div>
      </nav>
    </div>
  </div>
</header>

<div class="mobile-menu" id="mobile-menu" hidden>
  <nav class="mobile-menu__inner" aria-label="Mobile">
${mobileNav(r.mobileNav)}
    <div class="mobile-menu__foot">
      <a href="${r.addressHref}">${r.address}</a>
      <a href="tel:${r.tel}">${r.phone}</a>
    </div>
  </nav>
</div>

<main id="main">

  <!-- ══ HERO ══ -->
  <section class="hero" id="top">
    <div class="hero__bg">${v2 ? `
      <img class="hero__still" src="img/${heroStill(r).file}-1000.webp"
           srcset="img/${heroStill(r).file}-1000.webp 1000w, img/${heroStill(r).file}-2000.webp 2000w"
           sizes="100vw" width="2000" height="1125" fetchpriority="high"
           alt="${heroStill(r).alt}">` : `
      <video class="hero__video" autoplay muted loop playsinline preload="metadata"
             poster="video/${HERO.video}-poster.jpg"
             aria-label="${HERO.alt}">
        <source src="video/${HERO.video}.mp4" type="video/mp4">
        <img src="video/${HERO.video}-poster.jpg" width="1600" height="900"
             alt="${HERO.alt}">
      </video>`}
    </div>
    <div class="hero__scrim" aria-hidden="true"></div>

    <div class="band hero__inner">
      <div class="hero__type">${v2 ? '' : `
        <img class="hero__badge" src="img/agt-badge.webp" width="1370" height="475"
             alt="Purosangue American Grand Tour">`}
        <h1 class="display hero__title">Purosangue American Grand&nbsp;Tour Atelier Collection</h1>
      </div>
      <div class="actions">
        <a class="btn btn--primary" href="#inquire">Inquire</a>
        <a class="btn btn--ghost-light" href="${r.purosangue}">Explore Purosangue ${chevron}</a>
      </div>
    </div>
  </section>

  <!-- ══ MANIFESTO ══ -->
  <section class="band manifesto" aria-labelledby="manifesto-lead">
    <p class="manifesto__lead" id="manifesto-lead">${MANIFESTO}</p>
  </section>

  <!-- ══ 1 · HERITAGE ══ -->
  <section class="chapter" id="heritage" aria-labelledby="heritage-h">
    <div class="chapter__bg">${v2 ? `
      <img class="chapter__still" src="img/${STILLS.chapter.file}-1000.webp"
           srcset="img/${STILLS.chapter.file}-1000.webp 1000w, img/${STILLS.chapter.file}-1920.webp 1920w"
           sizes="100vw" width="1920" height="1080" loading="lazy"
           alt="${STILLS.chapter.alt}">` : `
      <video class="chapter__video" autoplay muted loop playsinline preload="none"
             poster="video/${HERITAGE.video}-poster.jpg"
             aria-label="${HERITAGE.alt}">
        <source src="video/${HERITAGE.video}.mp4" type="video/mp4">
        <img src="video/${HERITAGE.video}-poster.jpg" width="1600" height="900"
             alt="${HERITAGE.alt}">
      </video>`}
    </div>
    <div class="chapter__scrim" aria-hidden="true"></div>

    <div class="band">
      <p class="marker"><span>1</span><span class="marker__rule"></span><span>Heritage</span></p>
    </div>

    <div class="band chapter__foot">
      <div class="chapter__type">${v2 ? '' : `
        <p class="eyebrow eyebrow--light">${HERITAGE.eyebrow}</p>`}
        <h2 class="h2" id="heritage-h">${HERITAGE.title}</h2>
        <p class="copy copy--light">${HERITAGE.copy}</p>${v2 ? '' : `
        <div class="actions">
          <a class="btn btn--primary" href="#inquire">Inquire</a>
        </div>`}
      </div>
    </div>
  </section>

  <!-- ══ 2 · THE COLLECTION ══ -->
  <section class="composition" id="collection" aria-labelledby="collection-h">
    <div class="composition__head">
      <p class="marker"><span>2</span><span class="marker__rule"></span><span id="collection-h">The Collection</span></p>
    </div>
    <div class="stack">

${r.compositions.map((c) => panel(c, v2)).join('\n\n')}
    </div>
  </section>

  <!-- ══ 3 · GALLERY ══ -->
  <section class="band gallery" id="gallery" aria-labelledby="gallery-h">
    <div class="gallery__head">
      <p class="marker marker--ink"><span>3</span><span class="marker__rule"></span><span id="gallery-h">Gallery</span></p>
    </div>
    <div class="${v2 ? 'pairs' : 'gallery__grid'}">
${v2 ? pairs(r.compositions) : gallery(r.compositions)}
    </div>
  </section>

  <!-- ══ INQUIRY ══ -->
  <section class="band inquire" id="inquire" aria-labelledby="inquire-h">
    <div class="inquire__head">
      <p class="eyebrow">${r.name}</p>
      <h2 class="h2 inquire__h" id="inquire-h">Inquire about the Atelier Collection</h2>
      <p class="inquire__note">A specialist will contact you about availability and the Atelier configuration process.</p>
      <a class="btn btn--ghost" href="${r.purosangue}">Explore Purosangue ${chevron}</a>
    </div>

    <form class="form" id="inquiry-form" novalidate>
      <div class="form__row"><label class="form__label" for="f-name">Full name</label><input class="form__field" id="f-name" name="name" type="text" autocomplete="name" required></div>
      <div class="form__row"><label class="form__label" for="f-email">Email</label><input class="form__field" id="f-email" name="email" type="email" autocomplete="email" required></div>
      <div class="form__row"><label class="form__label" for="f-phone">Telephone</label><input class="form__field" id="f-phone" name="phone" type="tel" autocomplete="tel"></div>
      <div class="form__row form__row--wide"><label class="form__label" for="f-message">Message</label><textarea class="form__field" id="f-message" name="message" rows="3"></textarea></div>
      <p class="form__placeholder" role="note">Sample form — endpoint not connected. Submissions are not sent.</p>
      <button class="btn btn--primary btn--lg" type="submit">Inquire</button>
      <p class="form__status" id="form-status" role="status" aria-live="polite"></p>
    </form>
  </section>

</main>

<!-- ══ FOOTER — reproduced from ${r.host} ══ -->
<footer class="super-footer">
  <div class="super-footer__top-section">
    <div class="f-container">

      <div class="super-footer__navigation">
        <nav aria-label="Footer navigation">
          <ul class="footer__menu">
${footerNav(r.footerNav)}
          </ul>
        </nav>
      </div>

      <div class="super-footer__logo">
        <a href="https://www.${r.host}/" title="${r.name}">
          <img src="img/${r.img}/logo.svg" width="360" height="48" alt="${r.logoAlt}">
        </a>
      </div>

      <div class="super-footer__dealer-outer">
        <div class="super-footer__dealer-info">
          <div>
            <address><a href="${r.addressHref}">${r.address}</a></address>
            <a class="super-footer__tel" href="tel:${r.tel}">${r.phone}</a>
          </div>
        </div>
        <div class="super-footer__dealer-social">
          <div class="social">
${social(r.social)}
          </div>
        </div>
      </div>

      <div class="super-footer__ferrari">&copy; 2026 Ferrari S.p.A All rights reserved.</div>

      <p class="super-footer__credit">
        Purosangue American Grand Tour Atelier Collection. Imagery supplied by Ferrari
        N.V.; the compositions shown are Atelier configurations.
      </p>
    </div>
  </div>

  <div class="super-footer__f-nav">
    <div class="f-container">
      <nav aria-label="Ferrari links">
        <ul class="footer-ferrari__menu">
          <li><a target="_blank" rel="noopener" href="https://www.ferrari.com/">Ferrari.com</a></li>
          <li><a target="_blank" rel="noopener" href="https://store.ferrari.com/">Ferrari Store</a></li>
          <li><a href="${r.legal.cookie}">Cookie Policy</a></li>
          <li><a rel="privacy-policy" href="${r.legal.privacy}">Privacy Policy</a></li>
          <li><a target="_blank" rel="noopener" href="https://www.ferrari.com/en-US/accessibility">Accessibility</a></li>
          <li><a href="${r.legal.terms}">Terms and Conditions</a></li>
        </ul>
      </nav>
    </div>
  </div>

  <div class="super-footer__aan">
    <div class="f-container">
      <div class="power">
        <a href="https://www.allautonetwork.com/" target="_blank" rel="noopener noreferrer"><span>Powered By: All Auto Network</span></a>
      </div>
    </div>
  </div>
</footer>

<script src="js/page.js" defer></script>${v2 ? '\n<script src="js/page-v2.js" defer></script>' : ''}
</body>
</html>
`;

/* ── the preview index ───────────────────────────────────────────────────── */

/* Not a deliverable — the page Alex sends when three links are easier to lose
   than one. It is noindex and it says what is unfinished, so nobody reviews
   the form and reports the placeholder as a bug. */
const indexPage = (list, v2 = false) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${COLLECTION} — retailer pages</title>
<meta name="robots" content="noindex">
<link rel="stylesheet" href="css/page.css">
<style>
  .pv { min-height: 100svh; display: grid; align-content: center; padding-block: clamp(3rem, 8vw, 7rem); }
  .pv__head { margin-block-end: clamp(2.5rem, 5vw, 4rem); }
  .pv__head .h2 { margin-block: 16px 12px; }
  .pv__list { display: grid; gap: 1px; background: var(--rule); border-block: 1px solid var(--rule); }
  .pv__row {
    display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 24px;
    padding-block: clamp(1.25rem, 2.4vw, 2rem); background: var(--bg);
    text-decoration: none; transition: background-color var(--dur) var(--ease);
  }
  .pv__row:hover { background: #14161a; }
  .pv__name { font-size: clamp(1.125rem, 1.4vw, 1.5rem); font-weight: 500; }
  .pv__meta { margin-block-start: 6px; font-size: 14px; color: var(--ink-55); }
  .pv__go { font-size: 12px; letter-spacing: .6px; text-transform: uppercase; color: var(--rosso-corsa); white-space: nowrap; }
  .pv__note { margin-block-start: clamp(2rem, 4vw, 3rem); max-width: 62ch; font-size: 14px; line-height: 1.6; color: var(--ink-55); }
</style>
</head>
<body>

<main class="band pv">
  <div class="pv__head">
    <p class="marker"><span>&mdash;</span><span class="marker__rule"></span><span>Preview</span></p>
    <h1 class="h2">${COLLECTION}</h1>
    <p class="copy">Three retailer pages, one build. Each carries its own retailer&rsquo;s header and
      footer and only the compositions its own copy deck names.</p>
  </div>

  <div class="pv__list">
${list.map((r) => `    <a class="pv__row" href="index_${r.key}${v2 ? '_v2' : ''}.html">
      <span>
        <span class="pv__name">${r.name}</span>
        <span class="pv__meta">${r.compositions.map((c) => c.title).join(' &middot; ')} &nbsp;—&nbsp; ${r.place}</span>
      </span>
      <span class="pv__go">Open</span>
    </a>`).join('\n')}
  </div>

  <p class="pv__note">
    Review build. The inquiry form has no endpoint and says so on the page; the pages are
    meant to sit under <strong>News &amp; Events</strong> in each retailer&rsquo;s main nav, and the
    nav item still points at each site&rsquo;s current destination.
  </p>
</main>

</body>
</html>
`;

/* ── build ───────────────────────────────────────────────────────────────── */

const order = ['cauley', 'lasvegas', 'greenwich'];

mkdirSync(OUT, { recursive: true });
for (const key of order) {
  const r = RETAILERS[key];
  writeFileSync(join(OUT, `index_${key}.html`), page(r));
  writeFileSync(join(OUT, `index_${key}_v2.html`), page(r, true));
  console.log(`  index_${key}.html + _v2   ${r.name} — ${r.compositions.length} composition${r.compositions.length === 1 ? '' : 's'}`);
}
writeFileSync(join(OUT, 'index.html'), indexPage(order.map((k) => RETAILERS[k])));
writeFileSync(join(OUT, 'index_v2.html'), indexPage(order.map((k) => RETAILERS[k]), true));
console.log('  index.html + _v2   preview index');
console.log(`\nwritten to ${OUT}`);
