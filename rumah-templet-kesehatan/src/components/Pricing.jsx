import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle, Star } from 'lucide-react';
import { WA_LINK } from '../config/site';
import { Button } from './common/Button';
import { Card, CardContent } from './common/Card';
import { cn } from '../utils/cn';

const plans = [
  {
    name: "Landing Page",
    badge: null,
    price: "Rp 499.000",
    desc: "Cocok untuk dokter atau klinik kecil yang ingin hadir online dengan tampilan profesional.",
    features: [
      "1 Halaman (Single Page)",
      "Formulir Kontak via WhatsApp",
      "Desain Responsif (Mobile Friendly)",
      "Integrasi Google Maps",
      "Tombol CTA WhatsApp Mengambang",
      "Basic SEO (Title, Meta, Alt)",
      "Free Revisi 2x",
      "Selesai dalam 3 hari kerja",
    ],
    cta: "Pesan Sekarang",
    highlight: false,
  },
  {
    name: "Company Profile",
    badge: "Terpopuler",
    price: "Rp 1.199.000",
    desc: "Untuk klinik, puskesmas, atau rumah sakit yang butuh identitas digital yang lengkap dan terpercaya.",
    features: [
      "5–7 Halaman Multi-page",
      "Halaman: Home, Profil, Layanan, Dokter, Kontak",
      "Direktori Dokter & Jadwal Praktek",
      "Sistem Booking Janji Online (via WA)",
      "Galeri Fasilitas",
      "Blog/Artikel Kesehatan",
      "SEO Lengkap + Schema Markup",
      "Animasi Interaktif (Scroll Reveal)",
      "Free Revisi 3x",
      "Selesai dalam 5–7 hari kerja",
    ],
    cta: "Pesan Sekarang",
    highlight: true,
  },
  {
    name: "Enterprise",
    badge: null,
    price: "Custom",
    desc: "Untuk rumah sakit besar, klinik jaringan, atau sistem kesehatan yang memerlukan solusi khusus.",
    features: [
      "Halaman Tidak Terbatas",
      "Custom Feature Development",
      "Pasien Portal (Login & Rekam Medis)",
      "Sistem Antrian Digital",
      "Integrasi BPJS & SIM RS",
      "Dashboard Admin Internal",
      "Multi-cabang & Multi-bahasa",
      "Keamanan Level Enterprise",
      "SLA & Dedicated Support",
      "Training Tim Internal",
    ],
    cta: "Konsultasi Dulu",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-12 md:py-14 lg:py-16 bg-background" id="harga">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5"
          >
            Harga Transparan
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4"
          >
            Investasi yang <span className="text-gradient">Sepadan dengan Hasilnya</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
          >
            Pilih paket yang sesuai dengan skala dan kebutuhan fasilitas kesehatan Anda. Tidak ada biaya tersembunyi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="relative flex"
            >
              <Card
                className={cn(
                  "w-full flex flex-col transition-all duration-300 relative overflow-visible",
                  plan.highlight
                    ? "bg-foreground text-background border-transparent shadow-xl md:-translate-y-2"
                    : "bg-white border-border hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                )}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Star size={12} fill="currentColor" /> {plan.badge}
                    </span>
                  </div>
                )}

                <CardContent className="p-4 md:p-5 flex flex-col flex-grow">
                  <div className="mb-5">
                    <h3 className={cn("font-bold text-xl md:text-2xl mb-2", plan.highlight ? "text-accent" : "text-primary")}>
                      {plan.name}
                    </h3>
                    <div className={cn("text-3xl md:text-4xl font-bold mb-3", plan.highlight ? "text-background" : "text-foreground")}>
                      {plan.price}
                    </div>
                    <p className={cn("text-sm md:text-base leading-relaxed", plan.highlight ? "text-muted" : "text-muted-foreground")}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className={cn("border-t mb-4", plan.highlight ? "border-white/10" : "border-border")}></div>

                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 size={20} className={cn("flex-shrink-0 mt-0.5", plan.highlight ? "text-secondary" : "text-secondary")} />
                        <span className={cn("text-sm md:text-base", plan.highlight ? "text-slate-300" : "text-slate-600")}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={WA_LINK(`Halo, saya tertarik dengan paket ${plan.name} untuk website kesehatan`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={plan.highlight ? "primary" : "outline"}
                    className={cn(
                      "w-full mt-5",
                      plan.highlight && "shadow-md shadow-primary/30"
                    )}
                  >
                    <MessageCircle size={18} />
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-10"
        >
          * Harga belum termasuk domain & hosting. Estimasi biaya tambahan: Rp 150.000–300.000/tahun. Konsultasikan kebutuhan spesifik Anda bersama tim kami.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
