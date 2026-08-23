import React, { useRef, useEffect, useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ArrowRight, MessageCircle, Monitor } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Eksplorasi Katalog',
    desc: 'Jelajahi koleksi desain yang dirancang khusus untuk memenuhi standar visual institusi pendidikan modern.',
    icon: <Monitor size={18} className="text-slate-400" />
  },
  {
    num: '02',
    title: 'Live Preview Interaktif',
    desc: 'Uji coba langsung tata letak, warna, dan responsivitas desain dari berbagai perangkat sebelum memutuskan.',
    icon: <ArrowRight size={18} className="text-blue-500" />,
    highlight: true
  },
  {
    num: '03',
    title: 'Konsultasi Akhir',
    desc: 'Hubungi tim kami via WhatsApp untuk berdiskusi mengenai implementasi desain pada website institusi Anda.',
    icon: <MessageCircle size={18} className="text-emerald-500" />
  },
];

const CaraKerjaSection = () => {
  const revealRef = useScrollReveal({ threshold: 0.15 });
  const [lineVisible, setLineVisible] = useState(false);
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLineVisible(true); },
      { threshold: 0.4 }
    );
    if (lineRef.current) observer.observe(lineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="cara-kerja" className="py-16 lg:py-24 bg-white dark:bg-[#080D1C]" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up">
          <SectionHeader
            eyebrow="Workflow"
            title="Sederhana & Transparan"
            description="Tidak perlu bingung membayangkan hasil akhir. Kami buat prosesnya sangat mudah untuk Anda."
            className="mb-16 lg:mb-24"
          />
        </div>

        <div className="relative max-w-5xl mx-auto" ref={lineRef}>
          {/* Connecting line — Desktop (Horizontal) */}
          <div className="hidden md:block absolute top-6 left-[calc(16.66%+24px)] right-[calc(16.66%+24px)] h-[2px] bg-slate-100 dark:bg-slate-800 z-0 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-slate-300 via-blue-400 to-emerald-400 dark:from-slate-600 dark:via-blue-500 dark:to-emerald-500 origin-left transition-transform duration-[1500ms] ease-in-out"
              style={{ transform: lineVisible ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </div>

          {/* Connecting line — Mobile (Vertical) */}
          <div className="md:hidden absolute top-[40px] bottom-[100px] left-[27px] w-[2px] bg-slate-100 dark:bg-slate-800 z-0 overflow-hidden rounded-full">
            <div
              className="w-full h-full bg-gradient-to-b from-slate-300 via-blue-400 to-emerald-400 dark:from-slate-600 dark:via-blue-500 dark:to-emerald-500 origin-top transition-transform duration-[1500ms] ease-in-out"
              style={{ transform: lineVisible ? 'scaleY(1)' : 'scaleY(0)' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className="reveal-up group flex flex-row md:flex-col items-start gap-5 md:gap-0 text-left"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number bubble */}
                <div className={`
                  relative z-10 flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center md:mb-8 text-sm font-bold font-mono shadow-sm
                  transition-all duration-500
                  ${step.highlight 
                    ? 'bg-blue-600 text-white border border-blue-500 shadow-[0_8px_20px_rgba(37,99,235,0.2)] dark:shadow-[0_8px_20px_rgba(37,99,235,0.4)] md:-mt-2' 
                    : 'bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700/80 text-slate-400 group-hover:border-slate-300 dark:group-hover:border-slate-600'}
                `}>
                  {step.num}
                </div>

                {/* Card */}
                <div className={`
                  card-micro w-full rounded-2xl p-6 relative overflow-hidden transition-all duration-300
                  ${step.highlight 
                    ? 'bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 shadow-md md:-mt-2' 
                    : 'bg-transparent border border-transparent group-hover:bg-slate-50/50 dark:group-hover:bg-slate-900/30'}
                `}>
                  {step.highlight && (
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full pointer-events-none" />
                  )}
                  <h3 className="text-[17px] font-bold text-slate-900 dark:text-slate-100 mb-2.5 flex items-center justify-between">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaraKerjaSection;
