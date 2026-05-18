import { readdirSync, writeFileSync, readFileSync } from "fs";
import { join } from "path";

const BASE_URL = "https://cliparc.net";

function discoverBlogPosts() {
  const dir = "src/content/blog";
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return [];
  }
  return entries
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => {
      const src = readFileSync(join(dir, f), "utf8");
      const slugMatch = src.match(/slug:\s*"([^"]+)"/);
      const dateMatch = src.match(/datePublished:\s*"([^"]+)"/);
      if (!slugMatch) return null;
      return { slug: slugMatch[1], datePublished: dateMatch?.[1] };
    })
    .filter(Boolean);
}
const locales = ["en", "zh-Hans", "zh-Hant", "ja", "ko", "es", "fr", "de", "it", "pt-BR", "ru", "ar", "hi"];
const pages = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/support", changefreq: "monthly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.5" },
  { path: "/terms", changefreq: "yearly", priority: "0.5" },
  { path: "/troubleshooting", changefreq: "monthly", priority: "0.6" },
];

const today = new Date().toISOString().split("T")[0];

function withTrailingSlash(url) {
  return url.endsWith("/") ? url : `${url}/`;
}

function buildAlternates(path) {
  const enUrl = withTrailingSlash(`${BASE_URL}${path || "/"}`);
  const links = [`    <xhtml:link rel="alternate" hreflang="x-default" href="${enUrl}" />`];
  links.push(`    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />`);
  for (const locale of locales.filter(l => l !== "en")) {
    const localeUrl = withTrailingSlash(`${BASE_URL}/${locale}${path}`);
    links.push(`    <xhtml:link rel="alternate" hreflang="${locale}" href="${localeUrl}" />`);
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
    <loc>${withTrailingSlash(`${BASE_URL}${page.path || "/"}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${buildAlternates(page.path)}
  </url>
`;

  // Other locales
  for (const locale of locales.filter(l => l !== "en")) {
    xml += `  <url>
    <loc>${withTrailingSlash(`${BASE_URL}/${locale}${page.path}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${(parseFloat(page.priority) * 0.9).toFixed(1)}</priority>
${buildAlternates(page.path)}
  </url>
`;
  }
}

// Blog (English only)
const blogPosts = discoverBlogPosts();
if (blogPosts.length > 0) {
  xml += `  <url>
    <loc>${BASE_URL}/blog/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  for (const post of blogPosts) {
    xml += `  <url>
    <loc>${BASE_URL}/blog/${post.slug}/</loc>
    <lastmod>${post.datePublished || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  }
}

xml += `</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Generated sitemap.xml with ${pages.length * locales.length + pages.length - pages.length} URLs`);
