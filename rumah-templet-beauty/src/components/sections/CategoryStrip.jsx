import { motion } from "framer-motion";
import { categories } from "../../data/categories";

export function CategoryStrip() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section id="categories" className="py-16 md:py-20 bg-beauty-surface border-y border-beauty-border">
      <div className="beauty-container">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-3"
          >
            Template untuk Setiap Bisnis Beauty
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted"
          >
            Mulai dari salon hingga skincare, pilih tampilan yang paling sesuai dengan karakter brand Anda.
          </motion.p>
        </div>

        {/* Categories Visual Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.a
                key={category.id}
                variants={item}
                href={`/templates?category=${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative flex flex-col aspect-[4/5] overflow-hidden rounded-2xl bg-beauty-background cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors duration-300"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-end h-full p-4 md:p-5 text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-10 h-10 mb-3 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center border border-white/30 group-hover:bg-beauty-primary group-hover:border-beauty-primary transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
