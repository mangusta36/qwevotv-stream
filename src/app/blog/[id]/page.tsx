"use client";
import { useParams } from "next/navigation";
import { blogPosts } from "@/lib/posts"; 
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostDetail() {
  const params = useParams();
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    return (
      <div className="bg-background min-h-screen text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl font-black italic uppercase tracking-widest mb-6">Article Not Found</h1>
        <Link href="/blog" className="bg-primary px-8 py-3 rounded-full font-black text-xs uppercase">
          Back to Hub
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-background min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar />
      
      {/* Glow Effect behind Content */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[150px] -z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto pt-40 px-6 pb-40">
        
        {/* Navigation Back */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/blog" className="group text-primary flex items-center gap-2 mb-12 font-black text-[10px] uppercase tracking-[0.3em] hover:text-white transition-colors">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to qwevotv blog
          </Link>
        </motion.div>

        {/* Title Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h1 className="text-4xl md:text-7xl font-black italic uppercase leading-[1] tracking-tighter mb-10">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-8 text-text-muted text-[10px] font-black mb-12 border-y border-white/5 py-8 uppercase tracking-widest">
             <span className="flex items-center gap-2 text-white/80"><Calendar size={14} className="text-primary"/> {post.date}</span>
             <span className="flex items-center gap-2 text-white/80"><User size={14} className="text-primary"/> Author: {post.author}</span>
             <span className="ml-auto hidden sm:flex items-center gap-2 hover:text-primary cursor-pointer transition-colors">
               <Share2 size={14} /> Share Article
             </span>
          </div>
        </motion.div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative aspect-video mb-16"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/5" 
          />
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Article Content */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-orange max-w-none text-text-muted italic text-lg md:text-xl leading-relaxed 
          prose-headings:text-white prose-headings:font-black prose-headings:italic prose-headings:uppercase 
          prose-strong:text-white prose-a:text-primary hover:prose-a:text-white transition-all"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 border-t border-white/5 text-center">
            <p className="text-white/40 text-xs font-black uppercase tracking-[0.4em] mb-8 italic">Ready to join the revolution?</p>
            <Link href="/#pricing" className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all shadow-xl shadow-primary/20">
              Get Started with qwevotv
            </Link>
        </div>

      </div>
      <Footer />
    </main>
  );
}
