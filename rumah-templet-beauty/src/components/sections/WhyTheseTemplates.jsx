import { motion } from "framer-motion";
import { MousePointerClick, Image as ImageIcon, Sparkles, Smartphone } from "lucide-react";

export function WhyTheseTemplates() {
  const values = [
    {
      id: 1,
      title: "Designed to Convert",
      description: "Layout dirancang agar pengunjung lebih mudah memahami layanan dan mengambil tindakan.",
      icon: MousePointerClick,
    },
    {
      id: 2,
      title: "Image First",
      description: "Struktur visual memprioritaskan fotografi produk, treatment, portfolio, dan brand story.",
      icon: ImageIcon,
    },
    {
      id: 3,
      title: "Easy to Customize",
      description: "Struktur template mudah disesuaikan dengan identitas bisnis dan warna estetika Anda.",
      icon: Sparkles,
    },
    {
      id: 4,
      title: "Mobile Ready",
      description: "Tampilan tetap profesional dan responsif pada smartphone, tablet, maupun desktop.",
      icon: Smartphone,
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
    <section className="py-14 md:py-20 bg-beauty-background border-b border-beauty-border">
      <div className="beauty-container">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
          >
            Lebih dari Sekadar Tampilan Cantik
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {values.map((val, index) => {
            const Icon = val.icon;
            return (
              <motion.div key={val.id} variants={item} className="flex flex-col text-left">
                <div className="mb-4">
                  <span className="text-xs font-bold text-beauty-primary uppercase tracking-widest border-b border-beauty-primary/30 pb-1">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-beauty-foreground mb-2 flex items-center gap-2">
                  <Icon className="w-4 h-4 text-beauty-muted" />
                  {val.title}
                </h3>
                <p className="text-sm text-beauty-muted leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
