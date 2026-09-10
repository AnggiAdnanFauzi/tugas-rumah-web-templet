import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { templates } from "../../data/templates";
import { TemplateCard } from "../ui/TemplateCard";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

export function FeaturedTemplates() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filters = [
    { id: "all", label: "Semua Kategori" },
    { id: "salon", label: "Salon" },
    { id: "skincare", label: "Skincare" },
    { id: "spa", label: "Spa" },
  ];

  // Logic: 1 template per category
  let displayedTemplates = [];
  if (activeCategory === "all") {
    const salon = templates.find(t => t.categoryId === 1);
    const skincare = templates.find(t => t.categoryId === 2);
    const spa = templates.find(t => t.categoryId === 3);
    displayedTemplates = [salon, skincare, spa].filter(Boolean);
  } else {
    const categoryMap = { "salon": 1, "skincare": 2, "spa": 3 };
    const template = templates.find(t => t.categoryId === categoryMap[activeCategory]);
    if (template) displayedTemplates = [template];
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-14 md:py-20 bg-beauty-surface border-y border-beauty-border">
      <div className="beauty-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-beauty-foreground mb-4 leading-tight"
          >
            Template yang Dibuat untuk Membuat Brand Beauty Terlihat Lebih Mahal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted max-w-xl mx-auto"
          >
            Mulai dari salon, skincare, makeup, spa, hingga personal beauty brand — pilih fondasi website yang sudah dirancang untuk tampil profesional.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-beauty-background rounded-full p-1 border border-beauty-border overflow-x-auto no-scrollbar max-w-full">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveCategory(filter.id)}
                className={cn(
                  "px-5 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap",
                  activeCategory === filter.id 
                    ? "bg-beauty-primary text-white shadow-sm" 
                    : "text-beauty-muted hover:text-beauty-foreground hover:bg-black/5"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Showcase */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 justify-center"
            >
              {displayedTemplates.map((template, index) => (
                <div key={template.id} className={displayedTemplates.length === 1 ? "md:col-start-1 lg:col-start-2" : ""}>
                  <TemplateCard template={template} index={index} />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button as={Link} to="/templates" variant="outline" size="lg" className="rounded-full group">
            Lihat Semua Template <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
}
