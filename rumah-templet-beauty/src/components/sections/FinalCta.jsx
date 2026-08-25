import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function FinalCta() {
  return (
    <section className="relative py-20 bg-beauty-foreground overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-beauty-primary/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-beauty-accent/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2"></div>
      
      <div className="beauty-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
          >
            Temukan Template yang Cocok untuk Brand Anda
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-white/70 mb-8 max-w-lg"
          >
            Pilih desain yang paling sesuai, lihat detailnya, lalu mulai bangun website beauty Anda dengan fondasi yang sudah siap.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button as="a" href="/templates" variant="primary" size="default" className="rounded-full shadow-beauty-lg shadow-beauty-primary/20 w-full sm:w-auto justify-center">
              Jelajahi Semua Template
            </Button>
            <Button as="a" href="/contact" variant="outline" size="default" className="rounded-full text-white border-white/30 hover:bg-white hover:text-beauty-foreground hover:border-white w-full sm:w-auto justify-center">
              Hubungi Kami
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
