import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Quote } from 'lucide-react';

/* 
  TestimoniSection — Phase 7.8 Final
  Editorial empty state: 
  Testimonial frame with watermark quote and subtle skeleton
*/

const TestimoniSection = () => {
  const revealRef = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 lg:py-24 bg-slate-50 dark:bg-[#080D1C] relative overflow-hidden border-t border-slate-100 dark:border-slate-800/40" ref={revealRef}>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.15] dark:opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 reveal-up">
          <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.2em] uppercase mb-3 block">
            Testimoni & Pengalaman
          </span>
          <h2 className="text-[1.75rem] md:text-4xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
            Kisah Sukses <span className="text-slate-400 dark:text-slate-600">Menanti</span>
          </h2>
        </div>

        {/* Testimonial Empty Frame Composition */}
        <div className="max-w-2xl mx-auto reveal-up" style={{ transitionDelay: '200ms' }}>
          <div className="relative bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-700/60 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden group">
            
            {/* Large Decorative Watermark */}
            <div className="absolute -top-6 -right-6 text-slate-100 dark:text-slate-800/50 transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
              <Quote size={180} strokeWidth={1} fill="currentColor" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Empty Avatar Frame */}
              <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 animate-[float-sm_4s_ease-in-out_infinite]">
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/50" />
              </div>

              {/* Skeleton Text */}
              <div className="space-y-4 w-full max-w-md mx-auto mb-8">
                <div className="h-3.5 w-full bg-slate-100 dark:bg-slate-800/80 rounded-full" />
                <div className="h-3.5 w-[90%] mx-auto bg-slate-100 dark:bg-slate-800/80 rounded-full" />
                <div className="h-3.5 w-[60%] mx-auto bg-slate-100 dark:bg-slate-800/80 rounded-full" />
              </div>

              {/* Message */}
              <div className="inline-block px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700/50">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Ruang ini didedikasikan untuk pengalaman nyata institusi yang telah go-digital bersama kami.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimoniSection;
