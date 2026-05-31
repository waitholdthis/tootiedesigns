import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

type Props = {
  basePath?: string;
};

const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);

export default function RevenueLeakOracle({ basePath = "/" }: Props) {
  const safeBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
  const [visitors, setVisitors] = useState(1200);
  const [leadValue, setLeadValue] = useState(900);
  const [currentRate, setCurrentRate] = useState(1.2);
  const [targetRate, setTargetRate] = useState(3.8);

  const report = useMemo(() => {
    const currentLeads = Math.round((visitors * currentRate) / 100);
    const targetLeads = Math.round((visitors * targetRate) / 100);
    const lostInquiries = Math.max(0, targetLeads - currentLeads);
    const monthlyLeak = lostInquiries * leadValue;
    const annualLeak = monthlyLeak * 12;
    const pressure = Math.min(100, Math.round((monthlyLeak / 50000) * 100));

    const recommendation = annualLeak >= 300000
      ? {
          name: "Global Website Redesign",
          href: "global-website-redesign/",
          reason: "The leak is too large for cosmetic fixes. The offer, proof sequence, mobile flow, and inquiry architecture need a serious rebuild.",
        }
      : annualLeak >= 90000
        ? {
            name: "Website Redesign",
            href: "website-redesign/",
            reason: "The site likely has enough demand to justify a conversion-first rebuild around trust, proof, and a sharper buyer path.",
          }
        : annualLeak >= 30000
          ? {
              name: "Conversion Landing Page",
              href: "landing-page-design/",
              reason: "A focused page for one offer can tighten the message, remove distraction, and turn more qualified visitors into inquiries.",
            }
          : {
              name: "Website Cleanup Sprint",
              href: "website-cleanup-sprint/",
              reason: "The fastest win is likely a concentrated cleanup: hero clarity, CTA pressure, mobile readability, and stronger proof placement.",
            };

    const verdict = annualLeak >= 300000
      ? "This is not a website problem. This is a revenue-control problem hiding in the first impression."
      : annualLeak >= 90000
        ? "The site is probably leaking enough qualified demand to make a serious redesign rational, not optional."
        : annualLeak >= 30000
          ? "The gap is large enough that one sharper landing path could pay for itself quickly if the offer is real."
          : "The leak is still worth fixing because trust improvements compound across every referral, ad click, and search visitor.";

    return {
      currentLeads,
      targetLeads,
      lostInquiries,
      monthlyLeak,
      annualLeak,
      pressure,
      recommendation,
      verdict,
    };
  }, [visitors, leadValue, currentRate, targetRate]);

  return (
    <div className="revenue-oracle" data-revenue-leak-oracle>
      <div className="oracle-stage" aria-label="Website money leak estimate">
        <div className="oracle-orb" style={{ "--pressure": `${report.pressure}%` } as CSSProperties} aria-hidden="true">
          <span></span>
          <i></i>
          <b></b>
        </div>
        <div className="oracle-stage-copy">
          <p className="eyebrow">Revenue Leak Oracle</p>
          <h3>Website Money Leak</h3>
          <p>
            Not a promise. A pressure model. It shows how much demand can disappear when a website has weak clarity, proof, mobile flow, or CTA architecture.
          </p>
        </div>
        <div className="oracle-metrics">
          <article className="oracle-metric primary" data-monthly-leak>
            <span>Monthly leak</span>
            <strong>{formatMoney(report.monthlyLeak)}</strong>
          </article>
          <article className="oracle-metric" data-annual-leak>
            <span>Annual leak</span>
            <strong>{formatMoney(report.annualLeak)}</strong>
          </article>
          <article className="oracle-metric" data-lost-inquiries>
            <span>Lost inquiries</span>
            <strong>{formatNumber(report.lostInquiries)}</strong>
          </article>
        </div>
      </div>

      <div className="oracle-controls" aria-label="Revenue leak controls">
        <label>
          <span>Monthly website visitors</span>
          <strong>{formatNumber(visitors)}</strong>
          <input type="range" min="100" max="10000" step="100" value={visitors} onChange={(event) => setVisitors(Number(event.target.value))} />
        </label>
        <label>
          <span>Lead value</span>
          <strong>{formatMoney(leadValue)}</strong>
          <input type="range" min="100" max="5000" step="100" value={leadValue} onChange={(event) => setLeadValue(Number(event.target.value))} />
        </label>
        <label>
          <span>Current conversion rate</span>
          <strong>{currentRate.toFixed(1)}%</strong>
          <input type="range" min="0.2" max="8" step="0.1" value={currentRate} onChange={(event) => setCurrentRate(Number(event.target.value))} />
        </label>
        <label>
          <span>Target conversion rate</span>
          <strong>{targetRate.toFixed(1)}%</strong>
          <input type="range" min="1" max="12" step="0.1" value={targetRate} onChange={(event) => setTargetRate(Number(event.target.value))} />
        </label>
      </div>

      <aside className="oracle-verdict" data-oracle-verdict>
        <span>Buyer Path Verdict</span>
        <p>{report.verdict}</p>
        <div data-oracle-recommendation>
          <span>Recommended Tootie Move</span>
          <h4>{report.recommendation.name}</h4>
          <p>{report.recommendation.reason}</p>
        </div>
        <div className="oracle-actions">
          <a className="button primary" href={`${safeBase}website-audit/`} data-event="audit_cta_click" data-label="revenue leak oracle audit">Run the full audit</a>
          <a className="button secondary" href={`${safeBase}${report.recommendation.href}`} data-event="service_page_click" data-label="revenue leak oracle recommended service">Turn this leak into a rebuild plan</a>
        </div>
      </aside>
    </div>
  );
}
