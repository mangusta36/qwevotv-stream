import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { blogPosts } from "@/lib/posts";
import { ArrowRight, Calendar, Clock3, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "./BlogCard";

export const metadata: Metadata = {
  title: "IPTV Setup Guides & Device Help",
  description:
    "Complete IPTV guides for Smart TV, Fire Stick, Android TV, and mobile. Fix buffering, compare plans, and find the best apps for smooth streaming on any device in 2026.",
  alternates: {
    canonical: "https://www.qwevotv.pro/blog",
  },
  openGraph: {
    title: "IPTV Setup Guides & Device Help",
    description:
      "Complete IPTV guides for Smart TV, Fire Stick, Android TV, and mobile. Fix buffering, compare plans, and find the best apps for smooth streaming on any device.",
    url: "https://www.qwevotv.pro/blog",
    siteName: "qwevo tv",
    type: "website",
    images: [
      {
        url: "https://www.qwevotv.pro/images/iptv-streaming.webp",
        width: 1280,
        height: 860,
        alt: "qwevo tv blog – IPTV setup guides and device help",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Setup Guides & Device Help",
    description:
      "Complete IPTV guides for Smart TV, Fire Stick, Android TV, and mobile. Fix buffering, compare plans, and find the best apps for smooth streaming.",
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

function categorySlug(category: string): string | null {
  const map: Record<string, string> = {
    "IPTV Apps": "iptv-apps",
    "IPTV Technology": "iptv-technology",
  };
  return map[category] ?? null;
}

const blogSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qwevotv.pro" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.qwevotv.pro/blog" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.qwevotv.pro/blog#collectionpage",
      name: "IPTV Setup Guides & Device Help",
      description: "Complete IPTV guides for Smart TV, Fire Stick, Android TV, and mobile devices.",
    },
  ],
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <main className="min-h-screen bg-background text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Blog</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            IPTV guides written for setup, support, and search intent.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            The blog focuses on the questions people actually ask: how to set up devices, how to stop buffering, how to compare plans, how to install IPTV apps, and how to optimize streaming performance.
          </p>
        </div>

        <nav className="mt-10 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className="rounded-full border border-white/15 bg-slate-950/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
          >
            All
          </Link>
          {[
            { label: "Setup", slug: null },
            { label: "Devices", slug: null },
            { label: "Troubleshooting", slug: null },
            { label: "Buying guide", slug: null },
            { label: "Sports", slug: null },
            { label: "Mobile", slug: null },
            { label: "Features", slug: null },
            { label: "Support", slug: null },
            { label: "IPTV Apps", slug: "iptv-apps" },
            { label: "IPTV Technology", slug: "iptv-technology" },
          ].map((cat) => {
            const href = cat.slug ? `/blog/${cat.slug}` : "/blog";
            return (
              <Link
                key={cat.label}
                href={href}
                className="rounded-full border border-white/15 bg-slate-950/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
              >
                {cat.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
          <article className="surface-panel overflow-hidden">
            <div className="relative aspect-[16/8]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL={featured.blurDataURL}
                sizes="(min-width: 768px) 64vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Clock3 className="h-4 w-4" />
                Featured guide
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">{featured.title}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <Link
                  href={categorySlug(featured.category) ? `/blog/${categorySlug(featured.category)}` : "/blog"}
                  className="font-semibold uppercase tracking-[0.18em] text-primary transition-colors hover:text-primary-light"
                >
                  {featured.category}
                </Link>
                <span className="inline-flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> {featured.author}</span>
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {featured.displayDate}</span>
                <span className="inline-flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" /> {featured.readTime}</span>
              </div>
              <Link
                href={`/blog/${featured.id}`}
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-light"
              >
                Read featured guide
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {[
              {
                label: "Pricing",
                href: "/pricing",
                copy: "Compare plans and monthly value.",
                image: "/images/blog/iptv-pricing-guide-640.webp",
                alt: "Person comparing IPTV subscription pricing on a laptop",
              },
              {
                label: "Support",
                href: "/support",
                copy: "Find help for setup and renewals.",
                image: "/images/blog/iptv-support-and-troubleshooting-640.webp",
                alt: "Customer support agent with headset for IPTV help",
              },
              {
                label: "Features",
                href: "/features",
                copy: "See the main product strengths.",
                image: "/images/blog/understand-iptv-features-640.webp",
                alt: "Family using streaming devices and TV features",
              },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group surface-panel overflow-hidden transition-colors hover:border-primary/60">
                <div className="relative min-h-[150px] p-5">
                  <Image
                    src={link.image}
                    alt={link.alt}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={featured.blurDataURL}
                    sizes="(min-width: 768px) 28vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-slate-950/55" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                  <div className="relative z-10 flex min-h-[110px] flex-col justify-end">
                    <h3 className="text-sm font-semibold text-white">{link.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">{link.copy}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
