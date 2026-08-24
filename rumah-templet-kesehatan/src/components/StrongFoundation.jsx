import React from 'react';
import { Code2, Globe, Gauge, Lock, Layers, Smartphone } from 'lucide-react';

const pillars = [
  {
    icon: <Code2 size={28} />,
    title: "Kode Bersih & Terstruktur",
    desc: "Ditulis dengan standar industri. Mudah dirawat, mudah dikembangkan, dan tidak membuat developer lain menangis.",
    color: "text-ocean-blue",
    bg: "bg-blue-50",
  },
  {
    icon: <Gauge size={28} />,
    title: "Performa Tinggi",
    desc: "Skor Lighthouse 90+. Aset dioptimasi, lazy loading diaktifkan, sehingga website Anda secepat kilat di semua kondisi jaringan.",
    color: "text-electric-teal",
    bg: "bg-teal-50",
  },
  {
    icon: <Globe size={28} />,
    title: "SEO-First Architecture",
    desc: "Struktur HTML semantik, meta tag lengkap, dan schema markup medis yang membuat Google memprioritaskan website Anda.",
    color: "text-neon-cyan",
    bg: "bg-cyan-50",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Mobile-First Design",
    desc: "Dibangun dari layar terkecil dulu. Tampil sempurna di ponsel pasien, tablet resepsionis, hingga monitor dokter.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: <Lock size={28} />,
    title: "Keamanan Standar Medis",
    desc: "HTTPS by default, tidak ada celah XSS/CSRF, dan data sensitif pasien tidak pernah disimpan sembarangan.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: <Layers size={28} />,
    title: "Modular & Scalable",
    desc: "Komponen dibangun secara independen. Menambah fitur baru bisa dilakukan tanpa merusak bagian yang sudah ada.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
];

const StrongFoundation = () => {
  return (
    <section className="py-28 bg-clean-light" id="fondasi">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-electric-teal/10 text-electric-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Pondasi yang Kuat
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-dark leading-tight mb-5">
            Kami Membangun Website dengan <span className="text-gradient">Fondasi yang Tidak Rapuh</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Bukan sekedar indah di tampilan, tetapi kokoh di dalam. Setiap website yang kami bangun mengikuti prinsip rekayasa perangkat lunak profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white p-7 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 group flex flex-col gap-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${p.bg} ${p.color} group-hover:scale-110 transition-transform`}>
                {p.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrongFoundation;
