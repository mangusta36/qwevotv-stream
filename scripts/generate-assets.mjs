import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images");
await fs.mkdir(outDir, { recursive: true });

const photoAssets = [
  { input: "/tmp/qwevo-streaming.jpg", output: "iptv-streaming.webp", width: 1280, height: 860 },
  { input: "/tmp/qwevo-sports.jpg", output: "live-sports.webp", width: 980, height: 720 },
  { input: "/tmp/qwevo-smart-tv.jpg", output: "smart-tv.webp", width: 980, height: 720 },
  { input: "/tmp/qwevo-android-mobile.jpg", output: "android-devices.webp", width: 980, height: 720 },
  { input: "/tmp/qwevo-streaming.jpg", output: "4k-entertainment.webp", width: 980, height: 720 },
];

for (const asset of photoAssets) {
  await sharp(asset.input)
    .resize(asset.width, asset.height, { fit: "cover", position: "attention" })
    .webp({ quality: 72, effort: 5 })
    .toFile(path.join(outDir, asset.output));
}

const fireStickSvg = `
<svg width="980" height="720" viewBox="0 0 980 720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="980" height="720" rx="48" fill="#05070B"/>
  <rect x="70" y="72" width="840" height="576" rx="44" fill="#101827"/>
  <circle cx="240" cy="164" r="142" fill="#38BDF8" fill-opacity=".14"/>
  <circle cx="782" cy="552" r="166" fill="#F8C35B" fill-opacity=".12"/>
  <g transform="translate(254 170)">
    <rect x="230" y="62" width="255" height="116" rx="32" fill="#111827" stroke="#334155" stroke-width="4"/>
    <rect x="468" y="96" width="42" height="50" rx="8" fill="#D9E5F0"/>
    <rect x="92" y="0" width="132" height="380" rx="54" fill="#090D14" stroke="#334155" stroke-width="4"/>
    <circle cx="158" cy="72" r="12" fill="#38BDF8"/>
    <circle cx="158" cy="146" r="44" fill="#1F2937" stroke="#64748B" stroke-width="4"/>
    <circle cx="158" cy="146" r="22" fill="#0F172A"/>
    <rect x="132" y="226" width="52" height="22" rx="11" fill="#1F2937"/>
    <rect x="132" y="266" width="52" height="22" rx="11" fill="#1F2937"/>
    <rect x="132" y="306" width="52" height="22" rx="11" fill="#1F2937"/>
    <path d="M315 123h96" stroke="#38BDF8" stroke-width="16" stroke-linecap="round"/>
    <path d="M315 151h62" stroke="#F8C35B" stroke-width="10" stroke-linecap="round"/>
  </g>
  <text x="96" y="570" fill="#F8FAFC" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="800">Fire Stick setup</text>
  <text x="96" y="614" fill="#94A3B8" font-family="Inter, Arial, sans-serif" font-size="24">Lightweight streaming stick compatible visual</text>
</svg>`;

await sharp(Buffer.from(fireStickSvg)).webp({ quality: 78, effort: 5 }).toFile(path.join(outDir, "fire-stick.webp"));

const moviesSvg = `
<svg width="980" height="720" viewBox="0 0 980 720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="980" height="720" rx="48" fill="#05070B"/>
  <rect x="62" y="64" width="856" height="592" rx="46" fill="#0E1726" stroke="rgba(255,255,255,.12)" stroke-width="2"/>
  <circle cx="244" cy="174" r="150" fill="#38BDF8" fill-opacity=".14"/>
  <circle cx="782" cy="548" r="184" fill="#F8C35B" fill-opacity=".13"/>
  <g transform="translate(142 118)">
    <rect x="0" y="0" width="696" height="392" rx="32" fill="#111827" stroke="#334155" stroke-width="5"/>
    <rect x="36" y="38" width="190" height="130" rx="20" fill="#1E293B"/>
    <rect x="254" y="38" width="190" height="130" rx="20" fill="#2D1B35"/>
    <rect x="472" y="38" width="188" height="130" rx="20" fill="#172554"/>
    <rect x="36" y="196" width="190" height="130" rx="20" fill="#331C12"/>
    <rect x="254" y="196" width="190" height="130" rx="20" fill="#13251D"/>
    <rect x="472" y="196" width="188" height="130" rx="20" fill="#312E81"/>
    <path d="M115 90l60 36-60 36V90Z" fill="#38BDF8"/>
    <path d="M333 90l60 36-60 36V90Z" fill="#F8C35B"/>
    <path d="M550 90l60 36-60 36V90Z" fill="#38BDF8"/>
    <path d="M115 248l60 36-60 36v-72Z" fill="#F8C35B"/>
    <path d="M333 248l60 36-60 36v-72Z" fill="#38BDF8"/>
    <path d="M550 248l60 36-60 36v-72Z" fill="#F8C35B"/>
    <rect x="280" y="418" width="136" height="18" rx="9" fill="#334155"/>
    <rect x="322" y="444" width="52" height="26" rx="12" fill="#38BDF8"/>
  </g>
  <rect x="116" y="564" width="312" height="56" rx="20" fill="rgba(56,189,248,.14)" stroke="rgba(56,189,248,.28)"/>
  <text x="144" y="600" fill="#F8FAFC" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800">Movies and series</text>
  <text x="462" y="600" fill="#94A3B8" font-family="Inter, Arial, sans-serif" font-size="24">VOD library • premium entertainment</text>
</svg>`;

await sharp(Buffer.from(moviesSvg)).webp({ quality: 78, effort: 5 }).toFile(path.join(outDir, "movies-series.webp"));
