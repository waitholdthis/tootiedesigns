export const capabilities = [
  {
    title: "Full-Stack Systems",
    kicker: "Digital Lab",
    description:
      "Mission-aware web and application architecture for dashboards, workflows, and operational tools.",
  },
  {
    title: "Website Design & Creation",
    kicker: "Digital Lab",
    description:
      "Cinematic brand websites, landing pages, and portfolio systems designed, written, built, and deployed with a premium digital workshop feel.",
  },
  {
    title: "Tactical Consulting",
    kicker: "Tactical Desk",
    description:
      "Defense-informed planning support, C-UAS thinking, and structured decision products for complex environments.",
  },
  {
    title: "Digital Fabrication",
    kicker: "Physical Forge",
    description:
      "Laser engraving, vector preparation, material testing, and clean finished components with tight tolerances.",
  },
  {
    title: "Material Craft",
    kicker: "Pattern Room",
    description:
      "Woodwork, crochet, and tactile goods framed through pattern logic, structure, and hand-finished detail.",
  },
];

export const projects = [
  {
    title: "MDPT: C-UAS Framework",
    category: "Digital Systems",
    filter: "digital",
    size: "large",
    meta: "Real-time planning / CesiumJS / sensor logic",
    description:
      "A multi-domain planning environment for counter-UAS workflows, built around operational clarity and rapid interpretation.",
  },
  {
    title: "Defense Sector Consulting",
    category: "Tactical Consulting",
    filter: "tactical",
    size: "medium",
    meta: "Mission analysis / readiness / doctrine",
    description:
      "Structured advisory work that turns ambiguous requirements into clear planning artifacts and decision support.",
  },
  {
    title: "Gymnastics Performance App",
    category: "Digital Systems",
    filter: "digital",
    size: "medium",
    meta: "React Native / cross-platform deployment",
    description:
      "A performance-focused application concept for athletes, coaches, and progress tracking across devices.",
  },
  {
    title: "Website Design Portfolio",
    category: "Website Design",
    filter: "digital",
    size: "medium",
    meta: "Astro / responsive UX / brand systems",
    description:
      "Custom websites shaped from strategy, copy, visual direction, responsive interface design, and deployment.",
  },
  {
    title: "Landing Page Systems",
    category: "Website Design",
    filter: "digital",
    size: "small",
    meta: "UX writing / conversion / deployment",
    description:
      "Focused digital experiences for brands, products, portfolios, and service launches that need polish from the first screen.",
  },
  {
    title: "Precision Components",
    category: "Physical Fabrication",
    filter: "fabrication",
    size: "medium",
    meta: "DXF / SVG / laser tolerances",
    description:
      "Clean laser-cut and engraved work where vector discipline, material choice, and finish quality carry the design.",
  },
  {
    title: "Algorithmic Textiles",
    category: "Physical Fabrication",
    filter: "fabrication",
    size: "small",
    meta: "Pattern math / repetition / tension",
    description:
      "Crochet studies treated as structural pattern systems: soft materials, exact logic, and visible rhythm.",
  },
  {
    title: "Wood + Engraving Studies",
    category: "Physical Fabrication",
    filter: "fabrication",
    size: "small",
    meta: "Golden oak / grain / depth",
    description:
      "Hand-finished wood and engraving pieces designed around tactile contrast, shadow, and durable presentation.",
  },
];

export type Project = (typeof projects)[number];

export const process = [
  ["01", "Discovery", "Define the mission, audience, constraints, and measure of success."],
  ["02", "Architecture", "Translate ideas into interfaces, plans, vectors, materials, and systems."],
  ["03", "Execution", "Build, cut, stitch, test, deploy, and refine with disciplined momentum."],
  ["04", "Finish", "Polish the object, interface, or engagement until every detail feels intentional."],
];

export const tech = [
  "Astro",
  "React",
  "Python",
  "Docker",
  "Nginx",
  "CesiumJS",
  "DXF",
  "SVG",
  "CAD",
  "Laser",
];
