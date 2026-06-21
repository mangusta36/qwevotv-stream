import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { blogPosts } from "@/lib/posts";
import { ArrowRight, Calendar, Clock3, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IPTV Technology & Streaming Optimization Guide",
  description:
    "Learn how IPTV streaming works — protocols, codecs, 4K HDR, and EPG. Get network optimization tips for peak performance from your IPTV subscription in 2026.",
  alternates: {
    canonical: "https://www.qwevotv.pro/blog/iptv-technology",
  },
  openGraph: {
    title: "IPTV Technology & Streaming Optimization Guide",
    description:
      "Learn how IPTV streaming works — protocols, codecs, 4K HDR, and EPG. Get network optimization tips for peak performance from your IPTV subscription.",
    url: "https://www.qwevotv.pro/blog/iptv-technology",
    siteName: "qwevo tv",
    type: "website",
    images: [
      {
        url: "https://www.qwevotv.pro/images/iptv-streaming.webp",
        width: 1280,
        height: 860,
        alt: "IPTV technology and streaming optimization guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Technology & Streaming Optimization Guide",
    description:
      "Learn how IPTV streaming works — protocols, codecs, 4K HDR, and EPG. Get network optimization tips for peak performance.",
    images: ["https://www.qwevotv.pro/images/iptv-streaming.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const iptvTechSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qwevotv.pro" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.qwevotv.pro/blog" },
        { "@type": "ListItem", position: 3, name: "IPTV Technology", item: "https://www.qwevotv.pro/blog/iptv-technology" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.qwevotv.pro/blog/iptv-technology#collectionpage",
      name: "IPTV Technology & Streaming Optimization Guide",
      description: "Learn how IPTV works including streaming protocols, video codecs, and network optimization.",
    },
  ],
};

export default function IptvTechnologyPage() {
  const categoryPosts = blogPosts.filter((p) => p.category === "IPTV Technology");

  return (
    <main className="min-h-screen bg-background text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iptvTechSchema) }} />
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Category</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            IPTV Technology & Optimization
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Understand how IPTV works under the hood — streaming protocols, video codecs, CDN,
            EPG, and anti-freeze technology. Plus practical optimization guides for your network,
            devices, and player settings to get the best possible streaming performance.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            All articles in this category
          </h2>
          {categoryPosts.length === 0 && (
            <p className="mt-8 text-sm text-slate-400">
              Technical guides are being prepared. Check back soon for in-depth IPTV technology articles.
            </p>
          )}
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categoryPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group surface-panel flex h-full flex-col overflow-hidden transition-colors hover:border-primary/60">
                <div className="relative aspect-[16/10] bg-slate-950">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={post.blurDataURL}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-slate-950/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5 text-primary" /> {post.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" /> {post.displayDate}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5 text-primary" /> {post.readTime}</span>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{post.excerpt}</p>
                  <div className="mt-auto pt-6 text-sm font-semibold text-primary">
                    Read guide
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-white">Why IPTV Technology Matters</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Most IPTV guides tell you what to do but never explain why. Understanding how IPTV
              works — from the streaming protocol to the CDN to your home network — helps you
              diagnose problems yourself, optimize your setup for the best quality, and make
              informed choices about your service, devices, and apps.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Quick Technology Reference</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { term: "HLS (HTTP Live Streaming)", def: "Apple's protocol. Splits video into small chunks for adaptive quality. Most common in IPTV." },
                { term: "MPEG-DASH", def: "Open standard adaptive streaming. Similar to HLS, used by YouTube and many IPTV providers." },
                { term: "H.265 / HEVC", def: "Modern video codec. Delivers 4K at half the bitrate of H.264. Required for 4K IPTV." },
                { term: "AV1", def: "Next-gen royalty-free codec. 30% better compression than H.265. Growing IPTV adoption." },
                { term: "Xtream Codes API", def: "Authentication method. Connects your player to the provider's server with username, password, and DNS." },
                { term: "M3U Playlist", def: "Simple text file with channel URLs. The most universal IPTV format." },
                { term: "EPG (Electronic Program Guide)", def: "XML-based schedule data. Shows what's playing on each channel now and next." },
                { term: "CDN (Content Delivery Network)", def: "Distributed servers that deliver streams from the closest location. Reduces buffering." },
                { term: "Anti-Freeze", def: "Caching + buffer management tech that pre-loads stream data to prevent freezing during congestion." },
              ].map((item) => (
                <div key={item.term} className="surface-panel rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-primary">{item.term}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.def}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
