import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const indexPath = join(root, "src/pages/index.astro");
const componentPath = join(root, "src/components/RevenueLeakOracle.tsx");
const cssPath = join(root, "src/styles/global.css");

const index = readFileSync(indexPath, "utf8");
const css = readFileSync(cssPath, "utf8");

assert.ok(existsSync(componentPath), "RevenueLeakOracle React island should exist");
assert.match(index, /RevenueLeakOracle/, "homepage should import/render RevenueLeakOracle");
assert.match(index, /data-revenue-leak-oracle-section/, "homepage should expose revenue oracle section hook");

const component = existsSync(componentPath) ? readFileSync(componentPath, "utf8") : "";

const requiredLabels = [
  "Revenue Leak Oracle",
  "Website Money Leak",
  "Monthly leak",
  "Annual leak",
  "Lost inquiries",
  "Buyer Path Verdict",
  "Recommended Tootie Move",
  "Run the full audit",
  "Turn this leak into a rebuild plan",
];

for (const label of requiredLabels) {
  assert.ok(component.includes(label) || index.includes(label), `oracle should include ${label}`);
}

const requiredHooks = [
  "data-revenue-leak-oracle",
  "data-monthly-leak",
  "data-annual-leak",
  "data-lost-inquiries",
  "data-oracle-recommendation",
  "data-oracle-verdict",
];

for (const hook of requiredHooks) {
  assert.ok(component.includes(hook), `oracle should expose ${hook}`);
}

const requiredControls = [
  "Monthly website visitors",
  "Lead value",
  "Current conversion rate",
  "Target conversion rate",
];

for (const control of requiredControls) {
  assert.ok(component.includes(control), `oracle should include control ${control}`);
}

const requiredStyles = [
  ".revenue-oracle-section",
  ".revenue-oracle",
  ".oracle-stage",
  ".oracle-metric",
  ".oracle-controls",
  ".oracle-verdict",
];

for (const selector of requiredStyles) {
  assert.ok(css.includes(selector), `global CSS should style ${selector}`);
}

console.log("Revenue leak oracle contract passed.");
