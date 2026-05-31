import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

type Props = {
  basePath?: string;
  deploymentBase?: string;
};

const businessTypes = [
  "Local service business",
  "Contractor / home service",
  "Salon / barber / beauty",
  "Restaurant / hospitality",
  "Gym / fitness",
  "Consultant / professional service",
  "CEO / founder / premium brand",
  "Custom software / operations-heavy business",
];

const goals = ["More leads", "More bookings", "More sales", "More credibility", "Premium authority", "Better internal systems"];
const painPoints = ["Outdated first impression", "Not enough leads", "Weak proof or reviews", "Mobile experience feels rough", "Offer is unclear", "Need software behind the website"];
const timelines = ["Just researching", "Ready this month", "Need a fast launch", "Planning next quarter"];
const budgetComfort = ["Need guidance first", "$500 - $750 cleanup sprint", "$750 - $1,500 landing page", "$1,500 - $3,500 website build", "$3,500+ larger system"];

function clampScore(score: number) {
  return Math.max(34, Math.min(96, score));
}

export default function AuditReportGenerator({ basePath = "/", deploymentBase = "https://tootiedesigns.com" }: Props) {
  const safeBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
  const [website, setWebsite] = useState("https://examplebusiness.com");
  const [businessType, setBusinessType] = useState(businessTypes[0]);
  const [goal, setGoal] = useState(goals[0]);
  const [pain, setPain] = useState(painPoints[0]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [budget, setBudget] = useState(budgetComfort[0]);
  const [email, setEmail] = useState("");

  const report = useMemo(() => {
    const isSystem = businessType.includes("software") || pain.includes("software") || goal.includes("systems") || budget.includes("$3,500+");
    const isPremium = businessType.includes("CEO") || goal.includes("Premium");
    const isLanding = goal.includes("bookings") || goal.includes("sales") || businessType.includes("Restaurant") || businessType.includes("Gym");
    const isCleanup = budget.includes("$500") || timeline.includes("fast") || pain.includes("Mobile");

    const clarity = clampScore(68 - (pain.includes("Offer") ? 22 : 0) + (isPremium ? 6 : 0));
    const trust = clampScore(64 - (pain.includes("proof") ? 24 : 0) + (isPremium ? 4 : 0));
    const mobile = clampScore(70 - (pain.includes("Mobile") ? 26 : 0) - (timeline.includes("fast") ? 4 : 0));
    const proof = clampScore(58 - (pain.includes("proof") ? 20 : 0) + (businessType.includes("Consultant") ? 5 : 0));
    const leadPath = clampScore(62 - (pain.includes("leads") ? 24 : 0) + (goal.includes("leads") ? 2 : 0));
    const overall = Math.round((clarity + trust + mobile + proof + leadPath) / 5);

    const recommendedPackage = isSystem
      ? "Digital System Build"
      : isPremium
        ? "Executive Website Audit"
        : isLanding
          ? "Conversion Landing Page"
          : isCleanup
            ? "Website Cleanup Sprint"
            : "Website Redesign";

    const route = recommendedPackage === "Digital System Build"
      ? "digital-system-build/"
      : recommendedPackage === "Executive Website Audit"
        ? "executive-website-audit/"
        : recommendedPackage === "Conversion Landing Page"
          ? "landing-page-design/"
          : recommendedPackage === "Website Cleanup Sprint"
            ? "website-cleanup-sprint/"
            : "website-redesign/";

    const verdict = overall < 55
      ? "The website is likely losing trust before visitors understand why they should act."
      : overall < 74
        ? "The website has useful pieces, but the buyer path needs sharper proof, clearer CTAs, and stronger sequencing."
        : "The website has a credible foundation. The next win is tightening conversion pressure and packaging the offer more clearly.";

    const whyItMatters = goal.includes("leads")
      ? "Lead volume is usually not only a traffic problem. If clarity, proof, and the next step are weak, interested visitors leave without raising their hand."
      : goal.includes("credibility") || goal.includes("Premium")
        ? "Premium buyers judge seriousness fast. The website has to create authority before it asks for a call."
        : "The website should reduce friction for the decision the visitor already wants to make: book, buy, inquire, or trust the business enough to continue.";

    const priorityFixes = [
      pain.includes("Outdated") ? "Rebuild the hero so the business looks current, specific, and credible in the first five seconds." : "Clarify the hero around audience, outcome, offer, and one primary action.",
      pain.includes("proof") ? "Move reviews, examples, credentials, process, and visual proof before the main ask." : "Add a proof strip before visitors reach the form or booking CTA.",
      pain.includes("Mobile") ? "Rework the mobile path with larger tap targets, tighter section rhythm, and repeated CTAs." : "Compress the mobile decision path so proof and action arrive sooner.",
      isSystem ? "Map the lead intake and follow-up workflow behind the site so inquiries become an operating system." : "Route visitors into the lowest-friction next step: audit, cleanup, landing page, or redesign.",
    ];

    const leadSignals = [
      `${businessType} visitor with goal: ${goal}`,
      `Primary pain: ${pain}`,
      `Timeline signal: ${timeline}`,
      `Budget posture: ${budget}`,
      website ? `Submitted website/page: ${website}` : "No website submitted yet",
    ];

    const conversationStarters = [
      `What is the one action this website should make easier: ${goal.toLowerCase()}, quote requests, bookings, or authority?`,
      `Where do prospects currently hesitate before they contact you?`,
      `If we fixed only the first screen, mobile path, and proof stack this month, would that move the business forward?`,
    ];

    const questionsToAsk = [
      "What would you change first if this were your own website?",
      "Should I start with a cleanup sprint, landing page, full redesign, or digital system?",
      "What proof should appear before someone is asked to contact us?",
    ];

    return {
      scores: [
        ["First-screen clarity", clarity],
        ["Premium trust", trust],
        ["Mobile decision path", mobile],
        ["Proof architecture", proof],
        ["Lead path", leadPath],
      ] as [string, number][],
      overall,
      recommendedPackage,
      route,
      verdict,
      whyItMatters,
      priorityFixes,
      leadSignals,
      conversationStarters,
      questionsToAsk,
      suggestedNextStep: `Review the ${recommendedPackage} path, then send the generated brief so Tootie Designs can confirm the fastest win.`,
    };
  }, [website, businessType, goal, pain, timeline, budget]);

  const joinedFixes = report.priorityFixes.join(" | ");
  const joinedSignals = report.leadSignals.join(" | ");
  const joinedStarters = report.conversationStarters.join(" | ");

  return (
    <div className="audit-generator-shell" data-audit-report-generator>
      <form className="project-intelligence-intake" data-project-intelligence-intake onSubmit={(event) => event.preventDefault()}>
        <div>
          <p className="eyebrow">Project Intelligence Intake</p>
          <h3>Generate My Growth Report</h3>
          <p>Answer the quick brief. The report updates instantly with a plain-English verdict, scorecard, recommended Tootie package, and sales handoff context.</p>
        </div>
        <label>
          Website or business page
          <input value={website} onChange={(event) => setWebsite(event.target.value)} placeholder="https://yourbusiness.com" />
        </label>
        <label>
          Business type
          <select value={businessType} onChange={(event) => setBusinessType(event.target.value)}>
            {businessTypes.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Main goal
          <select value={goal} onChange={(event) => setGoal(event.target.value)}>
            {goals.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Current pain
          <select value={pain} onChange={(event) => setPain(event.target.value)}>
            {painPoints.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Timeline
          <select value={timeline} onChange={(event) => setTimeline(event.target.value)}>
            {timelines.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          Budget comfort
          <select value={budget} onChange={(event) => setBudget(event.target.value)}>
            {budgetComfort.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
      </form>

      <article className="generated-audit-report" data-generated-audit-report aria-live="polite">
        <div className="audit-report-header">
          <div>
            <p className="eyebrow">Tootie Website Growth Audit</p>
            <h3>Tootie Handoff Brief</h3>
          </div>
          <strong>{report.overall}/100</strong>
        </div>

        <div className="audit-generator-scorecard" data-audit-scorecard>
          {report.scores.map(([label, score]) => (
            <div key={label} style={{ "--score": `${score}%` } as CSSProperties}>
              <span>{label}</span>
              <b>{score}</b>
              <i aria-hidden="true"><em></em></i>
            </div>
          ))}
        </div>

        <section className="handoff-brief-panel" data-tootie-handoff-brief>
          <span>Plain-English verdict</span>
          <p>{report.verdict}</p>
          <span>Why it matters</span>
          <p>{report.whyItMatters}</p>
        </section>

        <section className="recommended-package-panel" data-recommended-package>
          <span>Recommended Tootie Package</span>
          <h4>{report.recommendedPackage}</h4>
          <span>Suggested Next Step</span>
          <p>{report.suggestedNextStep}</p>
          <a className="project-link" href={`${safeBase}${report.route}`}>Explore recommended path</a>
        </section>

        <div className="audit-handoff-grids">
          <section data-priority-fix-sequence>
            <h4>Priority Fix Sequence</h4>
            <ol>{report.priorityFixes.map((item) => <li key={item}>{item}</li>)}</ol>
          </section>
          <section data-lead-qualification-signals>
            <h4>Lead Qualification Signals</h4>
            <ul>{report.leadSignals.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <h4>Sales Conversation Starters</h4>
            <ul>{report.conversationStarters.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section>
            <h4>What To Ask Tootie</h4>
            <ul>{report.questionsToAsk.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>

        <form className="audit-generator-handoff-form" method="post" action="https://formsubmit.co/tootiedesigns18@gmail.com" data-event="audit_form_submit">
          <input type="hidden" name="_subject" value="New Tootie Website Growth Audit Report Request" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={`${deploymentBase}/thanks/`} />
          <input type="hidden" name="lead_type" value="Tootie Website Growth Audit generated report" />
          <input type="hidden" name="source_page" value="Website audit report generator" />
          <input type="hidden" name="website_or_page" value={website} />
          <input type="hidden" name="business_type" value={businessType} />
          <input type="hidden" name="goal" value={goal} />
          <input type="hidden" name="pain_point" value={pain} />
          <input type="hidden" name="timeline" value={timeline} />
          <input type="hidden" name="budget_comfort" value={budget} />
          <input type="hidden" name="recommended_tootie_package" value={report.recommendedPackage} />
          <input type="hidden" name="plain_english_verdict" value={report.verdict} />
          <input type="hidden" name="priority_fix_sequence" value={joinedFixes} />
          <input type="hidden" name="lead_qualification_signals" value={joinedSignals} />
          <input type="hidden" name="sales_conversation_starters" value={joinedStarters} />
          <input type="hidden" name="suggested_next_step" value={report.suggestedNextStep} />
          <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" />
          <label>
            Where should Tootie send the full review?
            <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@business.com" required />
          </label>
          <button className="button primary" type="submit" data-event="audit_form_submit" data-label="generated audit report handoff">Send This Brief to Tootie Designs</button>
          <a className="button secondary" href={`${safeBase}sample-website-audit/`}>Compare with sample report</a>
        </form>
      </article>
    </div>
  );
}
