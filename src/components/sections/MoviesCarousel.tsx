"use client";
import { motion } from "framer-motion";

const movies = [
  { id: 1, img: "/movie1..webp" }, 
  { id: 2, img: "/movie2.webp" },
  { id: 3, img: "/movie3.webp" },
  { id: 4, img: "/movie4.jpeg" },
  { id: 5, img: "/movie5.webp" },
  { id: 6, img: "/movie6.jpeg" }, 
  { id: 7, img: "/movie7.jpeg" },
  { id: 8, img: "/movie8.jpeg" },
];

const duplicatedMovies = [...movies, ...movies, ...movies];

export default function MoviesCarousel() {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      
      {/* 1. Background Glow Optimized (Orange) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full -z-0" />

      {/* 2. Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
            ULTIMATE CONTENT, <br />
            <span className="text-transparent bg-clip-text bg-qwevo-glow italic">SPORTS, AND MORE.</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg md:text-xl font-light italic leading-relaxed">
            Dive into <span className="text-white font-bold">qwevo tv</span> massive library. From 4K blockbusters to worldwide live sports events.
          </p>
        </motion.div>
      </div>

      {/* 3. Infinite Carousel */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex gap-6 md:gap-10 flex-nowrap"
          initial={{ x: "0%" }} 
          animate={{ x: "-50%" }}    
          transition={{
            duration: 40, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedMovies.map((movie, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-[240px] md:w-[320px] aspect-[2/3] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-surface group relative"
            >
              <img 
                src={movie.img} 
                alt={`qwevo tv movie ${movie.id}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out grayscale-[30%] group-hover:grayscale-0"
                loading="lazy"
              />
              
              {/* Premium Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Subtle Orange Glow on Card Border */}
              <div className="absolute inset-0 rounded-[2.5rem] border border-primary/0 group-hover:border-primary/40 transition-all duration-500" />
            </div>
          ))}
        </motion.div>

        {/* Faded edges (Soft Gradients) */}
        <div className="absolute top-0 left-0 w-32 md:w-60 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-60 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>

      {/* CTA Line ta7t l-carousel */}
      <div className="text-center mt-12 relative z-10">
         <p className="text-[10px] font-black tracking-[0.4em] uppercase text-white/20">
           New titles added daily to qwevo tv library
         </p>
      </div>
    </section>
  );
}
