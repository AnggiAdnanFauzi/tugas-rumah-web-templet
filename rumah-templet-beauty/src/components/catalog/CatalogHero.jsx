import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CatalogHero() {
  return (
    <section className="relative pt-10 pb-8 bg-beauty-surface border-b border-beauty-border overflow-hidden">
      <div className="beauty-container relative z-10">
        
        <div className="flex-1 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-wider text-beauty-primary uppercase mb-3 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            BEAUTY TEMPLATE COLLECTION
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-beauty-foreground leading-tight mb-4"
          >
            Template Website untuk Brand Beauty yang Ingin Tampil Lebih Premium
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-beauty-muted max-w-lg"
          >
            Temukan template profesional untuk beauty studio, skincare, makeup artist, spa, salon, dan berbagai bisnis beauty modern.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
