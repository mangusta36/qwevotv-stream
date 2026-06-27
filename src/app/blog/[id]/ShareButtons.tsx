"use client";

import { Globe, Link, MessageCircle, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Share
      </span>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
      >
        <Globe className="h-3.5 w-3.5" />
        Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
      >
        <MessageSquare className="h-3.5 w-3.5" />
        X
      </a>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(title + " - " + url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        WhatsApp
      </a>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300 transition-colors hover:border-primary/60 hover:text-primary"
      >
        <Link className="h-3.5 w-3.5" />
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
