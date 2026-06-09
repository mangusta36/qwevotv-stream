"use client";
import { MessageCircle, HelpCircle, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SupportPage() {
  const faqs = [
    {
      q: "how long does it take to activate my qwevotv account?",
      a: "activation is usually instant. you will receive your credentials via whatsapp within 5 to 15 minutes after payment."
    },
    {
      q: "which devices does qwevotv support?",
      a: "we support all 2026 devices: smart tvs, firestick, android boxes, mag, pc, and all smartphones."
    },
    {
      q: "do you offer a refund if the service doesn't work?",
      a: "yes, qwevotv offers a 7-day money-back guarantee for any technical issues we cannot solve."
    },
    {
      q: "can i use qwevotv on multiple devices?",
      a: "standard plans are for 1 device. contact our whatsapp support for special multi-room discounts."
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-primary/30">
      <Navbar />
      
      <div className="max-w-7xl mx-auto pt-48 pb-20 px-6">
        
        {/* --- Header --- */}
        <div className="text-center mb-24 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[130px] -z-10" />
          
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-5 py-2 rounded-full mb-10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 text-[10px] font-bold tracking-widest">qwevotv servers: online</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none italic">
            qwevotv <span className="text-primary not-italic text-6xl md:text-8xl">support</span>.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium italic lowercase">
            need help with your qwevotv subscription? our technical team is available 24/7 on whatsapp.
          </p>
        </div>

        {/* --- Contact Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32 max-w-5xl mx-auto">
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/447828714977" 
            target="_blank"
            className="group relative p-12 rounded-[3.5rem] bg-surface border border-white/5 hover:border-[#25D366]/50 transition-all duration-500 cursor-pointer"
          >
             <div className="bg-[#25D366] w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(37,211,102,0.3)]">
                <MessageCircle size={35} className="text-white" fill="white" />
             </div>
             <h3 className="text-3xl font-black mb-4 italic lowercase">live whatsapp</h3>
             <p className="text-gray-400 text-base mb-10 leading-relaxed font-medium">connect instantly with our technical agents for setup, renewal, or trial requests.</p>
             <div className="flex items-center gap-3 text-[#25D366] font-bold text-sm tracking-widest uppercase group-hover:gap-6 transition-all">
               chat on whatsapp <ExternalLink size={16} />
             </div>
          </a>

          {/* Setup Guides */}
          <a 
            href="/blog"
            className="group relative p-12 rounded-[3.5rem] bg-surface border border-white/5 hover:border-primary/50 transition-all duration-500 cursor-pointer"
          >
             <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <HelpCircle size={35} className="text-white" />
             </div>
             <h3 className="text-3xl font-black mb-4 italic lowercase">setup guides</h3>
             <p className="text-gray-400 text-base mb-10 leading-relaxed font-medium">step-by-step tutorials for qwevotv on all devices (smart tv, firestick, etc).</p>
             <div className="flex items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase group-hover:gap-6 transition-all">
               view all guides <ExternalLink size={16} />
             </div>
          </a>
        </div>

        {/* --- FAQ Section --- */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 italic tracking-tighter">qwevotv <span className="text-primary italic">faq</span></h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 hover:bg-white/[0.04] transition-all duration-300">
                <div className="flex gap-6">
                  <div className="mt-1">
                    <CheckCircle2 size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-4 group-hover:text-primary transition-colors italic tracking-tight lowercase">{faq.q}</h4>
                    <p className="text-gray-400 text-base leading-relaxed font-medium">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Security Badge --- */}
        <div className="mt-32 flex flex-col items-center">
            <div className="flex items-center gap-4 bg-white/5 px-10 py-5 rounded-full border border-white/10">
              <ShieldCheck className="text-primary" size={24} />
              <span className="text-[11px] font-bold tracking-[0.4em] text-gray-400 lowercase">qwevotv secure support</span>
            </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}
