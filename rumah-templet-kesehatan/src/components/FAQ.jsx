import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Apakah saya perlu membeli hosting dan domain sendiri?",
    a: "Tidak perlu pusing. Layanan kami sudah termasuk setup hosting dan domain (opsional), sehingga Anda terima beres."
  },
  {
    q: "Berapa lama waktu pembuatan website?",
    a: "Karena menggunakan struktur template yang sudah teruji, website Anda bisa tayang dalam waktu 2-5 hari kerja setelah data (logo, teks, gambar) kami terima."
  },
  {
    q: "Apakah template ini bisa diubah warnanya?",
    a: "Tentu. Warna utama, logo, dan font akan disesuaikan dengan identitas brand fasilitas kesehatan Anda."
  },
  {
    q: "Bagaimana sistem pembayaran integrasi WhatsApp?",
    a: "Tidak ada biaya langganan gateway. Tombol pemesanan langsung mengarah ke aplikasi WhatsApp admin Anda dengan pesan yang sudah terformat otomatis."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">Pertanyaan Umum</h2>
          <p className="text-slate-500">Hal-hal yang sering ditanyakan sebelum memulai.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-ocean-blue bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button 
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="font-semibold text-slate-800 pr-8">{faq.q}</span>
                <motion.div 
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ${openIndex === idx ? 'text-ocean-blue' : 'text-slate-400'}`}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
