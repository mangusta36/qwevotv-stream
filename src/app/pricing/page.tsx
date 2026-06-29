import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { PRICING_PLANS, SITE_NAME, WHATSAPP_URL } from "@/constants/content";
import { ArrowRight, Check, Star } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "qwevo tv IPTV Pricing – Compare Subscription Plans",
  description:
    "Compare qwevo tv subscription plans with transparent pricing and flexible device support. Choose from 3, 6, or 12-month IPTV plans starting at just €37.",
  alternates: {
    canonical: "https://www.qwevotv.pro/pricing",
  },
  openGraph: {
    title: "qwevo tv IPTV Pricing – Compare Subscription Plans",
    description:
      "Compare qwevo tv subscription plans with transparent pricing and flexible device support. Choose from 3, 6, or 12-month IPTV plans starting at just €37.",
    url: "https://www.qwevotv.pro/pricing",
    siteName: "qwevo tv",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qwevotv.pro/images/4k-entertainment.webp",
        width: 1280,
        height: 860,
        alt: "qwevo tv IPTV pricing plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "qwevo tv IPTV Pricing – Compare Subscription Plans",
    description:
      "Compare qwevo tv subscription plans with transparent pricing. Choose from 3, 6, or 12-month IPTV plans starting at just €37.",
    images: ["https://www.qwevotv.pro/images/4k-entertainment.webp"],
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qwevotv.pro" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.qwevotv.pro/pricing" },
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://www.qwevotv.pro/#organization",
      name: SITE_NAME,
      url: "https://www.qwevotv.pro",
    },
    {
      "@type": "Product",
      "@id": "https://www.qwevotv.pro/pricing#product",
      name: "qwevo tv Premium IPTV Subscription",
      description: "Premium IPTV subscription with live TV, sports, movies, and 24/7 support across major devices.",
      image: "https://www.qwevotv.pro/images/4k-entertainment.webp",
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      offers: PRICING_PLANS.map((plan) => ({
        "@type": "Offer",
        name: `${plan.duration} ${plan.name}`,
        price: plan.price,
        priceCurrency: "EUR",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: "https://www.qwevotv.pro/pricing",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": "https://www.qwevotv.pro/#organization" },
      })),
    },
  ],
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Pricing</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
              qwevo tv pricing that is easier to compare at a glance.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              The goal is simple: make the plans easy to scan, easy to compare, and easy to hand off to support if you need help later.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image src="/images/4k-entertainment.webp" alt="4K IPTV entertainment pricing visual" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-4 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex h-full flex-col rounded-[2rem] border p-6 ${
                plan.recommended ? "border-primary/60 bg-primary/10" : "border-white/10 bg-white/[0.03]"
              }`}
            >
              {plan.recommended ? (
                <div className="absolute -top-3 right-5 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950">
                  <Star className="h-3.5 w-3.5" />
                  Best value
                </div>
              ) : null}

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{plan.duration}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h2>
              <p className="mt-6 text-5xl font-black text-white">€{plan.price}</p>
              <p className="mt-2 text-sm text-slate-400">About €{plan.monthly} per month.</p>

              <h3 className="sr-only">Plan features</h3>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I want the ${plan.duration} plan from ${SITE_NAME}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.recommended ? "bg-primary text-slate-950 hover:bg-primary-light" : "border border-white/10 bg-white/[0.04] text-white hover:border-primary/60 hover:bg-white/[0.08]"
                }`}
              >
                Choose plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="surface-panel p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Need help choosing?</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Pick the plan, then check support if you want setup guidance.</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            The pricing page now acts like a proper decision page instead of another full-screen sales block.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/support" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950">
              Visit support
            </Link>
            <Link href="/blog" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
              Read blog guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
