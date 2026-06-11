import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "images", "blog");
await fs.mkdir(outDir, { recursive: true });

const sources = [
  ["smart-tv-iptv-setup-guide", "/tmp/blog-smart-tv.jpg"],
  ["fire-stick-iptv-setup-guide", "/tmp/blog-devices.jpg"],
  ["stop-iptv-buffering", "/tmp/blog-multi-device.jpg"],
  ["iptv-pricing-guide", "/tmp/blog-buying.jpg"],
  ["watch-sports-on-iptv", "/tmp/blog-sports.jpg"],
  ["android-tv-box-iptv-setup", "/tmp/blog-devices.jpg"],
  ["iptv-on-iphone-ipad", "/tmp/blog-multi-device.jpg"],
  ["choose-right-iptv-provider", "/tmp/blog-buying.jpg"],
  ["understand-iptv-features", "/tmp/blog-family-devices.jpg"],
  ["iptv-support-and-troubleshooting", "/tmp/blog-support.jpg"],
];

const widths = [640, 960, 1280];

for (const [slug, input] of sources) {
  for (const width of widths) {
    await sharp(input)
      .resize(width, Math.round((width / 16) * 9), { fit: "cover", position: "attention" })
      .webp({ quality: width === 1280 ? 74 : 70, effort: 5 })
      .toFile(path.join(outDir, `${slug}-${width}.webp`));
  }
}
