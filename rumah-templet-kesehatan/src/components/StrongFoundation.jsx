import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Gauge, Lock, Layers, Smartphone } from 'lucide-react';
import { Card, CardContent } from './common/Card';

const pillars = [
  {
    icon: <Code2 size={24} className="text-primary" />,
    title: "Kode Bersih & Terstruktur",
    desc: "Ditulis dengan standar industri. Mudah dirawat dan dikembangkan di masa depan.",
    bg: "bg-primary/10",
  },
  {
    icon: <Gauge size={24} className="text-secondary" />,
    title: "Performa Tinggi",
    desc: "Aset dioptimasi sehingga website fasilitas kesehatan Anda memuat secepat kilat.",
    bg: "bg-secondary/10",
  },
  {
    icon: <Globe size={24} className="text-accent" />,
    title: "SEO-First Architecture",
    desc: "Struktur semantik yang membuat Google memprioritaskan profil fasilitas kesehatan Anda.",
    bg: "bg-accent/10",
  },
  {
    icon: <Smartphone size={24} className="text-primary" />,
    title: "Mobile-First Design",
    desc: "Tampil sempurna di ponsel pasien, tablet resepsionis, hingga monitor dokter.",
    bg: "bg-primary/10",
  },
  {
    icon: <Lock size={24} className="text-secondary" />,
    title: "Keamanan Standar Medis",
    desc: "Enkripsi data dan perlindungan ekstra agar informasi pasien tetap aman.",
    bg: "bg-secondary/10",
  },
  {
    icon: <Layers size={24} className="text-accent" />,
    title: "Modular & Scalable",
    desc: "Struktur yang mudah disesuaikan ketika skala fasilitas kesehatan Anda membesar.",
    bg: "bg-accent/10",
  },
];

const StrongFoundation = () => {
  return (
    <section className="py-12 md:py-14 lg:py-16 bg-muted/30" id="fondasi">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-secondary/10 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-5"
          >
            Technical Foundation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-5"
          >
            Fondasi Teknologi <span className="text-gradient">Terpercaya</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Sistem modern yang memastikan platform kesehatan Anda tetap stabil, cepat, dan aman di setiap kondisi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group">
                <CardContent className="p-4 md:p-5 flex flex-col gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.bg} group-hover:scale-110 transition-transform duration-300`}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrongFoundation;
