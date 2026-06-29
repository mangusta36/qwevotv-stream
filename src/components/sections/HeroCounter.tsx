"use client";

import { useEffect, useRef } from "react";

export default function HeroCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let rafId: number;
    const startTime = performance.now();
    const duration = 2000;
    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      el.textContent = `${Math.floor(progress * target).toLocaleString()}${suffix}`;
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}
