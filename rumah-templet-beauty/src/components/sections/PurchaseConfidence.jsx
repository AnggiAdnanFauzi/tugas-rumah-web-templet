import { motion } from "framer-motion";
import { Clock, LayoutDashboard, Settings2, Wallet } from "lucide-react";

export function PurchaseConfidence() {
  const points = [
    {
      id: 1,
      title: "Faster Start",
      description: "Tidak perlu membuang waktu memikirkan struktur dari nol. Anda bisa langsung memasukkan konten.",
      icon: Clock,
    },
    {
      id: 2,
      title: "Professional Foundation",
      description: "Desain sudah memiliki struktur visual yang matang dan telah diuji secara estetika.",
      icon: LayoutDashboard,
    },
    {
      id: 3,
      title: "Flexible",
      description: "Konten dan visual dapat disesuaikan perlahan seiring dengan berkembangnya bisnis Anda.",
      icon: Settings2,
    },
    {
      id: 4,
      title: "Cost Efficient",
      description: "Lebih praktis dan terjangkau untuk bisnis kecantikan yang ingin segera memiliki kehadiran online.",
      icon: Wallet,
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-beauty-background border-t border-beauty-border">
      <div className="beauty-container">
        
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-beauty-foreground mb-4 leading-tight">
              Kenapa Memulai dari Template?
            </h2>
            <p className="text-sm md:text-base text-beauty-muted max-w-sm">
              Sebuah keputusan cerdas untuk Anda yang menginginkan kecepatan peluncuran tanpa mengorbankan kualitas dan profesionalisme.
            </p>
          </motion.div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6 md:gap-8">
            {points.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div 
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-beauty-surface border border-beauty-border rounded-2xl p-6 shadow-beauty-sm flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-beauty-primary/10 flex items-center justify-center text-beauty-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-beauty-foreground mb-2">{point.title}</h3>
                    <p className="text-sm text-beauty-muted leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
