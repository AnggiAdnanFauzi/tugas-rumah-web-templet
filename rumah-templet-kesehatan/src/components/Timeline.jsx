import React from 'react';

const Timeline = () => {
  return (
    <section className="py-20 bg-surface-container-high px-6 md:px-12 lg:px-16 relative overflow-hidden" id="cara-kerja">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-highest/50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto text-center reveal relative z-10 active">
        <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-16">Cara Kerja Sederhana</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary/30 z-0"></div>
          
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full flex items-center justify-center font-bold text-5xl lg:text-6xl font-bold shadow-md mb-6 shadow-primary/30 border-4 border-white group-hover:scale-110 transition-transform relative">
              <span className="relative z-10">1</span>
              <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <h3 className="font-bold text-xl font-bold text-on-surface mb-2">Pilih Template</h3>
            <p className="text-on-surface-variant max-w-xs text-center">Telusuri galeri dan pilih desain yang paling sesuai dengan layanan Anda.</p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full flex items-center justify-center font-bold text-5xl lg:text-6xl font-bold shadow-md mb-6 shadow-primary/30 border-4 border-white group-hover:scale-110 transition-transform relative">
              <span className="relative z-10">2</span>
              <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <h3 className="font-bold text-xl font-bold text-on-surface mb-2">Konsultasi Kustomisasi</h3>
            <p className="text-on-surface-variant max-w-xs text-center">Hubungi kami untuk menyesuaikan warna, konten, dan logo Anda.</p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full flex items-center justify-center font-bold text-5xl lg:text-6xl font-bold shadow-md mb-6 shadow-primary/30 border-4 border-white group-hover:scale-110 transition-transform relative">
              <span className="relative z-10">3</span>
              <div className="absolute inset-0 bg-primary rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            </div>
            <h3 className="font-bold text-xl font-bold text-on-surface mb-2">Website Online</h3>
            <p className="text-on-surface-variant max-w-xs text-center">Kami siapkan website Anda untuk langsung tayang dan menjangkau pasien.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;




