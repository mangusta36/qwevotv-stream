"use client";
import { Zap, ShieldCheck, MonitorPlay, Globe, Cpu, Smartphone, CheckCircle2, MessageCircle, Play } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function FeaturesPage() {
  const WHATSAPP_URL = "https://wa.me/447828714977?text=Hello QwevoTV! I want to know more about the features.";

  return (
    <main className="min-h-screen bg-background text-text-main overflow-hidden selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* --- Cyber Background --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] right-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full" />
      </div>

      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto pt-48 px-6 text-center mb-28 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-text-muted">Qwevo Stream Engine v2.0</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8] uppercase">
            POWERED BY <br /> 
            <span className="text-transparent bg-clip-text bg-qwevo-glow italic">PURE SPEED.</span>
          </h1>
          <p className="text-text-muted max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed italic">
            We’ve engineered a streaming architecture that eliminates buffering. <span className="text-white font-bold">QwevoTV</span> uses dedicated 10Gbps nodes for a lag-free 4K experience.
          </p>
        </motion.div>
      </div>

      {/* --- Section 2: Cards --- */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-7 group relative overflow-hidden rounded-[3rem] bg-surface border border-white/[0.05] p-10 lg:p-14 transition-all duration-500 hover:border-primary/40 shadow-2xl">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-primary/20 group-hover:scale-110 transition-transform">
              <MonitorPlay size={32} className="text-primary" />
            </div>
            <h3 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight italic uppercase text-white">True 8K <br /> Ready.</h3>
            <p className="text-text-muted max-w-sm text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
              QwevoTV isn't just 4K. We support AV1 encoding for <span className="text-primary font-bold">8K Ultra HD</span> streaming on supported live events and movies.
            </p>
          </div>
          <Play className="absolute bottom-[-20px] right-[-20px] w-64 h-64 text-white/[0.02] -rotate-12" />
        </div>

        <div className="md:col-span-5 group relative overflow-hidden rounded-[3rem] bg-surface border border-white/[0.05] p-10 lg:p-14 transition-all duration-500 hover:border-primary/40 shadow-2xl">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:rotate-12 transition-all">
              <Cpu size={32} className="text-primary" />
            </div>
            <h3 className="text-4xl font-black mb-6 tracking-tight italic uppercase text-white">Hyper <br /> Servers.</h3>
            <p className="text-text-muted text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
              Smart-routing technology by <span className="text-primary font-bold">QwevoTV</span> that automatically connects you to the closest server node.
            </p>
          </div>
        </div>
      </div>

      {/* --- Section 3: Bento Grid --- */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        {[
          { icon: <Globe />, title: "25k+ Channels", desc: "Global access to live TV, news, and sports in every language." },
          { icon: <Smartphone />, title: "Universal", desc: "Optimized apps for iOS, Android, Smart TV, and Firestick." },
          { icon: <CheckCircle2 />, title: "No Buffer", desc: "99.9% Uptime with our new Anti-Freeze 2025 technology." }
        ].map((feat, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] bg-surface border border-white/[0.05] hover:border-primary/20 transition-all group">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
              {feat.icon}
            </div>
            <h4 className="text-2xl font-black mb-3 italic uppercase text-white">{feat.title}</h4>
            <p className="text-text-muted text-sm leading-relaxed italic">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* --- CTA Section --- */}
      <div className="max-w-7xl mx-auto px-6 mt-20 mb-32">
        <div className="relative rounded-[4rem] overflow-hidden bg-primary p-[2px]">
          <div className="bg-background rounded-[3.9rem] px-8 py-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-[120px]" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">START YOUR <br /> <span className="text-primary">QWEVO ERA.</span></h2>
              <a href={WHATSAPP_URL} target="_blank" className="inline-flex items-center gap-3 bg-primary text-white px-14 py-6 rounded-full font-black text-sm tracking-widest hover:bg-white hover:text-black transition-all shadow-2xl hover:scale-105 active:scale-95">
                <MessageCircle size={22} fill="currentColor" /> GET FREE TRIAL
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
