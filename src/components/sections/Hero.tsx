"use client";
import { motion } from "framer-motion";
import { Play, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  
  // إعداد رابط الواتساب مسبقاً
  const phoneNumber = "447828714977";
  const message = "Hello, I'm interested in the Free Trial. (qwevo tv)";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center bg-black overflow-hidden">
      
      {/* Background - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?q=75&w=1200" 
          alt="qwevo tv cinema"
          fill
          priority 
          loading="eager"
          quality={60}
          sizes="100vw"
          className="object-cover opacity-40 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-10"> {/* تم رفع z-index هنا إلى 20 لضمان أنه فوق كل شيء */}
        <div className="max-w-3xl text-left space-y-8">
          
          {/* Release Label */}
          <div className="flex items-center gap-2">
            <Zap size={14} className="text-primary animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary">Official 2025 Release</span>
          </div>

          {/* H1 - Optimized with CSS Animation for FCP */}
          <h1 className="text-6xl md:text-8xl font-black lowercase italic leading-[0.8] tracking-tighter animate-[fadeIn_0.5s_ease-out]">
            <span className="text-transparent bg-clip-text bg-qwevo-glow">qwevo tv</span><br/>
            <span className="text-white not-italic font-black text-4xl md:text-7xl">streaming service.</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-text-muted text-lg md:text-xl font-light italic max-w-lg"
          >
            Access <span className="text-white font-bold">25,000+ Premium Channels</span>. Stable 4K streaming for sports and movies worldwide.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* التعديل هنا: تحويل الزر إلى رابط <a> لضمان العمل 100% */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-105 transition-transform cursor-pointer"
            >
              <Play size={18} fill="white" /> GET FREE TRIAL
            </a>
            
            <a 
              href="#pricing" 
              className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase text-xs flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
            >
              VIEW PACKAGES <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
