import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const Pricing = () => {
  const { t } = useAppContext();

  return (
    <section className="py-20 bg-surface-container px-6 md:px-12 lg:px-16 relative overflow-hidden" id="harga">
      <div className="absolute inset-0 bg-shape-1 opacity-50"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal active">
          <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">{t('pricing.title')}</h2>
          <p className=" text-base text-on-surface-variant">{t('pricing.desc')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="glass-panel p-8 rounded-eight bg-surface/80 flex flex-col reveal border border-white/60 shadow-sm active">
            <h3 className="font-bold text-xl font-bold text-on-surface mb-2">Landing Page</h3>
            <p className="text-on-surface-variant h-12 mb-8">Solusi instan untuk praktek dokter individu atau promo layanan spesifik.</p>
            <div className="mb-8">
              <span className="font-bold text-5xl lg:text-6xl font-bold text-primary">Rp 499K</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-sm" data-icon="done">done</span> Single Page Modern</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-sm" data-icon="done">done</span> WhatsApp Integration</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-sm" data-icon="done">done</span> Responsive Design</li>
            </ul>
            <a className="w-full py-4 px-6 border-2 border-primary text-primary font-bold rounded-eight text-center hover:bg-primary hover:text-on-primary transition-colors" href="/#contact">Pilih Paket</a>
          </div>

          {/* Plan 2 (Highlighted) */}
          <div className="p-8 rounded-eight bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-xl flex flex-col relative transform md:-translate-y-4 reveal border border-primary-container/50 active">
            <div className="absolute top-0 right-0 bg-secondary text-on-secondary font-bold text-xs py-1 px-4 rounded-bl-eight rounded-tr-eight uppercase tracking-wider shadow-sm">Paling Populer</div>
            <h3 className="font-bold text-xl font-bold mb-2">Company Profile</h3>
            <p className="text-on-primary/80 h-12 mb-8">Website lengkap untuk klinik, apotek, atau pusat layanan terpadu.</p>
            <div className="mb-8">
              <span className="font-bold text-5xl lg:text-6xl font-bold">Rp 1.199K</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined bg-white/20 rounded-full p-1 text-sm" data-icon="done">done</span> Multi-page Website (5-7 Halaman)</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined bg-white/20 rounded-full p-1 text-sm" data-icon="done">done</span> Galeri Layanan & Tim Dokter</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined bg-white/20 rounded-full p-1 text-sm" data-icon="done">done</span> SEO Basic Setup</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined bg-white/20 rounded-full p-1 text-sm" data-icon="done">done</span> Form Kontak Khusus</li>
            </ul>
            <a className="w-full py-4 px-6 bg-on-primary text-primary font-bold rounded-eight text-center hover:bg-surface-variant transition-colors shadow-sm" href="/#contact">Pilih Paket</a>
          </div>

          {/* Plan 3 */}
          <div className="glass-panel p-8 rounded-eight bg-surface/80 flex flex-col reveal border border-white/60 shadow-sm active">
            <h3 className="font-bold text-xl font-bold text-on-surface mb-2">Enterprise Custom</h3>
            <p className="text-on-surface-variant h-12 mb-8">Solusi tailormade untuk rumah sakit atau jaringan fasilitas kesehatan.</p>
            <div className="mb-8">
              <span className="font-bold text-2xl font-bold text-primary">Hubungi Kami</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-sm" data-icon="done">done</span> Desain Eksklusif</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-sm" data-icon="done">done</span> Fitur Kompleks (Booking System)</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary bg-secondary/10 rounded-full p-1 text-sm" data-icon="done">done</span> Integrasi Sistem Internal</li>
            </ul>
            <a className="w-full py-4 px-6 border-2 border-primary text-primary font-bold rounded-eight text-center hover:bg-primary hover:text-on-primary transition-colors" href="/#contact">Konsultasi Gratis</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;




