import { CheckCircle2, Laptop, MonitorPlay, Music2, Play, Radio, Smartphone, Tv2 } from "lucide-react";
import Image from "next/image";

const coverageItems = [
  { label: "Live TV", icon: Tv2 },
  { label: "Sports", icon: Play },
  { label: "Movies", icon: MonitorPlay },
  { label: "Series", icon: Radio },
  { label: "Mobile", icon: Smartphone },
  { label: "Desktop", icon: Laptop },
  { label: "Guidance", icon: CheckCircle2 },
  { label: "Audio", icon: Music2 },
];

export default function MoviesCarousel() {
  return (
    <section className="section-shell py-6 md:py-10">
      <div className="surface-panel overflow-hidden">
        <div className="border-b border-white/10 px-6 py-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">What qwevo tv covers</p>
          <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
            A simple lineup of the content people come for first.
          </h2>
        </div>

        <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {coverageItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950 p-4">
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-4 text-sm font-medium text-white">{item.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-3 border-t border-white/10 p-5 md:grid-cols-3">
          {[
            { src: "/images/live-sports.webp", alt: "Live sports IPTV viewing on television", label: "Live sports" },
            { src: "/images/fire-stick.webp", alt: "Fire TV Stick connected to a television in a dark living room streaming setup", label: "Fire TV setup" },
            { src: "/images/movies-series.webp", alt: "Movies and series streaming screen for home entertainment", label: "Movies and series" },
          ].map((image) => (
            <div key={image.src} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">{image.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
