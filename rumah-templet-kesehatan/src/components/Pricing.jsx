import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Star } from 'lucide-react';
import { WA_LINK } from '../config/site';

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
    notIncluded: [
      "Sistem Booking Online",
      "Halaman Blog/Artikel",
      "Multi-bahasa",
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
    notIncluded: [
      "Sistem Login/Pasien Portal",
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
    notIncluded: [],
    cta: "Konsultasi Dulu",
    highlight: false,
  },
];

const Pricing = () => {
  const [billing] = useState('once');

  return (
    <section className="py-28 bg-white" id="harga">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-ocean-blue/10 text-ocean-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Harga Transparan
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-dark leading-tight mb-5">
            Investasi yang <span className="text-gradient">Sepadan dengan Hasilnya</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Pilih paket yang sesuai dengan skala dan kebutuhan fasilitas kesehatan Anda. Tidak ada biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                plan.highlight
                  ? 'bg-slate-dark text-white border-transparent shadow-2xl shadow-ocean-blue/20 scale-105'
                  : 'bg-white border-slate-200 hover:border-ocean-blue/50 hover:shadow-xl'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-ocean-blue text-white text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star size={12} fill="white" /> {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-bold text-lg mb-1 ${plan.highlight ? 'text-neon-cyan' : 'text-ocean-blue'}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-extrabold mb-3 ${plan.highlight ? 'text-white' : 'text-slate-dark'}`}>
                  {plan.price}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.desc}
                </p>
              </div>

              <div className={`border-t mb-6 ${plan.highlight ? 'border-white/10' : 'border-slate-100'}`}></div>

              <ul className="space-y-3 flex-grow">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-electric-teal' : 'text-electric-teal'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK(`Halo, saya tertarik dengan paket ${plan.name} untuk website kesehatan`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.highlight
                    ? 'bg-ocean-blue text-white hover:bg-ocean-blue/90 shadow-lg shadow-ocean-blue/30'
                    : 'bg-slate-dark text-white hover:bg-ocean-blue'
                }`}
              >
                <MessageCircle size={16} />
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          * Harga belum termasuk domain & hosting. Estimasi biaya tambahan: Rp 150.000–300.000/tahun. Konsultasikan kebutuhan spesifik Anda bersama tim kami.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
