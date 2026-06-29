"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { blogPosts } from "@/lib/posts";
import { Calendar, ChevronLeft, ChevronRight, Clock3, Search, TrendingUp, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import BlogCard from "./BlogCard";

const CATEGORIES = [
  { label: "All", slug: null },
  { label: "IPTV Guides", slug: "setup" },
  { label: "IPTV Apps", slug: "iptv-apps" },
  { label: "IPTV Devices", slug: "devices" },
  { label: "Streaming Tips", slug: "streaming-tips" },
  { label: "Firestick", slug: "firestick" },
  { label: "Smart TV", slug: "smart-tv" },
  { label: "Android TV", slug: "android-tv" },
  { label: "Troubleshooting", slug: "troubleshooting" },
  { label: "VPN", slug: "vpn" },
  { label: "IPTV News", slug: "iptv-news" },
];

const POSTS_PER_PAGE = 6;

function categorySlug(category: string): string | null {
  const map: Record<string, string> = {
    Setup: "setup",
    Devices: "devices",
    Troubleshooting: "troubleshooting",
    "Buying guide": "buying-guide",
    Sports: "sports",
    Mobile: "mobile",
    Features: "features",
    Support: "support",
    "IPTV Apps": "iptv-apps",
    "IPTV Technology": "iptv-technology",
  };
  return map[category] ?? null;
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const featured = blogPosts[0];
  const trending = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 4);

  const filteredPosts = useMemo(() => {
    let filtered = blogPosts;

    if (activeCategory) {
      filtered = filtered.filter((p) => {
        const slug = categorySlug(p.category);
        return slug === activeCategory;
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function handleCategoryClick(slug: string | null) {
    setActiveCategory(slug);
    setCurrentPage(1);
  }

  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Knowledge hub</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
            IPTV guides, app reviews & setup tutorials.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Everything you need to set up IPTV, compare apps, fix buffering, and get the best streaming experience on any device.
          </p>
        </div>

        <div className="relative mt-10 max-w-xl">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] py-4 pl-12 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.06]"
          />
        </div>

        <nav className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                activeCategory === cat.slug
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-white/15 bg-slate-950/70 text-white hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </nav>
      </section>

      {!activeCategory && !searchQuery ? (
        <section className="section-shell py-10">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <Link
              href={`/blog/${featured.id}`}
              className="group surface-panel overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_60px_rgba(56,189,248,0.08)]"
            >
              <div className="relative aspect-[16/8]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  placeholder="blur"
                  blurDataURL={featured.blurDataURL}
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950">
                    Featured guide
                  </span>
                  <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-200">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-primary" /> {featured.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-primary" /> {featured.displayDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5 text-primary" /> {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="surface-panel p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <TrendingUp className="h-4 w-4 text-primary" />
                Trending
              </div>
              <div className="mt-4 space-y-3">
                {trending.map((post, i) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white">{post.title}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {post.displayDate} &middot; {post.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-shell pb-14 md:pb-20">
        {searchQuery || activeCategory ? (
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              {searchQuery ? "Search results" : "Category"}
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              {searchQuery
                ? `"${searchQuery}" (${filteredPosts.length})`
                : activeCategory
                  ? CATEGORIES.find((c) => c.slug === activeCategory)?.label || "Articles"
                  : "All articles"}
            </h2>
          </div>
        ) : (
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Latest</p>
              <h2 className="mt-3 text-3xl font-black text-white">Recent articles</h2>
            </div>
            <p className="hidden shrink-0 text-sm text-slate-400 md:block">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        )}

        {paginatedPosts.length === 0 ? (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-12 text-center">
            <p className="text-lg font-semibold text-white">No articles found</p>
            <p className="mt-2 text-sm text-slate-400">
              {searchQuery
                ? "Try a different search term or browse a category."
                : "Check back soon for new articles in this category."}
            </p>
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-light"
              >
                Clear search
              </button>
            ) : null}
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {totalPages > 1 ? (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-primary/60 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold transition-colors ${
                    currentPage === page
                      ? "bg-primary text-slate-950"
                      : "border border-white/10 bg-white/[0.03] text-white hover:border-primary/60"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-primary/60 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="surface-panel overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-slate-950 to-secondary/10 p-8 md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Newsletter</p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
              Get IPTV tips straight to your inbox.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              New guides, app reviews, and setup tutorials delivered every week. No spam, unsubscribe anytime.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-primary/50"
              />
              <button className="rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-light">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
