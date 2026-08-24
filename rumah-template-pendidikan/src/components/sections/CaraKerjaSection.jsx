import React, { useRef, useEffect, useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { LayoutTemplate, PlayCircle, MessageSquare, Rocket } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Konsultasi',
    desc: 'Diskusikan visi, target, dan kebutuhan spesifik institusi pendidikan Anda bersama tim ahli kami.',
    icon: <MessageSquare size={20} className="text-blue-500" />
  },
  {
    num: '02',
    title: 'Tentukan Kebutuhan',
    desc: 'Pilih struktur, fitur, dan referensi desain dari katalog kami yang paling sesuai dengan target Anda.',
    icon: <LayoutTemplate size={20} className="text-indigo-500" />
  },
  {
    num: '03',
    title: 'Desain & Pengembangan',
    desc: 'Tim kami mulai merancang UI/UX dan mendevelop website dengan standar performa dan keamanan tinggi.',
    icon: <PlayCircle size={20} className="text-amber-500" />
  },
  {
    num: '04',
    title: 'Website Siap Digunakan',
    desc: 'Website Anda dirilis ke publik, responsif di semua perangkat, dan siap mendukung pertumbuhan institusi.',
    icon: <Rocket size={20} className="text-emerald-500" />,
    highlight: true
  }
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
    <section id="cara-kerja" className="py-10 lg:py-14 bg-white dark:bg-[#080D1C]" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-up text-center mb-8 lg:mb-10">
          <SectionHeader
            eyebrow="Workflow"
            title="Cara Kerja Sederhana & Transparan"
            description="Tidak perlu bingung membayangkan hasil akhir. Kami rancang prosesnya agar sangat mudah diikuti."
          />
        </div>

        <div className="relative max-w-6xl mx-auto" ref={lineRef}>
          {/* Connecting line — Desktop (Horizontal 4 cols) */}
          <div className="hidden lg:block absolute top-6 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-[2px] bg-slate-100 dark:bg-slate-800 z-0 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 dark:from-blue-500 dark:via-indigo-500 dark:to-emerald-500 origin-left transition-transform duration-[1500ms] ease-in-out"
              style={{ transform: lineVisible ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </div>

          {/* Connecting line — Mobile/Tablet (Vertical) */}
          <div className="lg:hidden absolute top-[30px] bottom-[100px] left-[39px] sm:left-[43px] w-[2px] bg-slate-100 dark:bg-slate-800 z-0 overflow-hidden rounded-full">
            <div
              className="w-full bg-gradient-to-b from-blue-400 via-indigo-400 to-emerald-400 dark:from-blue-500 dark:via-indigo-500 dark:to-emerald-500 origin-top transition-transform duration-[1500ms] ease-in-out"
              style={{ transform: lineVisible ? 'scaleY(1)' : 'scaleY(0)' }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, idx) => (
              <div
                key={step.num}
                className="reveal-up relative z-10 flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group"
                style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Number & Icon node */}
                <div className={`
                  w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0 rounded-2xl flex items-center justify-center mb-0 lg:mb-4 mr-5 lg:mr-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 shadow-sm
                  ${step.highlight 
                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 dark:from-blue-600 dark:to-indigo-600 border-none' 
                    : 'bg-white dark:bg-[#0C1221] border-2 border-slate-100 dark:border-slate-800'
                  }
                `}>
                  {step.highlight ? (
                    <span className="text-white font-bold text-lg">{step.num}</span>
                  ) : (
                    step.icon
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-2 flex items-center lg:justify-center gap-2">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${step.highlight ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                      {step.num}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-[240px] mx-auto lg:mx-auto">
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
