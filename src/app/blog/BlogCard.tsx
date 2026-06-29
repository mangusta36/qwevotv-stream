import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock3, User } from "lucide-react";
import type { BlogPostPreview } from "@/lib/postPreviews";

export default function BlogCard({ post, featured }: { post: BlogPostPreview; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group surface-panel flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_60px_rgba(56,189,248,0.08)]"
    >
      <div className="relative aspect-[16/10] bg-slate-950">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL={post.blurDataURL}
          sizes={
            featured
              ? "(min-width: 1024px) 64vw, 100vw"
              : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 via-slate-950/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
          {post.category}
        </span>
        {featured ? (
          <span className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <User className="h-3.5 w-3.5 text-primary" /> {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-primary" /> {post.displayDate}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5 text-primary" /> {post.readTime}
          </span>
        </div>
        <h2 className="mt-5 text-xl font-semibold text-white transition-colors group-hover:text-primary">
          {post.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-1.5 pt-7 text-sm font-semibold text-primary">
          <span>Read article</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
