import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Quote } from 'lucide-react';

/* 
  TestimoniSection — Phase 7.8 Final
  Editorial empty state: 
  Testimonial frame with watermark quote and subtle skeleton
*/

const TESTIMONIALS = [
  {
    name: 'Ibu Rina',
    role: 'Pengelola Sekolah',
    text: 'Template yang ditawarkan terlihat profesional dan jauh lebih mudah disesuaikan dengan kebutuhan sekolah. Informasi penting seperti profil, program sekolah, dan penerimaan siswa bisa disajikan dengan lebih rapi.',
    initials: 'IR',
  },
  {
    name: 'Bapak Dimas',
    role: 'Pengelola Kursus',
    text: 'Saya suka karena pilihan templatenya fokus untuk kebutuhan pendidikan. Tampilan websitenya terlihat modern dan informasi program kursus jadi lebih mudah disampaikan kepada calon peserta.',
    initials: 'BD',
  },
  {
    name: 'Ibu Sari',
    role: 'Koordinator Training',
    text: 'Struktur websitenya membantu kami menampilkan informasi program training dengan lebih profesional. Template seperti ini membuat institusi terlihat lebih siap secara digital.',
    initials: 'IS',
  },
];

const TestimoniSection = () => {
  const revealRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-8 lg:py-10 bg-slate-50 dark:bg-[#080D1C] relative overflow-hidden border-t border-slate-100 dark:border-slate-800/40" ref={revealRef}>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] dark:opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-6 lg:mb-8 reveal-up">
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase mb-2 block">
            Testimoni & Pengalaman
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Kisah Sukses <span className="text-slate-400 dark:text-slate-600">Menanti</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 reveal-up" style={{ transitionDelay: '200ms' }}>
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="relative bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-700/60 p-5 sm:p-6 shadow-sm overflow-hidden group">
              
              {/* Large Decorative Watermark */}
              <div className="absolute -top-6 -right-6 text-slate-100 dark:text-slate-800/50 transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
                <Quote size={120} strokeWidth={1} fill="currentColor" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Avatar with initials */}
                <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400 font-bold text-sm flex-shrink-0">
                  {item.initials}
                </div>

                {/* Text */}
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 italic leading-relaxed">
                  "{item.text}"
                </p>

                {/* Meta */}
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 w-full">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-[10px] text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimoniSection;
