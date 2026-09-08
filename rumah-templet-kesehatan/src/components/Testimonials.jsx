import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const testimonials = [
  {
    name: "Dr. Andi Setiawan",
    role: "Pemilik Klinik Utama",
    text: "Semenjak menggunakan template dari HealthTemplate Hub, pasien lebih mudah melakukan booking via WhatsApp langsung dari website. Tampilannya sangat profesional dan memanjakan mata.",
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=150&q=80",
    color: "bg-primary"
  },
  {
    name: "Siti Rahma, S.Farm",
    role: "Apoteker Pengelola",
    text: "Katalog produk kami jadi sangat rapi. Kecepatannya luar biasa, sangat ringan walau diakses dari smartphone pasien. Support timnya juga sangat responsif.",
    photo: "https://images.unsplash.com/photo-1594824436998-d58614cbdfce?auto=format&fit=crop&w=150&q=80",
    color: "bg-secondary"
  },
  {
    name: "Drg. Budi Santoso",
    role: "Spesialis Ortodonti",
    text: "Desain portofolio dan before-after sangat elegan. Template ini berhasil mengangkat citra premium klinik gigi kami. Sangat direkomendasikan!",
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80",
    color: "bg-tertiary"
  }
];

const Testimonials = () => {
  const { t } = useAppContext();

  return (
    <section className="py-20 relative overflow-hidden" id="testimoni">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
      <div className="text-center mb-16 reveal active">
        <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">{t('testimonials.title')}</h2>
        <p className=" text-base text-on-surface-variant max-w-2xl mx-auto">
          {t('testimonials.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testi, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-eight border border-white/60 relative reveal active hover:-translate-y-2 transition-transform duration-300">
            {/* Stars */}
            <div className="flex gap-1 text-tertiary mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }} data-icon="star">star</span>
              ))}
            </div>
            
            <p className=" text-base text-on-surface-variant mb-8 relative z-10 italic">
              "{testi.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
              {testi.photo ? (
                <img src={testi.photo} alt={testi.name} className="w-12 h-12 rounded-full object-cover shadow-inner border-2 border-white" />
              ) : (
                <div className={`w-12 h-12 rounded-full ${testi.color} text-on-primary flex items-center justify-center font-bold text-lg shadow-inner border-2 border-white`}>
                  {testi.initials}
                </div>
              )}
              <div>
                <h4 className="font-bold font-bold text-on-surface">{testi.name}</h4>
                <p className="text-sm text-on-surface-variant">{testi.role}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;



