import { useMemo, useState, type CSSProperties } from "react";

type DiagnosticKey = "clarity" | "trust" | "mobile" | "proof" | "leadPath";

type DiagnosticInput = {
  key: DiagnosticKey;
  label: string;
  shortLabel: string;
  weak: string;
  strong: string;
};

const diagnosticInputs: DiagnosticInput[] = [
  {
    key: "clarity",
    label: "First-screen clarity",
    shortLabel: "Clarity",
    weak: "Visitors have to study the site before understanding the offer.",
    strong: "A serious buyer understands the business and next step in seconds.",
  },
  {
    key: "trust",
    label: "Premium trust signal",
    shortLabel: "Trust",
    weak: "The site looks smaller or less serious than the actual business.",
    strong: "The visual system feels premium, deliberate, and buyer-ready.",
  },
  {
    key: "mobile",
    label: "Mobile decision path",
    shortLabel: "Mobile",
    weak: "Buttons, spacing, and proof feel cramped on a phone.",
    strong: "The mobile path is clean, fast, and easy to act on.",
  },
  {
    key: "proof",
    label: "Visible proof architecture",
    shortLabel: "Proof",
    weak: "Testimonials, work, credentials, or outcomes are buried or absent.",
    strong: "Proof appears before the visitor has to make a decision.",
  },
  {
    key: "leadPath",
    label: "Lead capture pressure",
    shortLabel: "Lead Path",
    weak: "The site asks for a call before earning enough confidence.",
    strong: "The CTA feels low-friction, specific, and matched to buyer readiness.",
  },
];

const initialScores: Record<DiagnosticKey, number> = {
  clarity: 42,
  trust: 54,
  mobile: 48,
  proof: 36,
  leadPath: 44,
};

function getSignal(score: number) {
  if (score < 45) return "Critical drag";
  if (score < 68) return "Leaking trust";
  if (score < 84) return "Close, but underpowered";
  return "Buyer-ready";
}

function getRecommendation(score: number, scores: Record<DiagnosticKey, number>) {
  const weakest = Object.entries(scores).sort((a, b) => a[1] - b[1])[0]?.[0] as DiagnosticKey | undefined;

  if (score < 48) {
    return {
      title: "Start with the free audit",
      text: "The site is likely losing trust before visitors understand the offer. The first move is a direct first-impression audit before spending on a full build.",
      cta: "Request the Website Audit",
      href: "website-audit/",
      badge: weakest ? `Weakest signal: ${diagnosticInputs.find((input) => input.key === weakest)?.shortLabel}` : "Audit first",
    };
  }

  if (score < 64) {
    return {
      title: "Cleanup sprint before the rebuild",
      text: "There is probably enough foundation to tighten the hero, CTA, mobile readability, and proof placement before deciding whether the whole site needs to be replaced.",
      cta: "Explore Cleanup Sprint",
      href: "website-cleanup-sprint/",
      badge: "Fastest practical win",
    };
  }

  if (scores.leadPath < 62 || scores.clarity < 62) {
    return {
      title: "Conversion landing page",
      text: "The brand may not need every page rebuilt first. A focused offer page can turn one service, campaign, or audience into a cleaner inquiry path.",
      cta: "Explore Landing Pages",
      href: "landing-page-design/",
      badge: "Best for one focused offer",
    };
  }

  return {
    title: "Premium redesign or digital system",
    text: "The public face is close enough that the next leap should be strategic: stronger authority, deeper proof, or an operating system behind the leads.",
    cta: "Explore Global Redesign",
    href: "global-website-redesign/",
    badge: "Scale the trust layer",
  };
}

type GrowthSignalConsoleProps = {
  basePath?: string;
};

export default function GrowthSignalConsole({ basePath = "/" }: GrowthSignalConsoleProps) {
  const [scores, setScores] = useState(initialScores);

  const totalScore = useMemo(() => {
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    return Math.round(total / diagnosticInputs.length);
  }, [scores]);

  const recommendation = useMemo(() => getRecommendation(totalScore, scores), [scores, totalScore]);
  const conicValue = `${Math.max(0, Math.min(100, totalScore)) * 3.6}deg`;
  const buildHref = (href: string) => `${basePath}${href}`;

  return (
    <div className="growth-console" data-score={totalScore}>
      <div className="growth-console-stage" aria-label="Interactive website growth diagnostic">
        <div className="growth-radar" style={{ "--score-angle": conicValue } as CSSProperties}>
          <div className="growth-radar-core">
            <span>Signal Score</span>
            <strong>{totalScore}</strong>
            <small>{getSignal(totalScore)}</small>
          </div>
          {diagnosticInputs.map((input, index) => (
            <span key={input.key} className={`radar-node radar-node-${index + 1}`}>
              {input.shortLabel}
            </span>
          ))}
        </div>
        <div className="growth-readout">
          <span>{recommendation.badge}</span>
          <h3>{recommendation.title}</h3>
          <p>{recommendation.text}</p>
          <div className="growth-actions">
            <a className="button primary" href={buildHref(recommendation.href)} data-event="growth_console_cta_click" data-label={recommendation.title}>
              {recommendation.cta}
            </a>
            <a className="button secondary" href={buildHref("sample-website-audit/")} data-event="sample_audit_click" data-label="growth console sample audit">
              Preview Sample Audit
            </a>
          </div>
        </div>
      </div>

      <div className="growth-controls" aria-label="Adjust website signal strength">
        <div className="growth-controls-header">
          <strong>Drag the signal sliders</strong>
          <span>Watch the recommended path change in real time.</span>
        </div>
        {diagnosticInputs.map((input) => (
          <label key={input.key} className="growth-control">
            <span>
              <strong>{input.label}</strong>
              <em>{scores[input.key]} / 100</em>
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={scores[input.key]}
              onChange={(event) =>
                setScores((current) => ({
                  ...current,
                  [input.key]: Number(event.target.value),
                }))
              }
              aria-label={`${input.label} score`}
            />
            <small>{scores[input.key] < 68 ? input.weak : input.strong}</small>
          </label>
        ))}
      </div>
    </div>
  );
}
