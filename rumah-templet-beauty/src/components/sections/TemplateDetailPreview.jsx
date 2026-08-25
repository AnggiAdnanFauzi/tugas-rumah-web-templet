import { motion } from "framer-motion";

export function TemplateDetailPreview() {
  return (
    <section className="py-14 md:py-20 bg-beauty-surface overflow-hidden">
      <div className="beauty-container">
        
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
          >
            Bayangkan Website Anda Seperti Ini
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted max-w-lg mx-auto"
          >
            Kesan pertama yang elegan, rapi, dan meyakinkan pelanggan untuk segera melakukan booking treatment di klinik Anda.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute -left-8 top-1/4 z-20 bg-white/90 backdrop-blur-md border border-beauty-border shadow-beauty-lg rounded-xl px-4 py-2.5 items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-bold text-beauty-foreground uppercase tracking-wider">Responsive</span>
          </motion.div>

          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex absolute -right-12 top-1/3 z-20 bg-white/90 backdrop-blur-md border border-beauty-border shadow-beauty-lg rounded-xl px-4 py-2.5 items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-beauty-primary"></div>
            <span className="text-xs font-bold text-beauty-foreground uppercase tracking-wider">Premium Design</span>
          </motion.div>

          <motion.div 
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute -left-4 bottom-1/4 z-20 bg-white/90 backdrop-blur-md border border-beauty-border shadow-beauty-lg rounded-xl px-4 py-2.5 items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-beauty-primary"></div>
            <span className="text-xs font-bold text-beauty-foreground uppercase tracking-wider">Easy to Customize</span>
          </motion.div>

          {/* Browser Frame */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative rounded-2xl md:rounded-3xl bg-white shadow-2xl border border-beauty-border overflow-hidden"
          >
            {/* Browser Header */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 font-mono w-48 text-center border border-gray-200">
                your-beauty-brand.com
              </div>
            </div>

            {/* Mockup Image */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] bg-gray-50 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" 
                alt="Website Preview" 
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay gradient to soften the bottom edge if needed */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
