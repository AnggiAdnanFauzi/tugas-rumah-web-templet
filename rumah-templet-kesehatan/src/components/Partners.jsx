import React from 'react';

const partners = [
  { name: 'Klinik Sehat', logo: 'local_hospital' },
  { name: 'Medika Center', logo: 'medical_services' },
  { name: 'Dental Care', logo: 'dentistry' },
  { name: 'Apotek Utama', logo: 'vaccines' },
  { name: 'Wellness Spa', logo: 'spa' }
];

const Partners = () => {
  return (
    <section className="py-12 border-b border-outline-variant/20 bg-surface-container-lowest relative z-10" id="mitra">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <p className="text-center font-semibold text-base font-semibold text-outline mb-8 uppercase tracking-widest">
          Dipercaya oleh fasilitas kesehatan modern
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {partners.map((partner, idx) => (
            <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 hover:text-primary hover:opacity-100 cursor-pointer">
              <span className="material-symbols-outlined text-4xl" data-icon={partner.logo}>{partner.logo}</span>
              <span className="font-bold font-bold text-lg hidden sm:block">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


