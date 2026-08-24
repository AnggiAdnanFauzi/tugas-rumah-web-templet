import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LayoutTemplate, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './common/Card';

const values = [
  {
    icon: <ShieldCheck size={32} className="text-primary" strokeWidth={1.5} />,
    title: "Dirancang untuk Profesional",
    desc: "Struktur website dibuat agar layanan kesehatan terlihat kredibel, aman, dan terpercaya."
  },
  {
    icon: <LayoutTemplate size={32} className="text-secondary" strokeWidth={1.5} />,
    title: "Siap Disesuaikan",
    desc: "Template fleksibel dan responsif untuk berbagai kebutuhan spesifik layanan kesehatan."
  },
  {
    icon: <Users size={32} className="text-accent" strokeWidth={1.5} />,
    title: "Fokus pada Pengguna",
    desc: "Struktur informasi dan antarmuka dibuat agar pasien mudah menemukan informasi penting."
  }
];

const WhyUs = () => {
  return (
    <section className="py-12 md:py-14 lg:py-16 bg-background" id="mengapa-kami">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            Mengapa Memilih Kami?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6"
          >
            Fondasi Digital untuk <br className="hidden md:block" />
            Layanan Kesehatan Anda
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Kami memahami bahwa kredibilitas adalah kunci. Setiap elemen desain kami disesuaikan untuk membangun kepercayaan pasien sejak pandangan pertama.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full border-border/50 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="items-center text-center pb-2">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <CardTitle>{val.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base leading-relaxed">
                    {val.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
