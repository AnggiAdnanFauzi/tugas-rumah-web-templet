import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FaqConversion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah template bisa dikustomisasi?",
      answer: "Ya, Anda memiliki kendali penuh untuk mengganti logo, warna, tipografi, serta susunan gambar agar sesuai dengan identitas (brand guidelines) bisnis kecantikan Anda."
    },
    {
      question: "Apakah template responsive?",
      answer: "Tentu saja. Semua template kami dirancang secara mobile-first, sehingga akan tampil proporsional dan berfungsi maksimal baik di smartphone, tablet, maupun layar desktop."
    },
    {
      question: "Apakah tersedia demo?",
      answer: "Ya, setiap template dilengkapi dengan tautan Live Preview atau Demo yang bisa Anda klik dari halaman detail template untuk mencoba interaksinya secara langsung."
    },
    {
      question: "Bagaimana cara mendapatkan template?",
      answer: "Cukup pilih template yang Anda inginkan, klik tombol pemesanan atau hubungi via WhatsApp. Tim kami akan memberikan instruksi serah terima berkas sumber (source files)."
    },
    {
      question: "Apakah saya perlu bisa coding?",
      answer: "Tidak wajib, namun memiliki dasar HTML/CSS/JS (React) akan memudahkan Anda jika ingin melakukan modifikasi struktur tingkat lanjut di luar dari konten dasar."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-20 bg-beauty-surface border-t border-beauty-border">
      <div className="beauty-container max-w-3xl mx-auto">
        
        <div className="text-center mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-beauty-foreground mb-4"
          >
            Pertanyaan Seputar Template
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted"
          >
            Temukan jawaban atas keraguan Anda sebelum memulai peluncuran website.
          </motion.p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-beauty-background border border-beauty-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
                className="flex items-center justify-between w-full p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-beauty-primary/50"
              >
                <span className="text-sm md:text-base font-bold text-beauty-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-beauty-muted shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-beauty-primary" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    id={`faq-answer-${idx}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-5 text-sm text-beauty-muted leading-relaxed border-t border-beauty-border/50 pt-4 mt-1">
                      {faq.answer}
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
}
