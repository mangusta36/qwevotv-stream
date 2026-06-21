import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#05070B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qwevotv.pro"),
  title: {
    default: "qwevo tv | Premium IPTV Streaming Service",
    template: "%s | qwevo tv",
  },
  description:
    "Discover qwevo tv – a premium IPTV service with fast activation, 26,000+ live channels, 4K sports & movie streaming, and 24/7 WhatsApp support for all your devices.",

  alternates: {
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
    title: "qwevo tv | Premium IPTV Streaming Service",
    description: "Discover qwevo tv – a premium IPTV service with fast activation, 26,000+ live channels, 4K sports & movie streaming, and 24/7 WhatsApp support.",
    url: "https://www.qwevotv.pro", 
    siteName: "qwevo tv",
    images: [
      {
        url: "/images/iptv-streaming.webp",
        width: 1280,
        height: 860,
        alt: "qwevo tv premium IPTV streaming service interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "qwevo tv | Premium IPTV Streaming Service",
    description: "Premium IPTV with 26,000+ live channels, 4K sports & movies, and 24/7 WhatsApp support. Fast activation on all devices.",
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
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
  manifest: "/manifest.json",
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
