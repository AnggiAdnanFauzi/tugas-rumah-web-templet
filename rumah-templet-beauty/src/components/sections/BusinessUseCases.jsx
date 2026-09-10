import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "../../data/categories";

export function BusinessUseCases() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-14 md:py-20 bg-beauty-surface border-t border-beauty-border">
      <div className="beauty-container">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
          >
            Dibuat untuk Berbagai Bisnis Beauty
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted"
          >
            Satu fondasi fleksibel yang dioptimalkan khusus untuk memenuhi kebutuhan salon, skincare, dan spa.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {categories.map((cat) => {
            return (
              <motion.div
                key={cat.id} 
                variants={item}
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-beauty-background border border-beauty-border shadow-beauty-sm aspect-[4/3] hover:shadow-beauty-md transition-shadow"
              >
                <Link
                  to={`/templates?category=${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="absolute inset-0 z-20"
                  aria-label={`Lihat template ${cat.name}`}
                />
                <div className="absolute inset-0 z-0">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                
                <div className="relative z-10 flex flex-col justify-end h-full p-4">
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-beauty-primary transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center text-[10px] text-white/70 font-semibold group-hover:text-white transition-colors">
                    Lihat Template <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
