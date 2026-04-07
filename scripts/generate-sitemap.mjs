import { writeFileSync } from "fs";

const BASE_URL = "https://cliparc.net";
const locales = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "es", "fr", "de", "it", "pt-BR", "ru", "ar", "hi"];
const pages = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/support", changefreq: "monthly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.5" },
  { path: "/terms", changefreq: "yearly", priority: "0.5" },
  { path: "/troubleshooting", changefreq: "monthly", priority: "0.6" },
];

const today = new Date().toISOString().split("T")[0];

function buildAlternates(path) {
  const links = [`    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${path}" />`];
  links.push(`    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${path}" />`);
  for (const locale of locales.filter(l => l !== "en")) {
    links.push(`    <xhtml:link rel="alternate" hreflang="${locale}" href="${BASE_URL}/${locale}${path}" />`);
  }
  return links.join("\n");
}

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

for (const page of pages) {
  // English root
  xml += `  <url>
    <loc>${BASE_URL}${page.path || "/"}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${buildAlternates(page.path)}
  </url>
`;

  // Other locales
  for (const locale of locales.filter(l => l !== "en")) {
    xml += `  <url>
    <loc>${BASE_URL}/${locale}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${(parseFloat(page.priority) * 0.9).toFixed(1)}</priority>
${buildAlternates(page.path)}
  </url>
`;
  }
}

xml += `</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Generated sitemap.xml with ${pages.length * locales.length + pages.length - pages.length} URLs`);
