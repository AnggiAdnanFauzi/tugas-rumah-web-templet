import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import faqData from '../../data/faq.data';
import { ChevronDown, HelpCircle, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const revealRef = useScrollReveal({ threshold: 0.2 });

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const isEmpty = !faqData || faqData.length === 0;

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white dark:bg-[#080D1C]" ref={revealRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="reveal-up text-center mb-16">
          <SectionHeader
            eyebrow="FAQ"
            title="Pertanyaan Umum"
            description="Jawaban atas pertanyaan yang paling sering diajukan."
            className="mb-0"
          />
        </div>

        {isEmpty ? (
          <div className="reveal-up" style={{ transitionDelay: '100ms' }}>
            <div className="border-t-2 border-slate-900 dark:border-white">
              
              {/* Production-ready abstract skeleton structure */}
              {[
                'Apa saja yang termasuk dalam paket template?',
                'Apakah saya mendapatkan source code lengkap?',
                'Bagaimana proses instalasi dan kustomisasinya?'
              ].map((title, i) => (
                <div key={i} className="border-b border-slate-200 dark:border-slate-800 group">
                  <button
                    onClick={() => toggle(`empty-${i}`)}
                    className="w-full flex items-center justify-between py-5 text-left focus:outline-none transition-colors group-hover:bg-slate-50/50 dark:group-hover:bg-slate-900/30 px-2 rounded-t-lg"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-sm font-mono font-bold text-slate-300 dark:text-slate-600 transition-colors group-hover:text-blue-500">0{i + 1}</span>
                      <span className="text-[15px] font-semibold text-slate-700 dark:text-slate-300 transition-colors group-hover:text-slate-900 dark:group-hover:text-white">{title}</span>
                    </div>
                    <ChevronDown size={18} className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === `empty-${i}` ? 'rotate-180 text-blue-500' : 'group-hover:text-blue-500'}`} />
                  </button>
                  {openIndex === `empty-${i}` && (
                    <div className="px-2 pb-6 pl-[44px]">
                      <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700/50">
                        <AlertCircle size={16} className="text-slate-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          Detail jawaban sedang dalam penyusunan oleh tim kami. Silakan hubungi via WhatsApp untuk pertanyaan lebih lanjut.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
            </div>
          </div>
        ) : (
          <div className="reveal-up border-t-2 border-slate-900 dark:border-white" style={{ transitionDelay: '100ms' }}>
            {faqData.map((item, i) => (
              <div key={item.id || i} className="border-b border-slate-200 dark:border-slate-800 group">
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between py-5 text-left focus:outline-none transition-colors group-hover:bg-slate-50/50 dark:group-hover:bg-slate-900/30 px-2 rounded-t-lg"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-sm font-mono font-bold text-slate-300 dark:text-slate-600 transition-colors group-hover:text-blue-500">
                      {(i + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-[15px] font-semibold text-slate-700 dark:text-slate-300 transition-colors group-hover:text-slate-900 dark:group-hover:text-white">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-blue-500' : 'group-hover:text-blue-500'}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-2 pb-6 pl-[44px]">
                    <div className="text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FaqSection;
