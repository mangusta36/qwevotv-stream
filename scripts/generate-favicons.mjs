import sharp from "sharp";
import { execSync } from "child_process";
import { writeFileSync, mkdirSync, rmSync, existsSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "public");
const SVG_SOURCE = join(OUT, "favicon-source.svg");

// Brand colors
const BG = "#05070B";
const PRIMARY = "#38BDF8";
const SECONDARY = "#F8C35B";

// SVG icon: rounded square + play triangle with brand gradient
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${PRIMARY}"/>
      <stop offset="100%" stop-color="${SECONDARY}"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="${BG}"/>
  <path d="M23 16V48L49 32Z" fill="url(#g)"/>
</svg>`;

writeFileSync(SVG_SOURCE, svg);
console.log("Created SVG source:", SVG_SOURCE);

// Sizes to generate
const sizes = [
  { name: "favicon-16x16", size: 16 },
  { name: "favicon-32x32", size: 32 },
  { name: "favicon-48x48", size: 48 },
  { name: "apple-touch-icon", size: 180 },
  { name: "icon-192x192", size: 192 },
  { name: "icon-512x512", size: 512 },
];

// SVG buffer for sharp rendering
const svgBuf = Buffer.from(svg);

async function render(name, size, outDir) {
  const p = join(outDir, `${name}.png`);
  await sharp(svgBuf, { density: Math.max(300, (size / 64) * 300) })
    .resize(size, size)
    .png()
    .toFile(p);
  return p;
}

// Generate all standard PNGs
for (const { name, size } of sizes) {
  const p = await render(name, size, OUT);
  console.log(`  ${size}x${size} -> ${p}`);
}

// Build favicon.ico from 16, 32, 48 PNGs via ImageMagick
const icoParts = [
  join(OUT, "favicon-16x16.png"),
  join(OUT, "favicon-32x32.png"),
  join(OUT, "favicon-48x48.png"),
];
const icoPath = join(OUT, "favicon.ico");
execSync(`convert "${icoParts.join('" "')}" "${icoPath}"`, { stdio: "inherit" });
console.log("  ICO ->", icoPath);

// Create favicon.svg (browser SVG favicon support)
writeFileSync(join(OUT, "favicon.svg"), svg);
console.log("  SVG ->", join(OUT, "favicon.svg"));

// Manifest
const manifest = {
  name: "qwevo tv",
  short_name: "qwevo tv",
  description: "Premium IPTV for live TV, sports, and movies",
  start_url: "/",
  display: "standalone",
  background_color: BG,
  theme_color: BG,
  icons: [
    { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { src: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    { src: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
  ],
};

writeFileSync(join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log("Manifest:", join(OUT, "manifest.json"));

// generate-apple-touch-icon SVG too (for safari pinned tab, etc.)
// Apple touch icon already generated as apple-touch-icon.png

console.log("\nDone. All favicon assets generated.");
