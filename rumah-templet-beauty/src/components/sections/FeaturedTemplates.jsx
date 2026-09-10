import { motion } from "framer-motion";
import { templates } from "../../data/templates";
import { TemplateCard } from "../ui/TemplateCard";

export function FeaturedTemplates() {
  const featured = templates.slice(0, 3);

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
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
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

        {/* Product Showcase */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {featured.map((template, index) => (
             <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
