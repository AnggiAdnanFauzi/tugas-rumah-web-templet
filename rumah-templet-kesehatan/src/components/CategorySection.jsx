import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';

const CategorySection = () => {
  const { t } = useAppContext();

  return (
    <section className="py-20 bg-surface-container-low border-y border-outline-variant/20 px-6 md:px-12 lg:px-16" id="template">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 reveal active">
          <div>
            <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">{t('category.title')}</h2>
            <p className=" text-base text-on-surface-variant">{t('category.desc')}</p>
          </div>
          <Link to="/template" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            {t('category.link')} <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Klinik */}
          <Link to="/template?category=klinik" className="group relative block overflow-hidden rounded-eight reveal shadow-sm hover:shadow-md transition-shadow active">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors z-0 blur-xl"></div>
            <div className="aspect-[4/3] relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 z-10 border border-outline-variant/30 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800" alt="Klinik Umum" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <span className="material-symbols-outlined text-white text-5xl mb-4 group-hover:scale-110 transition-transform relative z-10" data-icon="local_hospital">local_hospital</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
              <h3 className="text-on-primary font-bold text-xl font-bold mb-1">Klinik Umum</h3>
              <p className="text-on-primary/80 text-sm">Layanan medis terpadu</p>
            </div>
          </Link>

          {/* Dokter */}
          <Link to="/template?category=dokter" className="group relative block overflow-hidden rounded-eight reveal shadow-sm hover:shadow-md transition-shadow active">
            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors z-0 blur-xl"></div>
            <div className="aspect-[4/3] relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 z-10 border border-outline-variant/30 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800" alt="Praktek Dokter" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <span className="material-symbols-outlined text-white text-5xl mb-4 group-hover:scale-110 transition-transform relative z-10" data-icon="stethoscope">stethoscope</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
              <h3 className="text-on-primary font-bold text-xl font-bold mb-1">Praktek Dokter</h3>
              <p className="text-on-primary/80 text-sm">Profil profesional spesialis</p>
            </div>
          </Link>

          {/* Dental */}
          <Link to="/template?category=dental" className="group relative block overflow-hidden rounded-eight reveal shadow-sm hover:shadow-md transition-shadow active">
            <div className="absolute inset-0 bg-tertiary/10 group-hover:bg-tertiary/20 transition-colors z-0 blur-xl"></div>
            <div className="aspect-[4/3] relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 z-10 border border-outline-variant/30 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" alt="Klinik Gigi" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <span className="material-symbols-outlined text-white text-5xl mb-4 group-hover:scale-110 transition-transform relative z-10" data-icon="dentistry">dentistry</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
              <h3 className="text-on-primary font-bold text-xl font-bold mb-1">Klinik Gigi</h3>
              <p className="text-on-primary/80 text-sm">Perawatan ortodonti & estetika</p>
            </div>
          </Link>

          {/* Wellness */}
          <Link to="/template?category=wellness" className="group relative block overflow-hidden rounded-eight reveal shadow-sm hover:shadow-md transition-shadow active">
            <div className="absolute inset-0 bg-primary-container/20 group-hover:bg-primary-container/40 transition-colors z-0 blur-xl"></div>
            <div className="aspect-[4/3] relative flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 z-10 border border-outline-variant/30 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" alt="Pusat Wellness" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <span className="material-symbols-outlined text-white text-5xl mb-4 group-hover:scale-110 transition-transform relative z-10" data-icon="spa">spa</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 z-30">
              <h3 className="text-on-primary font-bold text-xl font-bold mb-1">Pusat Wellness</h3>
              <p className="text-on-primary/80 text-sm">Kesehatan holistik & spa</p>
            </div>
          </Link>
        </div>

        <Link to="/template" className="md:hidden mt-8 inline-flex items-center justify-center w-full gap-2 text-primary font-semibold py-3 px-6 rounded-eight bg-primary-container/10">
          {t('category.link')} <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
};

export default CategorySection;





