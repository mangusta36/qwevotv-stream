import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { WHATSAPP_URL } from "@/constants/content";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Globe,
  MessageCircle,
  MonitorSmartphone,
  Tv2,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "qwevo tv IPTV Features & Device Support Guide",
  description:
    "Explore qwevo tv premium IPTV features for Smart TV, Fire Stick, and Android TV. Learn about stable 4K playback, device compatibility, and responsive WhatsApp support.",
  alternates: {
    canonical: "https://www.qwevotv.pro/features",
  },
  openGraph: {
    title: "qwevo tv IPTV Features & Device Support Guide",
    description:
      "Explore qwevo tv premium IPTV features for Smart TV, Fire Stick, and Android TV. Learn about stable 4K playback, device compatibility, and responsive WhatsApp support.",
    url: "https://www.qwevotv.pro/features",
    siteName: "qwevo tv",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.qwevotv.pro/images/iptv-streaming.webp",
        width: 1280,
        height: 860,
        alt: "qwevo tv premium IPTV features overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "qwevo tv IPTV Features & Device Support Guide",
    description:
      "Explore qwevo tv premium IPTV features for Smart TV, Fire Stick, and Android TV with stable 4K playback and WhatsApp support.",
    images: ["https://www.qwevotv.pro/images/iptv-streaming.webp"],
  },
};

const featureSections = [
  {
    title: "Fast setup",
    icon: Zap,
    body:
      "qwevo tv is built for a quick IPTV setup from the moment you choose a plan. After confirmation, activation details are shared through a simple support flow so you can move from purchase to watching without sorting through confusing technical steps. The setup process is designed for common IPTV streaming apps and popular living-room devices, including Smart TV IPTV apps, Fire TV IPTV apps, Android TV IPTV players, phones, and tablets. If you already use IPTV Smarters or TiviMate, support can guide you on where to add your login details and how to organize the first launch. The goal is practical: clear instructions, fewer delays, and a setup path that makes sense even if this is your first premium IPTV subscription.",
  },
  {
    title: "Stable playback",
    icon: Wifi,
    body:
      "Stable IPTV playback matters most when you are watching live sports, weekend movies, or a series episode everyone has been waiting to see. qwevo tv focuses on a smoother daily IPTV streaming experience with clear device guidance, app recommendations, and troubleshooting steps when a connection or player setting needs attention. Playback quality can depend on your internet speed, Wi-Fi signal, device performance, and the IPTV app you choose, so support helps you check the simple causes first. That includes restarting the app, testing another network, checking player settings, and choosing a reliable device for longer sessions. The result is a service experience centered on consistency, not just a long list of channels.",
  },
  {
    title: "All major devices",
    icon: MonitorSmartphone,
    body:
      "qwevo tv supports the devices people actually use at home and on the move. You can set up premium IPTV on Samsung Smart TV, LG Smart TV, Android TV, Fire TV Stick, Google TV, smartphones, and tablets. Many customers prefer Smart TV IPTV for the living room, Fire TV IPTV for an easy plug-in setup, or Android TV IPTV when they want flexible app options. qwevo tv also works with familiar IPTV players such as IPTV Smarters and TiviMate, depending on your device and preference. This broad compatibility makes it easier to keep one subscription experience across multiple screens while still choosing the app that feels best with your remote, touchscreen, or streaming device.",
  },
  {
    title: "Helpful support",
    icon: MessageCircle,
    body:
      "Good IPTV support should be easy to reach and clear about the next step. qwevo tv uses WhatsApp support for activation questions, device setup guidance, billing help, renewal questions, and playback troubleshooting. Instead of leaving you to guess which app or setting is right, support can point you toward a practical setup path for Smart TV IPTV, Fire TV Stick, Android TV, mobile devices, IPTV Smarters, or TiviMate. If playback buffers, if an app asks for details in a different format, or if you are unsure which plan fits your needs, the support channel keeps the conversation simple. It is a useful layer of the service, especially for customers who want premium IPTV without complicated configuration.",
  },
];

const devices = [
  "Samsung Smart TV",
  "LG Smart TV",
  "Android TV",
  "Fire TV Stick",
  "Google TV",
  "Smartphones",
  "Tablets",
  "IPTV Smarters",
  "TiviMate",
];

const supportCards = [
  {
    title: "WhatsApp support",
    icon: MessageCircle,
    text: "Use WhatsApp for activation updates, setup questions, renewal requests, and quick account help. It keeps IPTV support direct and easy to follow.",
  },
  {
    title: "Device setup guidance",
    icon: Wrench,
    text: "Get help choosing the right IPTV app, entering your details, and checking basic settings on Smart TV, Fire TV Stick, Android TV, phones, and tablets.",
  },
  {
    title: "Billing help",
    icon: CreditCard,
    text: "Ask about plan selection, renewals, payment confirmation, and the next step after ordering so the service starts cleanly.",
  },
  {
    title: "Troubleshooting help",
    icon: CheckCircle2,
    text: "When IPTV playback buffers or an app behaves unexpectedly, support can help you check internet, device, app, and account basics.",
  },
];

const faqs = [
  {
    question: "What devices does qwevo tv support?",
    answer:
      "qwevo tv supports Samsung Smart TV, LG Smart TV, Android TV, Fire TV Stick, Google TV, smartphones, tablets, IPTV Smarters, and TiviMate.",
  },
  {
    question: "How fast is IPTV activation?",
    answer:
      "Most IPTV setup details are shared quickly after confirmation, and WhatsApp support can guide you through the first launch on your chosen device.",
  },
  {
    question: "Does qwevo tv work on Fire TV Stick?",
    answer:
      "Yes. Fire TV IPTV setup is one of the common ways to use qwevo tv, especially for customers who want a simple streaming device connected to the television.",
  },
  {
    question: "Can I use qwevo tv on Smart TV?",
    answer:
      "Yes. qwevo tv works with Smart TV IPTV apps on supported Samsung and LG models, and support can help you choose the right setup route.",
  },
  {
    question: "Do you offer WhatsApp support?",
    answer:
      "Yes. WhatsApp support is available for IPTV activation, device setup guidance, billing questions, renewal help, and troubleshooting.",
  },
  {
    question: "Is qwevo tv easy to set up?",
    answer:
      "Yes. The setup process is designed to be direct, with clear guidance for popular IPTV apps and devices such as Smart TVs, Fire TV Stick, Android TV, phones, and tablets.",
  },
  {
    question: "What should I do if IPTV playback buffers?",
    answer:
      "Start by checking your internet connection, Wi-Fi signal, device performance, and app settings. If buffering continues, contact support for troubleshooting help.",
  },
  {
    question: "Which IPTV apps can I use?",
    answer:
      "Many customers use IPTV Smarters or TiviMate, depending on their device. Support can help you confirm the best option for your screen.",
  },
];

const featuresSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.qwevotv.pro" },
        { "@type": "ListItem", position: 2, name: "Features", item: "https://www.qwevotv.pro/features" },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.qwevotv.pro/features#aboutpage",
      name: "qwevo tv Premium IPTV Features and Device Support",
      description: "Premium IPTV features including fast setup, stable playback, device compatibility, and 24/7 support.",
    },
  ],
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }} />
      <Navbar />

      <section className="section-shell pt-32 md:pt-36">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Features</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
              qwevo tv Premium IPTV Features and Device Support
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              qwevo tv brings premium IPTV features, broad device compatibility, stable IPTV playback guidance, and responsive support into one clean experience. Compare setup options, check supported devices, and move naturally from features to{" "}
              <Link href="/pricing" className="font-semibold text-primary hover:text-sky-300">
                pricing
              </Link>
              ,{" "}
              <Link href="/blog" className="font-semibold text-primary hover:text-sky-300">
                setup articles
              </Link>
              , or{" "}
              <Link href="#support" className="font-semibold text-primary hover:text-sky-300">
                support
              </Link>
              .
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950">
            <Image src="/images/iptv-streaming.webp" alt="Premium IPTV streaming feature visual" fill priority sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {featureSections.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="surface-panel p-6 md:p-8">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="mt-5 text-xl font-semibold text-white">{feature.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">{feature.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="surface-panel p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Tv2 className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-white">Device compatibility</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              qwevo tv is designed for flexible IPTV streaming across the screens people already own. Use it on a main Smart TV, a Fire TV Stick in another room, an Android TV box, Google TV, or mobile devices when you want access away from the sofa. Compatibility also includes popular IPTV player apps such as IPTV Smarters and TiviMate.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {devices.map((device) => (
                <span key={device} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-200">
                  {device}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-panel p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-white">Choose the path that fits your screen.</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A living-room setup usually starts with Smart TV IPTV, Fire TV IPTV, or Android TV IPTV. Mobile users can use smartphones or tablets for a smaller screen experience, while IPTV Smarters and TiviMate are common player choices for customers who want familiar navigation. For plan details, visit the{" "}
              <Link href="/pricing" className="font-semibold text-primary hover:text-sky-300">
                qwevo tv pricing page
              </Link>
              . For practical setup reading, browse the{" "}
              <Link href="/blog" className="font-semibold text-primary hover:text-sky-300">
                IPTV blog
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="support" className="section-shell pb-12 md:pb-16">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Support</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">IPTV support that stays clear after activation.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            qwevo tv support helps with the parts of premium IPTV that matter after you order: WhatsApp activation, device setup guidance, billing help, and troubleshooting when playback or app settings need attention.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {supportCards.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="surface-panel p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-shell pb-12 md:pb-16">
        <div className="surface-panel p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Next steps</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">Ready to compare plans or ask a setup question?</h2>
            </div>
            <div>
              <p className="text-sm leading-7 text-slate-300">
                If you are still choosing a subscription, compare plan length and value on the pricing page. If you already know your device, open WhatsApp support and ask for setup guidance for your Smart TV, Fire TV Stick, Android TV, IPTV Smarters, or TiviMate.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/pricing" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-slate-950">
                  View pricing
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/blog" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
                  Read the blog
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white">
                  WhatsApp support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-14 md:pb-20">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">qwevo tv features and device support FAQ</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.question} className="surface-panel p-6">
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
