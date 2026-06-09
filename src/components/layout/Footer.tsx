'use client';

import { useState } from 'react';
import { MonitorPlay, ChevronDown, ShieldCheck, Globe, Zap } from "lucide-react";

const faqs = [
  {
    question: "What is QwevoTV?",
    answer: "QwevoTV is a next-generation IPTV streaming service providing over 25,000 live channels, premium sports, and a massive library of 120,000+ movies and series in 4K/8K quality."
  },
  {
    question: "Which devices are compatible with QwevoTV?",
    answer: "QwevoTV works seamlessly on all devices including Smart TVs (Samsung, LG, Android), Firestick, Apple TV, Mag Boxes, Smartphones (iOS/Android), and PC."
  },
  {
    question: "How fast is the activation?",
    answer: "We offer instant activation. Once your order is confirmed, you will receive your QwevoTV login credentials via WhatsApp or Email within 5-15 minutes."
  },
  {
    question: "Can I watch live sports on QwevoTV?",
    answer: "Absolutely! QwevoTV provides access to all major sports networks in Ultra HD, including football, basketball, UFC, and more, with no buffering."
  },
  {
    question: "Do you offer a refund policy?",
    answer: "Yes, we offer a 7-day money-back guarantee if our service doesn't meet your expectations. Quality and customer satisfaction are our top priorities."
  }
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* FAQ Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-4">
              QUESTIONS? <span className="text-primary italic">ANSWERS.</span>
            </h2>
            <p className="text-text-muted font-medium uppercase tracking-[0.2em] text-xs">Everything you need to know about QwevoTV</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-surface/50 border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-300 backdrop-blur-xl"
              >
                <button
                  className="w-full flex justify-between items-center p-7 hover:bg-white/5 transition-colors text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-white text-lg md:text-xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={"text-primary transition-transform duration-500 " + (openIndex === index ? "rotate-180" : "")}
                  />
                </button>

                <div className={"transition-all duration-500 ease-in-out overflow-hidden " + (openIndex === index ? "max-h-60" : "max-h-0")}>
                  <div className="p-7 pt-0 text-text-muted leading-relaxed border-t border-white/5 italic">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="border-t border-white/10 py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* Brand Part */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary p-2 rounded-xl shadow-lg shadow-primary/40">
                  <MonitorPlay className="text-white w-6 h-6" />
                </div>
                <span className="font-black text-2xl uppercase tracking-tighter italic text-white">
                  Qwevo <span className="text-primary">TV</span>
                </span>
              </div>
              <p className="text-text-muted text-sm max-w-sm text-center md:text-left">
                The world's most stable and premium IPTV provider. Join 50,000+ happy customers worldwide.
              </p>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-col items-center gap-6">
               <div className="flex gap-8 text-white/60 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-primary transition-colors">Terms</a>
                <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
              </div>
              <div className="text-text-muted text-[10px] uppercase font-black tracking-widest">
                © {new Date().getFullYear()} QwevoTV Platform. All rights reserved.
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-white/40 border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold uppercase">
                <ShieldCheck size={14} className="text-primary" /> Secure Payment
              </div>
              <div className="flex items-center gap-2 text-white/40 border border-white/10 px-4 py-2 rounded-lg text-[10px] font-bold uppercase">
                <Globe size={14} className="text-primary" /> Global Servers
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-center">
            <p className="text-white/20 text-[10px] leading-relaxed max-w-5xl mx-auto uppercase tracking-tighter">
              QwevoTV is an independent streaming provider. We do not host any content on our servers. All logos and brands are property of their respective owners. QwevoTV is designed to provide the best 4K streaming experience with 99.9% uptime.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
