import React from 'react';

const DarkShowcase = () => {
  return (
    <section 
      className="py-24 mesh-gradient-bg text-inverse-on-surface relative overflow-hidden px-6 md:px-12 lg:px-16 bg-cover bg-center" 
      style={{ backgroundImage: "linear-gradient(rgba(40, 48, 68, 0.85), rgba(40, 48, 68, 0.95)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdLK93jSYhcGJ3XexmdahMSahmhwA7hslc_zJ5Qj-I0fM54Rhx0Ic3N9d7TnuW850_s-moM5Y1mJGtCySw_9lQV67QVlR-d3C-mTWiWdx345a9ebo8YANqLN8Nb_LtszaLvGGjcsmGtM292ENoBZF91d0oEpl0_gIHRfEKrS5QvvQEw-op0BrU8RYVPwmuGMljNGWACqHwm6bfdFjPwuI7nOczWdyBb-4nQMyDmeYYGY5ztwneSiTs')" }}
    >
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 reveal active">
          <h2 className="font-bold text-5xl lg:text-6xl font-bold mb-6 text-on-primary drop-shadow-md">Siap Meningkatkan Kredibilitas Digital Anda?</h2>
          <p className=" text-lg text-white/90 mb-8 max-w-lg">
            Jangan biarkan calon pasien beralih karena tidak menemukan informasi fasilitas Anda secara online. Miliki website profesional sekarang.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="/#contact" className="bg-primary text-on-primary font-semibold text-base font-semibold py-4 px-8 rounded-eight text-center hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
              Mulai Proyek
            </a>
            <div className="flex items-center gap-2 bg-inverse-surface/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-secondary-fixed" data-icon="bolt">bolt</span>
              <span className="font-semibold text-base font-semibold text-on-primary">Setup Cepat 48 Jam</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 reveal hidden md:block active">
          {/* Optional visual embellishment if needed, background image does heavy lifting here */}
        </div>
      </div>
    </section>
  );
};

export default DarkShowcase;


