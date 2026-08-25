import { motion } from "framer-motion";
import { Palette, Type, Image as ImageIcon, LayoutTemplate } from "lucide-react";

export function CustomizationSection() {
  const elements = [
    {
      id: 1,
      name: "Colors",
      icon: Palette,
      preview: (
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-beauty-primary shadow-sm"></div>
          <div className="w-8 h-8 rounded-full bg-beauty-foreground shadow-sm"></div>
          <div className="w-8 h-8 rounded-full bg-beauty-muted shadow-sm"></div>
        </div>
      )
    },
    {
      id: 2,
      name: "Typography",
      icon: Type,
      preview: (
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-3xl text-beauty-foreground">Aa</span>
          <span className="font-sans text-xl text-beauty-muted">Aa</span>
        </div>
      )
    },
    {
      id: 3,
      name: "Images",
      icon: ImageIcon,
      preview: (
        <div className="w-16 h-12 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center border border-gray-200">
          <ImageIcon className="w-5 h-5 text-gray-400" />
        </div>
      )
    },
    {
      id: 4,
      name: "Sections",
      icon: LayoutTemplate,
      preview: (
        <div className="flex flex-col gap-1 w-full max-w-[100px]">
          <div className="w-full h-2 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
          <div className="w-full h-8 bg-beauty-primary/10 rounded mt-1"></div>
        </div>
      )
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-beauty-background border-t border-beauty-border">
      <div className="beauty-container">
        
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-beauty-foreground mb-4 leading-tight">
              Sesuaikan dengan Identitas Brand Anda
            </h2>
            <p className="text-sm md:text-base text-beauty-muted mb-8 max-w-md leading-relaxed">
              Template hanyalah fondasi. Anda memiliki kebebasan penuh untuk mengganti seluruh elemen visual agar senada dengan panduan merek (brand guidelines) kecantikan Anda.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 md:gap-6"
          >
            {elements.map((el, idx) => {
              const Icon = el.icon;
              return (
                <div key={el.id} className="bg-beauty-surface border border-beauty-border rounded-2xl p-5 md:p-6 flex flex-col justify-between aspect-square md:aspect-auto h-auto md:h-40 shadow-beauty-sm hover:shadow-beauty-md transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-4 h-4 text-beauty-primary" />
                    <span className="text-sm font-bold text-beauty-foreground tracking-wide uppercase">{el.name}</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {el.preview}
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
