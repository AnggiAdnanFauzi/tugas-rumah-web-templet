import React from 'react';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import BentoGrid from '../components/BentoGrid';
import StrongFoundation from '../components/StrongFoundation';
import Timeline from '../components/Timeline';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import DarkShowcase from '../components/DarkShowcase';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="pt-20">
      {/* 1. Hero Cinematic */}
      <Hero />
      {/* 2. Mengapa Memilih Kami - Spesialis Kesehatan */}
      <WhyUs />
      {/* 3. Solusi Per Kategori (Bento Grid) */}
      <BentoGrid />
      {/* 4. Pondasi yang Kuat - Technical Foundation */}
      <StrongFoundation />
      {/* 5. Cara Kerja - Interactive Timeline */}
      <Timeline />
      {/* 6. Fitur Lengkap */}
      <Features />
      {/* 7. Harga & Paket */}
      <Pricing />
      {/* 8. Dark Showcase - Value Highlight */}
      <DarkShowcase />
      {/* 9. FAQ */}
      <FAQ />
      {/* 10. Kontak */}
      <Contact />
    </div>
  );
};

export default Home;
