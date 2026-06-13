import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MoviesCarousel from "@/components/sections/MoviesCarousel";
import { Accordion } from "@/components/ui/Accordion";
import { FEATURE_CARDS, FAQ_ITEMS, PRICING_PLANS, SITE_NAME, WHATSAPP_URL } from "@/constants/content";
import { blogPosts } from "@/lib/posts";
import { ArrowRight, CheckCircle2, MonitorPlay, ShieldCheck, Sparkles, Tv2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.qwevotv.pro/#organization",
      name: SITE_NAME,
      url: "https://www.qwevotv.pro",
      logo: "https://www.qwevotv.pro/icones.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"],
        url: WHATSAPP_URL,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.qwevotv.pro/#website",
      name: SITE_NAME,
      url: "https://www.qwevotv.pro",
      publisher: { "@id": "https://www.qwevotv.pro/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://www.qwevotv.pro/#service",
      name: "qwevo tv premium IPTV service",
      provider: { "@id": "https://www.qwevotv.pro/#organization" },
      serviceType: "IPTV streaming subscription",
      areaServed: "Worldwide",
      description: "Premium IPTV streaming with live TV, sports, movies, and support across major devices.",
      offers: PRICING_PLANS.map((plan) => ({
        "@type": "Offer",
        name: `${plan.duration} ${plan.name}`,
        price: plan.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.qwevotv.pro/#faq",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const sectionIcons = [Tv2, MonitorPlay, ShieldCheck, Sparkles];

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="section-shell py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Pricing snapshot</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              Three plans, written for quick comparison.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              The pricing section uses stronger contrast, value cues, and a supporting entertainment image so the plan grid feels deliberate instead of bare.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image
              src="/images/4k-entertainment.webp"
              alt="4K entertainment streaming interface on television"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/25 to-transparent" />
            <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">4K entertainment</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article key={plan.id} className={`surface-panel flex h-full flex-col p-6 ${plan.recommended ? "border-primary/60 bg-primary/10" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{plan.duration}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h3>
                </div>
                {plan.recommended ? <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950">Best value</span> : null}
              </div>
              <p className="mt-6 text-4xl font-black text-white">€{plan.price}</p>
              <p className="mt-1 text-sm text-slate-400">About €{plan.monthly} per month.</p>
              <ul className="mt-6 space-y-3">
                {/* DEBA HNA GHADI IBANO GA3 L-KHADAMAT HIT HAYYEDNA .slice(0, 4) */}
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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

      <MoviesCarousel />

      <section className="section-shell py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Premium experience</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              A streaming service page with the visual depth users expect.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Real device imagery, clearer cards, and layered gradients make qwevo tv feel like a professional paid service without adding video or heavy animation.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_30px_90px_rgba(56,189,248,0.12)]">
            <Image
              src="/images/smart-tv.webp"
              alt="Smart TV showing streaming apps for IPTV entertainment"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Smart TV ready</p>
              <p className="mt-2 text-2xl font-semibold text-white">Built for the main screen.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {FEATURE_CARDS.map((feature, index) => {
            const Icon = sectionIcons[index % sectionIcons.length];

            return (
              <article key={feature.title} className="surface-panel p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Core improvements
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
              <li>One clear H1 on each page.</li>
              <li>Less decorative media and fewer heavy effects.</li>
              <li>Cleaner internal links between service pages.</li>
            </ul>
          </div>
          <div className="surface-panel p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Built for weak devices
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              The redesign uses simpler shapes, smaller visual assets, and a tighter hierarchy so the experience stays usable on a slower development machine.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Latest guides</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              Recent articles with real covers and complete answers.
            </h2>
          </div>
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image
              src="/images/movies-series.webp"
              alt="Movies and series streaming setup for IPTV entertainment"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
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

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Common setup questions</h2>
            <Accordion items={FAQ_ITEMS} className="mt-6" />
          </div>
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Need help now?</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">The support page is the fastest next step.</h2>
            <div className="relative my-5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/android-devices.webp"
                alt="Android device controlling a smart TV streaming setup"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Keep the path short: pricing for comparison, support for setup, blog for guides.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/support" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950">
                Go to support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
                Browse blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
