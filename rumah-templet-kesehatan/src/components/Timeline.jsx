import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, Code2 } from 'lucide-react';
import { Card, CardContent } from './common/Card';
import { cn } from '../utils/cn';

const steps = [
  {
    icon: <Search size={24} />,
    title: "Pilih Kategori & Desain",
    desc: "Eksplorasi katalog kami dan temukan desain yang paling selaras dengan identitas fasilitas kesehatan Anda."
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Konsultasi Cepat",
    desc: "Diskusikan kebutuhan spesifik Anda dengan tim kami. Kami memandu proses persiapan materi dengan mudah."
  },
  {
    icon: <Code2 size={24} />,
    title: "Sistem Online & Beroperasi",
    desc: "Kami menangani seluruh aspek teknis. Website fasilitas kesehatan Anda siap menerima pasien dalam hitungan hari."
  }
];

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 md:py-14 lg:py-16 bg-background" id="cara-kerja">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Langkah Mudah Menuju Digital
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Kami merancang alur kerja yang efisien agar tidak menyita waktu berharga Anda dalam melayani pasien.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-1 bg-border hidden md:block z-0 rounded-full"></div>
          <div 
            className="absolute top-[4.5rem] left-0 h-1 bg-primary hidden md:block z-0 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
              >
                <Card 
                  className={cn(
                    "transition-all duration-300 border-transparent shadow-none bg-transparent hover:bg-transparent",
                    activeStep === idx && "scale-105"
                  )}
                >
                  <CardContent className="p-0 flex flex-col md:items-center">
                    <div 
                      className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm z-10 mx-auto md:mx-0",
                        activeStep >= idx 
                          ? "bg-primary text-primary-foreground scale-110 shadow-primary/30" 
                          : "bg-background text-muted-foreground border border-border group-hover:border-primary group-hover:text-primary"
                      )}
                    >
                      {step.icon}
                    </div>
                    <div className={cn(
                      "text-center md:text-center transition-all duration-300 px-2",
                      activeStep === idx ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                    )}>
                      <h3 className={cn(
                        "font-bold text-lg mb-2 transition-colors",
                        activeStep >= idx ? "text-primary" : "text-foreground"
                      )}>
                        {idx + 1}. {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
