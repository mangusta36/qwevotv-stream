"use client";

import { Globe, Link as LinkIcon, MessageCircle, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function SidebarShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="surface-panel mt-4 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Share</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
        >
          <Globe className="h-4 w-4" />
          Share
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
        >
          <MessageSquare className="h-4 w-4" />
          Tweet
        </a>
        <a
          href={`https://wa.me/?text=${encodeURIComponent(title + " - " + url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
        >
          <LinkIcon className="h-4 w-4" />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
