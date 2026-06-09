"use client";
import { Zap, ShieldCheck, Globe, Headset } from "lucide-react";

const features = [
  { 
    title: "Anti-Freeze Technology", 
    desc: "Advanced system to ensure 99.9% uptime without buffering.", 
    icon: <Zap className="text-primary" size={40} /> 
  },
  { 
    title: "20,000+ Channels", 
    desc: "Access all premium channels, sports, and international TV.", 
    icon: <Globe className="text-primary" size={40} /> 
  },
  { 
    title: "Safe & Secure", 
    desc: "Your data and payment information is 100% protected.", 
    icon: <ShieldCheck className="text-primary" size={40} /> 
  },
  { 
    title: "24/7 Support", 
    desc: "Our team is always here to help you via WhatsApp or Email.", 
    icon: <Headset className="text-primary" size={40} /> 
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-3xl border border-white/5 bg-black hover:border-primary/50 transition-all group">
            <div className="mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
