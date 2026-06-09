"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import Link from "next/link";
// Information remains from your central file
import { blogPosts } from "@/lib/posts"; 

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />

      {/* Hero Section - Updated for qwevo tv */}
      <section className="pt-48 pb-24 px-6 relative overflow-hidden">
        {/* Glow Orange behind title */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[130px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-primary font-black tracking-[0.3em] text-xs uppercase mb-4 block">Information Hub</span>
            <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
              qwevo tv <span className="text-transparent bg-clip-text bg-qwevo-glow not-italic">INSIGHTS</span>
            </h1>
            <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed italic text-balance">
              The world's most comprehensive guides for <span className="text-white font-bold underline decoration-primary underline-offset-4">Ultra-HD Streaming</span> and next-gen IPTV technology.
            </p>
          </motion.div>

          {/* Search Bar - Optimized for New Theme */}
          <div className="mt-12 max-w-2xl mx-auto relative group">
            <input 
              type="text" 
              placeholder="Search trends, guides, and tutorials..." 
              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-6 px-8 outline-none focus:border-primary/50 transition-all text-white placeholder:text-gray-600 italic backdrop-blur-md"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-surface rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-500 group flex flex-col h-full hover:shadow-[0_20px_50px_rgba(255,77,0,0.1)]"
              >
                {/* Image Wrapper */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 bg-primary text-white text-[9px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase shadow-lg shadow-primary/20">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-6 font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User size={12} className="text-primary" /> {post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-black mb-4 group-hover:text-primary transition-colors leading-[1.2] italic tracking-tight text-white/90">
                    {post.title}
                  </h2>
                  
                  <p className="text-text-muted text-sm mb-6 leading-relaxed line-clamp-3 italic">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                     <span className="text-[10px] font-black text-white/20 tracking-tighter uppercase">5 min read</span>
                     <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary text-white transition-all duration-300 group-hover:scale-110">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
