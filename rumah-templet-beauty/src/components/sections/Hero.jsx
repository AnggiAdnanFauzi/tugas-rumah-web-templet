import { motion } from "framer-motion";
import { Check, Star, Layout, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative pt-20 pb-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-beauty-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="beauty-container relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p variants={item} className="text-xs md:text-sm font-semibold tracking-wider text-beauty-primary uppercase mb-4">
              BEAUTY TEMPLATE COLLECTION
            </motion.p>

            <motion.h1 variants={item} className="text-3xl md:text-4xl font-bold tracking-tight text-beauty-foreground mb-5 leading-[1.05]">
              Template Website Premium untuk Bisnis <span className="text-beauty-primary font-serif italic">Beauty</span> Anda
            </motion.h1>

            <motion.p variants={item} className="text-sm md:text-base text-beauty-muted mb-8 leading-relaxed max-w-xl">
              Temukan template website untuk salon, skincare, spa, beauty clinic, makeup studio, dan brand kecantikan yang dirancang untuk tampil elegan sekaligus membantu meningkatkan kepercayaan pelanggan.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button variant="primary" size="default" as="a" href="/templates" className="rounded-full">
                Lihat Template Beauty
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button variant="outline" size="default" as="a" href="#categories" className="rounded-full bg-white/50 backdrop-blur-sm">
                Jelajahi Kategori
              </Button>
            </motion.div>

            {/* Trust Micro Information */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-beauty-muted">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                <span>Modern UI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-green-500" />
                <span>Siap Dikustomisasi</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/3] lg:aspect-auto lg:h-[450px]">
              
              {/* Main Preview (Editorial Beauty Interior / Skincare) */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-beauty-lg border border-beauty-border bg-beauty-surface">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
                  alt="Premium Beauty Clinic Interior"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* FLOATING CARD 1: Beauty Studio Premium Template */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-4 top-8 bg-beauty-surface/95 backdrop-blur-sm p-3 rounded-xl shadow-beauty-md border border-beauty-border flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-lg bg-beauty-background flex items-center justify-center text-beauty-primary">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Beauty Studio</p>
                  <p className="text-[10px] text-gray-500">Premium Template</p>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: Rating */}
              <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -left-6 bottom-16 bg-beauty-surface p-3 rounded-xl shadow-beauty-md border border-beauty-border flex items-center gap-3 z-20"
              >
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/100?img=47" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://i.pravatar.cc/100?img=43" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">4.9/5</p>
                  <p className="text-[10px] text-gray-500">Customer Rating</p>
                </div>
              </motion.div>

              {/* FLOATING CARD 3: Ready Sections */}
              <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute right-8 -bottom-6 bg-beauty-surface p-3 rounded-xl shadow-beauty-md border border-beauty-border flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 rounded-full bg-beauty-background flex items-center justify-center text-beauty-accent">
                  <Layout className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">12+</p>
                  <p className="text-[10px] text-gray-500">Ready Sections</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
