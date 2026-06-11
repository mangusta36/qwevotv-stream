import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { FEATURE_CARDS, SUPPORT_ITEMS, WHATSAPP_URL } from "@/constants/content";
import { CheckCircle2, Globe, Smartphone, Sparkles, Tv2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features - qwevo tv premium IPTV experience",
  description: "Explore qwevo tv features with clear device support, smoother playback, helpful support, and a cleaner IPTV interface.",
  alternates: {
    canonical: "/features",
  },
};

const icons = [Tv2, Globe, Smartphone, Sparkles];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Features</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
              qwevo tv features made for clarity, speed, and easier decisions.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              The page now focuses on the product value that people actually compare: device support, playback stability, support quality, and a layout that is easy to scan.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image src="/images/iptv-streaming.webp" alt="Premium IPTV streaming feature visual" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {FEATURE_CARDS.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article key={feature.title} className="surface-panel p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="mt-5 text-lg font-semibold text-white">{feature.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Support</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">The support layer is part of the product.</h2>
            <div className="mt-6 space-y-4">
              {SUPPORT_ITEMS.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">What changed</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">The layout is lighter and more consistent.</h2>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-slate-300">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                One clear message per screen section.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Less reliance on large images and heavy motion.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Better internal links to pricing, support, and the blog.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="surface-panel p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Next step</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Compare the plans or go straight to support.</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            The feature page now points people to the right next page instead of leaving them at a dead end.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950">
              View pricing
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
              WhatsApp support
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
