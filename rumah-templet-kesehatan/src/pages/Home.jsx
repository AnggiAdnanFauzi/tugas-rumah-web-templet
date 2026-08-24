import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import CategorySection from '../components/CategorySection';
import StrongFoundation from '../components/StrongFoundation';
import Timeline from '../components/Timeline';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import DarkShowcase from '../components/DarkShowcase';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    document.title = `Website Profesional untuk Layanan Kesehatan Modern | ${SITE_CONFIG.name}`;
  }, []);

  return (
    <div className="pt-20">
      {/* 1. Hero Cinematic */}
      <Hero />
      {/* 2. Mengapa Memilih Kami - Spesialis Kesehatan */}
      <WhyUs />
      {/* 3. Kategori Healthcare */}
      <CategorySection />
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
