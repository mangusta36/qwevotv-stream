import type { Metadata, Viewport } from "next"; // Zdna Viewport hna
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Font Optimization: Zdna 'display: swap' bach l-performance dyal ktaba t-ban f-blast-ha
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

// 2. Viewport & Theme Color: Hada darori bach l-Performance we Best Practices it-l3ou
export const viewport: Viewport = {
  themeColor: "#FF4D00", // Lon dyal l-brand dyalk (Orange) f mobile browser
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Mzyana l-Accessibility
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.qwevotv.com'), 
  
  title: {
    default: "QwevoTV | Premium 4K Streaming & Ultimate IPTV Experience",
    template: "%s | QwevoTV"
  },
  
  description:
    "Experience the future of television with QwevoTV. Access 25,000+ global channels, latest movies, and live sports in Ultra HD 4K. Fast, reliable, and 24/7 support.",

  alternates: {
    canonical: 'https://www.qwevotv.com', // Rej3naha absolute bach Google i7sebha s7i7a 100%
  },

  keywords: [
    "QwevoTV",
    "Qwevo TV Streaming",
    "Premium IPTV 2025",
    "4K Live Sports",
    "Best IPTV Subscription",
    "Ultra HD Streaming",
    "Global TV Channels",
    "Smart TV IPTV App",
  ],

  // OpenGraph (SEO Social Media)
  openGraph: {
    title: "QwevoTV | Ultimate 4K Streaming Experience",
    description: "Join QwevoTV and watch 25,000+ live channels and VOD in 4K quality.",
    url: "https://www.qwevotv.com", 
    siteName: "QwevoTV",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "QwevoTV - Premium Entertainment",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "QwevoTV | Watch Live TV in 4K",
    description: "The best streaming platform with instant activation and global coverage.",
    images: ["/og-image.jpg"],
  },

  // Robots SEO: Bach Google i-indexi l-site kamel
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

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
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
      <body className={`${inter.className} antialiased bg-background text-text-main min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
