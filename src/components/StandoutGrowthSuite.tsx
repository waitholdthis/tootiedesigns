import { useMemo, useState } from "react";

type Props = {
  basePath?: string;
};

const businessProfiles = [
  {
    key: "service",
    label: "Local service business",
    score: 72,
    package: "Website Redesign",
    route: "website-redesign/",
    blueprint: ["Trust-first hero", "Proof strip above the fold", "Quote/request CTA", "Service-area credibility"],
  },
  {
    key: "premium",
    label: "CEO / premium brand",
    score: 84,
    package: "Executive Website Audit",
    route: "executive-website-audit/",
    blueprint: ["Authority narrative", "Leadership proof", "Selective inquiry path", "Global buyer signal"],
  },
  {
    key: "campaign",
    label: "Campaign or launch",
    score: 68,
    package: "Conversion Landing Page",
    route: "landing-page-design/",
    blueprint: ["One offer", "One promise", "Risk reversal", "Focused conversion path"],
  },
  {
    key: "ops",
    label: "Business with messy operations",
    score: 91,
    package: "Digital System Build",
    route: "digital-system-build/",
    blueprint: ["Lead intake", "Workflow dashboard", "Follow-up automation", "Owner command view"],
  },
];

const caseRooms = [
  {
    label: "Room 01",
    title: "Authority Website Room",
    href: "work/website-design-portfolio/",
    detail: "Problem, positioning, buyer belief, proof architecture, and final conversion path in one guided case-study environment.",
  },
  {
    label: "Room 02",
    title: "Digital Command Room",
    href: "work/foundry-baseball-app/",
    detail: "Turns software work into a mission room: system objective, interface logic, operational flow, and what the build unlocks.",
  },
  {
    label: "Room 03",
    title: "Conversion Page Room",
    href: "work/landing-page-systems/",
    detail: "Shows how one offer becomes a controlled page with sharper copy, trust sequencing, and a decisive CTA.",
  },
];

const osSignals = [
  ["New audit requests", "+04"],
  ["Qualified rebuild leads", "07"],
  ["Follow-up tasks", "12"],
  ["Pages needing proof", "03"],
];

export default function StandoutGrowthSuite({ basePath = "/" }: Props) {
  const safeBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
  const [url, setUrl] = useState("examplebusiness.com");
  const [profile, setProfile] = useState(businessProfiles[0].key);
  const [problem, setProblem] = useState("weak-trust");

  const activeProfile = useMemo(
    () => businessProfiles.find((item) => item.key === profile) ?? businessProfiles[0],
    [profile],
  );

  const verdict = useMemo(() => {
    if (problem === "weak-trust") return "The site needs proof before it asks for action.";
    if (problem === "no-leads") return "The lead path is too soft. The CTA needs a stronger reason to move now.";
    if (problem === "outdated") return "The first impression is under-selling the business before the offer is even read.";
    return "The website should become an operating system, not just a public brochure.";
  }, [problem]);

  return (
    <div className="standout-growth-suite" data-standout-growth-suite>
      <section className="audit-engine-panel" data-growth-audit-engine aria-labelledby="audit-engine-title">
        <div className="audit-engine-copy">
          <p className="eyebrow">Move 01 / Diagnostic Engine</p>
          <h3 id="audit-engine-title">Tootie Website Growth Audit</h3>
          <p>
            A branded audit engine that turns a visitor&apos;s URL into a client-ready handoff: verdict, business impact, service fit, priority fixes, and the next best Tootie Designs path.
          </p>
          <div className="audit-engine-actions">
            <a className="button primary" href={`${safeBase}website-audit/`} data-event="audit_cta_click" data-label="standout audit engine">Start the audit</a>
            <a className="button secondary" href={`${safeBase}sample-website-audit/`} data-event="sample_audit_click" data-label="standout sample report">View sample report</a>
          </div>
        </div>
        <div className="audit-report-card" aria-label="Sample audit report preview">
          <div className="report-topline">
            <span>Live report preview</span>
            <strong>{activeProfile.score}/100</strong>
          </div>
          <label>
            Website or business page
            <input value={url} onChange={(event) => setUrl(event.target.value)} aria-label="Website audit preview URL" />
          </label>
          <div className="audit-meter" style={{ "--audit-score": `${activeProfile.score}%` } as React.CSSProperties} aria-hidden="true"><span></span></div>
          <h4>{verdict}</h4>
          <p>Recommended Tootie path: <a href={`${safeBase}${activeProfile.route}`}>{activeProfile.package}</a></p>
        </div>
      </section>

      <section className="case-room-grid" aria-labelledby="case-room-title">
        <div className="section-heading split compact-heading">
          <div>
            <p className="eyebrow">Move 02 / Proof Rooms</p>
            <h3 id="case-room-title">Cinematic Case Study Rooms</h3>
          </div>
          <p>Instead of flat portfolio cards, each case study can become a room with mission objective, strategy, proof, buyer belief, and next-step CTA.</p>
        </div>
        <div className="case-room-cards">
          {caseRooms.map((room) => (
            <a className="case-study-room-card" href={`${safeBase}${room.href}`} data-case-study-room key={room.title}>
              <span>{room.label}</span>
              <h4>{room.title}</h4>
              <p>{room.detail}</p>
              <strong>Enter case room</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="rebuild-simulator" data-rebuild-simulator aria-labelledby="rebuild-simulator-title">
        <div>
          <p className="eyebrow">Move 03 / Buyer Preview</p>
          <h3 id="rebuild-simulator-title">Website Rebuild Simulator</h3>
          <p>Visitors choose their business type and pain point, then see the blueprint Tootie Designs would build around their buyer behavior.</p>
          <div className="simulator-controls" aria-label="Rebuild simulator controls">
            {businessProfiles.map((item) => (
              <button type="button" className={item.key === profile ? "active" : ""} onClick={() => setProfile(item.key)} key={item.key}>
                {item.label}
              </button>
            ))}
          </div>
          <label className="simulator-select">
            Current website problem
            <select value={problem} onChange={(event) => setProblem(event.target.value)}>
              <option value="weak-trust">People do not trust it fast enough</option>
              <option value="no-leads">Traffic is not turning into leads</option>
              <option value="outdated">It looks outdated or too generic</option>
              <option value="ops">The business needs systems behind the site</option>
            </select>
          </label>
        </div>
        <article className="simulator-output">
          <span>Recommended blueprint</span>
          <h4>{activeProfile.package}</h4>
          <p>{verdict}</p>
          <ul>
            {activeProfile.blueprint.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="project-link" href={`${safeBase}${activeProfile.route}`} data-event="service_page_click" data-label="rebuild simulator route">Explore this rebuild path</a>
        </article>
      </section>

      <section className="studio-os-preview" data-studio-os-preview aria-labelledby="studio-os-title">
        <div className="studio-os-screen" aria-hidden="true">
          <div className="os-window-bar"><span></span><span></span><span></span></div>
          <div className="os-signal-grid">
            {osSignals.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="os-pipeline">
            <span style={{ width: "34%" }}></span>
            <span style={{ width: "64%" }}></span>
            <span style={{ width: "48%" }}></span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Move 04 / System Behind the Site</p>
          <h3 id="studio-os-title">Studio OS Dashboard Preview</h3>
          <p>The premium lane: websites that feed dashboards, lead review, client intake, automations, and internal tools. It positions Tootie Designs beyond website decoration.</p>
          <a className="button secondary" href={`${safeBase}digital-system-build/`} data-event="service_page_click" data-label="studio os systems">Explore digital systems</a>
        </div>
      </section>

      <section className="homepage-rhythm-map" data-homepage-rhythm-map aria-labelledby="rhythm-map-title">
        <p className="eyebrow">Move 05 / Movie Trailer Rhythm</p>
        <h3 id="rhythm-map-title">Homepage Rhythm Map</h3>
        <div className="rhythm-steps">
          {[
            ["Hook", "Premium websites and systems that sell."],
            ["Threat", "Your current site may be costing trust."],
            ["Diagnosis", "Growth signals and audit engine."],
            ["Transformation", "Rebuild simulator and proof rooms."],
            ["Action", "Free audit, cleanup sprint, redesign, or system build."],
          ].map(([step, copy]) => (
            <article key={step}>
              <span>{step}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
