import { PRICING_PLANS, SITE_NAME, WHATSAPP_NUMBER } from "@/constants/content";
import { Check, Sparkles, Star } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <section className="section-shell py-16 md:py-24" id="pricing">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Pricing</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
          Straightforward plans with clear value and no clutter.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          The plans are written for scanning, comparison, and fast decision-making on both small and large screens.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {PRICING_PLANS.map((plan) => {
          const message = encodeURIComponent(`Hello, I want the ${plan.duration} plan from ${SITE_NAME}.`);
          const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

          return (
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

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{plan.duration}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h3>
                </div>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight text-white">€{plan.price}</span>
                <span className="pb-1 text-sm text-slate-400">/ package</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">About €{plan.monthly} per month.</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.recommended
                    ? "bg-primary text-slate-950 hover:bg-primary-light"
                    : "border border-white/10 bg-white/[0.04] text-white hover:border-primary/60 hover:bg-white/[0.08]"
                }`}
              >
                Order this plan
              </a>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-slate-300">
        <p>Need a different device mix or a setup question?</p>
        <Link href="/support" className="font-semibold text-white underline decoration-primary decoration-2 underline-offset-4">
          Visit support
        </Link>
      </div>
    </section>
  );
}
