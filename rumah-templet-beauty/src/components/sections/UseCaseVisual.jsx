import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function UseCaseVisual() {
  return (
    <section className="py-14 md:py-20 bg-beauty-surface">
      <div className="beauty-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full aspect-square md:aspect-[21/9] rounded-3xl overflow-hidden shadow-beauty-lg"
        >
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=2000" 
            alt="Beauty Model" 
            className="w-full h-full object-cover object-top"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest mb-4"
            >
              Built for modern beauty businesses
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-8 max-w-3xl"
            >
              From first impression <br className="hidden md:block" />
              <span className="font-serif italic text-beauty-primary">to first booking.</span>
            </motion.h2>
            
            <motion.a 
              href="/templates"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full text-sm font-bold transition-all"
            >
              Explore Templates
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
