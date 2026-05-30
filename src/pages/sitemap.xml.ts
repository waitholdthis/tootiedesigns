import type { APIRoute } from "astro";
import { servicePages } from "../data/marketing";
import { fieldNotes } from "../data/site";

const servicePagePaths = Object.values(servicePages).map((page) => `${page.slug}/`);

const pages = [
  "",
  ...servicePagePaths,
  "sample-website-audit/",
  "notes/",
  ...fieldNotes.map((note) => `notes/${note.slug}/`),
  "privacy/",
  "thanks/",
];

export const GET: APIRoute = () => {
  const origin = "https://tootiedesigns.com";
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
      (page) => `  <url>
    <loc>${origin}/${page}</loc>
    <changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
