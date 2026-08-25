import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function MiniSocialProof() {
  const categories = [
    "Beauty Studio",
    "Skincare",
    "Makeup",
    "Spa",
    "Salon"
  ];

  return (
    <section className="py-14 bg-beauty-background border-t border-beauty-border">
      <div className="beauty-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex gap-1 text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold text-beauty-foreground mb-2">
            "Professional look without starting from zero."
          </h2>
          <p className="text-sm text-beauty-muted font-medium uppercase tracking-wider mb-8">
            Built for modern beauty businesses
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-beauty-muted/60 font-semibold">
            {categories.map((cat, idx) => (
              <span key={idx}>{cat}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
