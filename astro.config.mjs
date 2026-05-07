import { defineConfig } from "astro/config";
import react from "@astrojs/react";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  site: isGithubPages ? "https://waitholdthis.github.io" : "https://tootiedesigns.com",
  base: isGithubPages ? "/tootiedesigns" : "/",
  integrations: [react()],
});
