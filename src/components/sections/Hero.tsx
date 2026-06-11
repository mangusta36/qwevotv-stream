import { PLATFORM_STATS, SITE_NAME, WHATSAPP_URL } from "@/constants/content";
import { ArrowRight, Play, ShieldCheck, Sparkles, Tv2, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroMessage = encodeURIComponent(`Hello, I am interested in ${SITE_NAME}.`);
  const whatsappHref = `${WHATSAPP_URL}?text=${heroMessage}`;

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-[linear-gradient(to_bottom,rgba(56,189,248,0.10),transparent_55%)]" />

      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
            <Zap className="h-4 w-4 text-primary" />
            Premium IPTV without the clutter
          </div>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              qwevo tv for live channels, sports, and movies.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              A lighter, cleaner IPTV experience with fast activation, 4K-ready playback, and simple setup help across the devices people actually use.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-light"
            >
              <Play className="h-4 w-4 fill-current" />
              Get started
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-primary/60 hover:bg-white/[0.07]"
            >
              View pricing
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {PLATFORM_STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-panel relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-3 shadow-[0_40px_120px_rgba(56,189,248,0.14)] sm:p-4">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.65rem] border border-white/10 bg-slate-950">
            <Image
              src="/images/iptv-streaming.webp"
              alt="Premium IPTV streaming interface on a television with remote control"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                Stable servers
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 text-[11px] font-semibold text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                4K ready
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/10 bg-slate-950/78 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Now streaming</p>
              <p className="mt-2 text-2xl font-black text-white">Live channels, sports, movies, and series.</p>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {[
                  { label: "Live", icon: Tv2 },
                  { label: "Sport", icon: Zap },
                  { label: "VOD", icon: Play },
                  { label: "Help", icon: ShieldCheck },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="rounded-2xl bg-white/[0.06] p-3 text-center">
                      <Icon className="mx-auto h-4 w-4 text-primary" />
                      <p className="mt-2 text-[11px] font-semibold text-white">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
