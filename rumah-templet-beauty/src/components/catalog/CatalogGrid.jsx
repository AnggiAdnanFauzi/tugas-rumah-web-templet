import { motion } from "framer-motion";
import { TemplateCard } from "../ui/TemplateCard";

export function CatalogGrid({ templates }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section className="py-10 md:py-14 bg-beauty-background">
      <div className="beauty-container">
        
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-beauty-foreground">
            Semua Template
          </h2>
          <p className="text-sm text-beauty-muted font-medium">
            {templates.length} templates found
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {templates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
