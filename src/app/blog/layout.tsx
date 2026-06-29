import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Guides, Setup Tutorials & App Reviews | qwevo tv",
  description:
    "Browse expert IPTV guides covering Smart TV setup, Fire Stick configuration, Android TV boxes, IPTV apps like TiviMate and IPTV Smarters Pro, VPN recommendations, and buffering fixes.",
  openGraph: {
    title: "IPTV Guides, Setup Tutorials & App Reviews | qwevo tv",
    description:
      "Browse expert IPTV guides covering Smart TV setup, Fire Stick configuration, Android TV boxes, IPTV apps like TiviMate and IPTV Smarters Pro, VPN recommendations, and buffering fixes.",
    url: "https://www.qwevotv.pro/blog",
    siteName: "qwevo tv",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qwevotv.pro/images/iptv-streaming.webp",
        width: 1280,
        height: 860,
        alt: "qwevo tv IPTV guides and setup tutorials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Guides, Setup Tutorials & App Reviews | qwevo tv",
    description:
      "Browse expert IPTV guides covering Smart TV setup, Fire Stick configuration, Android TV boxes, IPTV apps, VPN recommendations, and buffering fixes.",
    images: ["https://www.qwevotv.pro/images/iptv-streaming.webp"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
