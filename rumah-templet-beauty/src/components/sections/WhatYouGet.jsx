import { motion } from "framer-motion";
import { Sparkles, MonitorSmartphone, MousePointerClick, SlidersHorizontal, Smartphone, Zap } from "lucide-react";

export function WhatYouGet() {
  const benefits = [
    {
      id: 1,
      title: "Premium Visual",
      description: "Desain editorial mewah yang meningkatkan persepsi harga dan kepercayaan.",
      icon: Sparkles,
    },
    {
      id: 2,
      title: "Responsive Design",
      description: "Tampilan otomatis beradaptasi sempurna di semua ukuran layar.",
      icon: MonitorSmartphone,
    },
    {
      id: 3,
      title: "Conversion-Focused",
      description: "Struktur layout disusun untuk memandu pengunjung melakukan booking.",
      icon: MousePointerClick,
    },
    {
      id: 4,
      title: "Easy Customization",
      description: "Ubah warna, font, dan gambar dengan mudah sesuai identitas Anda.",
      icon: SlidersHorizontal,
    },
    {
      id: 5,
      title: "Ready for Mobile",
      description: "Pengalaman navigasi semulus aplikasi native di smartphone.",
      icon: Smartphone,
    },
    {
      id: 6,
      title: "Modern Animation",
      description: "Interaksi halus yang membuat website terasa lebih hidup dan mahal.",
      icon: Zap,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-14 md:py-20 bg-beauty-background border-t border-beauty-border">
      <div className="beauty-container">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
          >
            Semua yang Dibutuhkan untuk Memulai
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted max-w-xl mx-auto"
          >
            Anda tidak hanya mendapatkan tampilan. Setiap template dirancang dengan struktur yang membantu brand beauty tampil profesional sejak pertama kali dikunjungi.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div 
                key={benefit.id} 
                variants={item}
                className="bg-beauty-surface border border-beauty-border rounded-2xl p-5 md:p-6 flex flex-col items-start shadow-beauty-sm hover:shadow-beauty-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-beauty-background border border-beauty-border flex items-center justify-center text-beauty-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-beauty-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-beauty-muted leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
