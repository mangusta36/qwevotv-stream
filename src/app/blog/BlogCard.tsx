"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Calendar, Clock3, User } from "lucide-react";
import type { BlogPost } from "@/lib/posts";

function categorySlug(category: string): string | null {
  const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return slug || null;
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const router = useRouter();

  function handleCategoryClick(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
    const href = categorySlug(post.category) ? `/blog/${categorySlug(post.category)}` : "/blog";
    router.push(href);
  }

  return (
    <Link href={`/blog/${post.id}`} className="group surface-panel flex h-full flex-col overflow-hidden transition-colors hover:border-primary/60">
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
        <span
          onClick={handleCategoryClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleCategoryClick(e as any); }}
          className="absolute left-4 top-4 cursor-pointer rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
        >
          {post.category}
        </span>
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
        <div className="mt-auto flex items-center gap-1.5 pt-7 text-sm font-semibold text-primary">
          <span>Read more</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
