import { useMemo, useState } from "react";
import type { CSSProperties, FormEvent } from "react";

type WowFeatureSuiteProps = {
  basePath?: string;
};

type MissionKey = "credibility" | "leads" | "launch" | "system";
type UrgencyKey = "audit" | "sprint" | "build";
type BuildPathKey = "audit" | "cleanup" | "landing" | "redesign" | "system";

const missionOptions: Array<{ key: MissionKey; label: string; signal: string }> = [
  { key: "credibility", label: "Look premium fast", signal: "Authority and first-impression rebuild" },
  { key: "leads", label: "Generate better leads", signal: "Offer clarity, proof, and inquiry path" },
  { key: "launch", label: "Launch something new", signal: "Campaign page or full website launch" },
  { key: "system", label: "Build the machine", signal: "Dashboard, portal, automation, or custom system" },
];

const urgencyOptions: Array<{ key: UrgencyKey; label: string; signal: string }> = [
  { key: "audit", label: "I need the diagnosis first", signal: "Start with the free audit" },
  { key: "sprint", label: "I need visible cleanup quickly", signal: "Cleanup sprint is the bridge offer" },
  { key: "build", label: "I am ready for a serious build", signal: "Full redesign, landing page, or system build" },
];

const buildPaths: Array<{
  key: BuildPathKey;
  label: string;
  route: string;
  headline: string;
  copy: string;
  price: string;
}> = [
  {
    key: "audit",
    label: "Not sure yet",
    route: "website-audit/",
    headline: "Free Website Audit",
    copy: "Best when the business knows the site feels off but needs an expert read before choosing a paid path.",
    price: "Free first step",
  },
  {
    key: "cleanup",
    label: "Tighten the current site",
    route: "website-cleanup-sprint/",
    headline: "Website Cleanup Sprint",
    copy: "Best when the website has decent bones but needs sharper copy, CTA flow, proof placement, and mobile polish.",
    price: "$500 - $750",
  },
  {
    key: "landing",
    label: "Push one offer",
    route: "landing-page-design/",
    headline: "Conversion Landing Page",
    copy: "Best for a campaign, service, product, booking push, or local lead offer that needs one controlled path.",
    price: "Starting at $750",
  },
  {
    key: "redesign",
    label: "Rebuild the brand presence",
    route: "website-redesign/",
    headline: "Website Redesign",
    copy: "Best when the first impression, structure, visual trust, and lead path need to be rebuilt around a serious buyer.",
    price: "Starting at $1,500",
  },
  {
    key: "system",
    label: "Build custom software",
    route: "digital-system-build/",
    headline: "Digital System Build",
    copy: "Best when the website needs to connect to dashboards, automations, portals, internal tools, or operational workflows.",
    price: "Custom quote",
  },
];

const vaultCards = [
  {
    label: "First Impression",
    title: "A buyer should understand the offer before they start scrolling.",
    proof: "Hero hierarchy, outcome copy, and visual seriousness are checked before decoration.",
    route: "sample-website-audit/",
  },
  {
    label: "Trust Sequence",
    title: "Proof has to appear before the visitor runs out of patience.",
    proof: "Case studies, credentials, screenshots, services, and next steps get arranged into a believable path.",
    route: "work/website-design-portfolio/",
  },
  {
    label: "Lead Path",
    title: "The site should tell interested people exactly what to do next.",
    proof: "Audit CTAs, service routes, forms, and reassurance copy remove hesitation from the next click.",
    route: "website-audit/",
  },
];

function normalizeBasePath(basePath: string) {
  return basePath.endsWith("/") ? basePath : `${basePath}/`;
}

function signalFromUrl(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return {
      title: "Autopsy chamber idle",
      verdict: "Enter a site or business page and the chamber stages the issues Tootie Designs would inspect first.",
      risk: "Awaiting target",
      points: ["First-screen clarity", "Mobile trust", "Proof placement"],
    };
  }

  const hasProtocol = /^https?:\/\//i.test(trimmed);
  const hasSocial = /facebook|instagram|linkedin|tiktok|square|wix|godaddy|linktr/i.test(trimmed);
  const hasDeepPath = trimmed.split("/").filter(Boolean).length > 2;

  return {
    title: hasProtocol ? "Target acquired" : "Target needs a cleaner public URL",
    verdict: hasSocial
      ? "This looks like a social or platform page. The audit should check whether buyers are being sent to a controlled website experience."
      : hasDeepPath
        ? "This appears to be a deeper page. The audit should compare the landing path against the homepage and inquiry flow."
        : "This looks ready for a first-impression pass across clarity, trust, mobile flow, proof, and CTA strength.",
    risk: hasProtocol ? "Audit-ready" : "URL cleanup recommended",
    points: hasSocial
      ? ["Platform dependency", "Owned-site credibility", "Booking handoff"]
      : ["Hero message", "Trust evidence", "Lead capture"],
  };
}

export default function WowFeatureSuite({ basePath = "/" }: WowFeatureSuiteProps) {
  const root = normalizeBasePath(basePath);
  const [mission, setMission] = useState<MissionKey>("leads");
  const [urgency, setUrgency] = useState<UrgencyKey>("audit");
  const [siteTarget, setSiteTarget] = useState("");
  const [reveal, setReveal] = useState(58);
  const [path, setPath] = useState<BuildPathKey>("audit");
  const [briefGenerated, setBriefGenerated] = useState(false);

  const missionChoice = missionOptions.find((item) => item.key === mission) ?? missionOptions[0];
  const urgencyChoice = urgencyOptions.find((item) => item.key === urgency) ?? urgencyOptions[0];
  const activePath = buildPaths.find((item) => item.key === path) ?? buildPaths[0];
  const autopsy = useMemo(() => signalFromUrl(siteTarget), [siteTarget]);

  const recommendedPath = useMemo<BuildPathKey>(() => {
    if (mission === "system") return "system";
    if (mission === "launch") return urgency === "build" ? "redesign" : "landing";
    if (urgency === "sprint") return "cleanup";
    if (urgency === "build") return mission === "leads" ? "landing" : "redesign";
    return "audit";
  }, [mission, urgency]);

  const recommended = buildPaths.find((item) => item.key === recommendedPath) ?? buildPaths[0];

  function buildHref(route: string) {
    return `${root}${route}`;
  }

  function handleBriefSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBriefGenerated(true);
    setPath(recommendedPath);
  }

  return (
    <div className="wow-suite" data-wow-feature-suite>
      <section className="mission-brief-console" aria-labelledby="mission-brief-title">
        <div className="wow-panel-copy">
          <p className="eyebrow">01 / Project Mission Brief</p>
          <h2 id="mission-brief-title">Build a mission brief before the first sales call.</h2>
          <p>
            Visitors do not get a dead contact form. They choose the business objective, the urgency, and the likely service lane — then the site turns that intent into a cleaner Tootie Designs next step.
          </p>
        </div>
        <form className="mission-form" data-mission-brief-form onSubmit={handleBriefSubmit}>
          <fieldset>
            <legend>Primary mission</legend>
            <div className="mission-choice-grid">
              {missionOptions.map((option) => (
                <button
                  key={option.key}
                  className={option.key === mission ? "active" : ""}
                  type="button"
                  onClick={() => setMission(option.key)}
                  aria-pressed={option.key === mission}
                >
                  <strong>{option.label}</strong>
                  <span>{option.signal}</span>
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Urgency signal</legend>
            <div className="mission-choice-grid compact">
              {urgencyOptions.map((option) => (
                <button
                  key={option.key}
                  className={option.key === urgency ? "active" : ""}
                  type="button"
                  onClick={() => setUrgency(option.key)}
                  aria-pressed={option.key === urgency}
                >
                  <strong>{option.label}</strong>
                  <span>{option.signal}</span>
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mission-output" aria-live="polite">
            <span>Generated brief</span>
            <h3>{briefGenerated ? recommended.headline : "Awaiting mission lock"}</h3>
            <p>
              {briefGenerated
                ? `${missionChoice.signal}. ${urgencyChoice.signal}. Recommended path: ${recommended.headline}.`
                : "Choose the mission and urgency, then lock the brief to see the most logical first move."}
            </p>
            <div className="wow-action-row">
              <button className="button primary" type="submit" data-event="mission_brief_lock" data-label="mission brief builder">
                Lock Mission Brief
              </button>
              <a className="button secondary" href={buildHref(recommended.route)} data-event="service_page_click" data-label="mission brief recommendation">
                Open {recommended.headline}
              </a>
            </div>
          </div>
        </form>
      </section>

      <section className="before-after-theater" aria-labelledby="reality-slider-title">
        <div className="wow-panel-copy">
          <p className="eyebrow">02 / Before / After Reality Slider</p>
          <h2 id="reality-slider-title">Drag the rebuild line from weak impression to premium lead path.</h2>
          <p>
            The slider makes transformation visible: unclear websites lose belief; engineered websites stack message, proof, and action in the right order.
          </p>
        </div>
        <div className="reality-slider" style={{ "--reveal": `${reveal}%` } as CSSProperties}>
          <div className="reality-stage" aria-hidden="true">
            <div className="reality-site before">
              <span>Before</span>
              <strong>Generic headline</strong>
              <p>Buried proof. Weak CTA. No clear reason to trust the next step.</p>
              <i></i><i></i><i></i>
            </div>
            <div className="reality-site after">
              <span>After</span>
              <strong>Premium offer path</strong>
              <p>Outcome-led hero, proof sequence, mobile trust, and decisive audit CTA.</p>
              <i></i><i></i><i></i>
            </div>
            <div className="reality-divider"></div>
          </div>
          <label>
            Transformation intensity
            <input
              type="range"
              min="0"
              max="100"
              value={reveal}
              onChange={(event) => setReveal(Number(event.currentTarget.value))}
              aria-label="Control the before and after website transformation"
            />
          </label>
        </div>
      </section>

      <section className="autopsy-chamber" aria-labelledby="autopsy-title">
        <div className="wow-panel-copy">
          <p className="eyebrow">03 / Website Autopsy Chamber</p>
          <h2 id="autopsy-title">Stage the first diagnostic before asking for the full audit.</h2>
          <p>
            This is not pretending to run a full backend scan yet. It primes the buyer with the exact categories Tootie Designs will inspect when the real audit starts.
          </p>
        </div>
        <div className="autopsy-console">
          <label>
            Website or business page
            <input
              data-autopsy-input
              value={siteTarget}
              onChange={(event) => setSiteTarget(event.currentTarget.value)}
              placeholder="https://yourbusiness.com"
              type="text"
            />
          </label>
          <div className="autopsy-readout" aria-live="polite">
            <span>{autopsy.risk}</span>
            <h3>{autopsy.title}</h3>
            <p>{autopsy.verdict}</p>
            <ul>
              {autopsy.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <a className="button primary" href={buildHref("website-audit/")} data-event="audit_cta_click" data-label="autopsy chamber audit">
              Request the Real Audit
            </a>
          </div>
        </div>
      </section>

      <section className="build-path-selector" aria-labelledby="build-path-title">
        <div className="wow-panel-copy">
          <p className="eyebrow">04 / Choose Your Build Path</p>
          <h2 id="build-path-title">Route every visitor into the right money path.</h2>
          <p>
            Buyers should not guess whether they need an audit, cleanup sprint, landing page, redesign, or custom system. The site should make the next move feel obvious.
          </p>
        </div>
        <div className="build-path-grid" role="list" aria-label="Tootie Designs service path options">
          {buildPaths.map((item) => (
            <button
              key={item.key}
              className={item.key === path ? "active" : ""}
              type="button"
              data-build-path-choice={item.key}
              onClick={() => setPath(item.key)}
              aria-pressed={item.key === path}
            >
              <span>{item.label}</span>
              <strong>{item.headline}</strong>
            </button>
          ))}
        </div>
        <article className="build-path-output">
          <span>{activePath.price}</span>
          <h3>{activePath.headline}</h3>
          <p>{activePath.copy}</p>
          <a className="button secondary" href={buildHref(activePath.route)} data-event="service_page_click" data-label={`build path ${activePath.headline}`}>
            Explore This Path
          </a>
        </article>
      </section>

      <section className="proof-vault" aria-labelledby="proof-vault-title">
        <div className="wow-panel-copy">
          <p className="eyebrow">05 / Proof Vault</p>
          <h2 id="proof-vault-title">Unlock the receipts behind premium website work.</h2>
          <p>
            The vault reframes proof as a buyer-confidence system: what changed, why it matters, and which service path creates that kind of trust.
          </p>
        </div>
        <div className="proof-vault-grid">
          {vaultCards.map((card, index) => (
            <a
              key={card.label}
              className="proof-vault-card"
              href={buildHref(card.route)}
              data-proof-vault-card
              data-event="proof_vault_click"
              data-label={card.label}
            >
              <span>{String(index + 1).padStart(2, "0")} / {card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.proof}</p>
              <strong>Unlock proof path</strong>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
