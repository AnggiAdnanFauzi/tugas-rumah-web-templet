import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Network, Smartphone, Zap, Search, Cog, ShieldCheck } from 'lucide-react';

const foundations = [
  {
    title: 'Struktur yang Terorganisir',
    desc: 'Komponen dan halaman disusun dengan arsitektur yang jelas untuk skala panjang.',
    icon: <Network size={20} className="text-blue-500" />
  },
  {
    title: 'Responsif di Semua Perangkat',
    desc: 'Website dirancang agar nyaman diakses dari desktop, tablet, maupun mobile.',
    icon: <Smartphone size={20} className="text-indigo-500" />
  },
  {
    title: 'Performa Cepat',
    desc: 'Struktur website dikembangkan dengan memperhatikan efisiensi loading speed.',
    icon: <Zap size={20} className="text-amber-500" />
  },
  {
    title: 'SEO Ready',
    desc: 'Struktur dasar website disiapkan agar lebih mudah diindeks oleh mesin pencari.',
    icon: <Search size={20} className="text-emerald-500" />
  },
  {
    title: 'Mudah Dikembangkan',
    desc: 'Bukan sistem mati. Website dapat dikembangkan mengikuti kebutuhan institusi.',
    icon: <Cog size={20} className="text-purple-500" />
  },
  {
    title: 'Aman dan Terawat',
    desc: 'Standar keamanan teknis diterapkan untuk menjaga stabilitas jangka panjang.',
    icon: <ShieldCheck size={20} className="text-rose-500" />
  }
];

const PondasiSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="pondasi" className="py-10 lg:py-14 bg-slate-50 dark:bg-[#0C1221] relative overflow-hidden" ref={revealRef}>
      
      {/* Decorative background architecture lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="reveal-up grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Text & Diagram */}
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Kualitas Teknis"
              title="Kami Membangun Website dengan Pondasi Kuat"
              description="Website yang baik bukan hanya terlihat bagus. Struktur di baliknya harus siap digunakan, dikembangkan, dan dirawat untuk investasi jangka panjang pendidikan Anda."
              className="text-left mb-6"
            />
            
            <div className="relative p-5 lg:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-[100px] pointer-events-none"></div>
              
              {/* Stacked Architecture Visual */}
              <div className="flex flex-col gap-3">
                <div className="h-10 bg-slate-100 dark:bg-slate-800/80 rounded-lg flex items-center px-4 justify-between border border-slate-200/50 dark:border-slate-700/50">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">UI / Frontend</div>
                  <div className="flex gap-1">
                    <div className="w-8 h-1.5 rounded bg-blue-400/50"></div>
                    <div className="w-4 h-1.5 rounded bg-indigo-400/50"></div>
                  </div>
                </div>
                
                <div className="h-12 bg-slate-50 dark:bg-slate-800/60 rounded-lg flex items-center px-4 justify-between border border-slate-200/50 dark:border-slate-700/50 ml-4">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Core Logic</div>
                  <div className="flex gap-1">
                    <div className="w-12 h-1.5 rounded bg-emerald-400/50"></div>
                  </div>
                </div>
                
                <div className="h-14 bg-slate-50 dark:bg-slate-900/40 rounded-lg flex items-center px-4 justify-between border-t-2 border-slate-200 dark:border-slate-800 ml-8">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Data & Security</div>
                  <div className="flex gap-1">
                    <div className="w-6 h-1.5 rounded bg-amber-400/50"></div>
                    <div className="w-6 h-1.5 rounded bg-rose-400/50"></div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* RIGHT: Feature Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {foundations.map((item, idx) => (
                <div 
                  key={idx}
                  className="reveal-up bg-white dark:bg-[#111827] rounded-2xl p-5 border border-slate-100 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700 transition-colors duration-300 shadow-sm hover:shadow-md"
                  style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-100">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PondasiSection;
