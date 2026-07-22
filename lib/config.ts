// ============================================================================
// CENTRAL CONTENT CONFIG
// Edit everything here. Nothing below needs code changes to update copy,
// links, or contact details.
//
// LANGUAGE: this copy is Khmer-first, because the Knongsrok campaign
// audience is ~95% Khmer-reading general public and SME owners, not
// English-reading developers. Common loanwords (Website, AI, QR, Telegram,
// ESP32, App) are kept in English/Latin script where that's genuinely how
// people say them out loud — this is intentional code-switching, not
// leftover English.
//
// IMPORTANT: this Khmer copy was drafted by an AI and has NOT been reviewed
// by a native Khmer speaker. Have someone fluent read through everything
// below before this goes live on the banner — tone and natural phrasing
// matter more than literal correctness here. Lines most worth a close look
// are marked with a "review" comment.
// ============================================================================

// --- BRAND -------------------------------------------------------------
// TODO: replace with your real company name + domain before launch.
// Brand name kept in Latin script — common for Cambodian tech/SME brands
// even on Khmer-first sites — but reconsider if a Khmer name fits better.
export const BRAND = {
  name: "Sokha Labs",
  shortName: "Sokha",
  tagline: "បច្ចេកវិទ្យាអាជីវកម្ម សម្រាប់របៀបដែលកម្ពុជាធ្វើអាជីវកម្មពិតប្រាកដ។",
  domain: "https://sokhalabs.com", // TODO: replace with real domain
};

// --- CONTACT -------------------------------------------------------------
// TODO: replace with your real Telegram username and email.
export const CONTACT = {
  telegramUsername: "phearumphaey", // no @, no https://
  email: "pheayphearum.com", // TODO: replace
};

function buildTelegramUrl(prefilledMessage: string) {
  const base = `https://t.me/${CONTACT.telegramUsername}`;
  if (!prefilledMessage) return base;
  return `${base}?text=${encodeURIComponent(prefilledMessage)}`;
}

// Default message before a visitor picks a business type.
// review: natural phrasing for a Telegram opener matters a lot here.
export const DEFAULT_TELEGRAM_MESSAGE =
  "សួស្តី ខ្ញុំមកពី Knongsrok។ អាជីវកម្មរបស់ខ្ញុំគឺ ____។ ខ្ញុំត្រូវការជំនួយអំពី ____។";

export const DEFAULT_TELEGRAM_URL = buildTelegramUrl(DEFAULT_TELEGRAM_MESSAGE);

export function telegramUrlForBusinessType(businessTypeLabel: string) {
  const message = `សួស្តី ខ្ញុំមកពី Knongsrok។ អាជីវកម្មរបស់ខ្ញុំគឺ ${businessTypeLabel}។ ខ្ញុំត្រូវការជំនួយអំពី ____។`;
  return buildTelegramUrl(message);
}

// --- NAV -------------------------------------------------------------
export const NAV_LINKS = [
  { label: "ប្រព័ន្ធពិត", href: "#work" }, // Real systems
  { label: "អ្វីដែលយើងភ្ជាប់", href: "#solutions" }, // What we connect
  { label: "ទំនុកចិត្ត", href: "#why-us" }, // Trust
];

export const HEADER_CTA = "ជជែកតាម Telegram"; // Chat on Telegram

// --- HERO -------------------------------------------------------------
export const HERO = {
  eyebrow: "ប្រព័ន្ធអាជីវកម្មពិត · សម្រាប់ SME កម្ពុជា", // Real business systems · Cambodia SMEs
  // review: this is the single most important line on the page — the
  // outcome-first, technology-second framing from the campaign brief.
  headline: "យើងបង្កើតប្រព័ន្ធដែលជួយអាជីវកម្មខ្មែរ ដំណើរការលឿន និងលក់បានច្រើនជាងមុន",
  supporting:
    "មិនមែនត្រឹម Website ទេ។ យើងបង្កើត QR ordering, ប្រព័ន្ធជួល, បោកគក់ស្វ័យប្រវត្តិ, Dashboard ទិន្នន័យ, Telegram bot និងការទូទាត់ QR សម្រាប់ការងារពិតៗប្រចាំថ្ងៃ។",
  primaryCta: "ពិគ្រោះដោយឥតគិតថ្លៃតាម Telegram", // Free consultation on Telegram
  secondaryCta: "មើលប្រព័ន្ធដែលយើងបានបង្កើត", // View systems
  trustLine: "ABA QR · KHQR · Telegram · Facebook · Messenger · Dashboard",
  badges: ["Restaurant", "Rental", "Laundry", "Market Data", "Telegram"],
};

// Signature hero visual: a live "systems status" panel.
// Rotates through real business types to show connected systems in action —
// this is a UI mockup, not a photo, so it needs no real screenshots.
// Business names kept short/mixed since these are common shopfront terms.
export const STATUS_FEED = [
  { business: "ភោជនីយដ្ឋាន", status: "ទទួលបានការកម្មង់ #142", state: "active" as const },
  { business: "បោកគក់", status: "ម៉ាស៊ីនទី៣ — កំពុងដំណើរការ", state: "active" as const },
  { business: "អាផាតមិន", status: "ផ្ញើវិក្កយបត្រ — បន្ទប់ 4B", state: "pending" as const },
  { business: "កាហ្វេ", status: "បញ្ជាក់ការទូទាត់ QR", state: "active" as const },
  { business: "តម្លៃមាស", status: "Telegram auto-post បានផ្ញើម៉ោង 8:00", state: "active" as const },
  { business: "ហាងលក់រាយ", status: "ការកម្មង់ថ្មី — មកយកថ្ងៃនេះ", state: "pending" as const },
  { business: "គ្លីនិក", status: "បញ្ជាក់ការណាត់ជួប", state: "active" as const },
];

// --- PROBLEMS WE SOLVE -------------------------------------------------------------
// review: section heading phrased as a question per the campaign brief —
// "does your business have these problems?" reads better than a label.
export const PROBLEMS_HEADING = "តើអាជីវកម្មរបស់អ្នកកំពុងជួបបញ្ហាទាំងនេះមែនទេ?";

export const PROBLEMS = [
  {
    icon: "Users",
    title: "ចង់បានអតិថិជនកាន់តែច្រើន", // Want more customers
    description:
      "គេហទំព័រ កាតាឡុកអនឡាញ និងប្រព័ន្ធកម្មង់ ដែលធ្វើឱ្យអតិថិជនទិញបានងាយស្រួល។",
  },
  {
    icon: "Workflow",
    title: "កាត់បន្ថយការងារធ្វើដោយដៃ", // Reduce manual work
    description:
      "ស្វ័យប្រវត្តិកម្មការងារដដែលៗ ការជូនដំណឹង វិក្កយបត្រ និងលំហូរការងារផ្សេងៗ។",
  },
  {
    icon: "LayoutDashboard",
    title: "កែលម្អប្រតិបត្តិការអាជីវកម្ម", // Improve business operations
    description:
      "បង្កើតផ្ទាំងគ្រប់គ្រង ប្រព័ន្ធគ្រប់គ្រង ប្រព័ន្ធកម្មង់ និងផតថលអតិថិជន។",
  },
  {
    icon: "Cable",
    title: "ភ្ជាប់ការទូទាត់ និងឧបករណ៍", // Connect payments and devices
    description: "ភ្ជាប់ការទូទាត់ QR, Telegram, ESP32, ឧបករណ៍ចាប់សញ្ញា និងម៉ាស៊ីនផ្សេងៗ។",
  },
];

// --- SOLUTIONS -------------------------------------------------------------
export const SOLUTIONS_HEADING = "យើងភ្ជាប់អ្វីខ្លះឱ្យអាជីវកម្មអ្នក"; // What we connect
export const SOLUTIONS_SUBHEADING =
  "ផ្តោតលើលទ្ធផលដែលម្ចាស់អាជីវកម្មមើលឃើញបានភ្លាមៗ។ កម្មង់ គិតលុយ ផ្ញើដំណឹង និងមើលរបាយការណ៍។";

export const SOLUTIONS = [
  {
    icon: "Globe",
    tier: "primary",
    title: "Website & Online Ordering",
    description: "ឱ្យអតិថិជនមើលផលិតផល កម្មង់ និងទាក់ទងបានងាយ។",
    capabilities: ["QR Menu", "Catalog", "Booking"],
  },
  {
    icon: "LayoutDashboard",
    tier: "primary",
    title: "Custom Business System",
    description: "ជំនួសក្រដាស និង Excel ដោយ Dashboard សម្រាប់ការងារប្រចាំថ្ងៃ។",
    capabilities: ["Billing", "Reports", "Operations"],
  },
  {
    icon: "Sparkles",
    tier: "primary",
    title: "Automation & Telegram Tools",
    description: "ឱ្យប្រព័ន្ធផ្ញើដំណឹង បង្ហោះអាប់ដេត និងរំលឹកការងារជំនួសអ្នក។",
    capabilities: ["Telegram bot", "Auto post", "Alerts"],
  },
  {
    icon: "Bot",
    tier: "advanced",
    title: "Facebook & Messenger",
    description: "ភ្ជាប់ Channel ដែលអតិថិជនខ្មែរប្រើរាល់ថ្ងៃ។",
    capabilities: ["Messenger", "Auto reply", "Lead chat"],
  },
  {
    icon: "QrCode",
    tier: "advanced",
    title: "ABA QR, KHQR & ការទូទាត់",
    description: "ភ្ជាប់ការទូទាត់ទៅ Order, Invoice ឬម៉ាស៊ីន។",
    capabilities: ["ABA PayWay", "KHQR", "Status"],
  },
  {
    icon: "Cpu",
    tier: "advanced",
    title: "API Integration & Market Data",
    description: "ទាញទិន្នន័យ គណនា និងផ្ញើអាប់ដេតដោយស្វ័យប្រវត្តិ។",
    capabilities: ["Real-time API", "Data jobs", "ESP32"],
  },
];

// --- SELECTED WORK -------------------------------------------------------------
// TODO: replace image paths with real screenshots before launch.
// Placeholders live in /public/work/ — swap the files, keep the names,
// or update the `image` path below.
export const WORK_HEADING = "ប្រព័ន្ធអាជីវកម្ម"; // Systems businesses can imagine using
export const WORK_SUBHEADING = "មានគំនិតអាជីវកម្មតែមិនដឹងថាគួរពិភាក្សារជាមួយអ្នកណា 😪 ឈប់បារម្មណ៏ទៀតទៅសូមទាក់ទងមកយើង យើងនិងជួយដោយមិនគិតថ្លៃ។ សូមឆាតមក Telegram យើងឥឡូវនេះ!";
export const VIEW_DEMO_LABEL = "មើល Demo"; // View demo — "Demo" kept as common loanword

export const PROJECTS = [
  {
    category: "ម្ហូបអាហារ", // Food & Beverage
    title: "QR Menu, POS & Ordering System",
    problem: "ភោជនីយដ្ឋានបាត់បង់ពេលជាមួយមីនុយក្រដាស និងការកត់ត្រាដោយដៃ។",
    solution: "អតិថិជនស្កេន QR កម្មង់ បុគ្គលិកបញ្ជាក់ ហើយផ្ទះបាយឃើញ Order ភ្លាម។",
    capabilities: ["QR Menu", "Staff order", "Kitchen", "ABA QR"],
    image: "/work/qr-ordering-placeholder.svg",
    demoUrl: "", // TODO: add live demo link
  },
  {
    category: "Market Intelligence",
    title: "Cambodia Market Intelligence Platform",
    problem: "អាជីវកម្មត្រូវការទិន្នន័យទីផ្សារថ្មីៗ និងការផ្សាយអាប់ដេតទាន់ពេល។",
    solution: "ប្រព័ន្ធទាញ API គណនាតាមទីផ្សារកម្ពុជា បង្ហាញ Dashboard និងបង្ហោះ Telegram តាមកាលវិភាគ។",
    capabilities: ["Real-time API", "Data jobs", "Telegram", "Dashboard"],
    image: "/work/market-intelligence-placeholder.svg",
    demoUrl: "",
  },
  {
    category: "អចលនទ្រព្យ", // Property
    title: "ប្រព័ន្ធគ្រប់គ្រង អាផាតមិន ខុនដូ រឺ បន្ទប់ជួល & វិក្កយបត្រប្រចាំខែ",
    problem: "ម្ចាស់អាផាតមិនគិតទឹក ភ្លើង និងវិក្កយបត្រដោយដៃរាល់ខែ។",
    solution: "Dashboard សម្រាប់បន្ទប់ អ្នកជួល លេខអាន និងវិក្កយបត្រប្រចាំខែ។",
    capabilities: ["Rooms", "Billing", "Utilities", "Payments"],
    image: "/work/rental-placeholder.svg",
    demoUrl: "",
  },
  {
    category: "សេវាដោយខ្លួនឯង", // Self-service
    title: "Self-Service Laundry System",
    problem: "ប្រព័ន្ធបោកគក់ដោយខ្លួនឯង ម៉ាស៊ីនបោកគក់គ្មាន QR payment និងពិបាកត្រួតពិនិត្យពីចម្ងាយ។",
    solution: "អតិថិជនបង់ QR ហើយប្រព័ន្ធបើកម៉ាស៊ីន និងបង្ហាញស្ថានភាពឱ្យម្ចាស់។ ប្រើបច្ចេកវិទ្យាទំនើបដូចជា ESP32, Arduino, Smart Relay Control System, loT...",
    capabilities: ["QR payment", "Machine", "Remote", "Dashboard"],
    image: "/work/laundry-placeholder.svg",
    demoUrl: "",
  },
];

// --- WHY CHOOSE US -------------------------------------------------------------
export const WHY_US_HEADING = "ហេតុអ្វីជ្រើសរើសយើង"; // Why choose us

export const WHY_US = [
  {
    icon: "Target",
    title: "គិតគូរអាជីវកម្មជាមុន",
    description: "យើងចាប់ផ្តើមពីបញ្ហារបស់អ្នក មិនមែនពីបច្ចេកវិទ្យាដែលយើងចង់លក់ទេ។",
  },
  {
    icon: "Smartphone",
    title: "UI ទំនើប ងាយប្រើលើទូរស័ព្ទ",
    description: "រៀបចំសម្រាប់ទូរស័ព្ទជាមុនគេ ព្រោះនោះជាវិធីដែលបុគ្គលិក និងអតិថិជនរបស់អ្នកប្រើពិតប្រាកដ។",
  },
  {
    icon: "Sparkles",
    title: "សមត្ថភាព AI & ស្វ័យប្រវត្តិកម្ម",
    description: "យើងដឹងថាពេលណា AI សន្សំពេលវេលាពិតប្រាកដ និងពេលណាមិនសមស្រប។",
  },
  {
    icon: "Cable",
    title: "ភ្ជាប់ប្រព័ន្ធទៅការងារពិត",
    description: "ពីផ្ទាំងគ្រប់គ្រង រហូតដល់ម៉ាស៊ីនពិត យើងភ្ជាប់រាល់ផ្នែកដែលត្រូវទាក់ទងគ្នា។",
  },
  {
    icon: "LifeBuoy",
    title: "ជំនួយបន្តបន្ទាប់ & ស្ថាបត្យកម្មពង្រីកបាន",
    description: "ប្រព័ន្ធសាងសង់ឡើងដើម្បីរីកចម្រើនជាមួយអាជីវកម្មរបស់អ្នក ជាមួយការជំនួយក្រោយពេលបញ្ចប់ការងារ។",
  },
];

// --- FINAL CTA -------------------------------------------------------------
export const FINAL_CTA = {
  headline: "តើអ្វីខ្លះកំពុងបង្អាក់អាជីវកម្មរបស់អ្នក?", // What's slowing down your business?
  supporting:
    "យើងនឹងពិនិត្យតម្រូវការរបស់អ្នក ហើយផ្តល់អនុសាសន៍ដំណោះស្រាយសមស្រប មិនថាជាគេហទំព័រ ស្វ័យប្រវត្តិកម្ម កម្មវិធី AI Telegram ឬឧបករណ៍ឆ្លាតវៃ។",
  primaryCta: "ជជែកតាម Telegram", // Chat on Telegram
  secondaryText: "ពិគ្រោះដំបូងឥតគិតថ្លៃ។ គ្មានទម្រង់បំពេញស្មុគស្មាញទេ។",
};

// review: these are the labels people tap — make sure the phrasing matches
// how business owners actually describe themselves, not a formal register.
export const BUSINESS_TYPES = [
  "ភោជនីយដ្ឋាន / កាហ្វេ", // Restaurant / Café
  "ហាងលក់អនឡាញ / លក់រាយ", // Online shop / Retail
  "ផ្ទះជួល / អាផាតមិន", // Apartment / Rental
  "បោកគក់", // Laundry
  "អាជីវកម្មផ្សេងទៀត", // Other business
];

// --- FOOTER -------------------------------------------------------------
export const FOOTER = {
  positioning: "បច្ចេកវិទ្យាអាជីវកម្ម សម្រាប់ក្រុមហ៊ុនកម្ពុជា។",
  copyrightName: BRAND.name,
};

// --- SEO / METADATA -------------------------------------------------------------
// TODO: replace og-image with a real 1200x630 image before launch.
export const SEO = {
  title: `${BRAND.name} — បច្ចេកវិទ្យាអាជីវកម្មសម្រាប់ការរីកចម្រើន`,
  description:
    "គេហទំព័រ ប្រព័ន្ធគ្រប់គ្រង AI ស្វ័យប្រវត្តិកម្ម Telegram Bot និង QR កម្មង់ សាងសង់សម្រាប់អាជីវកម្មកម្ពុជា។",
  ogImage: "/og-image.png",
};
