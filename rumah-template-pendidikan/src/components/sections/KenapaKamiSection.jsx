import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { LayoutList, Eye, Zap, MessagesSquare } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FEATURES = [
  {
    icon: LayoutList,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    glow: 'group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.05)]',
    title: 'Katalog Khusus Pendidikan',
    desc: 'Kami mendedikasikan platform ini hanya untuk institusi pendidikan. Anda tidak perlu membuang waktu mencari dari ribuan template bisnis umum yang tidak relevan dengan kebutuhan sekolah atau kampus Anda.',
    colSpan: 'md:col-span-2',
  },
  {
    icon: Eye,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    glow: 'group-hover:shadow-[0_4px_20px_rgba(99,102,241,0.05)]',
    title: 'Preview Transparan',
    desc: 'Evaluasi desain secara live sebelum memutuskan, tanpa ada kejutan atau biaya tersembunyi.',
    colSpan: '',
  },
  {
    icon: Zap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    glow: 'group-hover:shadow-[0_4px_20px_rgba(16,185,129,0.05)]',
    title: 'Tampilan Profesional',
    desc: 'Desain clean, modern, dan memberikan impresi kredibel untuk institusi Anda.',
    colSpan: '',
  },
  {
    icon: MessagesSquare,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    glow: 'group-hover:shadow-[0_4px_20px_rgba(245,158,11,0.05)]',
    title: 'Konsultasi Langsung',
    desc: 'Diskusikan kebutuhan spesifik Anda langsung via WhatsApp tanpa melalui sistem tiket yang lambat.',
    colSpan: 'md:col-span-2',
  },
];

const KenapaKamiSection = () => {
  const revealRef = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-24 bg-[#0A0F1C] text-white relative overflow-hidden" ref={revealRef}>
      {/* Moving Background texture */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0',
          animation: 'pan-bg 60s linear infinite'
        }}
      />
      {/* Ambient soft light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="reveal-up">
          <SectionHeader
            eyebrow="Nilai Tambah"
            title="Mengapa Platform Ini Berbeda?"
            className="mb-14 lg:mb-20 [&_h2]:text-white [&_div]:border-blue-800/60 [&_div]:bg-blue-950/40 [&_span:first-child]:bg-blue-400 [&_span.text-xs]:text-blue-400"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`reveal-up group relative flex flex-col p-7 rounded-2xl border border-slate-800/50 bg-[#111627]/60 backdrop-blur-sm hover:bg-[#151C2D]/80 hover:border-slate-700/80 hover:-translate-y-1 transition-all duration-500 cursor-default ${f.glow} ${f.colSpan}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Header: Icon + Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out`}>
                    <Icon size={20} className={f.color} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors">{f.title}</h3>
                </div>

                <p className="text-[15px] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{f.desc}</p>

                {/* Subtle Hover accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-slate-700/30 to-transparent group-hover:via-blue-500/30 transition-colors duration-500" />
              </div>
            );
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes pan-bg {
          0% { background-position: 0px 0px; }
          100% { background-position: -640px 640px; }
        }
      `}} />
    </section>
  );
};

export default KenapaKamiSection;
