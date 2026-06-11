"use client";

import { NAV_LINKS, SITE_NAME, WHATSAPP_URL } from "@/constants/content";
import { cn } from "@/lib/utils";
import { Menu, MessageCircle, Tv2, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="section-shell flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/75 px-4 py-3 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-slate-950">
            <Tv2 className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xs uppercase tracking-[0.28em] text-slate-400">Premium IPTV</span>
            <span className="text-lg font-bold text-white">{SITE_NAME}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-slate-300 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I want to know more about ${SITE_NAME}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-primary/60 hover:bg-white/[0.08] sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            WhatsApp
          </a>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "section-shell lg:hidden",
          isOpen ? "pointer-events-auto mt-3 opacity-100" : "pointer-events-none mt-0 opacity-0",
        )}
      >
        <div className="rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl transition-all">
          <div className="grid gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.05]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I want to know more about ${SITE_NAME}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-slate-950"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
