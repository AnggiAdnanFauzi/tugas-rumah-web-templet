import React, { useState, useEffect, useRef } from 'react';
import { generateWaLink } from '../../utils/whatsapp';
import { CheckCircle2, Smartphone, LayoutTemplate, ArrowRight, Monitor, Play } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/* ─────────────────────────────────────────────
   HERO SECTION — Phase 7.8 Final
   Premium depth, true parallax, minimal glow
───────────────────────────────────────────── */

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const revealRef = useScrollReveal({ threshold: 0.01 });

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Smooth mouse parallax interpolation
  useEffect(() => {
    if (isMobile) return;
    let requestRef;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const update = () => {
      currentX += (targetX - currentX) * 0.05; // Lerp factor
      currentY += (targetY - currentY) * 0.05;
      setMouse({ x: currentX, y: currentY });
      requestRef = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    requestRef = requestAnimationFrame(update);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(requestRef);
    };
  }, [isMobile]);

  return (
    <section
      ref={revealRef}
      className="relative min-h-[80vh] flex items-center overflow-hidden bg-white dark:bg-[#080D1C] pt-20 pb-12 lg:pb-16"
    >
      {/* ── Layer 1: Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid, not too bright */}
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.25] dark:opacity-[0.15] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,black_60%,transparent_100%)]" />
        {/* Natural ambient light, no neon */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-slate-100 dark:bg-blue-900/[0.04] rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-slate-50 dark:bg-indigo-900/[0.03] rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">

          {/* ── LEFT: Text Column (45%) ── */}
          <div className="w-full lg:w-[45%] text-center lg:text-left">
            {/* Badge */}
            <div
              className={`reveal-up inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm mb-6 transition-colors duration-300 hover:border-slate-300 dark:hover:border-slate-700`}
            >
              <div className="relative flex items-center justify-center w-2 h-2">
                <span className="absolute w-full h-full rounded-full bg-blue-500 opacity-60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              </div>
              <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 tracking-[0.2em] uppercase">
                Premium Edu Templates
              </span>
            </div>

            {/* Headline */}
            <h1
              className="reveal-up text-[2.2rem] sm:text-[2.75rem] lg:text-[3rem] font-bold text-slate-900 dark:text-slate-50 leading-[1.15] tracking-tight mb-5"
              style={{ transitionDelay: '100ms' }}
            >
              Bangun Presensi Digital <span className="gradient-text">Sekolah</span> Lebih Cepat.
            </h1>

            {/* Description */}
            <p
              className="reveal-up text-[15px] sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-[480px] mx-auto lg:mx-0"
              style={{ transitionDelay: '200ms' }}
            >
              Koleksi desain terkurasi untuk instansi pendidikan. Lihat live demo langsung dari browser Anda tanpa harus setup yang rumit.
            </p>

            {/* CTA Buttons */}
            <div
              className="reveal-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
              style={{ transitionDelay: '300ms' }}
            >
              <a
                href="#katalog"
                className="btn-micro w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[13px] text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] transition-all group"
              >
                Eksplorasi Katalog
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={generateWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-micro w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[13px] text-slate-700 dark:text-slate-300 bg-white dark:bg-[#111827] hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 shadow-sm transition-all"
              >
                Konsultasi Bebas
              </a>
            </div>

            {/* Trust badges */}
            <div
              className="reveal-up flex items-center justify-center lg:justify-start gap-6 mt-10"
              style={{ transitionDelay: '400ms' }}
            >
              {[
                { label: 'Siap Pakai', icon: <CheckCircle2 size={14} /> },
                { label: 'Responsive', icon: <Smartphone size={14} /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-500">
                  <span className="text-slate-300 dark:text-slate-600">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Hero Artwork (55%) ── */}
          <div 
            className="w-full lg:w-[55%] flex justify-center lg:justify-end relative reveal-scale"
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative w-full max-w-[560px]">
              
              {/* Parallax Container */}
              <div
                className="relative z-10 w-full"
                style={{
                  transform: isMobile ? 'none' : `perspective(1200px) rotateX(${2 - mouse.y * 3}deg) rotateY(${-6 + mouse.x * 4}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* ── Base Browser Shell (Z=0) ── */}
                <div
                  className="relative rounded-2xl border border-slate-200 dark:border-slate-700/60 bg-[#FAFAFA] dark:bg-[#0D1321] shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.4)] overflow-hidden"
                  style={{ transform: 'translateZ(0px)' }}
                >
                  {/* Browser Bar */}
                  <div className="flex items-center px-4 py-3 bg-white dark:bg-[#151E32] border-b border-slate-200/80 dark:border-slate-700/60">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80 dark:bg-rose-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 dark:bg-emerald-500/50" />
                    </div>
                  </div>

                  {/* Browser Content */}
                  <div className="p-6">
                    {/* Abstract Hero Image Area */}
                    <div className="h-32 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-700/30 w-full mb-4 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.05)_50%,transparent_75%)] bg-[length:20px_20px]" />
                      <Play size={24} className="text-slate-300 dark:text-slate-600" />
                    </div>
                    {/* Abstract Text Lines */}
                    <div className="space-y-3">
                      <div className="h-2.5 w-1/3 bg-slate-200 dark:bg-slate-700 rounded-full" />
                      <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full" />
                      <div className="h-2 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* ── Parallax Layer 1: Floating Profile Card (Z=40) ── */}
                <div
                  className="absolute -right-6 top-16 bg-white dark:bg-[#1A233A] border border-slate-200/80 dark:border-slate-700/80 rounded-xl p-3 flex items-center gap-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)] backdrop-blur-md"
                  style={{ 
                    transform: isMobile ? 'none' : `translateZ(40px) translate(${mouse.x * -15}px, ${mouse.y * -15}px)`,
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <Monitor size={16} className="text-blue-500 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Modern Layout</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-500">UI/UX Optimized</div>
                  </div>
                </div>

                {/* ── Parallax Layer 2: Floating Success Metric (Z=60) ── */}
                <div
                  className="absolute -left-8 bottom-12 bg-white dark:bg-[#1A233A] border border-slate-200/80 dark:border-slate-700/80 rounded-xl p-3 flex items-center gap-3 shadow-[0_16px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_16px_50px_rgba(0,0,0,0.4)] backdrop-blur-md"
                  style={{ 
                    transform: isMobile ? 'none' : `translateZ(60px) translate(${mouse.x * 25}px, ${mouse.y * 25}px)`,
                  }}
                >
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#1A233A] bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-emerald-500 dark:text-emerald-400" />
                    </div>
                  </div>
                  <div className="pr-2">
                    <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">Siap Rilis</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-500">100% Responsif</div>
                  </div>
                </div>

                {/* ── Parallax Layer 3: Abstract Floating Badge (Z=20) ── */}
                <div
                  className="absolute top-[-20px] left-10 bg-white dark:bg-[#1A233A] border border-slate-100 dark:border-slate-700/60 rounded-full py-1.5 px-3 flex items-center gap-2 shadow-lg"
                  style={{ 
                    transform: isMobile ? 'none' : `translateZ(20px) translate(${mouse.x * 10}px, ${mouse.y * -10}px)`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-[dot-pulse_2s_ease-in-out_infinite]" />
                  <span className="text-[9px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">Live</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
