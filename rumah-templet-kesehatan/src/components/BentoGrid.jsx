import React from 'react';

const categories = [
  {
    title: "Klinik Umum",
    desc: "Sistem antrian & rekam medis dasar",
    icon: "local_hospital",
    color: "bg-primary-container text-on-primary-container border-primary/20",
    colSpan: "md:col-span-2 md:row-span-2",
    img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Rumah Sakit",
    desc: "Portal lengkap dengan direktori dokter",
    icon: "apartment",
    color: "bg-secondary-container text-on-secondary-container border-secondary/20",
    colSpan: "md:col-span-1 md:row-span-1",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Dokter Gigi",
    desc: "Galeri before/after & booking",
    icon: "dentistry",
    color: "bg-tertiary-container text-on-tertiary-container border-tertiary/20",
    colSpan: "md:col-span-1 md:row-span-1",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Apotek",
    desc: "Katalog produk & order via WA",
    icon: "vaccines",
    color: "bg-surface-variant text-on-surface-variant border-outline-variant/30",
    colSpan: "md:col-span-1 md:row-span-1",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lab & Estetika",
    desc: "Treatment list & konsultasi",
    icon: "spa",
    color: "bg-primary/10 text-primary border-primary/20",
    colSpan: "md:col-span-1 md:row-span-1",
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
  }
];

const BentoGrid = () => {
  return (
    <section className="py-24 bg-surface-container-lowest" id="solusi">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-12 reveal active">
          <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">Solusi Spesifik Untuk Anda</h2>
          <p className=" text-base text-on-surface-variant max-w-2xl mx-auto">
            Kami merancang struktur dan fitur web yang disesuaikan secara khusus untuk berbagai tipe fasilitas layanan kesehatan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[200px]">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-eight border p-6 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1 group glass-panel ${cat.color} ${cat.colSpan}`}
            >
              <div className="flex justify-between items-start z-10 relative">
                <div className="p-3 bg-white/80 rounded-xl shadow-sm border border-white/50">
                  <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white text-on-surface">
                  <span className="material-symbols-outlined text-lg">arrow_outward</span>
                </button>
              </div>
              
              <div className="mt-auto z-10 relative">
                <h3 className={`font-bold font-bold mb-1 ${cat.colSpan.includes('row-span-2') ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                  {cat.title}
                </h3>
                <p className="opacity-90 ">{cat.desc}</p>
              </div>

              {cat.img && (
                <div className="absolute inset-0 z-0 rounded-eight overflow-hidden">
                   <img src={cat.img} alt={cat.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent"></div>
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



