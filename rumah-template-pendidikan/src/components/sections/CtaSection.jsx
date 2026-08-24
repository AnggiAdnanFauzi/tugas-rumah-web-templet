import React from 'react';
import { generateWaLink } from '../../utils/whatsapp';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CtaSection = () => {
  const revealRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-8 lg:py-10 bg-white dark:bg-[#080D1C] relative px-4" ref={revealRef}>
      <div className="max-w-4xl mx-auto reveal-up">
        {/* Main card */}
        <div className="relative bg-slate-900 dark:bg-slate-950 rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.15)] group">
          
          {/* Subtle animated border */}
          <div className="absolute inset-0 border border-slate-700/50 rounded-3xl pointer-events-none group-hover:border-blue-500/30 transition-colors duration-700" />
          
          {/* Grid pattern overlay */}
          <div className="bg-grid-pattern absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay" />

          {/* Radial ambient light - follows hover conceptually but here statically for premium feel */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 group-hover:bg-blue-500/30 transition-all duration-1000" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-all duration-1000 delay-100" />

          {/* Content */}
          <div className="relative z-10 text-center py-10 px-6 sm:px-12 lg:px-20">
            {/* Pre-heading */}
            <div className="reveal-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md mb-6 shadow-sm">
              <Sparkles size={14} className="text-blue-400" />
              <span className="text-[11px] font-bold text-blue-300 tracking-[0.2em] uppercase">Mulai Transformasi</span>
            </div>

            <h2 className="reveal-up text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-[1.15] mb-4">
              Sudah Tahu Website<br className="hidden sm:block" />
              yang Anda Butuhkan?
            </h2>
            <p className="reveal-up text-slate-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Jelajahi template di katalog atau konsultasikan kebutuhan spesifik Anda bersama tim kami sekarang.
            </p>

            <div className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#harga"
                className="
                  btn-micro w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl
                  font-semibold text-[14px] text-slate-300 border border-slate-700 bg-slate-800/60
                  hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-300 group/btn
                "
              >
                Lihat Paket
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1 text-slate-400 group-hover/btn:text-white" />
              </a>
              <a
                href={generateWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  btn-micro w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl
                  font-semibold text-[14px] text-slate-900 bg-white
                  hover:bg-slate-50 hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] transition-all duration-300
                "
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
