import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const indexPath = join(root, "src/pages/index.astro");
const componentPath = join(root, "src/components/WowFeatureSuite.tsx");
const cssPath = join(root, "src/styles/global.css");

const index = readFileSync(indexPath, "utf8");
const css = readFileSync(cssPath, "utf8");

assert.ok(existsSync(componentPath), "WowFeatureSuite React island should exist");
assert.match(index, /WowFeatureSuite/, "homepage imports and renders the WowFeatureSuite");

const component = existsSync(componentPath) ? readFileSync(componentPath, "utf8") : "";

const requiredExperiences = [
  "Project Mission Brief",
  "Before / After Reality Slider",
  "Website Autopsy Chamber",
  "Choose Your Build Path",
  "Proof Vault",
];

for (const label of requiredExperiences) {
  assert.ok(
    index.includes(label) || component.includes(label),
    `homepage wow suite should include ${label}`,
  );
}

const requiredServiceRoutes = [
  "website-audit/",
  "website-cleanup-sprint/",
  "landing-page-design/",
  "website-redesign/",
  "digital-system-build/",
];

for (const route of requiredServiceRoutes) {
  assert.ok(component.includes(route), `wow suite should route visitors to ${route}`);
}

const requiredControls = [
  "data-wow-feature-suite",
  "data-mission-brief-form",
  "data-autopsy-input",
  "data-build-path-choice",
  "data-proof-vault-card",
];

for (const hook of requiredControls) {
  assert.ok(component.includes(hook), `wow suite should expose ${hook}`);
}

const requiredStyles = [
  ".wow-suite",
  ".mission-brief-console",
  ".reality-slider",
  ".autopsy-chamber",
  ".build-path-selector",
  ".proof-vault",
];

for (const selector of requiredStyles) {
  assert.ok(css.includes(selector), `global CSS should style ${selector}`);
}

console.log("Homepage wow feature contract passed.");
