"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  "26,000+ Live Channels",
  "100,000+ VODs",
  "4K & FHD Quality",
  "Anti-Freeze Servers",
  "All Devices Supported",
  "24/7 WhatsApp Support",
  "Free Setup Assistance"
];

const PLANS = [
  { id: "starter", name: "Starter", duration: "3 Months", price: "37", recommended: false },
  { id: "popular", name: "Popular", duration: "6 Months", price: "49", recommended: true },
  { id: "ultimate", name: "Ultimate", duration: "12 Months", price: "67", recommended: false }
];

export default function Pricing() {
  const phoneNumber = "447828714977";
  const siteName = "qwevo tv";

  return (
    <section className="py-20 bg-black w-full overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12 md:mb-20">
          {/* استعملت Framer Motion خفيف هنا باش نتفاداو مشاكل الـ CSS */}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter"
          >
            CHOOSE YOUR <span className="text-primary" style={{ textShadow: '0 0 20px rgba(255,68,0,0.3)' }}>PLAN.</span>
          </motion.h2>
          <p className="text-white/40 mt-4 italic text-sm md:text-base">Premium streaming experience on all your devices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {PLANS.map((plan) => {
            const message = `Hello, I want ${plan.duration}. (${siteName})`;
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            return (
              <article 
                key={plan.id} 
                className={`relative flex flex-col transition-all duration-300 ${
                  plan.recommended ? 'md:scale-105 z-10' : 'scale-100'
                }`}
              >
                <div className={`h-full rounded-[3rem] p-[1px] ${
                  plan.recommended ? 'bg-primary' : 'bg-white/10'
                }`}>
                  <div className="bg-[#080808] rounded-[2.9rem] p-8 md:p-10 h-full flex flex-col min-h-[580px]">
                    
                    <header className="mb-6">
                      <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em]">
                        {plan.duration}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mt-1">
                        {plan.name} <span className="text-primary/90">Pack</span>
                      </h3>
                    </header>

                    <div className="mb-8">
                      <span className="text-5xl md:text-6xl font-black text-white italic">€{plan.price}</span>
                    </div>

                    <ul className="space-y-3.5 mb-10 flex-grow">
                      {FEATURES.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check size={14} className="text-primary flex-shrink-0" strokeWidth={3} />
                          <span className="text-[13px] md:text-sm text-white/60 font-medium italic">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Order ${plan.name} package`}
                      className={`block w-full py-4 md:py-5 rounded-2xl font-black text-[11px] uppercase text-center transition-all duration-200 ${
                        plan.recommended 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95' 
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                      }`}
                    >
                      ORDER NOW
                    </a>

                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
