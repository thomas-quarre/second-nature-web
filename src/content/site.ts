export type CategoryId = "Recovery" | "Performance" | "Sleep" | "Foundation";

export type ProductSignal = {
  amount: string;
  unit: string;
  name: string;
  note: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  category: CategoryId;
  blurb: string;
  description: string;
  image: string;
  gallery: string[];
  protocol: string[];
  specs: { label: string; value: string }[];
  composition: string;
  callouts: string;
  signals: ProductSignal[];
};

export type Category = {
  id: CategoryId;
  slug: string;
  label: string;
  count: number;
  tagline: string;
  poetic: string;
  description: string;
  heroImage: string;
  focus: string[];
};

function vialShot(id: string) {
  return `/products/vials/${id}-bg.png`;
}

function vialGallery(id: string) {
  return [`/products/vials/${id}-bg.png`];
}

export const categories: Category[] = [
  {
    id: "Recovery",
    slug: "recovery",
    label: "Recovery",
    count: 3,
    tagline: "Return to equilibrium",
    poetic: "Repair that feels intuitive, not forced.",
    description:
      "Overnight and post-effort protocols for systems that worked hard. These formulas meet the body where it is and support the repair window already built into biology.",
    heroImage: "/media/water-ripples.jpg",
    focus: ["Post-effort repair", "Overnight regeneration", "Inflammation calm"],
  },
  {
    id: "Performance",
    slug: "performance",
    label: "Performance",
    count: 3,
    tagline: "Output without override",
    poetic: "Clarity and motion that still feel like you.",
    description:
      "Support for training days, focus windows, and sustained output, without the artificial spike. Cooperate with your system, don’t override it.",
    heroImage: "/media/motion-athlete-v2.jpg",
    focus: ["Morning clarity", "Sustainable output", "Mental sharpness"],
  },
  {
    id: "Sleep",
    slug: "sleep",
    label: "Sleep",
    count: 2,
    tagline: "A quieter night protocol",
    poetic: "Let biology finish the work.",
    description:
      "Wind-down and deep-restoration formulas timed to the body’s overnight repair window. Sleep is treated as infrastructure, not a mood.",
    heroImage: "/media/lifestyle-meditate.jpg",
    focus: ["Wind-down signal", "Deep restoration", "Circadian rhythm"],
  },
  {
    id: "Foundation",
    slug: "foundation",
    label: "Foundation",
    count: 4,
    tagline: "Signals that renew themselves",
    poetic: "The long game, practiced daily.",
    description:
      "Baseline support for curious, long-game performers. Foundational peptides and starter kits for learning your own signals over time.",
    heroImage: "/media/hero-grass-v2.jpg",
    focus: ["Daily baseline", "Long-term vitality", "Signal literacy"],
  },
];

const RESEARCH_CALLOUTS =
  "Research-use only, reconstitution required, 10 mg lyophilized, 0 stimulants";

export const products: Product[] = [
  {
    id: "recovery-signal",
    name: "Recovery Signal",
    price: 88,
    category: "Recovery",
    blurb: "Overnight repair for systems that worked hard today.",
    description:
      "A post-effort protocol designed for the overnight repair window. Recovery Signal supports the body’s own regenerative cadence, quiet, precise, and timed for when biology does its deepest work.",
    image: vialShot("recovery-signal"),
    gallery: vialGallery("recovery-signal"),
    protocol: [
      "Use in the evening after training or a high-output day.",
      "Pair with a wind-down ritual: dim light, slower breath.",
      "Track how you feel on waking across a two-week window.",
    ],
    specs: [
      { label: "Family", value: "Recovery" },
      { label: "Timing", value: "Evening / overnight" },
      { label: "Feel", value: "Quiet repair" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg overnight repair window) / reconstitution diluent (sterile, not included) / circadian-timed signal (post-effort) / quiet regeneration carrier (no stimulants)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "QUIET REPAIR" },
      { amount: "1", unit: "WINDOW", name: "OVERNIGHT", note: "POST-EFFORT" },
    ],
  },
  {
    id: "motion-balance",
    name: "Motion Balance",
    price: 78,
    category: "Performance",
    blurb: "Keep output high without forcing the body past itself.",
    description:
      "Built for training days when you want sustained motion without the crash. Motion Balance keeps output high while respecting the limits that keep performance repeatable.",
    image: vialShot("motion-balance"),
    gallery: vialGallery("motion-balance"),
    protocol: [
      "Take ahead of a focused training or work block.",
      "Hydrate and keep fueling simple.",
      "Notice effort quality, not just intensity.",
    ],
    specs: [
      { label: "Family", value: "Performance" },
      { label: "Timing", value: "Pre-effort" },
      { label: "Feel", value: "Steady output" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg pre-effort) / reconstitution diluent (sterile, not included) / steady-output signal (repeatable training) / no-crash carrier (no stimulants)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "STEADY OUTPUT" },
      { amount: "1", unit: "BLOCK", name: "PRE-EFFORT", note: "REPEATABLE" },
    ],
  },
  {
    id: "deep-reset",
    name: "Deep Reset",
    price: 92,
    category: "Sleep",
    blurb: "A quieter night protocol for deeper restoration.",
    description:
      "For nights when the system needs a fuller reset. Deep Reset supports deeper restoration without turning sleep into another performance metric.",
    image: vialShot("deep-reset"),
    gallery: vialGallery("deep-reset"),
    protocol: [
      "Begin 60-90 minutes before intended sleep.",
      "Keep screens and stimulants low in the same window.",
      "Use consistently for a week before judging the signal.",
    ],
    specs: [
      { label: "Family", value: "Sleep" },
      { label: "Timing", value: "Pre-sleep" },
      { label: "Feel", value: "Deep quiet" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg pre-sleep) / reconstitution diluent (sterile, not included) / deep-restoration signal (overnight) / quiet landing carrier (no sedative fog)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "DEEP QUIET" },
      { amount: "90", unit: "MIN", name: "PRE-SLEEP", note: "PROTECTED WINDOW" },
    ],
  },
  {
    id: "vital-loop",
    name: "Vital Loop",
    price: 68,
    category: "Foundation",
    blurb: "Daily support for the signals that renew themselves.",
    description:
      "A daily baseline for people building longevity into ordinary life. Vital Loop supports the signals that renew themselves, less hack, more habit.",
    image: vialShot("vital-loop"),
    gallery: vialGallery("vital-loop"),
    protocol: [
      "Take at the same time each morning.",
      "Pair with food and daylight when possible.",
      "Treat it as infrastructure, not a spike.",
    ],
    specs: [
      { label: "Family", value: "Foundation" },
      { label: "Timing", value: "Morning" },
      { label: "Feel", value: "Steady baseline" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg morning baseline) / reconstitution diluent (sterile, not included) / daily renewal signal (long game) / habit-layer carrier (no spike)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "STEADY BASELINE" },
      { amount: "1", unit: "RITUAL", name: "MORNING", note: "FIRST LIGHT" },
    ],
  },
  {
    id: "night-signal",
    name: "Night Signal",
    price: 84,
    category: "Sleep",
    blurb: "Wind the system down. Let biology finish the work.",
    description:
      "A wind-down protocol that cues the system toward rest. Night Signal is for evenings when you need a clear handoff from effort into recovery.",
    image: vialShot("night-signal"),
    gallery: vialGallery("night-signal"),
    protocol: [
      "Use as the last intentional act of the day.",
      "Dim the room; keep language and music soft.",
      "Protect the hour after dosing from new inputs.",
    ],
    specs: [
      { label: "Family", value: "Sleep" },
      { label: "Timing", value: "Evening wind-down" },
      { label: "Feel", value: "Soft landing" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg evening wind-down) / reconstitution diluent (sterile, not included) / rest-handoff signal (effort into recovery) / soft-landing carrier (no fog)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "SOFT LANDING" },
      { amount: "1", unit: "HOUR", name: "PROTECTED", note: "WIND-DOWN" },
    ],
  },
  {
    id: "daily-balance",
    name: "Daily Balance",
    price: 64,
    category: "Foundation",
    blurb: "Steady baseline for curious, long-game performers.",
    description:
      "Everyday support for people who train, work, and recover in cycles. Daily Balance is the quiet layer underneath louder protocols.",
    image: vialShot("daily-balance"),
    gallery: vialGallery("daily-balance"),
    protocol: [
      "Take with breakfast or the first meal.",
      "Keep the rest of the stack simple on these days.",
      "Reassess monthly. Foundation is meant to stay.",
    ],
    specs: [
      { label: "Family", value: "Foundation" },
      { label: "Timing", value: "Daily" },
      { label: "Feel", value: "Even keel" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg daily) / reconstitution diluent (sterile, not included) / even-keel signal (under louder protocols) / quiet-layer carrier (no spike)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "EVEN KEEL" },
      { amount: "1", unit: "MEAL", name: "FIRST LIGHT", note: "DAILY" },
    ],
  },
  {
    id: "repair-loop",
    name: "Repair Loop",
    price: 96,
    category: "Recovery",
    blurb: "Regeneration that feels intuitive, not clinical.",
    description:
      "A regeneration protocol for multi-day efforts and stacked training weeks. Repair Loop is designed to feel like craft, not a clinic visit.",
    image: vialShot("repair-loop"),
    gallery: vialGallery("repair-loop"),
    protocol: [
      "Use across a recovery block, not only one night.",
      "Protect sleep and protein intake in parallel.",
      "Note soreness, mood, and readiness each morning.",
    ],
    specs: [
      { label: "Family", value: "Recovery" },
      { label: "Timing", value: "Recovery block" },
      { label: "Feel", value: "Intuitive repair" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg recovery block) / reconstitution diluent (sterile, not included) / multi-day regeneration signal (stacked weeks) / intuitive-repair carrier (no clinic feel)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "INTUITIVE REPAIR" },
      { amount: "7", unit: "DAY", name: "RECOVERY BLOCK", note: "STACKED WEEKS" },
    ],
  },
  {
    id: "dawn-protocol",
    name: "Dawn Protocol",
    price: 72,
    category: "Performance",
    blurb: "Morning clarity without the artificial spike.",
    description:
      "Morning clarity without the jitter narrative. Dawn Protocol is for clean starts, daylight, focus, and motion that still feel like second nature.",
    image: vialShot("dawn-protocol"),
    gallery: vialGallery("dawn-protocol"),
    protocol: [
      "Take shortly after waking.",
      "Get natural light within the first hour.",
      "Start the day with one clear priority, not ten.",
    ],
    specs: [
      { label: "Family", value: "Performance" },
      { label: "Timing", value: "Morning" },
      { label: "Feel", value: "Clean clarity" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg morning) / reconstitution diluent (sterile, not included) / clean-start signal (daylight and focus) / no-jitter carrier (no stimulants)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "CLEAN CLARITY" },
      { amount: "1", unit: "HOUR", name: "FIRST LIGHT", note: "NO JITTER" },
    ],
  },
  {
    id: "root-system",
    name: "Root System",
    price: 110,
    category: "Foundation",
    blurb: "Foundational peptides for long-term vitality.",
    description:
      "The deepest foundation layer. Root System is for long-term vitality, patience, consistency, and biology that compounds.",
    image: vialShot("root-system"),
    gallery: vialGallery("root-system"),
    protocol: [
      "Commit to a multi-week cadence before evaluating.",
      "Keep training load honest and progressive.",
      "Use Field Notes to track your own signals.",
    ],
    specs: [
      { label: "Family", value: "Foundation" },
      { label: "Timing", value: "Long cycle" },
      { label: "Feel", value: "Deep baseline" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg long cycle) / reconstitution diluent (sterile, not included) / compounding vitality signal (patience) / deep-baseline carrier (no spike)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "DEEP BASELINE" },
      { amount: "8", unit: "WEEK", name: "LONG CYCLE", note: "COMPOUNDS" },
    ],
  },
  {
    id: "pulse-recovery",
    name: "Pulse Recovery",
    price: 86,
    category: "Recovery",
    blurb: "Post-effort support that meets the body where it is.",
    description:
      "Immediate post-effort support when the body is still warm from work. Pulse Recovery meets you in the cooldown, not hours later.",
    image: vialShot("pulse-recovery"),
    gallery: vialGallery("pulse-recovery"),
    protocol: [
      "Use within the cooldown window after effort.",
      "Rehydrate; keep the next meal protein-forward.",
      "Avoid stacking stimulants in the same hour.",
    ],
    specs: [
      { label: "Family", value: "Recovery" },
      { label: "Timing", value: "Post-effort" },
      { label: "Feel", value: "Cooling down" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg cooldown) / reconstitution diluent (sterile, not included) / post-effort signal (while the body is still warm) / cooling carrier (no stimulants)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "COOLING DOWN" },
      { amount: "30", unit: "MIN", name: "COOLDOWN", note: "POST-EFFORT" },
    ],
  },
  {
    id: "clarity-ritual",
    name: "Clarity Ritual",
    price: 74,
    category: "Performance",
    blurb: "Mental clarity as a practiced, natural state.",
    description:
      "Mental clarity treated as a practiced state, not a hack. Clarity Ritual is for deep work blocks where attention should feel earned and calm.",
    image: vialShot("clarity-ritual"),
    gallery: vialGallery("clarity-ritual"),
    protocol: [
      "Use at the start of a deep-work block.",
      "Close tabs; one surface, one task.",
      "End the block with a short walk or breath reset.",
    ],
    specs: [
      { label: "Family", value: "Performance" },
      { label: "Timing", value: "Focus block" },
      { label: "Feel", value: "Calm attention" },
      { label: "Form", value: "Research protocol" },
    ],
    composition:
      "Lyophilized research peptide (10 mg focus block) / reconstitution diluent (sterile, not included) / calm-attention signal (deep work) / practiced-clarity carrier (no hack)",
    callouts: RESEARCH_CALLOUTS,
    signals: [
      { amount: "10", unit: "MG", name: "LYOPHILIZED", note: "CALM ATTENTION" },
      { amount: "1", unit: "BLOCK", name: "ONE TASK", note: "DEEP WORK" },
    ],
  },
  {
    id: "field-notes",
    name: "Field Notes Set",
    price: 48,
    category: "Foundation",
    blurb: "A starter kit for learning your own signals.",
    description:
      "A starter kit for learning your own signals, the literacy layer under every protocol. Human first, scientific second.",
    image: "/products/vials/together.png",
    gallery: [
      "/products/vials/together.png",
      vialShot("recovery-signal"),
      vialShot("night-signal"),
      vialShot("dawn-protocol"),
    ],
    protocol: [
      "Log sleep, effort, and mood for fourteen days.",
      "Introduce one protocol at a time.",
      "Review the pattern before adding complexity.",
    ],
    specs: [
      { label: "Family", value: "Foundation" },
      { label: "Timing", value: "Ongoing" },
      { label: "Feel", value: "Self-literacy" },
      { label: "Form", value: "Starter kit" },
    ],
    composition:
      "Observation journal (fourteen-day log) / protocol primer (one protocol at a time) / family map (Recovery / Performance / Sleep / Foundation) / signal literacy guide (human first)",
    callouts: "Starter kit, no compounds, paper and guide, reusable",
    signals: [
      { amount: "14", unit: "DAY", name: "SIGNAL LOG", note: "SELF-LITERACY" },
      { amount: "1", unit: "PROTOCOL", name: "AT A TIME", note: "STARTER KIT" },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug.toLowerCase());
}

export function getCategoryById(id: CategoryId) {
  return categories.find((c) => c.id === id);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function productsInCategory(id: CategoryId) {
  return products.filter((p) => p.category === id);
}

export function isProductPath(pathname: string) {
  const slug = pathname.split("/").filter(Boolean).at(-1);
  return Boolean(slug && products.some((p) => p.id === slug));
}

export type ProductSize = { id: string; label: string; price: number };

export function productSizes(product: Product): ProductSize[] {
  if (product.id === "field-notes") {
    return [
      { id: "set", label: "Set", price: product.price },
      { id: "guide", label: "Guide", price: 28 },
    ];
  }
  return [
    { id: "10mg", label: "10 mg", price: product.price },
    { id: "30mg", label: "30 mg", price: Math.round(product.price * 2.5) },
  ];
}

const ATMOSPHERE: Record<CategoryId, string> = {
  Recovery: "/media/water-ripples.jpg",
  Performance: "/media/motion-athlete-v2.jpg",
  Sleep: "/media/lifestyle-meditate.jpg",
  Foundation: "/media/hero-grass-v2.jpg",
};

export function productAtmosphere(category: CategoryId) {
  return ATMOSPHERE[category];
}

export function productLifestyle(product: Product) {
  // Prefer web-line 16:9 stills; fall back to legacy landscape if missing.
  return `/media/lifestyle-${product.id}-line.jpg`;
}

export function productSlides(product: Product) {
  const seen = new Set<string>();
  const slides: string[] = [];
  for (const src of [product.image, ...product.gallery]) {
    if (!src || seen.has(src)) continue;
    seen.add(src);
    slides.push(src);
  }
  return slides;
}

export const pathways = [
  { label: "Full System", count: 12, href: "/shop" },
  { label: "Recovery", count: 3, href: "/shop/recovery" },
  { label: "Performance", count: 3, href: "/shop/performance" },
  { label: "Sleep", count: 2, href: "/shop/sleep" },
  { label: "Foundation", count: 4, href: "/shop/foundation" },
  { label: "Rituals", count: 6, href: "/shop" },
  { label: "Field Notes", count: 9, href: "/#field-notes" },
  { label: "Community", count: 18, href: "/#community" },
];

export const pillars = [
  {
    n: "1",
    title: "Performance should feel natural",
    body: "Your biological systems are already designed for renewal. Support them, don’t override them.",
  },
  {
    n: "2",
    title: "Recovery should feel intuitive",
    body: "Return to equilibrium. Restore rhythm. Let repair be something your body recognizes.",
  },
  {
    n: "3",
    title: "The strongest systems repair themselves",
    body: "Resilience is not a hack. It is regeneration practiced over time.",
  },
];

export type CommunityColumn = {
  src: string;
  alt: string;
  body?: string;
  points?: string[];
};

export const community: {
  headline: string;
  dek: string;
  columns: CommunityColumn[];
} = {
  headline:
    "For athletes, creatives, and high-performers who treat recovery as part of the work.",
  dek: "You're drawn to tools that work with biology rather than against it, and to real-world experience: movement, nature, training, and rest.",
  columns: [
    {
      src: "/media/community-run-v2.jpg",
      alt: "Night track run, motion as a system",
      body: "You treat health as a system, not a shortcut. Recovery is part of the work, not a pause from it.",
    },
    {
      src: "/media/community-portrait-v2.jpg",
      alt: "Warm editorial portrait, grounded and still",
      body: "Curious about the body. Committed to long-term vitality. Drawn to tools that work in harmony with biology rather than against it.",
    },
    {
      src: "/media/community-strobe-v2.jpg",
      alt: "Stroboscopic stride, health as sequence",
      points: [
        "Recovery as much as output",
        "Deeply curious about biology, longevity, and regenerative health",
        "Movement, nature, training, and rest",
      ],
    },
  ],
};

export const fieldNotes = [
  {
    date: "08 / 26",
    title: "What you do frequently becomes your frequency",
    dek: "A short note on consistency as biology, not willpower.",
  },
  {
    date: "07 / 14",
    title: "Overnight repair is a window, not a mood",
    dek: "How sleep protocols meet the body’s own schedule.",
  },
  {
    date: "06 / 02",
    title: "Human first, scientific second",
    dek: "Regenerative tools that feel like craft, not clinic.",
  },
];

export const navLinks = [
  { label: "Rituals", href: "/#pathways" },
  { label: "Shop", href: "/shop" },
  { label: "Science", href: "/#philosophy" },
  { label: "Community", href: "/#community" },
];

export type NavPanelId = "Rituals" | "Shop" | "Science" | "Community";

export type NavPanelLink = {
  label: string;
  count: number;
  href: string;
};

export type NavPanel = {
  id: NavPanelId;
  label: string;
  background: string;
  links: NavPanelLink[];
  /** When true, right column shows auto-scrolling product feed */
  showProductFeed: boolean;
};

export const navPanels: NavPanel[] = [
  {
    id: "Rituals",
    label: "Rituals",
    background: "/media/hero-grass-v2.jpg",
    showProductFeed: false,
    links: [
      { label: "All Rituals", count: 6, href: "/shop" },
      { label: "Morning", count: 2, href: "/shop/performance" },
      { label: "Post-Effort", count: 2, href: "/shop/recovery" },
      { label: "Wind-Down", count: 2, href: "/shop/sleep" },
      { label: "Field Notes", count: 9, href: "/#field-notes" },
    ],
  },
  {
    id: "Shop",
    label: "Shop",
    background: "/media/water-ripples.jpg",
    showProductFeed: true,
    links: [
      { label: "Shop All", count: products.length, href: "/shop" },
      ...categories.map((c) => ({
        label: c.label,
        count: c.count,
        href: `/shop/${c.slug}`,
      })),
    ],
  },
  {
    id: "Science",
    label: "Science",
    background: "/media/community-strobe-v2.jpg",
    showProductFeed: false,
    links: [
      { label: "Philosophy", count: 3, href: "/#philosophy" },
      { label: "Pathways", count: pathways.length, href: "/#pathways" },
      { label: "Recovery", count: 3, href: "/shop/recovery" },
      { label: "Performance", count: 3, href: "/shop/performance" },
      { label: "Sleep", count: 2, href: "/shop/sleep" },
      { label: "Foundation", count: 4, href: "/shop/foundation" },
    ],
  },
  {
    id: "Community",
    label: "Community",
    background: "/media/community-portrait-v2.jpg",
    showProductFeed: false,
    links: [
      { label: "Gatherings", count: 18, href: "/#community" },
      { label: "Field Notes", count: 9, href: "/#field-notes" },
      { label: "Silver Lake", count: 4, href: "/#community" },
      { label: "Terrain Runs", count: 6, href: "/#community" },
    ],
  },
];

/** Featured products for the shop overlay marquee (Usal-style right column) */
export const featuredProducts = products.filter((p) =>
  [
    "recovery-signal",
    "motion-balance",
    "night-signal",
    "dawn-protocol",
    "clarity-ritual",
    "pulse-recovery",
  ].includes(p.id),
);
