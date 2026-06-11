"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type AccordionItem = {
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.03]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="text-sm font-semibold text-white md:text-base">{item.question}</span>
              <ChevronDown className={cn("h-4 w-4 shrink-0 text-primary transition-transform", open && "rotate-180")} />
            </button>
            <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
              <div className="overflow-hidden px-5 pb-4 text-sm leading-relaxed text-slate-300">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
