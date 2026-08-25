import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function TrustStrip() {
  const brands = [
    "Salon",
    "Beauty Clinic",
    "Skincare",
    "Spa",
    "Nail Studio",
    "Hair Studio"
  ];

  return (
    <section className="border-y border-beauty-border bg-beauty-surface py-4 overflow-hidden">
      <div className="beauty-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12 text-sm text-beauty-muted font-medium">
          <span className="text-beauty-foreground/70 font-semibold uppercase tracking-wider text-xs">
            Dirancang Untuk
          </span>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-beauty-primary/50" />
                <span>{brand}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
