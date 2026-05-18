import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { join, relative, sep } from "path";

const OUT_DIR = "out";
const LOCALES = [
  "zh-Hans",
  "zh-Hant",
  "ja",
  "ko",
  "es",
  "fr",
  "de",
  "it",
  "pt-BR",
  "ru",
  "ar",
  "hi",
];
const RTL_LOCALES = new Set(["ar"]);

function detectLocale(relPath) {
  const first = relPath.split(sep)[0];
  if (LOCALES.includes(first)) return first;
  if (first.endsWith(".html")) {
    const stem = first.slice(0, -5);
    if (LOCALES.includes(stem)) return stem;
  }
  return null;
}

function walk(dir, cb) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const s = statSync(full);
    if (s.isDirectory()) walk(full, cb);
    else if (name.endsWith(".html")) cb(full);
  }
}

let fixed = 0;
walk(OUT_DIR, (file) => {
  const rel = relative(OUT_DIR, file);
  const locale = detectLocale(rel);
  if (!locale) return;

  let html = readFileSync(file, "utf8");
  const before = html;
  html = html.replace(/<html\s+lang="en"/, `<html lang="${locale}"`);
  if (RTL_LOCALES.has(locale)) {
    if (/<html\s[^>]*\sdir="/.test(html)) {
      html = html.replace(/<html(\s[^>]*)\sdir="[^"]*"/, `<html$1 dir="rtl"`);
    } else {
      html = html.replace(/<html(\s[^>]*)>/, `<html$1 dir="rtl">`);
    }
  }
  if (html !== before) {
    writeFileSync(file, html);
    fixed++;
  }
});

console.log(`fix-html-lang: updated ${fixed} files`);
