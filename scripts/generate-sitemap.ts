// Runs before `vite dev` and `vite build`; writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://studiolegaledivietro.it";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/chi-sono", changefreq: "monthly", priority: "0.8" },
  { path: "/separazioni", changefreq: "monthly", priority: "0.9" },
  { path: "/divorzi", changefreq: "monthly", priority: "0.9" },
  { path: "/affido-figli", changefreq: "monthly", priority: "0.9" },
  { path: "/diritto-persone", changefreq: "monthly", priority: "0.8" },
  { path: "/diritto-civile", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/contatti", changefreq: "yearly", priority: "0.7" },
];

// Dynamic blog posts (extracted from src/data/blogPosts.ts at build time)
async function loadBlogSlugs(): Promise<SitemapEntry[]> {
  const mod = await import("../src/data/blogPosts");
  return mod.blogPosts.map((p: { slug: string }) => ({
    path: `/blog/${p.slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  }));
}

function buildSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ].filter(Boolean).join("\n"),
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

(async () => {
  const dynamic = await loadBlogSlugs().catch(() => []);
  const all = [...staticEntries, ...dynamic];
  writeFileSync(resolve("public/sitemap.xml"), buildSitemap(all));
  console.log(`sitemap.xml written (${all.length} entries)`);
})();
