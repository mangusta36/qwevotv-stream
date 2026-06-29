import dynamic from "next/dynamic";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MoviesCarousel from "@/components/sections/MoviesCarousel";
import { Accordion } from "@/components/ui/Accordion";
import { FEATURE_CARDS, FAQ_ITEMS, PRICING_PLANS, SITE_NAME, WHATSAPP_URL } from "@/constants/content";
import { ArrowRight, CheckCircle2, MonitorPlay, ShieldCheck, Smartphone, Sparkles, Tv2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview"), {
  loading: () => <div className="section-shell py-12 md:py-20"><div className="h-64 animate-pulse rounded-[2rem] bg-white/5" /></div>,
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.qwevotv.pro/#organization",
      name: SITE_NAME,
      url: "https://www.qwevotv.pro",
      logo: "https://www.qwevotv.pro/icon-512x512.png",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"],
        url: WHATSAPP_URL,
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.qwevotv.pro/#website",
      name: SITE_NAME,
      url: "https://www.qwevotv.pro",
      publisher: { "@id": "https://www.qwevotv.pro/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://www.qwevotv.pro/#service",
      name: "qwevo tv premium IPTV service",
      provider: { "@id": "https://www.qwevotv.pro/#organization" },
      serviceType: "IPTV streaming subscription",
      areaServed: "Worldwide",
      description: "Premium IPTV streaming with live TV, sports, movies, and support across major devices.",
      offers: PRICING_PLANS.map((plan) => ({
        "@type": "Offer",
        name: `${plan.duration} ${plan.name}`,
        price: plan.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      })),
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.qwevotv.pro/#faq",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const sectionIcons = [Tv2, MonitorPlay, ShieldCheck, Sparkles];

export default function Home() {

  return (
    <main className="min-h-screen bg-background text-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />

      <Hero />

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="section-shell py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Pricing snapshot</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              Three plans, written for quick comparison.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              The pricing section uses stronger contrast, value cues, and a supporting entertainment image so the plan grid feels deliberate instead of bare.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image
              src="/images/4k-entertainment.webp"
              alt="4K entertainment streaming interface on television"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/25 to-transparent" />
            <div className="absolute left-5 top-5 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-secondary">4K entertainment</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article key={plan.id} className={`surface-panel flex h-full flex-col p-6 ${plan.recommended ? "border-primary/60 bg-primary/10" : ""}`}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{plan.duration}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{plan.name}</h3>
                </div>
                {plan.recommended ? <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950">Best value</span> : null}
              </div>
              <p className="mt-6 text-4xl font-black text-white">€{plan.price}</p>
              <p className="mt-1 text-sm text-slate-400">About €{plan.monthly} per month.</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I want the ${plan.duration} plan from ${SITE_NAME}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors ${
                  plan.recommended ? "bg-primary text-slate-950 hover:bg-primary-light" : "border border-white/10 bg-white/[0.04] text-white hover:border-primary/60 hover:bg-white/[0.08]"
                }`}
              >
                Choose plan
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <MoviesCarousel />

      <section className="section-shell py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Premium experience</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white md:text-5xl">
              A streaming service page with the visual depth users expect.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
              Real device imagery, clearer cards, and layered gradients make qwevo tv feel like a professional paid service without adding video or heavy animation.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-[0_30px_90px_rgba(56,189,248,0.12)]">
            <Image
              src="/images/smart-tv.webp"
              alt="Smart TV showing streaming apps for IPTV entertainment"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Smart TV ready</p>
              <p className="mt-2 text-2xl font-semibold text-white">Built for the main screen.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {FEATURE_CARDS.map((feature, index) => {
            const Icon = sectionIcons[index % sectionIcons.length];

            return (
              <article key={feature.title} className="surface-panel p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-panel p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Core improvements
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-300">
              <li>One clear H1 on each page.</li>
              <li>Less decorative media and fewer heavy effects.</li>
              <li>Cleaner internal links between service pages.</li>
            </ul>
          </div>
          <div className="surface-panel p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Built for weak devices
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-300">
              The redesign uses simpler shapes, smaller visual assets, and a tighter hierarchy so the experience stays usable on a slower development machine.
            </p>
          </div>
        </div>
      </section>

      {/* --- DEVICE COMPATIBILITY --- */}
      <section className="section-shell py-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Device support</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
          Works across all major streaming devices
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          qwevo tv works with the most popular IPTV devices on the market. Whether you use a Smart TV, Fire Stick, Android TV box, or mobile device, the setup process is quick and the streaming quality stays consistent across every screen.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="surface-panel p-6">
            <Tv2 className="h-6 w-6 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-white">Smart TV</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Install the IPTV app directly on Samsung, LG, or Sony Smart TVs. No extra hardware needed — just connect to Wi-Fi and follow the setup steps to start watching live channels and on-demand content.
            </p>
            <Link href="/blog/smart-tv-iptv-setup-guide" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Smart TV guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
          <article className="surface-panel p-6">
            <MonitorPlay className="h-6 w-6 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-white">Fire Stick</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Amazon Fire TV Stick is one of the most common devices for IPTV streaming. Install a compatible app from the Amazon store, enter your qwevo tv login details, and start watching in minutes.
            </p>
            <Link href="/blog/fire-stick-iptv-setup-guide" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Fire Stick guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
          <article className="surface-panel p-6">
            <Tv2 className="h-6 w-6 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-white">Android TV & Google TV</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Android TV boxes and Google TV devices support IPTV natively through the Play Store. The interface is familiar and finding channels works like a standard electronic program guide.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-400">
              Android TV guide — coming soon
            </span>
          </article>
          <article className="surface-panel p-6">
            <Smartphone className="h-6 w-6 text-primary" />
            <h3 className="mt-5 text-lg font-semibold text-white">Mobile & Tablet</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Watch on your phone or tablet anywhere with an internet connection. qwevo tv stream on both iOS and Android using popular IPTV player apps available in each app store.
            </p>
            <Link href="/blog/iptv-apps" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Best IPTV apps <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        </div>
      </section>

      {/* --- WHAT IS IPTV --- */}
      <section className="section-shell py-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">IPTV explained</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
          What is IPTV and how does it work
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          IPTV stands for Internet Protocol Television. Instead of using cable, satellite, or terrestrial signals, IPTV delivers television content over your broadband internet connection. This changes how live channels, on-demand movies, and sports events reach your screen. The technology relies on your existing home internet connection and a compatible device, which means you can watch television anywhere you have broadband access.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">IPTV vs cable and satellite TV</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Traditional cable and satellite television send signals through dedicated coaxial cables or satellite dishes. These setups often require professional installation, long-term contracts, and expensive monthly fees that increase over time. IPTV works differently: it uses your existing broadband connection to stream content directly to your device over the internet. This means you are not tied to a specific provider, a long-term contract, or expensive installation fees. With qwevo tv, you get access to a global content library through a simple internet connection and a compatible device. You can watch the same live channels, sports events, and on-demand content without the overhead of traditional broadcast infrastructure.
            </p>
          </div>
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">How IPTV streaming technology works</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              IPTV works by sending video content in small data packets over the internet using the same protocols that power web browsing and video streaming services. When you select a channel or a movie, the content streams in real time to your device through an IPTV player app. The player decodes the signal and displays it on your screen. The quality of your experience depends on three main factors: your internet connection speed, the server infrastructure supporting the stream, and the processing capability of the device you are using. qwevo tv combines anti-freeze servers with optimized streaming protocols to maintain stable playback on every supported screen, regardless of whether you are watching on a Smart TV, Fire Stick, Android TV box, or mobile device.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Live television streaming</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Watch live TV channels as they broadcast, including sports events, news bulletins, and entertainment programming from around the world. IPTV delivers live content with minimal delay compared to traditional broadcasting, making it suitable for real-time viewing of matches, breaking news, and live shows. With 26,000+ live channels available through qwevo tv, you can browse by category, switch between channels instantly, and use the electronic program guide to see what is airing now and next across the entire lineup.
            </p>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Video on demand library</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Access thousands of movies and TV series whenever you want. Unlike scheduled programming, video on demand lets you browse, select, and start watching content instantly from a searchable digital library. qwevo tv includes 100,000+ VOD titles spanning every major genre including action, comedy, drama, documentary, horror, sci-fi, and international cinema. The library is updated regularly with new releases, and content is available in 4K and Full HD resolution on compatible devices.
            </p>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Multi-device and simultaneous streaming</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              IPTV services work across multiple devices at the same time. Watch a live football match on your Smart TV while a family member streams a movie on a tablet in another room using the same subscription. Your qwevo tv plan covers all your household devices, so there is no need to purchase separate subscriptions for different rooms or screens. This flexibility is one of the key advantages IPTV has over traditional cable, where each television typically requires its own set-top box and connection.
            </p>
          </article>
        </div>
      </section>

      {/* --- IPTV SETUP GUIDES --- */}
      <section className="section-shell py-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Setup guides</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
          How to set up IPTV on your devices in minutes
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Getting started with qwevo tv is straightforward. After you choose a plan and complete activation through WhatsApp, follow these steps to start streaming on any compatible device. The same login credentials work across all your screens.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Smart TV IPTV setup</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              To set up IPTV on a Samsung, LG, or Sony Smart TV, open the built-in app store and search for a compatible IPTV player application. Install the app, open it, and enter the login details you received during activation. Most Smart TVs connect over Wi-Fi and display live channels through an easy-to-navigate electronic program guide that shows channel names, program schedules, and genre categories. The full setup takes a few minutes and requires no additional hardware beyond your television and internet connection. If you run into any issues during the Smart TV setup process, the qwevo tv support team can guide you through it step by step over WhatsApp.
            </p>
            <Link href="/blog/smart-tv-iptv-setup-guide" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Read full Smart TV guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Fire Stick IPTV setup</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Amazon Fire TV Stick is one of the most popular and easiest devices for IPTV streaming. Go to the Amazon App Store directly from your Fire Stick home screen, find a supported IPTV player, and install it with a single click. After installation, launch the app and authenticate using your qwevo tv credentials that were shared with you during activation. The Fire Stick interface is designed for fast navigation using the included remote control and works seamlessly with IPTV channel lists and electronic program guides. The device connects to your TV through an HDMI port, making it a portable solution that you can take with you when traveling.
            </p>
            <Link href="/blog/fire-stick-iptv-setup-guide" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Read full Fire Stick guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Android TV and mobile IPTV setup</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Android TV boxes and Google TV devices support IPTV apps natively through the Google Play Store, giving you access to the same app ecosystem as Android smartphones. For phones and tablets, compatible IPTV players are available in both the Google Play Store and Apple App Store. Once you install the app and log in with your qwevo tv credentials, you can start streaming immediately on any of your devices. Because your subscription is linked to your account rather than a specific device, you can switch between your Android TV, smartphone, and tablet freely without any additional setup steps.
            </p>
            <Link href="/blog/iptv-apps" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Best IPTV apps guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        </div>
      </section>

      <BlogPreview />

      {/* --- STREAMING QUALITY & IPTV BENEFITS --- */}
      <section className="section-shell py-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Streaming quality</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
          Premium IPTV streaming with reliable quality
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          qwevo tv delivers a consistent IPTV experience with anti-freeze technology, high-resolution channels, and a content library built for live sports, news, and on-demand entertainment.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">Anti-freeze servers for buffer-free playback</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Buffering is one of the most common frustrations with IPTV streaming and can ruin the viewing experience during live sports or movies. qwevo tv uses anti-freeze server technology to reduce interruptions during live sports events, peak evening hours, and long movie sessions. The server infrastructure is designed to distribute traffic load efficiently and maintain stable playback even when multiple users are streaming high-resolution content at the same time. This means fewer pauses, smoother channel switching, and a more reliable experience overall.
            </p>
            <Link href="/blog/stop-iptv-buffering" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              How to fix buffering <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">4K, FHD, and HD channel selection</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The service includes channels and VOD content in 4K, Full HD, and standard HD quality. Live sports events and the latest movie releases stream in the highest resolution your internet connection can support, automatically adjusting to your available bandwidth. This gives you a viewing experience comparable to traditional cable or satellite TV, with the added benefit of being able to choose between quality levels depending on your current network conditions. The 26,000+ live channels and 100,000+ VOD titles are all available in quality levels suited to your device and connection.
            </p>
            <Link href="/pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Compare plans and pricing <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SPORTS & ENTERTAINMENT --- */}
      <section className="section-shell py-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Sports & entertainment</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
          IPTV for sports, movies, and everyday viewing
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          One of the main reasons viewers switch to IPTV is the range of content available from a single subscription. Live sports, the latest movie releases, international news, and family entertainment are all accessible on the same platform across every device you own. Whether you are setting up IPTV for the first time or looking for a more flexible alternative to your current TV provider, the content variety and streaming quality make IPTV an increasingly popular choice for households worldwide.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">Live sports streaming without interruptions</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Sports fans get real-time access to live matches, tournaments, and dedicated sports channels from around the world. Whether you follow football, basketball, tennis, Formula 1, rugby, cricket, or combat sports, IPTV delivers coverage as it happens from multiple leagues and competitions. The combination of anti-freeze servers and high-resolution streams ensures that critical moments like goals, match points, and knockouts arrive without buffering or delays. With qwevo tv, you can watch live sports on your Smart TV, Fire Stick, or mobile device wherever you are, whether at home or on the go.
            </p>
            <Link href="/pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Plans for sports streaming <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">Movies, series, and on-demand content</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              With 100,000+ VOD titles, the on-demand library covers new movie releases, classic films, TV series, and documentaries across every genre. Browse by category, search for specific titles, and start watching at any time. The VOD catalog is updated regularly and available in 4K and Full HD on all compatible devices, giving you a viewing experience that competes with premium streaming platforms.
            </p>
            <Link href="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Browse content guides <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">International channels and global news</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              IPTV provides access to channels from multiple countries and languages on a single platform. Stay connected to news, cultural programming, and entertainment from your home region while exploring content from international broadcasters around the world. The 26,000+ live channels available through qwevo tv cover every major category and language, making it easy to find programming that matches your preferences regardless of where you are located.
            </p>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Family-friendly programming for all ages</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              The content library includes dedicated childrens channels, documentaries, lifestyle programming, and music television. Multiple device support means different family members can watch different content at the same time on their preferred screens without conflict.
            </p>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Cost savings compared to traditional TV</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              IPTV subscriptions are typically more affordable than cable or satellite packages while offering a wider selection of channels and on-demand content. With no long-term contracts, no installation fees, and flexible plan options that let you choose between 3, 6, and 12-month subscriptions, qwevo tv offers a cost-effective alternative that does not compromise on channel selection, streaming quality, or device compatibility. Plans start at just €37 for three months, with the monthly cost decreasing on longer subscriptions.
            </p>
            <Link href="/pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Compare subscription plans <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        </div>
      </section>

      {/* --- TROUBLESHOOTING & SUPPORT --- */}
      <section className="section-shell py-12 md:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Troubleshooting</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
          Common IPTV issues and how to solve them
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Even with a high-quality IPTV service, occasional issues can arise. Most common problems have straightforward solutions that do not require technical experience. Below are the most frequent questions and how to resolve them quickly.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Buffering and freezing during playback</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Buffering is one of the most common IPTV issues and is often caused by network congestion, insufficient internet speed, or temporary server load. Start by restarting your router and modem, then check your connection speed using an online speed test. If the issue persists, try switching from Wi-Fi to a wired Ethernet connection, which provides a more stable signal. You can also reduce the streaming quality in your IPTV app settings to lower the bandwidth requirement. qwevo tv anti-freeze servers help minimize buffering during peak evening hours and live sports events by distributing traffic across multiple server locations.
            </p>
            <Link href="/blog/stop-iptv-buffering" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Complete buffering guide <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">App installation and login errors</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              If you cannot install an IPTV app or your login credentials are not working, start by making sure your device operating system and firmware are up to date. Check that you are entering the correct username and password exactly as provided during activation. If the app fails to open or crashes on launch, reinstalling it can resolve most configuration errors and corrupted installation files. For persistent login problems, the qwevo tv support team can verify your account status and provide replacement credentials through WhatsApp within minutes.
            </p>
          </article>
          <article className="surface-panel p-6">
            <h3 className="text-lg font-semibold text-white">Channels not loading or stream errors</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              A specific channel may not load if the server is temporarily unavailable or if the channel URL has changed. Try switching to a different channel and then returning to the original one. If multiple channels are affected, restart the IPTV app or check your internet connection. Persistent channel issues can be reported through support for a server-side check.
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">Device-specific troubleshooting steps</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Different devices may have unique setup or playback challenges. Smart TVs sometimes need app permissions adjusted in the device settings menu, Fire Stick users should regularly check for system software updates in the device settings, and Android TV boxes occasionally require cache clearing in the app settings to resolve slow performance or loading errors. Mobile device users should verify that the IPTV app has the necessary network permissions enabled. Our detailed device-specific guides cover these scenarios with step-by-step instructions for each platform and can help you resolve most issues without needing to contact support.
            </p>
            <Link href="/support" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Visit device support <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="surface-panel p-6 md:p-8">
            <h3 className="text-lg font-semibold text-white">24/7 customer support when you need it</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              If the troubleshooting steps above do not resolve your issue, the qwevo tv support team is available around the clock through WhatsApp. Common reasons to reach out include activation delays after payment, account management questions, billing inquiries, and persistent playback problems that require investigation on the server side. The support team typically responds within minutes and can guide you through advanced troubleshooting steps, check server status, or escalate technical issues to ensure your IPTV experience is restored as quickly as possible.
            </p>
            <Link href="/support" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-white">
              Contact support team <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Common setup questions</h2>
            <Accordion items={FAQ_ITEMS} className="mt-6" />
          </div>
          <div className="surface-panel p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Need help now?</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">The support page is the fastest next step.</h2>
            <div className="relative my-5 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/android-devices.webp"
                alt="Android device controlling a smart TV streaming setup"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Keep the path short: pricing for comparison, support for setup, blog for guides.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/support" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950">
                Go to support
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
                Browse blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
