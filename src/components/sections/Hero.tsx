"use client";
import { motion } from "framer-motion";
import { Play, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=80&w=2000" 
          alt="qwevo tv cinema"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-10">
        <div className="max-w-3xl text-left space-y-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <Zap size={14} className="text-primary animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Official 2025 Release</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black lowercase italic leading-[0.8] tracking-tighter"
          >
            <span className="text-transparent bg-clip-text bg-qwevo-glow">qwevo tv</span><br/>
            <span className="text-white not-italic font-black text-4xl md:text-7xl">streaming service.</span>
          </motion.h1>

          <p className="text-text-muted text-lg md:text-xl font-light italic max-w-lg">
            Access <span className="text-white font-bold">25,000+ Premium Channels</span>. Stable 4K streaming for sports and movies worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/447828714977" target="_blank" className="px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              <Play size={18} fill="white" /> GET FREE TRIAL
            </a>
            <a href="#pricing" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
              VIEW PACKAGES <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
