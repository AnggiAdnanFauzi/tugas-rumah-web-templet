import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import SolusiSection from './components/sections/SolusiSection';
import CatalogSection from './components/catalog/CatalogSection';
import CaraKerjaSection from './components/sections/CaraKerjaSection';
import KenapaKamiSection from './components/sections/KenapaKamiSection';
import TestimoniSection from './components/sections/TestimoniSection';
import FaqSection from './components/sections/FaqSection';
import CtaSection from './components/sections/CtaSection';

function AppContent() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-[#080D1C] transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] bg-slate-200/50 dark:bg-slate-800/50 pointer-events-none">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-500 origin-left"
          style={{ 
            transform: `scaleX(${scrollProgress / 100})`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SolusiSection />
        <CatalogSection />
        <CaraKerjaSection />
        <KenapaKamiSection />
        <TestimoniSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
