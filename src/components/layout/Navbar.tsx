"use client";
import { MessageCircle, Zap, Menu, X } from "lucide-react"; 
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-[100] py-4 px-6 md:px-12">
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-surface/60 backdrop-blur-2xl border border-white/10 px-8 py-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* Logo QwevoTV */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-primary/30">
            <Zap size={22} className="text-white fill-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter lowercase text-white">
            qwevo <span className="text-primary italic">tv</span>
          </span>
        </Link>
        
        {/* Links dialek kamlin - Reje3na Features, Pricing, Blog, Support */}
        <div className="hidden lg:flex gap-8 text-[13px] font-extrabold text-white/80">
          <Link href="/" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">Home</Link>
          <Link href="/features" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">Features</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">Pricing</Link>
          <Link href="/blog" className="hover:text-primary transition-colors uppercase tracking-[0.15em]">Blog</Link>
          <Link href="/support" className="hover:text-primary transition-colors uppercase tracking-[0.15em] opacity-60 hover:opacity-100">Support</Link>
        </div>

        {/* WhatsApp Button */}
        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/447828714977" 
            target="_blank"
            className="hidden sm:flex bg-primary hover:bg-white hover:text-black text-white px-8 py-3 rounded-2xl font-black text-xs items-center gap-2 transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1"
          >
            <MessageCircle size={18} fill="currentColor" />
            WHATSAPP
          </a>
          
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-28 left-6 right-6 bg-surface border border-white/10 p-8 rounded-[2rem] flex flex-col gap-6 text-center z-50 shadow-2xl backdrop-blur-3xl">
          <Link href="/" onClick={()=>setIsOpen(false)} className="text-white font-black uppercase text-lg tracking-widest">Home</Link>
          <Link href="/features" onClick={()=>setIsOpen(false)} className="text-white font-black uppercase text-lg tracking-widest">Features</Link>
          <Link href="/pricing" onClick={()=>setIsOpen(false)} className="text-white font-black uppercase text-lg tracking-widest">Pricing</Link>
          <Link href="/blog" onClick={()=>setIsOpen(false)} className="text-white font-black uppercase text-lg tracking-widest">Blog</Link>
          <Link href="/support" onClick={()=>setIsOpen(false)} className="text-white font-black uppercase text-lg tracking-widest">Support</Link>
          <a href="https://wa.me/447828714977" className="bg-primary text-white py-4 rounded-2xl font-black shadow-lg">WHATSAPP</a>
        </div>
      )}
    </header>
  );
}
