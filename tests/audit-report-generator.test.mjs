import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const pagePath = join(root, "src/pages/website-audit/index.astro");
const componentPath = join(root, "src/components/AuditReportGenerator.tsx");
const cssPath = join(root, "src/styles/global.css");

const page = readFileSync(pagePath, "utf8");
const css = readFileSync(cssPath, "utf8");

assert.ok(existsSync(componentPath), "AuditReportGenerator React island should exist");
assert.match(page, /AuditReportGenerator/, "website audit page should import and render the report generator");
assert.match(page, /data-audit-report-generator-section/, "website audit page should expose the generator section hook");

const component = existsSync(componentPath) ? readFileSync(componentPath, "utf8") : "";

const requiredLabels = [
  "Tootie Website Growth Audit",
  "Project Intelligence Intake",
  "Generate My Growth Report",
  "Tootie Handoff Brief",
  "Recommended Tootie Package",
  "Priority Fix Sequence",
  "Lead Qualification Signals",
  "Sales Conversation Starters",
  "What To Ask Tootie",
  "Suggested Next Step",
];

for (const label of requiredLabels) {
  assert.ok(component.includes(label) || page.includes(label), `audit generator should include ${label}`);
}

const requiredHooks = [
  "data-audit-report-generator",
  "data-project-intelligence-intake",
  "data-generated-audit-report",
  "data-audit-scorecard",
  "data-tootie-handoff-brief",
  "data-recommended-package",
  "data-priority-fix-sequence",
  "data-lead-qualification-signals",
];

for (const hook of requiredHooks) {
  assert.ok(component.includes(hook) || page.includes(hook), `audit generator should expose ${hook}`);
}

const hiddenSalesFields = [
  "recommended_tootie_package",
  "plain_english_verdict",
  "priority_fix_sequence",
  "lead_qualification_signals",
  "sales_conversation_starters",
  "suggested_next_step",
];

for (const field of hiddenSalesFields) {
  assert.ok(component.includes(field), `audit generator form handoff should include hidden field ${field}`);
}

const requiredStyles = [
  ".audit-report-generator-section",
  ".audit-generator-shell",
  ".project-intelligence-intake",
  ".generated-audit-report",
  ".audit-generator-scorecard",
  ".handoff-brief-panel",
];

for (const selector of requiredStyles) {
  assert.ok(css.includes(selector), `global CSS should style ${selector}`);
}

console.log("Audit report generator contract passed.");
