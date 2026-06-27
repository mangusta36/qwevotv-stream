import { PLATFORM_STATS, SITE_NAME, WHATSAPP_URL } from "@/constants/content";
import { ArrowRight, Play, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroMessage = encodeURIComponent(`Hello, I am interested in ${SITE_NAME}.`);
  const whatsappHref = `${WHATSAPP_URL}?text=${heroMessage}`;

  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bg.webp"
          alt="Modern flat screen television in a stylish living room setup"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/15 to-transparent" />
      <div className="absolute -right-40 top-1/3 -z-10 h-[500px] w-[500px] -translate-y-1/4 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-background to-transparent" />

      <div className="section-shell relative z-10 py-12 lg:py-20">
        <div className="max-w-2xl space-y-8">
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
              Get Trial
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
      </div>
    </section>
  );
}
