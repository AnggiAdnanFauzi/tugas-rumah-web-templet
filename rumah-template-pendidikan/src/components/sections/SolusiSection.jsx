import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { XCircle, CheckCircle2, LayoutList, Eye, Zap, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const SolusiSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="solusi" className="py-16 lg:py-24 bg-white dark:bg-[#080D1C]" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up">
          <SectionHeader
            eyebrow="Solusi Kami"
            title="Mengapa Mencari Template Seringkali Membingungkan?"
            description="Membangun presensi digital institusi pendidikan tidak harus rumit."
            className="mb-14 lg:mb-20"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* LEFT — plain editorial list (col-span-5) */}
          <div className="lg:col-span-5 reveal-left" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-[13px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6">
              Tantangan Umum
            </h3>
            <ul className="space-y-7">
              {[
                'Sulit menentukan desain website yang pas untuk institusi pendidikan',
                'Membutuhkan waktu lama mencari referensi dari berbagai sumber',
                'Tidak tahu pasti tampilan akhir website sebelum dipublikasikan',
                'Khawatir proses teknis yang rumit dan membutuhkan resource besar',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <XCircle
                    size={20}
                    className="text-slate-300 dark:text-slate-600 flex-shrink-0 mt-0.5 group-hover:text-rose-400 transition-colors duration-300"
                  />
                  <span className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm lg:text-[15px] group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — Editorial Feature Blocks / Bento (col-span-7) */}
          <div className="lg:col-span-7 relative">
            <h3 className="lg:hidden text-[13px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-6 mt-12">
              Pendekatan Kami
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              
              {/* Block 1 - Large / Primary Accent */}
              <div 
                className="reveal-up sm:col-span-2 card-micro relative overflow-hidden bg-slate-50 dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-700/50 p-7 lg:p-8"
                style={{ transitionDelay: '200ms' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full pointer-events-none" />
                <div className="w-12 h-12 mb-5 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-sm">
                  <LayoutList size={20} className="text-blue-500 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">Katalog Khusus Pendidikan</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-lg">
                  Koleksi template yang dirancang eksklusif, terkurasi untuk profil sekolah, kampus, pesantren, dan lembaga kursus tanpa harus mencari di sembarang tempat.
                </p>
              </div>

              {/* Block 2 - Compact feature */}
              <div 
                className="reveal-up card-micro bg-white dark:bg-[#0C1221] rounded-2xl border border-slate-200/80 dark:border-slate-700/50 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-none"
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-10 h-10 mb-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center">
                  <Eye size={18} className="text-indigo-500 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1.5 text-[15px]">Live Demo Interaktif</h4>
                <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed">
                  Coba dan eksplorasi desain secara langsung dari browser Anda.
                </p>
              </div>

              {/* Block 3 - Compact feature */}
              <div 
                className="reveal-up card-micro bg-white dark:bg-[#0C1221] rounded-2xl border border-slate-200/80 dark:border-slate-700/50 p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] dark:shadow-none"
                style={{ transitionDelay: '400ms' }}
              >
                <div className="w-10 h-10 mb-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                  <Zap size={18} className="text-emerald-500 dark:text-emerald-400" />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-1.5 text-[15px]">Pemilihan Terstruktur</h4>
                <p className="text-slate-500 dark:text-slate-400 text-[13px] leading-relaxed">
                  Proses yang sangat sederhana tanpa berbelit-belit.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolusiSection;
