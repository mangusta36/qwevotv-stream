import Link from "next/link";

export default function NewsletterSection() {
  return (
    <section className="section-shell pb-14">
      <div className="surface-panel overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-slate-950 to-secondary/10 p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
            Newsletter
          </p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">
            Stay ahead with weekly IPTV tips.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            New guides, app comparisons, and exclusive setup walkthroughs delivered every week.
            No spam, unsubscribe anytime.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-primary/50"
            />
            <button className="rounded-2xl bg-primary px-6 py-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-primary-light">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            By subscribing you agree to receive our newsletter. Read our{" "}
            <Link href="/support" className="text-primary underline">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
