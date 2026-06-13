import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#05070B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  // 1. Bedelt l-URL hna
  metadataBase: new URL("https://www.qwevotv.pro"),
  title: {
    default: "qwevo tv | Premium IPTV for live TV, sports, and movies",
    template: "%s | qwevo tv",
  },
  description:
    "qwevo tv is a premium IPTV experience with fast activation, live TV, sports, movies, and device-friendly support.",

  alternates: {
    // 2. Bedelt Canonical hna
    canonical: "https://www.qwevotv.pro",
  },

  keywords: [
    "qwevo tv",
    "premium IPTV",
    "live TV streaming",
    "sports IPTV",
    "movie IPTV",
    "Smart TV IPTV",
    "Fire Stick IPTV",
    "Android TV IPTV",
  ],

  openGraph: {
    title: "qwevo tv | Premium IPTV for live TV, sports, and movies",
    description: "Discover qwevo tv with clear plans, easier setup, and a lighter premium IPTV interface.",
    // 3. Bedelt OpenGraph URL hna
    url: "https://www.qwevotv.pro", 
    siteName: "qwevo tv",
    images: [
      {
        url: "/images/iptv-streaming.webp",
        width: 1280,
        height: 860,
        alt: "qwevo tv premium IPTV",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "qwevo tv | Premium IPTV",
    description: "Live TV, sports, movies, and support in a cleaner IPTV experience.",
    images: ["/images/iptv-streaming.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: "/icones.png", type: "image/png" },
    ],
    apple: [
      { url: "/icones.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-text-main min-h-screen">
        {children}
      </body>
    </html>
  );
}
