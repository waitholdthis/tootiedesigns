export const primaryCapabilities = [
  {
    title: "Website Design & Creation",
    kicker: "Digital Lab",
    description:
      "Cinematic brand websites, landing pages, and portfolio systems — designed, written, built, and deployed end to end.",
    services: ["Website strategy", "Responsive design", "Copy structure", "Astro front-end builds"],
  },
  {
    title: "Full-Stack Systems",
    kicker: "Digital Lab",
    description:
      "Mission-aware web and application architecture for dashboards, workflows, and operational tools that need to perform.",
    services: ["Dashboards and admin tools", "Workflow applications", "API-connected interfaces", "Deployment planning"],
  },
];

export const depthCapabilities = [
  {
    title: "Brand & Identity Systems",
    kicker: "Identity Bench",
    description: "Logos, visual systems, service positioning, and launch-ready brand direction for polished public presence.",
  },
  {
    title: "Content & Copy Strategy",
    kicker: "Signal Desk",
    description: "Clear words for websites, case studies, service pages, and professional positioning.",
  },
  {
    title: "Digital Fabrication",
    kicker: "Physical Forge",
    description: "Laser engraving, vector preparation, material testing, and clean finished components with tight tolerances.",
  },
  {
    title: "Tactical Advising",
    kicker: "Tactical Desk",
    description: "Defense-informed planning support, Defensive Fires thinking, and structured decision products.",
  },
  {
    title: "Material Craft",
    kicker: "Pattern Room",
    description: "Woodwork and tactile goods framed through pattern logic, structure, and hand-finished detail.",
  },
  {
    title: "Product Prototyping",
    kicker: "Prototype Bay",
    description: "Fast concepts for tools, products, interfaces, and physical ideas before full buildout.",
  },
];

export const websiteShowcase = [
  {
    title: "Authority Site",
    type: "Professional Website",
    description:
      "A credibility-focused personal website for a senior CBRN Warrant Officer, positioning defense, CWMD, homeland security, and emergency management expertise.",
    highlights: ["Authority positioning", "Defense-sector copy", "Responsive web presence"],
  },
  {
    title: "Diverse Hair Designs by Peachie",
    type: "Luxury Service Website",
    description:
      "A refined salon website for a North Carolina hair brand, built around elegant service presentation, gallery depth, testimonials, booking, and contact flow.",
    highlights: ["Luxury service design", "Gallery experience", "Booking-ready UX"],
  },
  {
    title: "The Digital Threshold",
    type: "Conversion Landing Page",
    description:
      "A high-impact landing page about revenue, first impressions, conversion science, and audit-driven action for modern service offers.",
    highlights: ["Conversion narrative", "Animated sections", "Audit CTA flow"],
  },
  {
    title: "Foundry Baseball App",
    type: "Product Website",
    description:
      "A sports-app landing experience for a dugout command center, presenting lineup tools, digital scorekeeping, and Ballpark DJ automation.",
    highlights: ["Product positioning", "Sports app UX", "Launch-ready site"],
  },
  {
    title: "Studio Portfolio Systems",
    type: "Brand Website",
    description:
      "Dark-mode, cinematic portfolio sites with responsive case studies, sharp service positioning, and launch-ready structure.",
    highlights: ["Portfolio architecture", "Case-study pages", "Mobile polish"],
  },
  {
    title: "Service Landing Pages",
    type: "Conversion Page",
    description:
      "Focused one-page websites for services, products, and creative offers that need clarity, confidence, and a strong first impression.",
    highlights: ["Offer hierarchy", "CTA strategy", "Fast static builds"],
  },
  {
    title: "Technical Product Interfaces",
    type: "Web Application",
    description:
      "Interface-forward web builds for complex tools, dashboards, and operational products where usability and credibility matter.",
    highlights: ["UX systems", "Dashboard visuals", "React/Astro delivery"],
  },
  {
    title: "Portfolio Case Study Hubs",
    type: "Portfolio Website",
    description:
      "Expandable portfolio systems for showing selected work, process depth, project proof, and client-ready case studies.",
    highlights: ["Work galleries", "Case study structure", "Proof-driven UX"],
  },
];

export const projectNotes = [
  {
    name: "Tootie Designs",
    projectType: "Process Note",
    quote:
      "The work is approached like a mission brief: define the objective, remove ambiguity, and build until the outcome feels clear.",
  },
  {
    name: "Tootie Designs",
    projectType: "Method Note",
    quote:
      "Digital systems and physical craft are treated as the same discipline: structure, repetition, tolerance, and finish.",
  },
  {
    name: "Tootie Designs",
    projectType: "Standard Note",
    quote:
      "The goal is not just a good-looking deliverable. The goal is a piece of work that earns trust quickly.",
  },
];

export const projects = [
  {
    slug: "mdpt-cuas-framework",
    title: "MDPT: Defensive Fires Framework",
    category: "Digital Systems",
    filter: "digital",
    size: "large",
    meta: "Real-time planning / CesiumJS / sensor logic",
    description:
      "A multi-domain planning environment for Defensive Fires workflows, built around operational clarity and rapid interpretation.",
    caseStudy: {
      eyebrow: "Digital Lab / Defense Software",
      summary:
        "A mission-focused planning interface concept built to help complex Defensive Fires information feel structured, scannable, and actionable.",
      challenge:
        "Defensive Fires planning can involve scattered map context, sensor inputs, decision points, and operational constraints. The interface needed to frame that complexity without overwhelming the operator.",
      approach:
        "The system direction prioritizes layered geospatial context, status hierarchy, and fast recognition patterns. Tactical data is treated as interface architecture: clear zones, disciplined panels, and visual emphasis only where it supports a decision.",
      outcome:
        "The result is a professional planning framework that communicates readiness, technical fluency, and defense-sector awareness through a polished digital product experience.",
      cta: { label: "Request a Demo", href: "#contact" },
      deliverables: ["Interface architecture", "Operational dashboard UX", "Geospatial planning patterns", "Defensive Fires workflow framing"],
      stats: ["CesiumJS map logic", "Real-time sensor concept", "Mission-ready UI"],
    },
  },
  {
    slug: "defense-sector-consulting",
    title: "Defense Sector Advising",
    category: "Tactical Advising",
    filter: "tactical",
    size: "medium",
    meta: "Mission analysis / readiness / doctrine",
    description:
      "Structured advisory work that turns ambiguous requirements into clear planning artifacts and decision support.",
    caseStudy: {
      eyebrow: "Tactical Desk / Advisory",
      summary:
        "Defense-informed advising support for translating broad mission needs into organized planning products and operational clarity.",
      challenge:
        "High-stakes environments often contain competing priorities, incomplete information, and multiple stakeholder needs. The work requires structure before execution can become useful.",
      approach:
        "Tootie Designs frames the mission, audience, constraints, and decision requirements first. From there, planning products are organized into usable artifacts that support alignment and action.",
      outcome:
        "The engagement model gives clients cleaner thinking, sharper documentation, and a more disciplined path from ambiguity to execution.",
      deliverables: ["Mission analysis", "Planning support", "Decision frameworks", "Readiness-oriented documentation"],
      stats: ["Defense-informed", "Structured outputs", "Fayetteville, NC"],
    },
  },
  {
    slug: "gymnastics-performance-app",
    title: "Gymnastics Performance App",
    category: "Digital Systems",
    filter: "digital",
    size: "medium",
    meta: "React Native / cross-platform deployment",
    description:
      "A performance-focused application concept for athletes, coaches, and progress tracking across devices.",
    caseStudy: {
      eyebrow: "Digital Lab / Mobile Product",
      summary:
        "A cross-platform app direction for making gymnastics progress, routines, and performance notes easier to track.",
      challenge:
        "Athletic tracking tools need to be fast, low-friction, and useful across repeat sessions. The experience has to serve both training discipline and everyday use.",
      approach:
        "The interface direction centers repeatable logging, clear progress states, and mobile-friendly flows. The product structure is designed for coaches, athletes, and families who need clarity without administrative drag.",
      outcome:
        "A focused mobile product foundation that shows Tootie Designs can move from domain need to structured app experience.",
      deliverables: ["React Native app structure", "Mobile UX flows", "Progress tracking patterns", "Cross-platform deployment planning"],
      stats: ["Mobile-first", "React Native", "Performance tracking"],
    },
  },
  {
    slug: "foundry-baseball-app",
    title: "Foundry Baseball App",
    category: "Digital Systems",
    filter: "digital",
    size: "medium",
    meta: "Sports app / scorebook UX / game-day workflow",
    description:
      "A dugout command center concept that unifies lineup building, digital scorekeeping, and walk-up music control for baseball and softball.",
    caseStudy: {
      eyebrow: "Digital Lab / Sports Product",
      summary:
        "A baseball and softball app experience designed to bring the scorebook, lineup board, and Ballpark DJ into one game-day command center.",
      challenge:
        "Coaches often juggle separate tools for lineups, scoring, stats, and music. The product needed to show how those workflows could live together without slowing down the pace of a real dugout.",
      approach:
        "The interface direction centers one-tap scoring, a clear at-bat state, lineup flow, live game feedback, and music automation that responds when the next batter steps in.",
      outcome:
        "The finished landing experience communicates a polished sports product concept with clear operational value: fewer app switches, faster game management, and a stronger ballpark atmosphere.",
      deliverables: ["Sports app landing page", "Game-day UX framing", "Scorebook workflow design", "Product positioning"],
      stats: ["Live website", "Baseball and softball", "Dugout command center"],
      url: "https://waitholdthis.github.io/foundry_baseball_app/",
    },
  },
  {
    slug: "website-design-portfolio",
    title: "Website Design Portfolio",
    category: "Website Design",
    filter: "digital",
    size: "medium",
    meta: "Astro / responsive UX / brand systems",
    description:
      "Custom websites shaped from strategy, copy, visual direction, responsive interface design, and deployment.",
    caseStudy: {
      eyebrow: "Digital Lab / Website Design",
      summary:
        "Cinematic, conversion-aware websites built from brand strategy, content structure, responsive design, and production-ready front-end implementation.",
      challenge:
        "A professional website has to do more than look good. It has to explain the offer, create trust, guide attention, and work cleanly on every device.",
      approach:
        "Each website starts with positioning and information architecture, then moves into visual direction, copy, responsive interface design, and deployment. The result is a site that feels custom rather than templated.",
      outcome:
        "A reusable website creation process that can support portfolios, landing pages, service businesses, and technically sophisticated brands.",
      deliverables: ["Brand-led web design", "Responsive Astro builds", "Copy and content structure", "Deployment-ready front ends"],
      stats: ["Strategy to launch", "Mobile responsive", "SEO-ready structure"],
    },
  },
  {
    slug: "parker-tootill-authority-site",
    title: "Parker Tootill Authority Site",
    category: "Website Design",
    filter: "digital",
    size: "medium",
    meta: "Personal brand / defense expertise / responsive site",
    description:
      "A professional authority website for Parker Tootill, framing CBRN, CWMD, Homeland Security, and Emergency Management expertise.",
    caseStudy: {
      eyebrow: "Digital Lab / Professional Website",
      summary:
        "A focused personal brand website designed to present defense-sector expertise with clarity, credibility, and a polished digital presence.",
      challenge:
        "The site needed to communicate deep professional expertise without feeling cluttered or overly academic. The content had to quickly establish credibility across CBRN, CWMD, Homeland Security, Emergency Management, and defense leadership.",
      approach:
        "The structure centers authority first: a clear professional identity, relevant domain keywords, concise positioning, and a responsive interface that works as both a personal profile and subject-matter landing page.",
      outcome:
        "The finished site gives Parker Tootill a dedicated web presence that supports professional discovery, credibility, and defense/public-safety positioning.",
      deliverables: ["Personal brand website", "Professional positioning", "SEO metadata", "Responsive front-end build"],
      stats: ["Live website", "Defense expertise", "Authority-focused UX"],
      proof: {
        problem: "Deep expertise can look scattered when credentials, experience, domains, and project examples are not organized into a clear authority story.",
        strategy: "Package the professional identity around domain credibility, concise positioning, selected proof, and a responsive page structure that supports discovery.",
        buyerBelief: "A professional authority site should make someone easier to understand, trust, cite, and contact.",
        conversionSignals: ["Authority positioning", "Credential hierarchy", "Project proof", "Inquiry-ready structure"],
      },
      url: "https://parker.tootiedesigns.com/",
    },
  },
  {
    slug: "diverse-hair-designs-peachie",
    title: "Diverse Hair Designs by Peachie",
    category: "Website Design",
    filter: "digital",
    size: "medium",
    meta: "Luxury salon / gallery UX / GitHub Pages",
    description:
      "A luxury salon website for Diverse Hair Designs by Peachie, showcasing services, transformations, testimonials, and booking pathways.",
    caseStudy: {
      eyebrow: "Digital Lab / Luxury Service Website",
      summary:
        "A polished beauty and service-brand website built to feel elegant, personal, and conversion-ready for salon clients in North Carolina.",
      challenge:
        "The site needed to present a warm luxury hair brand with enough depth for service discovery, image-heavy portfolio browsing, testimonials, staff credibility, and clear contact paths without overwhelming visitors.",
      approach:
        "The design uses soft editorial styling, refined typography, a cinematic hero, service cards, gallery interaction, testimonial motion, and contact details that support both browsing and booking intent.",
      outcome:
        "The finished site gives Diverse Hair Designs by Peachie a professional web presence that feels premium, approachable, and ready for client discovery.",
      deliverables: ["Luxury service website", "Responsive salon layout", "Gallery and lightbox UX", "Booking/contact pathways"],
      stats: ["Live website", "North Carolina salon", "Gallery-rich UX"],
      proof: {
        problem: "A warm salon brand needed the website to match the quality of the real client experience instead of feeling like a basic online listing.",
        strategy: "Lead with atmosphere, services, client love, gallery depth, and a direct booking/contact path so mobile visitors can feel the brand before they decide.",
        buyerBelief: "A Fayetteville service business can look premium, human, and trustworthy online before a client ever walks through the door.",
        conversionSignals: ["Local service positioning", "Service menu clarity", "Gallery and testimonial proof", "Booking/contact path"],
      },
      url: "https://waitholdthis.github.io/peachie_test/",
    },
  },
  {
    slug: "the-digital-threshold",
    title: "The Digital Threshold",
    category: "Website Design",
    filter: "digital",
    size: "medium",
    meta: "Landing page / conversion copy / animated UX",
    description:
      "A cinematic conversion landing page framing the homepage as a revenue-critical threshold with a clear audit call to action.",
    caseStudy: {
      eyebrow: "Digital Lab / Conversion Landing Page",
      summary:
        "A focused landing page experience built to make the value of better conversion design feel immediate, measurable, and urgent.",
      challenge:
        "The page needed to explain why landing page performance matters without becoming a generic marketing article. It had to establish stakes, teach the conversion logic, and drive visitors toward a simple audit request.",
      approach:
        "The design uses a dark cinematic interface, sharp headline hierarchy, animated proof sections, conversion metrics, checklist framing, and repeated CTA moments to keep attention moving toward one clear action.",
      outcome:
        "The finished page gives the offer a premium launch surface with strong first-screen impact, persuasive structure, and a direct path from curiosity to audit request.",
      deliverables: ["Conversion landing page", "Revenue-focused copy", "Animated interface sections", "Audit request flow"],
      stats: ["Live website", "Conversion-focused", "Single-page build"],
      proof: {
        problem: "A high-value website offer can sound abstract unless the page makes the business risk of a weak first impression obvious.",
        strategy: "Frame the homepage as a revenue threshold, repeat the audit CTA, and use cinematic sections to keep attention moving toward one action.",
        buyerBelief: "The page should make a visitor feel the cost of inaction and understand the value of a sharper conversion path.",
        conversionSignals: ["Problem-aware headline", "Audit-led CTA", "Conversion checkpoints", "Single-offer focus"],
      },
      url: "https://waitholdthis.github.io/landingpage/",
    },
  },
  {
    slug: "landing-page-systems",
    title: "Landing Page Systems",
    category: "Website Design",
    filter: "digital",
    size: "small",
    meta: "UX writing / conversion / deployment",
    description:
      "Focused digital experiences for brands, products, portfolios, and service launches that need polish from the first screen.",
    caseStudy: {
      eyebrow: "Digital Lab / Landing Pages",
      summary:
        "Focused single-page digital experiences designed to introduce an offer quickly, clearly, and with visual confidence.",
      challenge:
        "Landing pages have limited time to earn attention. Every headline, section, and call to action has to work without clutter.",
      approach:
        "Tootie Designs builds landing pages around a direct offer, sharp visual hierarchy, concise copy, and responsive sections that make the next step obvious.",
      outcome:
        "A polished launch surface for services, products, portfolios, and campaigns that need to feel credible from the first screen.",
      deliverables: ["Landing page strategy", "UX writing", "Responsive layout", "Launch-ready implementation"],
      stats: ["Fast launch path", "Conversion-focused", "Premium first impression"],
    },
  },
  {
    slug: "precision-components",
    title: "Precision Components",
    category: "Physical Fabrication",
    filter: "fabrication",
    size: "medium",
    meta: "DXF / SVG / laser tolerances",
    description:
      "Clean laser-cut and engraved work where vector discipline, material choice, and finish quality carry the design.",
    caseStudy: {
      eyebrow: "Physical Forge / Laser Work",
      summary:
        "Laser-cut and engraved components developed with attention to vector quality, material behavior, and finished presentation.",
      challenge:
        "Physical fabrication depends on details that are easy to overlook: path cleanliness, burn behavior, edge quality, material contrast, and tolerance.",
      approach:
        "Design files are prepared with production in mind, then refined through material-aware decisions that balance precision, durability, and visual finish.",
      outcome:
        "Objects and components that communicate care through crisp edges, intentional depth, and controlled material contrast.",
      deliverables: ["SVG/DXF preparation", "Laser engraving", "Material testing", "Finished component design"],
      stats: ["Vector discipline", "Material tolerances", "Hand-finished"],
    },
  },
  {
    slug: "wood-engraving-studies",
    title: "Wood + Engraving Studies",
    category: "Physical Fabrication",
    filter: "fabrication",
    size: "small",
    meta: "Golden oak / grain / depth",
    description:
      "Hand-finished wood and engraving pieces designed around tactile contrast, shadow, and durable presentation.",
    caseStudy: {
      eyebrow: "Physical Forge / Woodwork",
      summary:
        "Wood and engraving studies that use grain, shadow, depth, and finish as core design materials.",
      challenge:
        "Woodwork has to balance natural variation with precise intent. The design needs to respect the material while still feeling refined.",
      approach:
        "Pieces are shaped around contrast: dark engraving against golden oak, clean edges against organic grain, and durable finishing against tactile warmth.",
      outcome:
        "Objects that feel crafted, professional, and visually aligned with the broader Tootie Designs industrial-elegance language.",
      deliverables: ["Woodwork studies", "Engraved surfaces", "Finish refinement", "Material presentation"],
      stats: ["Golden oak", "Engraved depth", "Tactile finish"],
    },
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

export const email = "tootiedesigns18@gmail.com";

export const techCategories = [
  {
    label: "Digital Systems",
    tools: ["Astro", "React", "TypeScript", "Python", "React Native", "Docker", "Nginx", "PostgreSQL", "CesiumJS", "Git / GitHub"],
  },
  {
    label: "Physical Fabrication",
    tools: ["Laser Cutting", "DXF / SVG", "CAD", "Vector Prep", "Material Testing", "Woodwork", "Engraving", "Component Finishing"],
  },
  {
    label: "Design & Strategy",
    tools: ["Interface Design", "UX Systems", "Brand Identity", "Copy Strategy", "Mission Analysis", "Conversion Design", "Responsive Layout", "Accessibility"],
  },
];

export const fieldNotes = [
  {
    slug: "custom-business-software-vs-saas",
    title: "Custom Business Software vs More SaaS: When a Company Needs Its Own Digital System",
    date: "2026-05-30",
    eyebrow: "Digital System Strategy",
    category: "digital",
    summary:
      "A practical guide for founders and operators deciding whether to keep stacking subscriptions or build a focused internal tool, dashboard, portal, or automation system around the way the business actually works.",
    body: [
      "Most growing businesses do not hit an operations wall because they lack software. They hit it because every tool solves one slice of the workflow while the real work lives between tools: spreadsheets, inboxes, text threads, screenshots, shared drives, manual reports, and repeat follow-up.",
      "More SaaS helps when the problem is standard. Custom business software starts to make sense when the workflow is specific, repeated, valuable, and painful enough that the team keeps building workarounds. If the same information is being copied between platforms every week, if leads disappear after a form submit, or if reporting depends on one person stitching things together by hand, the business probably needs a cleaner system.",
      "The right first build is rarely a giant platform. It is usually a focused dashboard, client portal, intake workflow, admin screen, booking handoff, report generator, or automation layer that removes the most expensive manual friction first. A small internal tool can create more leverage than another public-facing page if the business already has attention but struggles to process it cleanly.",
      "For service businesses, the highest-value systems often begin where the website ends: lead qualification, quote requests, client onboarding, file collection, status updates, sales follow-up, or owner visibility. The website creates demand; the system makes the demand easier to handle, measure, and convert.",
      "Tootie Designs uses the audit-first path to identify whether the next move should be a better website, a landing page, or a custom digital system. Review the Digital System Build path at https://tootiedesigns.com/digital-system-build/ or start with the website audit at https://tootiedesigns.com/website-audit/.",
    ],
  },
  {
    slug: "founder-authority-website",
    title: "Founder Authority Website: Why Serious Buyers Check the Leader Before They Trust the Company",
    date: "2026-05-30",
    eyebrow: "Founder Website Strategy",
    category: "digital",
    summary:
      "A strategic guide for founders and CEOs who need an authority website that supports company credibility, premium buyer trust, investor confidence, and serious inbound opportunities.",
    body: [
      "A founder authority website is not a personal vanity project. It is a trust layer for the company. When buyers, investors, partners, recruits, or journalists want to understand whether a company is serious, they often check the person behind it. If the founder's public presence is scattered across LinkedIn, old bios, social posts, and half-finished pages, the company loses authority by association.",
      "The strongest founder websites do three things quickly: they explain who the leader is, what problem the company is built to solve, and why that leader is credible enough to solve it. The page should not read like a resume. It should act like an authority brief: positioning, proof, point of view, selected work, media or credentials, and a clear path for the right people to reach out.",
      "Founder authority matters most when the business sells expertise, transformation, advisory, premium services, enterprise products, or high-stakes outcomes. In those categories, buyers are not only evaluating the offer. They are evaluating judgment, taste, discipline, credibility, and whether the company looks like it can handle a serious engagement.",
      "The mistake is separating the founder story from the business story. A weak founder page talks only about background. A strong founder authority site shows how the leader's experience creates business value: the frameworks they use, the problems they understand, the proof they can show, the audiences they serve, and the next step for serious conversations.",
      "For Tootie Designs, the founder authority path connects directly to CEO website design, global company redesign, and enterprise landing pages. The site has to make the leader feel credible, the company feel inevitable, and the inquiry path feel safe enough for a serious buyer to start. Begin with the executive website audit at https://tootiedesigns.com/executive-website-audit/ or review the CEO website path at https://tootiedesigns.com/ceo-website-design/.",
    ],
  },
  {
    slug: "ceo-website-design-checklist",
    title: "CEO Website Design Checklist: What Executives Need Before Buyers Trust the Brand",
    date: "2026-05-30",
    eyebrow: "Executive Website Strategy",
    category: "digital",
    summary:
      "A strategic checklist for CEOs, founders, consultants, and executive teams that need a website capable of building authority, investor confidence, enterprise trust, and serious inquiry paths.",
    body: [
      "A CEO website is not a vanity page. It is a public trust asset. Before a buyer, investor, recruit, partner, or journalist ever reaches out, they check whether the leader and company feel serious enough to deserve attention. If the website feels thin, dated, vague, or generic, the brand loses authority before the first conversation starts.",
      "The first checkpoint is executive clarity. The site should explain who the leader is, what the company does, who it serves, and why the work matters in the first screen. CEOs do not need paragraphs of biography above the fold. They need a precise authority statement, a clear business outcome, and an obvious next step for the right audience.",
      "The second checkpoint is proof architecture. High-value visitors look for evidence: case studies, measurable outcomes, partnerships, press, credentials, testimonials, product screenshots, client categories, process, or visible work. Proof should appear before the site asks for a call, proposal, investment conversation, or partnership request.",
      "The third checkpoint is audience routing. CEO and founder sites often serve multiple audiences at once: buyers, investors, recruits, media, partners, advisors, and internal stakeholders. The page should not flatten all of them into one generic contact button. It should create clear paths for serious inquiries, enterprise conversations, advisory requests, speaking, press, or company services.",
      "The fourth checkpoint is premium restraint. Executive websites should feel cinematic and distinctive without becoming noisy. The visual system has to communicate discipline: strong typography, deliberate motion, fast loading, elegant spacing, crisp mobile flow, and a brand mood that feels larger than a template.",
      "The fifth checkpoint is global readiness. A serious executive website needs clean metadata, schema, accessibility basics, performance discipline, internal links, and a content structure that can expand into essays, case studies, press, services, investor materials, or campaign landing pages over time.",
      "Tootie Designs built the CEO Website Design path around this standard: authority first, proof early, serious inquiry paths, and a premium front-end build that makes the leader and company feel undeniable. Start with the audit at https://tootiedesigns.com/website-audit/ or review the executive website path at https://tootiedesigns.com/ceo-website-design/.",
    ],
  },
  {
    slug: "website-cleanup-sprint-vs-full-redesign",
    title: "Website Cleanup Sprint vs Full Redesign: Which One Do You Need?",
    date: "2026-05-30",
    eyebrow: "Website Strategy",
    category: "digital",
    summary:
      "A practical decision guide for business owners choosing between a focused website cleanup sprint and a full redesign, based on trust gaps, mobile friction, offer clarity, and lead-path problems.",
    body: [
      "Not every weak website needs a full rebuild immediately. Some businesses have a decent foundation but a messy first impression: unclear headline, buried call to action, cramped mobile sections, thin proof, or a contact path that asks visitors to work too hard. In that situation, a focused cleanup sprint can create a visible improvement fast without turning the project into a full redesign.",
      "A website cleanup sprint is the right first move when the brand is mostly usable, the page structure is close, and the business needs sharper trust signals quickly. The sprint tightens the first screen, clarifies the offer, improves mobile readability, strengthens CTA placement, and moves proof closer to the moments where visitors decide whether to keep going.",
      "A full redesign is the better move when the site has deeper structural problems: outdated visuals, confusing navigation, weak service pages, missing local SEO, no clear audit or quote path, or a layout that cannot support the business anymore. If every important change requires fighting the existing site, rebuilding the system is usually cleaner and more valuable than patching around it.",
      "The practical test is simple: if the business can explain the offer clearly and only needs a sharper path to action, start with the cleanup sprint. If the website does not match the business, does not support the services, or does not create trust at all, move toward a redesign. The wrong choice is staying stuck because the full rebuild feels too big and the current site keeps leaking confidence.",
      "Tootie Designs uses the free website first-impression audit to make that decision before scope gets expensive. The audit reviews the first screen, mobile experience, message clarity, proof, and lead path, then recommends whether the next move should be the Website Cleanup Sprint, a conversion landing page, a full redesign, or a new website build. Start at https://tootiedesigns.com/website-audit/ or review the cleanup offer at https://tootiedesigns.com/website-cleanup-sprint/.",
    ],
  },
  {
    slug: "why-every-service-business-needs-an-authority-website",
    title: "Why Every Service Business Needs an Authority Website",
    date: "2026-01-15",
    eyebrow: "Website Design",
    category: "digital",
    summary:
      "A polished web presence is no longer optional. Here is why your authority site is the most important first impression your business makes — and what it takes to build one that earns trust on arrival.",
    body: [
      "Your website is the first thing a potential client looks at before they pick up the phone. For service businesses — consultants, contractors, coaches, tradespeople — that first impression either builds trust immediately or raises questions that never get answered.",
      "An authority website is not the same as a marketing website. A marketing website sells. An authority website positions: it tells a visitor who you are, what you have done, who you have served, and why that history matters. The difference is felt in the first ten seconds of a visit.",
      "Tootie Designs builds authority websites from a simple structure: clear professional identity in the header, a positioning statement that speaks to a specific audience, a short proof section with real credentials or outcomes, a handful of services organized around client needs, and a contact path that does not require multiple clicks to reach. That structure works for defense consultants, salon owners, coaches, and technical specialists equally — because the underlying logic is the same: establish credibility, reduce friction, make the next step obvious.",
      "If your website still uses a generic template, has outdated content, or does not quickly answer who is this for and why should I trust them, an authority site rebuild is probably the most direct investment your business can make right now.",
    ],
  },
  {
    slug: "the-conversion-problem-why-your-homepage-is-losing-you-business",
    title: "The Conversion Problem: Why Your Homepage Is Losing You Business",
    date: "2026-02-08",
    eyebrow: "Website Design",
    category: "digital",
    summary:
      "Most homepages are built backwards. They lead with the company story and bury the offer. Here is how to identify the structural problem — and what a focused homepage audit reveals every time.",
    body: [
      "Most homepages are built backwards. They lead with the company's story, the founder's biography, or a carousel of stock photography — and bury the actual offer three scrolls down. By the time a visitor reaches the relevant information, they have already left.",
      "Conversion is about reducing the gap between a visitor arriving and a visitor taking action. Every element of a homepage — headline, hero image, CTA position, scroll depth, section order — either shortens or lengthens that gap. Generic design choices almost always lengthen it.",
      "The most common problem Tootie Designs identifies when auditing existing websites is a mismatch between what the page says and what the visitor needs to hear. A plumber's homepage should answer: are you licensed, do you serve my area, and can I reach you right now? A consultant's homepage should answer: what problem do you solve, who have you solved it for, and why are you different? If the page does not answer those questions in the first screen, it is leaving business on the table.",
      "A focused homepage audit takes less than an hour to run but regularly identifies five to ten high-impact changes. If your bounce rate is high and your conversion rate is low, the issue is almost always structural — not aesthetic.",
    ],
  },
  {
    slug: "defense-informed-design-military-planning-and-software-architecture",
    title: "Defense-Informed Design: What Military Planning Taught Me About Software Architecture",
    date: "2026-02-28",
    eyebrow: "Digital Systems",
    category: "digital",
    summary:
      "The discipline required to produce a clear operations order is directly applicable to producing a clear technical specification. Here is how military planning logic maps to software architecture — and why it produces better systems.",
    body: [
      "Military planning is structured around clarity under pressure. Before any course of action is briefed, the planning team has defined the mission, identified the key decision points, mapped the terrain, and established the measures of success. Nothing moves until the problem is understood.",
      "Good software architecture works the same way. The interfaces, data models, and workflows that hold up under real-world use are almost always the ones built from a clear problem statement rather than a list of features. The planning phase — what military doctrine calls mission analysis — is what separates systems that scale from systems that require constant firefighting.",
      "This is not a metaphor. The discipline required to produce a clear operations order is directly applicable to producing a clear technical specification. Define the audience. Map the constraints. Identify the decision points. Choose the minimal viable action that solves the problem without creating new ones. Military planners call this the decisive point; software engineers call it the MVP. The label changes, but the logic does not.",
      "Tootie Designs brings this planning discipline to every digital build. The result is fewer scope changes mid-project, better-defined interfaces, and systems that behave predictably under conditions they were designed for — because those conditions were identified before a single line of code was written.",
    ],
  },
  {
    slug: "material-thinking-laser-tolerances-and-clean-code",
    title: "Material Thinking: What Laser Tolerances Have in Common with Clean Code",
    date: "2026-03-20",
    eyebrow: "Physical Fabrication",
    category: "fabrication",
    summary:
      "A vector path that is slightly off burns through material it was not supposed to. A function that does too much behaves unpredictably under conditions that were never anticipated. The precision standard is the same.",
    body: [
      "Laser engraving requires precision at the millimeter level. A vector path that is slightly off closes a corner wrong, burns through material it was not supposed to, or leaves a ragged edge where a crisp line was planned. The machine has no patience for ambiguity — it executes exactly what the file tells it to.",
      "Writing clean code works on the same principle. A function with a single, well-defined responsibility will always behave predictably. A function that does too much, or accepts too many inputs, will behave unpredictably — especially under conditions that were not anticipated in the original design. The file you hand to the laser cutter is the spec. The code you deploy is the spec. Both should be precise enough that the system has no need to guess.",
      "The fabrication workflow at Tootie Designs and the development workflow follow the same preparation logic: test the material before committing to the final cut, prototype the interaction before building the full system, verify the path before running the job. This is not caution for its own sake — it is how you avoid expensive mistakes that require starting over.",
      "Multidisciplinary work builds tolerance for precision across every medium. The same eye that catches a burn inconsistency in a finished panel catches an off-by-one logic error in a production API. The domain is different. The standard is the same.",
    ],
  },
  {
    slug: "from-dugout-to-dashboard-ux-lessons-from-a-baseball-command-center",
    title: "From Dugout to Dashboard: UX Lessons from Building a Baseball Command Center",
    date: "2026-04-10",
    eyebrow: "Digital Systems",
    category: "digital",
    summary:
      "The most important feature on a dashboard is not the one that is hardest to build. It is the one the user reaches for first under pressure. Building the Foundry Baseball App made that principle concrete.",
    body: [
      "Building the Foundry Baseball App surface taught a lesson that applies to every dashboard product: the most important feature is not the one that is hardest to build. It is the one the user reaches for first under pressure.",
      "In a real dugout, a coach needs one thing in the first thirty seconds: the current lineup and the next batter. Not season stats, not historical scoring trends, not notification banners — the lineup, now. Every UX decision that follows should protect that first interaction. Secondary features — walk-up music, digital scorebook, pitch count — earn their place in the interface by staying out of the way until they are needed.",
      "This is the central challenge of dashboard design: the product has to be simple to use in the specific moment it is used, not just when reviewing it in a prototype. Sports software fails when it treats every feature as equally important. Professional tools fail the same way — too many equally weighted options, not enough hierarchy, no clear primary action.",
      "The Foundry experience reinforced that good UX is not about feature count. It is about understanding the exact sequence of decisions a user makes and designing the interface to support that sequence without friction. Lineup. At-bat. Score. Music. In that order. Every screen should know what comes next.",
    ],
  },

  {
    slug: "five-signs-your-website-is-costing-you-leads",
    title: "5 Signs Your Website Is Costing You Leads",
    date: "2026-05-30",
    eyebrow: "Website Audit",
    category: "digital",
    summary:
      "A business website can look fine and still lose money. These five signs show when your first impression, mobile experience, message clarity, proof, or lead path needs a sharper rebuild.",
    body: [
      "A website does not have to be broken to cost a business leads. Most underperforming sites load, display information, and look acceptable at a glance. The problem is quieter: the page does not create enough confidence for a visitor to take the next step.",
      "The first sign is weak first-screen clarity. If someone cannot tell what you do, who you help, where you serve, and what action to take within the first few seconds, the page is forcing them to work too hard. Confused visitors rarely become leads.",
      "The second sign is a mobile experience that feels compressed instead of designed. Local buyers, referrals, and social traffic often arrive on a phone. If the headline is hard to read, buttons are buried, or the form feels annoying, the business is losing the exact people who were closest to contacting it.",
      "The third sign is missing trust. A visitor needs proof before they call: examples, testimonials, clear services, credentials, photos, location signals, process, or even a simple explanation of what happens after they submit the form. Without proof, the site asks for trust it has not earned.",
      "The fourth sign is vague copy. Words like quality, professional, reliable, and full service do not mean much by themselves. Strong website copy names the buyer, the problem, the outcome, and the reason the business is different. The goal is not more words. The goal is sharper words.",
      "The fifth sign is a weak lead path. If the only option is a generic contact page, many visitors will hesitate. A free website audit, quote request, booking path, or focused landing page gives people a safer first step and creates more conversations.",
      "Tootie Designs built the Free Website First-Impression Audit around these exact issues. It reviews first-screen clarity, mobile experience, trust signals, message clarity, and the lead capture path so a business can see what is helping, what is hurting, and what should change next. Start at https://tootiedesigns.com/#audit or review the redesign path at https://tootiedesigns.com/website-redesign/.",
    ],
  },
  {
    slug: "fayetteville-business-website-checklist",
    title: "Fayetteville Business Website Checklist: What Local Buyers Need Before They Call",
    date: "2026-05-30",
    eyebrow: "Local Website Design",
    category: "digital",
    summary:
      "A practical website checklist for Fayetteville, Fort Bragg, Hope Mills, Raeford, and Spring Lake businesses that need stronger trust, clearer service pages, and better inquiry paths.",
    body: [
      "A Fayetteville business website has one job before anything else: help a real person decide whether the business looks trustworthy enough to contact. Local buyers rarely study a website like a brochure. They skim from a phone, compare a few options, and look for fast proof that the business is legitimate, nearby, and easy to reach.",
      "The first checkpoint is local clarity. The page should quickly explain what the business does, who it serves, and where it works. Fayetteville, Fort Bragg, Hope Mills, Raeford, and Spring Lake service-area language should feel natural, not stuffed into a paragraph for search engines. A buyer should know within seconds whether they are in the right place.",
      "The second checkpoint is mobile trust. Most local traffic arrives from referrals, social profiles, Google Business Profiles, or quick searches. That means phone visitors need readable headings, tap-friendly buttons, visible contact paths, and short sections that do not bury the next step. If the mobile page feels like a squeezed desktop site, the business loses confidence before the call.",
      "The third checkpoint is service proof. A local website should not only say what the business offers. It should show why the visitor should believe it: project photos, testimonials, process notes, credentials, service examples, location cues, FAQs, and simple explanations of what happens after someone submits a form or requests a quote.",
      "The fourth checkpoint is a low-friction lead path. Some visitors are ready to call, but many are not. A quote form, booking path, free website audit, cleanup sprint, or short project brief gives people a safer first step than a vague contact page. The stronger the first step, the more likely a hesitant visitor becomes a real conversation.",
      "The fifth checkpoint is a page structure that can grow. A strong local website should support service pages, city pages, industry pages, case studies, and helpful articles over time. That structure gives search engines clearer context and gives buyers more ways to find the exact path that matches their problem.",
      "For Tootie Designs, the starting point is the free website first-impression audit. It reviews the first screen, mobile experience, proof signals, local clarity, and lead path before recommending whether the next move should be a cleanup sprint, landing page, redesign, or full website build. Start at https://tootiedesigns.com/website-audit/ or explore the Fayetteville website design path at https://tootiedesigns.com/fayetteville-nc-website-design/.",
    ],
  },

];
