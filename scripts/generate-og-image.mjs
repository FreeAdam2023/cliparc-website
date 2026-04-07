import sharp from "sharp";
import { readFileSync } from "fs";

const WIDTH = 1200;
const HEIGHT = 630;

// Create dark gradient background with text overlay using SVG
const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#111827;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e1145;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="title" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#60a5fa" />
      <stop offset="100%" style="stop-color:#a78bfa" />
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Subtle grid pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
  </pattern>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grid)"/>

  <!-- App name -->
  <text x="${WIDTH/2}" y="260" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif" font-size="72" font-weight="bold" fill="url(#title)" text-anchor="middle">ClipArc</text>

  <!-- Tagline -->
  <text x="${WIDTH/2}" y="330" font-family="-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif" font-size="32" fill="#d1d5db" text-anchor="middle">Smart Clipboard Manager for macOS</text>

  <!-- Feature pills -->
  <rect x="200" y="380" width="200" height="36" rx="18" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.3)" stroke-width="1"/>
  <text x="300" y="404" font-family="-apple-system, sans-serif" font-size="14" fill="#93c5fd" text-anchor="middle">Content Detection</text>

  <rect x="420" y="380" width="160" height="36" rx="18" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <text x="500" y="404" font-family="-apple-system, sans-serif" font-size="14" fill="#c4b5fd" text-anchor="middle">Fuzzy Search</text>

  <rect x="600" y="380" width="180" height="36" rx="18" fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.3)" stroke-width="1"/>
  <text x="690" y="404" font-family="-apple-system, sans-serif" font-size="14" fill="#93c5fd" text-anchor="middle">Privacy First</text>

  <rect x="800" y="380" width="200" height="36" rx="18" fill="rgba(167,139,250,0.15)" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
  <text x="900" y="404" font-family="-apple-system, sans-serif" font-size="14" fill="#c4b5fd" text-anchor="middle">13 Languages</text>

  <!-- Bottom bar -->
  <text x="${WIDTH/2}" y="520" font-family="-apple-system, sans-serif" font-size="20" fill="#6b7280" text-anchor="middle">Available on the Mac App Store</text>

  <!-- Domain -->
  <text x="${WIDTH/2}" y="560" font-family="-apple-system, sans-serif" font-size="18" fill="#4b5563" text-anchor="middle">cliparc.net</text>
</svg>`;

// Read the icon
const icon = readFileSync("public/icon.png");

// Compose: background + icon
const background = await sharp(Buffer.from(svg)).png().toBuffer();

const iconResized = await sharp(icon)
  .resize(120, 120)
  .png()
  .toBuffer();

await sharp(background)
  .composite([
    {
      input: iconResized,
      top: 100,
      left: Math.round((WIDTH - 120) / 2),
    },
  ])
  .png()
  .toFile("public/og-image.png");

console.log("Generated og-image.png (1200x630)");
