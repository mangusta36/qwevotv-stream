import { blogPosts } from "@/lib/posts";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredPosts = [...blogPosts]
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  .slice(0, 3);

export default function BlogPreview() {
  return (
    <section className="section-shell py-12 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Latest guides</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
            Recent articles with real covers and complete answers.
          </h2>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl">
          <Image
            src="/images/movies-series.webp"
            alt="Professional home cinema setup for premium movie streaming"
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {featuredPosts.map((post) => (
          <article key={post.id} className="surface-panel flex h-full flex-col overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={post.image} alt={post.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{post.category}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-primary transition-colors hover:text-white">
              Read article
              <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
