import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

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
    <section className="py-12 md:py-14 lg:py-16 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-3"
          >
            Pertanyaan Umum
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base"
          >
            Hal-hal yang sering ditanyakan sebelum memulai.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className={cn(
                "border rounded-2xl overflow-hidden transition-colors duration-300",
                openIndex === idx 
                  ? "border-primary bg-primary/5" 
                  : "border-border bg-white hover:border-primary/50"
              )}
            >
              <button 
                className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className={cn(
                  "font-semibold pr-8 transition-colors duration-300",
                  openIndex === idx ? "text-primary" : "text-foreground"
                )}>
                  {faq.q}
                </span>
                <motion.div 
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "flex-shrink-0 transition-colors duration-300",
                    openIndex === idx ? "text-primary" : "text-muted-foreground"
                  )}
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
                    <div className="px-5 pb-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
