import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { Button } from "../ui/Button";

export function CatalogEmptyState({ onReset }) {
  return (
    <section className="py-16 md:py-20 bg-beauty-background flex items-center justify-center">
      <div className="beauty-container text-center max-w-md mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full bg-beauty-surface border border-beauty-border flex items-center justify-center text-beauty-muted mb-6">
            <SearchX className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-beauty-foreground mb-3">
            Tidak Ada Template
          </h2>
          <p className="text-beauty-muted mb-8 text-sm">
            Belum ada template yang cocok dengan pencarian atau kategori ini.
          </p>
          <Button variant="outline" size="default" onClick={onReset} className="rounded-full">
            Reset Filter
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
