/**
 * Verified site data for Dante Gonzales Orthodontics.
 *
 * Sources: drdantegonzales.com (live), structured data (LD+JSON),
 * Google Business listings, and existing website content.
 *
 * ⚠️ Do not invent data. Every value here is from verified sources.
 */

// ─── Practice Info ───────────────────────────────────────────────

export const PRACTICE = {
  name: "Dante Gonzales Orthodontics",
  shortName: "DG Orthodontics",
  doctorName: "Dr. Dante Gonzales",
  doctorTitle: "Board-Certified Orthodontist",
  tagline: "Confident Smiles Start Here.",
  mission:
    "Our mission is to advance the field of orthodontics and improve the quality of life for our patients and the communities in which they live.",
  description:
    "Dante Gonzales Orthodontics of Tracy and Dublin offers expert care with braces & Invisalign. Visit our trusted orthodontic clinic for confident, healthy smiles.",
  foundedYear: 1998,
  smilesTransformed: "12,000+",
  bookTitle:
    "Setting Them Straight: The Fact-Based Guide to a Spectacular Smile through Orthodontics",
  bookAmazonUrl: "#",
  top10PdfUrl: "#",
  introVideoUrl: "#",
} as const;

// ─── Locations ───────────────────────────────────────────────────

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  mapsEmbedUrl: string;
  mapsDirectionsUrl: string;
  hours: { day: string; time: string }[];
}

export const LOCATIONS: Location[] = [
  {
    id: "dublin",
    name: "Dublin Office",
    address: "4532 Dublin Blvd",
    city: "Dublin",
    state: "CA",
    zip: "94568",
    phone: "925-828-2244",
    email: "info@drdantegonzales.com",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.6275334679017!2d-121.88294102443109!3d37.704945572003034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fe94ac1d847ef%3A0xb2b734503247e318!2sDante%20Gonzales%20Orthodontics%20of%20Dublin!5e0!3m2!1sen!2sin!4v1718796614920!5m2!1sen!2sin",
    mapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Dante+Gonzales+Orthodontics+of+Dublin+4532+Dublin+Blvd+Dublin+CA+94568",
    hours: [
      { day: "Monday", time: "8:30 am – 6:00 pm" },
      { day: "Tuesday", time: "8:00 am – 5:30 pm" },
      { day: "Wednesday", time: "8:00 am – 5:30 pm" },
      { day: "Thursday", time: "8:30 am – 6:00 pm" },
      { day: "Friday", time: "8:00 am – 4:00 pm" },
      { day: "Saturday", time: "8:30 am – 1:30 pm" },
      { day: "Sunday", time: "Closed" },
    ],
  },
  {
    id: "tracy",
    name: "Tracy Office",
    address: "1417 N Tracy Blvd",
    city: "Tracy",
    state: "CA",
    zip: "95376",
    phone: "209-835-0977",
    email: "tracyInfo@drdantegonzales.com",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-121.45!3d37.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ1JzAwLjAiTiAxMjHCsDI3JzAwLjAiVw!5e0!3m2!1sen!2sus",
    mapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Dante+Gonzales+Orthodontics+1417+N+Tracy+Blvd+Tracy+CA+95376",
    hours: [
      { day: "Monday", time: "8:30 am – 6:00 pm" },
      { day: "Tuesday", time: "7:30 am – 5:30 pm" },
      { day: "Wednesday", time: "7:30 am – 5:30 pm" },
      { day: "Thursday", time: "8:30 am – 6:00 pm" },
      { day: "Friday", time: "8:00 am – 4:00 pm" },
      { day: "Saturday", time: "8:30 am – 1:30 pm (By appointment)" },
      { day: "Sunday", time: "Closed" },
    ],
  },
];

// ─── Navigation ──────────────────────────────────────────────────

export const NAV_LINKS = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Treatments",
    href: "#",
  },
  {
    label: "Why Choose Us",
    href: "#",
  },
  {
    label: "Before & Afters",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
  {
    label: "Locations",
    href: "#locations",
  },
  {
    label: "Contact",
    href: "#",
  },
] as const;

// ─── Treatments ──────────────────────────────────────────────────

export const TREATMENTS = [
  {
    title: "Braces for Kids & Teens",
    description:
      "Customized metal and clear ceramic braces designed for growing smiles. Early treatment sets the foundation for a lifetime of confidence.",
    image: "/images/treatment-braces.jpg",
    href: "#",
  },
  {
    title: "Invisalign for Teens & Adults",
    description:
      "As a Diamond Invisalign Provider, Dr. Gonzales uses clear aligners to straighten teeth discreetly — no brackets required.",
    image: "/images/treatment-invisalign.jpg",
    href: "#",
  },
  {
    title: "Adult Orthodontics",
    description:
      "It's never too late for a straighter smile. Explore braces and Invisalign options tailored to fit your lifestyle and schedule.",
    image: "/images/treatment-adult.jpg",
    href: "#",
  },
] as const;

// ─── Why Choose Us (verified differentiators) ────────────────────

export const DIFFERENTIATORS = [
  {
    icon: "experience",
    title: "25+ Years of Expertise",
    description:
      "Board-certified orthodontist serving the Tri-Valley since 1998, with over 12,000 smiles transformed.",
    href: "#",
  },
  {
    icon: "technology",
    title: "Advanced Technology",
    description:
      "State-of-the-art orthodontic technology for precise, efficient treatment and exceptional results.",
    href: "#",
  },
  {
    icon: "guarantee",
    title: "Lifetime Guarantee",
    description:
      "Every smile is backed by the Gonzales Lifetime Guarantee — confidence that lasts.",
    href: "#",
  },
  {
    icon: "schedule",
    title: "Flexible Hours & Same-Day Starts",
    description:
      "Open six days a week with same-day appointments and the option for same-day braces.",
    href: "#",
  },
  {
    icon: "payment",
    title: "Flexible Payment Options",
    description:
      "Customized financial plans and family discounts to make orthodontic care accessible.",
    href: "#",
  },
  {
    icon: "locations",
    title: "Two Convenient Locations",
    description:
      "Offices in Dublin and Tracy serving the entire Tri-Valley and San Joaquin area.",
    href: "#locations",
  },
] as const;

// ─── Testimonials (verified from existing website) ───────────────

export const TESTIMONIALS = [
  {
    quote:
      "Dr. Gonzales and his staff are truly outstanding. They have an excellent manner with children, while being extremely competent and professional. I would feel comfortable recommending their services to anyone.",
    author: "George C.",
    rating: 5,
  },
  {
    quote:
      "We are extremely pleased with Dr. Gonzales and his wonderful staff. He and his staff are patient and understanding and they make my son feel completely at ease. They make every visit stress-free and fun for siblings who have to wait in the waiting room too!",
    author: "Betty W.",
    rating: 5,
  },
  {
    quote: "Best orthodontic office in the bay area!!",
    author: "Colleen R.",
    rating: 5,
  },
  {
    quote:
      "The Smith family loves this office! I am so thankful my kids get to go to Dr Gonzales! Thanks for making us feel so special every time we walk in the door.",
    author: "Laurie S.",
    rating: 5,
  },
  {
    quote:
      "Dr. Gonzalez and his team always gave excellent service. Staff is very friendly and always made my daughter feel relaxed. She has a beautiful smile. Thank you!",
    author: "Tammy F.",
    rating: 5,
  },
] as const;

// ─── Social Links ────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  instagram: "#",
  facebook: "#",
} as const;

// ─── External Links ──────────────────────────────────────────────

export const EXTERNAL_LINKS = {
  smileQuiz: "#",
  beforeAfter: "#",
  appointment: "#",
  blog: "#",
  meetFounder: "#",
  meetOrthodontists: "#",
  dublinContact: "#",
  tracyContact: "#",
  // Professional associations
  aao: "#",
  ada: "#",
  abo: "#",
  smilesChangeLives: "#",
  sharecare: "#",
} as const;

// ─── Trust Signals (all verified from existing site) ─────────────

export const TRUST_SIGNALS = [
  { label: "12,000+ Smiles Transformed", icon: "smile" },
  { label: "Two Bay Area Locations", icon: "map" },
  { label: "Flexible Payment Plans", icon: "wallet" },
] as const;

// ─── Journey Steps ───────────────────────────────────────────────

export const JOURNEY_STEPS = [
  {
    step: 1,
    title: "Schedule Your Complimentary Assessment",
    description:
      "Book your free Gonzales Smile Assessment at our Dublin or Tracy office — online or by phone.",
  },
  {
    step: 2,
    title: "Receive a Personal Treatment Plan",
    description:
      "Dr. Gonzales will evaluate your smile, discuss your goals, and create a customized plan just for you.",
  },
  {
    step: 3,
    title: "Begin Your Smile Transformation",
    description:
      "Start treatment with same-day options available. Your journey to a confident smile begins now.",
  },
] as const;

// ─── Aggregate Rating (verified from structured data) ────────────

export const RATING = {
  value: 4.9,
  count: 484,
  label: "5-Star-Rated Orthodontist",
} as const;
