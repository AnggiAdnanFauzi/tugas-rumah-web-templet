import React from 'react';

const StrongFoundation = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 reveal active">
          <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-6">Dibangun di Atas Fondasi Teknologi Kuat</h2>
          <p className=" text-base text-on-surface-variant mb-8">
            Kami tidak sekadar menawarkan desain yang indah. Setiap template dibangun dengan standar pengembangan modern untuk performa maksimal.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary shadow-sm border border-primary/20">
                <span className="material-symbols-outlined" data-icon="code">code</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface font-bold  mb-1">Pure Code & Ringan</h4>
                <p className="text-on-surface-variant">Struktur HTML/CSS murni tanpa library berat yang memperlambat akses.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary shadow-sm border border-primary/20">
                <span className="material-symbols-outlined" data-icon="dns">dns</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface font-bold  mb-1">Tanpa Beban Backend</h4>
                <p className="text-on-surface-variant">Cocok untuk website statis yang informatif dengan pemeliharaan minim.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-primary/10 rounded-full text-primary shadow-sm border border-primary/20">
                <span className="material-symbols-outlined" data-icon="speed">speed</span>
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface font-bold  mb-1">Waktu Muat Cepat</h4>
                <p className="text-on-surface-variant">Optimasi aset memastikan website Anda langsung terbuka dalam hitungan detik.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2 relative reveal active">
          <div className="glass-panel p-8 rounded-eight border border-primary/20 bg-gradient-to-br from-surface/80 to-surface-variant/80 relative z-10 shadow-md backdrop-blur-xl">
            <pre className="text-sm text-inverse-on-surface/90 overflow-x-auto p-4 bg-inverse-surface/90 rounded-eight border border-white/10 shadow-inner">
              <code>{`<!-- Optimized Structure -->
<main class="fast-loading-core">
  <section id="hero">
    <h1>Healthcare Excellence</h1>
    <p>Delivering pure performance.</p>
  </section>
</main>`}</code>
            </pre>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container/40 rounded-full blur-2xl z-0 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/30 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default StrongFoundation;




