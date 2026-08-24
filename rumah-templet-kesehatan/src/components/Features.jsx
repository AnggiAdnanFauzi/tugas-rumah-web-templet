import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar, MapPin, Globe, MessageSquare, BarChart2, 
  Image, FileText, Shield, Smartphone, Accessibility,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './common/Card';
import { cn } from '../utils/cn';

const featuresData = [
  {
    category: "Pasien & Booking",
    theme: "primary",
    items: [
      { icon: <Calendar size={20} />, name: "Sistem Booking Janji Online", desc: "Pasien bisa daftar kapan saja tanpa perlu telepon." },
      { icon: <MessageSquare size={20} />, name: "Integrasi WhatsApp Langsung", desc: "Konfirmasi janji & konsultasi otomatis via WA." },
      { icon: <FileText size={20} />, name: "Formulir Rekam Medis Awal", desc: "Data pasien masuk rapi sebelum kunjungan." },
    ],
  },
  {
    category: "Tampilan & Konten",
    theme: "secondary",
    items: [
      { icon: <Image size={20} />, name: "Galeri Fasilitas & Dokter", desc: "Bangun kepercayaan dengan visual yang profesional." },
      { icon: <FileText size={20} />, name: "Blog Kesehatan & Artikel", desc: "Tingkatkan otoritas medis di mata Google." },
      { icon: <Globe size={20} />, name: "Multi-bahasa (ID/EN)", desc: "Jangkau pasien lokal dan internasional." },
    ],
  },
  {
    category: "Teknis & Distribusi",
    theme: "accent",
    items: [
      { icon: <BarChart2 size={20} />, name: "SEO & Analytics Terintegrasi", desc: "Pantau traffic dan ranking pencarian secara real-time." },
      { icon: <MapPin size={20} />, name: "Google Maps & Lokasi", desc: "Pasien mudah menemukan dan menuju klinik Anda." },
      { icon: <Smartphone size={20} />, name: "Progressive Web App (PWA)", desc: "Website terasa seperti aplikasi di layar ponsel." },
    ],
  },
  {
    category: "Keamanan & Aksesibilitas",
    theme: "primary",
    items: [
      { icon: <Shield size={20} />, name: "SSL & HTTPS by Default", desc: "Data pasien terlindungi dengan enkripsi penuh." },
      { icon: <Accessibility size={20} />, name: "WCAG Accessibility Ready", desc: "Dapat digunakan oleh semua orang, termasuk disabilitas." },
      { icon: <Globe size={20} />, name: "Hosting Lokal Berkinerja Tinggi", desc: "Server teroptimasi untuk kecepatan maksimal." },
    ],
  },
];

const getThemeStyles = (theme) => {
  switch(theme) {
    case 'primary': return { header: 'bg-primary', icon: 'bg-primary/10 text-primary' };
    case 'secondary': return { header: 'bg-secondary', icon: 'bg-secondary/10 text-secondary' };
    case 'accent': return { header: 'bg-accent', icon: 'bg-accent/10 text-accent' };
    default: return { header: 'bg-primary', icon: 'bg-primary/10 text-primary' };
  }
};

const Features = () => {
  return (
    <section className="py-12 md:py-14 lg:py-16 bg-white" id="fitur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5"
          >
            Fitur Lengkap
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-5"
          >
            Semua yang Dibutuhkan <span className="text-gradient">Fasilitas Kesehatan Modern</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Kami mengintegrasikan fungsionalitas yang spesifik untuk industri medis, memastikan pasien mendapatkan pengalaman terbaik.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuresData.map((group, gi) => {
            const styles = getThemeStyles(group.theme);
            return (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * gi }}
              >
                <Card className="overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full flex flex-col p-0">
                  <div className={cn(styles.header, "px-7 py-4")}>
                    <h3 className="font-bold text-white text-lg">{group.category}</h3>
                  </div>
                  <CardContent className="p-4 md:p-5 space-y-4 flex-grow">
                    {group.items.map((item, ii) => (
                      <div key={ii} className="flex items-start gap-4 group cursor-default">
                        <div className={cn("p-2.5 rounded-xl flex-shrink-0 transition-transform group-hover:scale-110 duration-300", styles.icon)}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground text-sm">{item.name}</h4>
                            <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
