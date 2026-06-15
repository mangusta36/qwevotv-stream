import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Accordion } from "@/components/ui/Accordion";
import { blogPosts } from "@/lib/posts";
import { ArrowLeft, ArrowRight, Calendar, Clock3, List, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://www.qwevotv.pro";

type BlogPostPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    return {
      title: "Article not found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${post.title} | qwevo tv blog`;
  const description = post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + "..." : post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/blog/${post.id}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteUrl}/blog/${post.id}`,
      siteName: "qwevo tv",
      images: [
        {
          url: `${siteUrl}${post.image}`,
          width: 1280,
          height: 720,
          alt: post.imageAlt,
        },
      ],
      publishedTime: post.publishedAt,
      modifiedTime: post.dateModified,
      authors: [post.author],
      section: post.category,
      tags: [post.category, "IPTV", "qwevo tv", "streaming"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `${siteUrl}${post.image}`,
          alt: post.imageAlt,
        },
      ],
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
    keywords: [
      post.category.toLowerCase(),
      "IPTV",
      "qwevo tv",
      "streaming",
      "setup guide",
    ],
  };
}

function renderParagraphs(paragraphs: string[], contentLinks?: { paragraphIndex: number; html: string }[]) {
  if (!contentLinks || contentLinks.length === 0) {
    return paragraphs.map((paragraph, index) => (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
    ));
  }

  const linkMap = new Map<number, string[]>();
  for (const link of contentLinks) {
    const existing = linkMap.get(link.paragraphIndex) || [];
    existing.push(link.html);
    linkMap.set(link.paragraphIndex, existing);
  }

  return paragraphs.map((paragraph, index) => {
    const extras = linkMap.get(index);
    if (!extras) {
      return <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />;
    }
    return (
      <p key={index} dangerouslySetInnerHTML={{ __html: paragraph + extras.join(" ") }} />
    );
  });
}

export default async function BlogPostDetail({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts.find((item) => item.id === id);

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-white">
        <Navbar />
        <section className="section-shell flex min-h-[60vh] flex-col items-start justify-center pt-28">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Blog</p>
          <h1 className="mt-4 text-3xl font-black text-white">Article not found.</h1>
          <Link href="/blog" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.id !== post.id).slice(0, 3);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qwevotv.pro" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.qwevotv.pro/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://www.qwevotv.pro/blog/${post.id}` },
        ],
      },
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: {
          "@type": "ImageObject",
          url: `https://www.qwevotv.pro${post.image}`,
          width: 1280,
          height: 720,
        },
        datePublished: post.publishedAt,
        dateModified: post.dateModified,
        wordCount: post.wordCount,
        timeRequired: `PT${post.readTime.replace(" min", "")}M`,
        author: {
          "@type": "Person",
          name: "qwevo tv editorial team",
          url: "https://www.qwevotv.pro/blog",
        },
        publisher: {
          "@type": "Organization",
          name: "qwevo tv",
          logo: {
            "@type": "ImageObject",
            url: "https://www.qwevotv.pro/icones.png",
            width: 512,
            height: 512,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.qwevotv.pro/blog/${post.id}`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.qwevotv.pro/blog/${post.id}#faq`,
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-slate-500">
              <span>{post.category}</span>
              <span>{post.displayDate}</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              {post.title}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-slate-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300">
                <Calendar className="h-4 w-4 text-primary" />
                {post.displayDate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300">
                <Clock3 className="h-4 w-4 text-primary" />
                {post.readTime}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300">
                <User className="h-4 w-4 text-primary" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-slate-300">
                {post.coverLabel}
              </span>
            </div>
          </div>

          <div className="surface-panel overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                placeholder="blur"
                blurDataURL={post.blurDataURL}
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/76 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">{post.category}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{post.coverLabel}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="surface-panel p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <List className="h-4 w-4 text-primary" />
                Table of contents
              </div>
              <nav className="mt-4 space-y-2">
                {post.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`} className="block rounded-xl px-3 py-2 text-sm leading-snug text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white">
                    {section.heading}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="space-y-6">
            {post.sections.map((section) => {
              const HeadingTag = section.level === 2 ? "h2" : "h3";

              return (
                <section key={section.heading} id={section.id} className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-8">
                  <HeadingTag className={section.level === 2 ? "text-2xl font-black leading-tight text-white md:text-4xl" : "text-xl font-semibold text-white md:text-2xl"}>
                    {section.heading}
                  </HeadingTag>
                  <div className="mt-6 space-y-5 text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                    {renderParagraphs(section.paragraphs, section.contentLinks)}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 grid gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-relaxed text-slate-300">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.note ? (
                    <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 to-secondary/10 p-5 text-sm leading-relaxed text-slate-100">
                      {section.note}
                    </div>
                  ) : null}
                </section>
              );
            })}
          </article>
        </div>
      </section>

      <section id="faq" className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Frequently asked questions about {post.category.toLowerCase()}</h2>
            <Accordion items={post.faqs} className="mt-6" />
          </div>
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Next step</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {post.category === "Setup" || post.category === "Devices"
                ? "Finished the guide? Check plans or get help."
                : post.category === "Troubleshooting"
                  ? "Still having issues? Contact support."
                  : post.category === "Buying guide" || post.category === "Features"
                    ? "Ready to compare plans and features?"
                    : "Use the guide, then compare the plans."}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {post.category === "Setup" || post.category === "Devices"
                ? "Once the device setup is complete, compare subscription plans or visit the support page if anything is unclear."
                : post.category === "Troubleshooting"
                  ? "If the buffering checklist did not solve the issue, the support team can help with device-specific and account-specific checks."
                  : post.category === "Buying guide"
                    ? "Use the pricing page to compare plans by duration, device count, and support level."
                    : "The blog works best when it sends people to the right next page, so the article flow stays useful instead of dropping off at the end."}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {post.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white transition-colors hover:border-primary/60">
                  <div className="flex items-center justify-between gap-3">
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Related articles</p>
          <h2 className="mt-3 text-3xl font-black text-white">Keep reading</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`} className="group surface-panel overflow-hidden transition-colors hover:border-primary/60">
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={item.blurDataURL}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-slate-950/50" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{item.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
