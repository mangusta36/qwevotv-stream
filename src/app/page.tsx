import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MoviesCarousel from "@/components/sections/MoviesCarousel";
import Pricing from "@/components/sections/Pricing";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero (Wajiha) - Dima hiya l-lowla */}
      <section id="home" className="relative z-10">
        <Hero />
      </section>

      {/* 2. Movies Carousel */}
      <section id="service" className="relative z-10 py-10 bg-black">
        <MoviesCarousel />
      </section>

      {/* 3. Pricing - Ta7t l-Carousel */}
      <section id="pricing" className="relative z-10 py-20 bg-black">
        <Pricing />
      </section>

      {/* 4. Features */}
      <section id="why-us" className="relative z-10 py-20 bg-[#050505]">
        <Features />
      </section>

      <Footer />
    </main>
  );
}
