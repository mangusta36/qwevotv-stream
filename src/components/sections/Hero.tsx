"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Monitor,
  MonitorPlay,
  Play,
  Radio,
  Signal,
  Smartphone,
  Tv,
  Tv2,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE_NAME, WHATSAPP_URL } from "@/constants/content";

const features = [
  { icon: Radio, label: "25,000+", desc: "Live channels worldwide" },
  { icon: MonitorPlay, label: "4K / HD", desc: "Ultra HD quality streams" },
  { icon: Globe, label: "Multi Device", desc: "Watch on any screen" },
  { icon: Signal, label: "99.9%", desc: "Server uptime guarantee" },
];

const devices = [
  { name: "Android", icon: Smartphone },
  { name: "Fire TV", icon: Tv },
  { name: "Roku", icon: MonitorPlay },
  { name: "Samsung TV", icon: Tv2 },
  { name: "LG", icon: Monitor },
  { name: "Apple TV", icon: Tv },
  { name: "Windows", icon: Monitor },
  { name: "macOS", icon: Monitor },
  { name: "iPhone", icon: Smartphone },
  { name: "iPad", icon: Smartphone },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

function GlowOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full animate-glow ${className}`} />;
}

function LiveIndicator() {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setActive((v) => !v), 1200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative flex h-2 w-2">
      <span
        className={`absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] ${active ? "opacity-100" : "opacity-40"} transition-opacity`}
      />
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] ${active ? "opacity-75" : "opacity-0"} transition-opacity`}
      />
    </span>
  );
}

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const lastRef = useRef(0);
  useEffect(() => {
    let rafId: number;
    const startTime = performance.now();
    const duration = 2000;
    lastRef.current = 0;
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      if (current !== lastRef.current) {
        lastRef.current = current;
        setCount(current);
      }
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target]);
  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const heroMsg = encodeURIComponent(`Hello, I am interested in ${SITE_NAME}.`);
  const whatsappHref = `${WHATSAPP_URL}?text=${heroMsg}`;

  const viewers = 14237;

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg-new.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-[#050816]/40 to-[#050816]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 40%, rgba(20,184,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 75% 60%, rgba(37,99,235,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_transparent_40%,_rgba(5,8,22,0.6)_100%)]" />

      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      <GlowOrb className="-left-40 top-1/4 h-[500px] w-[500px] bg-[#14B8FF]/10 blur-[140px]" />
      <GlowOrb className="right-0 top-1/3 h-[400px] w-[400px] bg-[#2563EB]/8 blur-[120px]" />
      <GlowOrb className="left-1/2 top-1/2 h-[300px] w-[300px] bg-[#14B8FF]/6 blur-[100px]" />

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:py-24">
          <motion.div
            className="max-w-2xl pt-24 sm:pt-28 lg:pt-0"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full border border-[#14B8FF]/20 bg-[#14B8FF]/8 px-4 py-1.5 backdrop-blur-md"
              variants={fadeUp}
              custom={0}
            >
              <Zap className="h-3.5 w-3.5 text-[#14B8FF]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#14B8FF]">
                Premium IPTV Experience
              </span>
            </motion.div>

            <motion.h1
              className="mt-5 text-[clamp(2rem,7vw,4.5rem)] font-black leading-[1.04] tracking-tight text-white"
              variants={fadeUp}
              custom={1}
            >
              Watch{" "}
              <span className="bg-gradient-to-r from-[#22D3EE] via-[#14B8FF] to-[#2563EB] bg-clip-text text-transparent">
                Live TV, Sports & Movies
              </span>
              <br className="hidden sm:inline" />
              in Stunning 4K
            </motion.h1>

            <motion.p
              className="mt-4 max-w-lg text-base leading-relaxed text-slate-300/80 sm:text-lg"
              variants={fadeUp}
              custom={2}
            >
              Premium IPTV with 26,000+ live channels, 100,000+ VOD titles, and
              instant activation. Stream on every device with anti-freeze
              technology and 24/7 support.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              variants={fadeUp}
              custom={3}
            >
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#14B8FF] to-[#2563EB] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#14B8FF]/20 transition-all hover:shadow-xl hover:shadow-[#14B8FF]/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
                <Play className="h-4 w-4 fill-current" />
                <span className="relative">Get Started</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08]"
              >
                View Plans
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 sm:mt-10 grid grid-cols-2 gap-2 sm:gap-3"
              variants={fadeUp}
              custom={4}
            >
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.label}
                    className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-3 sm:p-4 backdrop-blur-sm transition-all hover:border-[#14B8FF]/20 hover:bg-[#14B8FF]/5 hover:shadow-lg hover:shadow-[#14B8FF]/5"
                  >
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#14B8FF]/10 transition-transform group-hover:scale-110 group-hover:bg-[#14B8FF]/15">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#14B8FF]" />
                    </div>
                    <p className="mt-3 text-base font-bold text-white">
                      {f.label}
                    </p>
                    <p className="mt-0.5 text-[11px] text-slate-400/80">
                      {f.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="group relative w-64">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#14B8FF]/5 to-[#2563EB]/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-2xl">
                <div className="flex items-center gap-2.5">
                  <LiveIndicator />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#22D3EE]">
                    Live Now
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
                      Watching Now
                    </p>
                    <p className="mt-1 flex items-baseline gap-1 text-2xl font-black text-white tabular-nums">
                      <Users className="mr-1 h-4 w-4 text-[#14B8FF]" />
                      <Counter target={viewers} />
                      <span className="text-sm font-medium text-slate-400">
                        viewers
                      </span>
                    </p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Channels
                      </p>
                      <p className="mt-0.5 text-lg font-bold text-white">
                        26,000+
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                        Uptime
                      </p>
                      <p className="mt-0.5 text-lg font-bold text-green-400">
                        99.9%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      Server status
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-green-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      All systems operational
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-slate-600">
                Updated in real-time
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="section-shell relative z-10 -mt-12 sm:-mt-16 pb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        variants={stagger}
      >
        <motion.div
          className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-6 sm:px-6 sm:py-7 md:px-10 backdrop-blur-2xl sm:rounded-3xl"
          variants={fadeUp}
          custom={0}
        >
          <motion.p
            className="text-center text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400/60"
            variants={fadeUp}
            custom={1}
          >
            Works on all your favorite devices
          </motion.p>

          <motion.div
            className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3"
            variants={fadeUp}
            custom={2}
          >
            {devices.map((device) => {
              const Icon = device.icon;
              return (
                <motion.div
                  key={device.name}
                  className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2 backdrop-blur-sm transition-all hover:border-[#14B8FF]/20 hover:bg-[#14B8FF]/5"
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icon className="h-3.5 w-3.5 text-white/30 sm:h-4 sm:w-4" />
                  <span className="text-xs font-medium text-white/50 sm:text-sm">
                    {device.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-4 flex items-center justify-center gap-1"
          variants={fadeUp}
          custom={3}
        >
          <CheckCircle2 className="h-3 w-3 text-[#14B8FF]" />
          <span className="text-xs text-slate-500">
            Free setup &bull; 24/7 support &bull; Instant activation
          </span>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 -z-10 -translate-x-1/2">
        <div className="animate-soft-bounce flex flex-col items-center gap-1.5">
          <span className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
