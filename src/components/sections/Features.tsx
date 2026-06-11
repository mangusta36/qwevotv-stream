import { FEATURE_CARDS, SITE_NAME, SUPPORT_ITEMS } from "@/constants/content";
import { CheckCircle2, Clock3, Globe, ShieldCheck, Smartphone, Tv2 } from "lucide-react";

const featureIcons = [Tv2, Globe, Smartphone, ShieldCheck];

export default function Features() {
  return (
    <section className="section-shell py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Core features</p>
        <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
          Built for {SITE_NAME} users who want a cleaner, faster streaming flow.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          The redesign focuses on clarity, easier scanning, and fewer expensive visual effects so the site feels better on lower-powered devices.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {FEATURE_CARDS.map((feature, index) => {
          const Icon = featureIcons[index % featureIcons.length];

          return (
            <article key={feature.title} className="surface-panel p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.description}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-panel p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <Clock3 className="h-4 w-4 text-primary" />
            Support flow
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {SUPPORT_ITEMS.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-white">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            Why it feels lighter
          </div>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
            <li>Fewer decorative effects and simpler cards.</li>
            <li>More direct copy and cleaner heading structure.</li>
            <li>Less dependence on large images and animation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
