import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const indexPath = join(root, "src/pages/index.astro");
const componentPath = join(root, "src/components/StandoutGrowthSuite.tsx");
const cssPath = join(root, "src/styles/global.css");

const index = readFileSync(indexPath, "utf8");
const css = readFileSync(cssPath, "utf8");

assert.ok(existsSync(componentPath), "StandoutGrowthSuite React island should exist");
assert.match(index, /StandoutGrowthSuite/, "homepage should import and render the next-five standout suite");
assert.match(index, /data-homepage-rhythm-map/, "homepage should expose a rhythm map that explains the trailer-like journey");

const component = existsSync(componentPath) ? readFileSync(componentPath, "utf8") : "";

const requiredMoves = [
  "Tootie Website Growth Audit",
  "Cinematic Case Study Rooms",
  "Website Rebuild Simulator",
  "Studio OS Dashboard Preview",
  "Homepage Rhythm Map",
];

for (const label of requiredMoves) {
  assert.ok(index.includes(label) || component.includes(label), `next-five suite should include ${label}`);
}

const requiredHooks = [
  "data-growth-audit-engine",
  "data-case-study-room",
  "data-rebuild-simulator",
  "data-studio-os-preview",
  "data-homepage-rhythm-map",
];

for (const hook of requiredHooks) {
  assert.ok(index.includes(hook) || component.includes(hook), `next-five suite should expose ${hook}`);
}

const requiredRoutes = [
  "website-audit/",
  "sample-website-audit/",
  "work/website-design-portfolio/",
  "website-redesign/",
  "digital-system-build/",
];

for (const route of requiredRoutes) {
  assert.ok(component.includes(route), `next-five suite should route visitors toward ${route}`);
}

const requiredStyles = [
  ".standout-growth-suite",
  ".audit-engine-panel",
  ".case-room-grid",
  ".rebuild-simulator",
  ".studio-os-preview",
  ".homepage-rhythm-map",
];

for (const selector of requiredStyles) {
  assert.ok(css.includes(selector), `global CSS should style ${selector}`);
}

console.log("Next five standout moves contract passed.");
