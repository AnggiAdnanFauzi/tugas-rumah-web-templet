import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function EditorialShowcase() {
  return (
    <section className="py-14 md:py-20 bg-beauty-surface overflow-hidden">
      <div className="beauty-container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Visual Magazine Layout */}
          <div className="relative flex justify-center lg:justify-start">
            {/* Main Big Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-[90%] sm:w-[80%] lg:w-[85%] rounded-2xl overflow-hidden shadow-beauty-md"
            >
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000" 
                alt="Editorial Beauty Treatment" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-beauty-lg border border-beauty-border max-w-[200px]"
            >
              <p className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-1">Premium Quality</p>
              <p className="text-[10px] text-gray-500 leading-snug">Designed for modern beauty businesses.</p>
            </motion.div>
          </div>

          {/* Right Column: Editorial Copy */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col mt-8 lg:mt-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-beauty-foreground leading-[1.15] mb-5">
              Your Beauty Brand Deserves a <span className="text-beauty-accent font-serif italic">Beautiful</span> First Impression.
            </h2>
            <p className="text-sm md:text-base text-beauty-muted leading-relaxed mb-8 max-w-lg">
              Di industri kecantikan, visual adalah segalanya. Kesan pertama pelanggan terhadap salon atau klinik Anda sangat ditentukan oleh kualitas website Anda. Template kami dirancang khusus dengan pendekatan desain editorial untuk menonjolkan citra premium brand Anda tanpa menghilangkan fokus pada konversi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href="/templates" variant="primary" size="default" className="rounded-full shadow-beauty-sm">
                Lihat Koleksi Template
              </Button>
              <Button as="a" href="/templates?category=salon" variant="ghost" size="default" className="rounded-full">
                Jelajahi Kategori Salon <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
