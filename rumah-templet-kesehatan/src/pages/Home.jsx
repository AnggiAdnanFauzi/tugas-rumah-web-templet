import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';
import Hero from '../components/Hero';
import WhyUs from '../components/WhyUs';
import CategorySection from '../components/CategorySection';
import TopTemplates from '../components/TopTemplates';
import StrongFoundation from '../components/StrongFoundation';
import Timeline from '../components/Timeline';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import DarkShowcase from '../components/DarkShowcase';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';

const Home = () => {
  useEffect(() => {
    document.title = `Website Profesional untuk Layanan Kesehatan Modern | ${SITE_CONFIG.name}`;
  }, []);

  return (
    <div className="pt-20">
      {/* 1. Hero Cinematic */}
      <Hero />
      {/* 2. Partners (Social Proof) */}
      <Partners />
      {/* 3. Mengapa Memilih Kami - Spesialis Kesehatan */}
      <WhyUs />
      {/* 4. Kategori Healthcare */}
      <CategorySection />
      {/* 4.5 Top Templates Showcase */}
      <TopTemplates />
      {/* 5. Pondasi yang Kuat - Technical Foundation */}
      <StrongFoundation />
      {/* 6. Cara Kerja - Interactive Timeline */}
      <Timeline />
      {/* 7. Fitur Lengkap */}
      <Features />
      {/* 8. Testimoni Klien */}
      <Testimonials />
      {/* 9. Harga & Paket */}
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
