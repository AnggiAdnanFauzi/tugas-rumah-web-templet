import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function CatalogCta() {
  return (
    <section className="py-16 md:py-20 bg-beauty-surface border-t border-beauty-border">
      <div className="beauty-container text-center max-w-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
        >
          Belum Menemukan Template yang Cocok?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm md:text-base text-beauty-muted mb-8"
        >
          Tim kami siap membantu Anda menyesuaikan atau membangun website kecantikan impian Anda dari nol. Hubungi kami untuk konsultasi gratis.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button as="a" href="/contact" variant="primary" size="lg" className="rounded-full shadow-beauty-sm">
            Hubungi Kami Sekarang <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
