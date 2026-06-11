import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS, SUPPORT_ITEMS, WHATSAPP_URL } from "@/constants/content";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support - qwevo tv setup help and troubleshooting",
  description: "Get qwevo tv support for setup, renewals, troubleshooting, and device guidance through WhatsApp and clear help pages.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Support</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
              qwevo tv support for setup, renewals, and troubleshooting.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              The support page is now built like a help center: clear starting points, simple follow-up actions, and fewer distractions.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image src="/images/android-devices.webp" alt="Android phone and smart TV support visual" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {SUPPORT_ITEMS.map((item) => (
            <article key={item.title} className="surface-panel p-6">
              <Sparkles className="h-6 w-6 text-primary" />
              <h2 className="mt-5 text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-panel p-6 md:p-8 transition-colors hover:border-primary/60"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-white">WhatsApp support</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Use the fastest support path for setup, renewals, and account questions.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Open WhatsApp
              <ArrowRight className="h-4 w-4" />
            </div>
          </a>

          <Link href="/blog" className="surface-panel p-6 md:p-8 transition-colors hover:border-primary/60">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-white">Setup guides</h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Browse step-by-step articles for Smart TV, Fire Stick, Android TV, and mobile devices.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Read the blog
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Frequently asked support questions</h2>
            <Accordion items={FAQ_ITEMS} className="mt-6" />
          </div>
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Best next move</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">If you know the device, start with the guide.</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              The support page now points people to the right help path without making them scroll through a large wall of text.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pricing" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950">
                View pricing
              </Link>
              <Link href="/features" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
                Explore features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
