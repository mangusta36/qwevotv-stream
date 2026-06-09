"use client";
import { Check, Star, MessageCircle, Crown, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PricingPage() {
  const plans = [
    {
      name: "Qwevo Starter",
      duration: "3 Months",
      price: "37",
      monthly: "12.33",
      features: ["25,000+ Channels", "4K HDR Content", "Anti-Freeze v2", "All Devices", "Instant Activation"],
      isPopular: false,
      isBestValue: false,
    },
    {
      name: "Qwevo Popular",
      duration: "6 Months",
      price: "49",
      monthly: "8.16",
      features: ["Full Channel List", "Cinema Library", "4K & 8K Support", "Anti-Freeze v2", "Priority Support"],
      isPopular: true,
      isBestValue: false,
    },
    {
      name: "Qwevo Ultimate",
      duration: "12 Months",
      price: "67",
      monthly: "5.58",
      features: ["Lifetime Updates", "All Premium Sports", "8K Ultra HD Content", "Multiple Servers", "Free Setup Help", "VIP Support"],
      isPopular: false,
      isBestValue: true,
    }
  ];

  const WHATSAPP_NUMBER = "447828714977";

  return (
    <main className="min-h-screen bg-background text-text-main selection:bg-primary/30">
      <Navbar />
      
      <div className="max-w-7xl mx-auto pt-48 pb-20 px-6">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/10 blur-[150px] -z-10" />

        <div className="text-center mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase italic leading-none">
              PREMIUM <span className="text-primary not-italic">PLANS.</span>
            </h1>
            <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
              Choose your pass to the future of entertainment. No hidden fees, cancel anytime via <span className="text-white font-bold">qwevo tv</span> Support.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-[3rem] p-1 ${
                plan.isPopular ? 'bg-primary shadow-[0_0_50px_rgba(255,77,0,0.2)]' : 'bg-white/10'
              }`}
            >
              <div className="bg-surface rounded-[2.9rem] p-10 lg:p-12 flex flex-col h-full">
                
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                    <Star size={12} fill="white" /> Most Popular
                  </div>
                )}

                <h3 className="text-primary font-black tracking-[0.3em] text-[11px] uppercase mb-4">{plan.duration}</h3>
                <h2 className="text-3xl font-black mb-8 italic uppercase text-white">{plan.name}</h2>

                <div className="mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-7xl font-black tracking-tighter text-white">€{plan.price}</span>
                  </div>
                  <span className="text-text-muted font-bold text-sm uppercase tracking-widest mt-2 block">
                    €{plan.monthly} per month
                  </span>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="bg-primary/20 p-1 rounded-lg">
                        <Check size={14} className="text-primary" strokeWidth={4} />
                      </div>
                      <span className="text-sm font-bold text-white/70 italic">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=I want to subscribe to ${plan.name} (${plan.duration})`}
                  target="_blank"
                  className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-black text-xs tracking-widest transition-all ${
                    plan.isPopular 
                    ? 'bg-primary text-white hover:bg-white hover:text-black' 
                    : 'bg-white/5 border border-white/10 text-white hover:border-primary hover:text-primary'
                  }`}
                >
                  <Zap size={18} fill="currentColor" /> GET ACCESS
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center opacity-30">
          <p className="text-[10px] font-black tracking-[0.5em] uppercase flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-white" />
            Secure Encrypted Activation
            <span className="w-12 h-px bg-white" />
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
