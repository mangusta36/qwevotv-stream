import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { postPreviews } from "@/lib/postPreviews";
import { Calendar, Clock3, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best IPTV Apps & Players Guide",
  description:
    "Find the best IPTV player for Firestick, Android TV, Smart TV, and iPhone. Honest reviews of TiviMate, IPTV Smarters Pro, and OTT Navigator for optimal streaming.",
  alternates: {
    canonical: "https://www.qwevotv.pro/blog/iptv-apps",
  },
  openGraph: {
    title: "Best IPTV Apps & Players Guide",
    description:
      "Find the best IPTV player for Firestick, Android TV, Smart TV, and iPhone. Honest reviews of TiviMate, IPTV Smarters Pro, and OTT Navigator.",
    url: "https://www.qwevotv.pro/blog/iptv-apps",
    siteName: "qwevo tv",
    type: "website",
    images: [
      {
        url: "https://www.qwevotv.pro/images/iptv-streaming.webp",
        width: 1280,
        height: 860,
        alt: "Best IPTV apps and players comparison guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Apps & Players Guide",
    description:
      "Find the best IPTV player for Firestick, Android TV, Smart TV, and iPhone. Honest reviews of TiviMate, IPTV Smarters Pro, and OTT Navigator.",
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

const iptvAppsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qwevotv.pro" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.qwevotv.pro/blog" },
        { "@type": "ListItem", position: 3, name: "IPTV Apps", item: "https://www.qwevotv.pro/blog/iptv-apps" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.qwevotv.pro/blog/iptv-apps#collectionpage",
      name: "Best IPTV Apps & Players Guide",
      description: "Reviews, comparisons, and setup guides for every major IPTV player.",
    },
  ],
};

export default function IptvAppsPage() {
  const categoryPosts = postPreviews.filter((p) => p.category === "IPTV Apps");

  return (
    <main className="min-h-screen bg-background text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(iptvAppsSchema) }} />
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Category</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            IPTV Apps & Players
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Reviews, comparisons, and step-by-step setup guides for every major IPTV player. We test
            TiviMate, IPTV Smarters Pro, OTT Navigator, XCIPTV, Perfect Player, and more so you can
            pick the right app for your device and get the best streaming experience.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            All articles in this category
          </h2>
          {categoryPosts.length === 0 && (
            <p className="mt-8 text-sm text-slate-400">
              Articles are being written. Check back soon for detailed IPTV app guides.
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
            <h2 className="text-2xl font-bold text-white">Why IPTV Apps Matter</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              The IPTV player you choose determines your entire viewing experience. A great IPTV
              subscription on a bad player feels slow, cluttered, and frustrating. The same
              subscription on TiviMate or IPTV Smarters Pro feels like a premium cable replacement.
              Our guides help you pick, install, and optimize the right app for your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white">Which IPTV Player Should You Use?</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { device: "Firestick / Fire TV", pick: "TiviMate", reason: "Best UI, fastest channel switching, native remote support." },
                { device: "Android TV / Google TV", pick: "TiviMate or OTT Navigator", reason: "TiviMate for premium experience, OTT Navigator for free." },
                { device: "Smart TV (Samsung, LG)", pick: "IPTV Smarters Pro", reason: "Best cross-platform support, available on all TV app stores." },
                { device: "iPhone / iPad", pick: "GSE Smart IPTV or IPTVX", reason: "Optimized for iOS, supports HLS and M3U." },
                { device: "Android phone / tablet", pick: "IPTV Smarters Pro", reason: "Clean interface, multi-screen, external player support." },
                { device: "Windows PC", pick: "MyIPTV Player or VLC", reason: "Lightweight, supports all formats, keyboard shortcuts." },
                { device: "macOS", pick: "VLC or IPTV Smarters Pro", reason: "Stable playback, codec support, simple setup." },
                { device: "Formuler / MAG box", pick: "Built-in MyTVOnline", reason: "Pre-installed, optimized for Formuler hardware." },
              ].map((rec) => (
                <div key={rec.device} className="surface-panel rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-primary">{rec.device}</h3>
                  <p className="mt-2 text-base font-semibold text-white">{rec.pick}</p>
                  <p className="mt-1 text-xs text-slate-400">{rec.reason}</p>
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
