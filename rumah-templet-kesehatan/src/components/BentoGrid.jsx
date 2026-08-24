import React from 'react';
import { ArrowUpRight, Stethoscope, Building2, Smile, Pill, Sparkles } from 'lucide-react';

const categories = [
  {
    title: "Klinik Umum",
    desc: "Sistem antrian & rekam medis dasar",
    icon: <Stethoscope size={24} className="text-ocean-blue" />,
    color: "bg-blue-50 border-blue-100",
    colSpan: "md:col-span-2 md:row-span-2",
    img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Rumah Sakit",
    desc: "Portal lengkap dengan direktori dokter",
    icon: <Building2 size={24} className="text-electric-teal" />,
    color: "bg-teal-50 border-teal-100",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Dokter Gigi",
    desc: "Galeri before/after & booking",
    icon: <Smile size={24} className="text-purple-500" />,
    color: "bg-purple-50 border-purple-100",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Apotek",
    desc: "Katalog produk & order via WA",
    icon: <Pill size={24} className="text-orange-500" />,
    color: "bg-orange-50 border-orange-100",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Lab & Estetika",
    desc: "Treatment list & konsultasi",
    icon: <Sparkles size={24} className="text-pink-500" />,
    color: "bg-pink-50 border-pink-100",
    colSpan: "md:col-span-1 md:row-span-1",
  }
];

const BentoGrid = () => {
  return (
    <section className="py-24 bg-white" id="solusi">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">Solusi Spesifik Untuk Anda</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Kami merancang struktur dan fitur web yang disesuaikan secara khusus untuk berbagai tipe fasilitas layanan kesehatan.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px]">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-3xl border p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${cat.color} ${cat.colSpan}`}
            >
              <div className="flex justify-between items-start z-10 relative">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  {cat.icon}
                </div>
                <button className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-slate-700">
                  <ArrowUpRight size={20} />
                </button>
              </div>
              
              <div className="mt-auto z-10 relative">
                <h3 className={`font-bold text-xl mb-1 ${cat.colSpan.includes('row-span-2') ? 'text-2xl' : ''}`}>
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-sm">{cat.desc}</p>
              </div>

              {cat.img && (
                <div className="absolute inset-0 z-0">
                   <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-50/90 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
