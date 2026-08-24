import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Check, ShieldCheck, Zap, Layers, Smartphone } from 'lucide-react';

const proofPoints = [
  { text: 'Spesialis website pendidikan', icon: <ShieldCheck size={18} /> },
  { text: 'Struktur halaman khusus institusi', icon: <Layers size={18} /> },
  { text: 'Desain profesional dan modern', icon: <Zap size={18} /> },
  { text: 'Dapat dikembangkan sesuai kebutuhan', icon: <Check size={18} /> },
  { text: 'Fokus pada kemudahan pengunjung', icon: <Smartphone size={18} /> },
];

const KenapaKamiSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="spesialisasi" className="py-10 lg:py-14 bg-slate-50 dark:bg-[#0C1221]" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: Copy */}
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs lg:text-sm font-semibold mb-4">
              Mengapa Memilih Kami
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
              Kami tidak sekadar membuat tampilan website.
            </h2>
            
            <div className="pl-6 border-l-4 border-indigo-500 dark:border-indigo-400 mb-8">
              <p className="text-base md:text-lg font-medium text-slate-700 dark:text-slate-300 italic">
                "Kami memahami bahwa struktur informasi, pengalaman pengguna, dan performa website pendidikan berbeda dari website biasa."
              </p>
            </div>
            
            <div className="space-y-3">
              {proofPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                    {point.icon}
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    {point.text}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#cara-kerja"
                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-3 transition-all"
              >
                Pelajari cara kerja kami
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: UI Visual / Statement */}
          <div className="reveal-right relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-3xl transform rotate-3 scale-105 pointer-events-none"></div>
            <div className="relative bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 lg:p-8 overflow-hidden">
              
              {/* Abstract UI representation */}
              <div className="w-full h-8 bg-slate-100 dark:bg-slate-800/50 rounded-lg mb-6 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="col-span-1 h-24 bg-slate-100 dark:bg-slate-800/50 rounded-xl"></div>
                <div className="col-span-2 h-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/30"></div>
              </div>
              
              <div className="h-4 w-3/4 bg-slate-100 dark:bg-slate-800/50 rounded mb-4"></div>
              <div className="h-4 w-1/2 bg-slate-100 dark:bg-slate-800/50 rounded mb-8"></div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30 flex items-center px-4">
                  <div className="w-4 h-4 rounded bg-blue-500/50"></div>
                  <div className="w-16 h-2 bg-blue-500/30 ml-3 rounded"></div>
                </div>
                <div className="h-12 bg-slate-50 dark:bg-slate-800/30 rounded-lg flex items-center px-4">
                  <div className="w-4 h-4 rounded bg-slate-300 dark:bg-slate-700"></div>
                  <div className="w-12 h-2 bg-slate-300 dark:bg-slate-700 ml-3 rounded"></div>
                </div>
              </div>

              {/* Decorative blur */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default KenapaKamiSection;
