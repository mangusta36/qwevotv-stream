import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.22)]",
        className,
      )}
      {...props}
    />
  );
}
