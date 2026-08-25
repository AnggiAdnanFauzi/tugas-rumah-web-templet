import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

export function BeforeAfter() {
  return (
    <section className="py-14 md:py-20 bg-beauty-surface border-t border-beauty-border">
      <div className="beauty-container">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
          >
            Jangan Mulai dari Halaman Kosong
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted max-w-lg mx-auto"
          >
            Membangun website kecantikan dari nol seringkali memakan waktu berbulan-bulan dan menghabiskan biaya besar. Ada cara yang lebih cerdas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Before (Start From Zero) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-beauty-background rounded-2xl p-6 md:p-8 border border-beauty-border shadow-beauty-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-beauty-border">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-600">Start From Zero</h3>
            </div>
            
            <ul className="flex flex-col gap-5 text-gray-500">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></div>
                <p className="text-sm">Tidak ada struktur baku, seringkali membingungkan saat menata layout portofolio atau harga treatment.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></div>
                <p className="text-sm">Visual tidak konsisten karena kurangnya panduan estetika desain editorial.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></div>
                <p className="text-sm">Sulit membangun trust dengan cepat kepada calon pelanggan baru.</p>
              </li>
            </ul>
          </motion.div>

          {/* After (Start With a Template) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-beauty-primary/5 rounded-2xl p-6 md:p-8 border border-beauty-primary/20 shadow-beauty-md flex flex-col relative overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-beauty-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

            <div className="relative z-10 flex items-center gap-3 mb-8 pb-6 border-b border-beauty-primary/20">
              <div className="w-10 h-10 rounded-full bg-beauty-primary text-white flex items-center justify-center shadow-beauty-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-beauty-primary">Start With a Template</h3>
            </div>
            
            <ul className="relative z-10 flex flex-col gap-5 text-beauty-foreground">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-beauty-primary mt-2 shrink-0"></div>
                <p className="text-sm font-medium">Struktur konten siap pakai, dirancang khusus untuk memamerkan layanan kecantikan.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-beauty-primary mt-2 shrink-0"></div>
                <p className="text-sm font-medium">Visual konsisten yang memberikan kesan profesional, mahal, dan meyakinkan.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-beauty-primary mt-2 shrink-0"></div>
                <p className="text-sm font-medium">Fokus hanya pada mengganti teks dan foto, website siap live dalam hitungan hari.</p>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
