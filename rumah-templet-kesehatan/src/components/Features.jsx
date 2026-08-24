import React from 'react';
import {
  Calendar, MapPin, Globe, MessageSquare, BarChart2, 
  Image, FileText, Shield, Smartphone, Accessibility,
  ChevronRight
} from 'lucide-react';

const featuresData = [
  {
    category: "Pasien & Booking",
    color: "ocean-blue",
    items: [
      { icon: <Calendar size={20} />, name: "Sistem Booking Janji Online", desc: "Pasien bisa daftar kapan saja tanpa perlu telepon." },
      { icon: <MessageSquare size={20} />, name: "Integrasi WhatsApp Langsung", desc: "Konfirmasi janji & konsultasi otomatis via WA." },
      { icon: <FileText size={20} />, name: "Formulir Rekam Medis Awal", desc: "Data pasien masuk rapi sebelum kunjungan." },
    ],
  },
  {
    category: "Tampilan & Konten",
    color: "electric-teal",
    items: [
      { icon: <Image size={20} />, name: "Galeri Fasilitas & Dokter", desc: "Bangun kepercayaan dengan visual yang profesional." },
      { icon: <FileText size={20} />, name: "Blog Kesehatan & Artikel", desc: "Tingkatkan otoritas medis di mata Google." },
      { icon: <Globe size={20} />, name: "Multi-bahasa (ID/EN)", desc: "Jangkau pasien lokal dan internasional." },
    ],
  },
  {
    category: "Teknis & Distribusi",
    color: "neon-cyan",
    items: [
      { icon: <BarChart2 size={20} />, name: "SEO & Analytics Terintegrasi", desc: "Pantau traffic dan ranking pencarian secara real-time." },
      { icon: <MapPin size={20} />, name: "Google Maps & Lokasi", desc: "Pasien mudah menemukan dan menuju klinik Anda." },
      { icon: <Smartphone size={20} />, name: "Progressive Web App (PWA)", desc: "Website terasa seperti aplikasi di layar ponsel." },
    ],
  },
  {
    category: "Keamanan & Aksesibilitas",
    color: "purple",
    items: [
      { icon: <Shield size={20} />, name: "SSL & HTTPS by Default", desc: "Data pasien terlindungi dengan enkripsi penuh." },
      { icon: <Accessibility size={20} />, name: "WCAG Accessibility Ready", desc: "Dapat digunakan oleh semua orang, termasuk disabilitas." },
      { icon: <Globe size={20} />, name: "Hosting Lokal (Cepat di ID)", desc: "Server di Indonesia untuk kecepatan maksimal." },
    ],
  },
];

const colorMap = {
  'ocean-blue': { badge: 'bg-ocean-blue/10 text-ocean-blue', icon: 'bg-blue-50 text-ocean-blue', border: 'border-blue-100', header: 'bg-ocean-blue' },
  'electric-teal': { badge: 'bg-teal-100 text-electric-teal', icon: 'bg-teal-50 text-electric-teal', border: 'border-teal-100', header: 'bg-electric-teal' },
  'neon-cyan': { badge: 'bg-cyan-100 text-neon-cyan', icon: 'bg-cyan-50 text-neon-cyan', border: 'border-cyan-100', header: 'bg-neon-cyan' },
  'purple': { badge: 'bg-purple-100 text-purple-600', icon: 'bg-purple-50 text-purple-500', border: 'border-purple-100', header: 'bg-purple-500' },
};

const Features = () => {
  return (
    <section className="py-28 bg-clean-light" id="fitur">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-purple-100 text-purple-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Fitur Lengkap
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-dark leading-tight mb-5">
            Semua yang Dibutuhkan <span className="text-gradient">Website Kesehatan Modern</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Kami menyediakan fitur yang relevan dan berdampak nyata—bukan fitur yang hanya terlihat keren di atas kertas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((group, gi) => {
            const colors = colorMap[group.color];
            return (
              <div key={gi} className={`bg-white rounded-3xl border overflow-hidden hover:shadow-xl transition-all duration-300 ${colors.border}`}>
                <div className={`${colors.header} px-7 py-4`}>
                  <h3 className="font-bold text-white text-lg">{group.category}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {group.items.map((item, ii) => (
                    <div key={ii} className="flex items-start gap-4 group cursor-default">
                      <div className={`p-2.5 rounded-lg flex-shrink-0 ${colors.icon} group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-slate-800 text-sm">{item.name}</h4>
                          <ChevronRight size={14} className="text-slate-300 group-hover:text-ocean-blue transition-colors" />
                        </div>
                        <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
