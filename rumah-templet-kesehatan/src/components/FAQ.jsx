import React, { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

const faqs = [
  {
    q: "Apakah saya memerlukan keahlian coding?",
    a: "Tidak sama sekali. Tim kami yang akan mengatur dan membangun website Anda. Anda hanya perlu menyediakan konten dan logo."
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Harga paket yang tertera adalah untuk pembuatan website (desain & struktur). Domain dan hosting bisa Anda sediakan sendiri, atau kami bantu kelola dengan biaya terpisah."
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Untuk paket Landing Page, estimasi 2-3 hari kerja. Sedangkan Company Profile memakan waktu sekitar 5-7 hari kerja setelah seluruh konten kami terima."
  }
];

const FAQ = () => {
  const { t } = useAppContext();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 relative overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
      <div className="text-center mb-16 reveal active">
        <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">{t('faq.title')}</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 reveal active">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`group glass-panel rounded-eight border border-white/60 transition-colors ${isOpen ? 'bg-primary/5' : ''}`}>
              <button 
                className="w-full flex cursor-pointer items-center justify-between gap-1.5 p-6 text-on-surface font-bold font-bold text-lg text-left outline-none"
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              >
                {faq.q}
                <span className="relative size-5 shrink-0 flex items-center justify-center text-primary">
                  <span className={`material-symbols-outlined absolute transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>add</span>
                  <span className={`material-symbols-outlined absolute transition-transform duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'}`}>remove</span>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out`}
                style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
              >
                <div className="px-6 pb-6 text-on-surface-variant">
                  {faq.a}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
};

export default FAQ;



