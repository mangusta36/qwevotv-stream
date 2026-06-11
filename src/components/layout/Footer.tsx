import { NAV_LINKS, SITE_NAME, WHATSAPP_URL } from "@/constants/content";
import { ArrowUpRight, ShieldCheck, Tv2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="section-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-slate-950">
                <Tv2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Premium IPTV</p>
                <p className="text-xl font-semibold text-white">{SITE_NAME}</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              A cleaner IPTV experience for live TV, sports, movies, and support across modern devices.
            </p>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I would like support from ${SITE_NAME}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-primary/60 hover:bg-white/[0.08]"
            >
              <ArrowUpRight className="h-4 w-4 text-primary" />
              WhatsApp support
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Quick links</p>
            <div className="mt-4 grid gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Trust notes</p>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed text-slate-300">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Clear support flow
              </div>
              <p className="mt-2">
                Simple setup, fast responses, and a lighter interface for low-power devices.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright {year} {SITE_NAME}. All rights reserved.</p>
          <p>Live TV, sports, movies, and support in one place.</p>
        </div>
      </div>
    </footer>
  );
}
