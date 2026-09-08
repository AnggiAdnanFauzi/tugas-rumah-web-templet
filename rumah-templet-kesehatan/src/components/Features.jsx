import React from 'react';
import { useAppContext } from '../contexts/AppContext';

const Features = () => {
  const { t } = useAppContext();

  return (
    <section className="py-20 relative overflow-hidden" id="fitur">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="text-center mb-16 reveal active">
          <h2 className="font-bold text-2xl md:text-3xl text-gradient font-bold mb-4">{t('features.title')}</h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto">{t('features.desc')}</p>
        </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Group 1 */}
        <div className="glass-panel p-8 rounded-eight reveal border border-white/50 bg-gradient-to-br from-white/60 to-transparent active group">
          <h3 className="font-bold text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-3">
            <span className="material-symbols-outlined bg-primary/10 p-2 rounded-eight transition-transform group-hover:scale-110" data-icon="person_add">person_add</span> 
            Pasien & Booking
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Integrasi WhatsApp Booking</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Formulir Pendaftaran Sederhana</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Tombol Darurat / Call-to-Action Cepat</span></li>
          </ul>
        </div>

        {/* Group 2 */}
        <div className="glass-panel p-8 rounded-eight reveal border border-white/50 bg-gradient-to-br from-white/60 to-transparent active group">
          <h3 className="font-bold text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-3">
            <span className="material-symbols-outlined bg-primary/10 p-2 rounded-eight transition-transform group-hover:scale-110" data-icon="web">web</span> 
            Tampilan & Konten
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Galeri Fasilitas & Layanan</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Profil Dokter Interaktif</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Testimoni Pasien Terpercaya</span></li>
          </ul>
        </div>

        {/* Group 3 */}
        <div className="glass-panel p-8 rounded-eight reveal border border-white/50 bg-gradient-to-br from-white/60 to-transparent active group">
          <h3 className="font-bold text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-3">
            <span className="material-symbols-outlined bg-primary/10 p-2 rounded-eight transition-transform group-hover:scale-110" data-icon="terminal">terminal</span> 
            Teknis
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Struktur SEO Friendly</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Optimasi Mobile & Tablet</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Cross-Browser Compatibility</span></li>
          </ul>
        </div>

        {/* Group 4 */}
        <div className="glass-panel p-8 rounded-eight reveal border border-white/50 bg-gradient-to-br from-white/60 to-transparent active group">
          <h3 className="font-bold text-xl font-bold text-primary mb-6 flex items-center gap-2 border-b border-outline-variant/30 pb-3">
            <span className="material-symbols-outlined bg-primary/10 p-2 rounded-eight transition-transform group-hover:scale-110" data-icon="shield">shield</span> 
            Keamanan & Kestabilan
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">HTTPS Ready</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Anti Vulnerability Static Pages</span></li>
            <li className="flex items-start gap-3"><span className="material-symbols-outlined text-secondary mt-1" data-icon="check_circle">check_circle</span> <span className="text-on-surface-variant">Uptime Tinggi</span></li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Features;






