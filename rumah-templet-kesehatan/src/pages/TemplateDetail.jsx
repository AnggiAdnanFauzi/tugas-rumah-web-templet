import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX } from 'lucide-react';
import { templatesData } from '../data/templates.data';
import { WA_LINK, SITE_CONFIG } from '../config/site';
import { useAppContext } from '../contexts/AppContext';

// Helper function to map short feature names to icons and descriptions
const getFeatureDetails = (featureName, index) => {
  const lowerFeature = featureName.toLowerCase();
  let icon = 'star';
  let colorClass = 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary';
  let desc = `Fitur esensial untuk meningkatkan fungsionalitas dan pengalaman pengguna pada fasilitas kesehatan Anda.`;

  if (lowerFeature.includes('booking') || lowerFeature.includes('jadwal') || lowerFeature.includes('janji') || lowerFeature.includes('schedule')) {
    icon = 'calendar_month';
    colorClass = 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary';
    desc = 'Sistem penjadwalan mandiri untuk pasien yang terhubung langsung dengan ketersediaan dokter secara real-time.';
  } else if (lowerFeature.includes('dokter') || lowerFeature.includes('direktori') || lowerFeature.includes('profil')) {
    icon = 'medical_information';
    colorClass = 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary';
    desc = 'Profil lengkap tenaga medis beserta jadwal praktek, spesialisasi, dan ulasan pasien terverifikasi.';
  } else if (lowerFeature.includes('galeri') || lowerFeature.includes('foto') || lowerFeature.includes('slider') || lowerFeature.includes('treatment')) {
    icon = 'photo_library';
    colorClass = 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary';
    desc = 'Showcase berkualitas tinggi untuk ruang perawatan, peralatan medis, dan lingkungan klinik untuk membangun kepercayaan.';
  } else if (lowerFeature.includes('artikel') || lowerFeature.includes('blog') || lowerFeature.includes('seo') || lowerFeature.includes('tips')) {
    icon = 'article';
    colorClass = 'bg-primary-container/20 text-primary group-hover:bg-primary-container group-hover:text-on-primary-container';
    desc = 'Modul konten kesehatan terintegrasi dengan optimasi mesin pencari bawaan untuk menjangkau audiens lebih luas.';
  } else if (lowerFeature.includes('wa') || lowerFeature.includes('whatsapp') || lowerFeature.includes('chat') || lowerFeature.includes('konsultasi')) {
    icon = 'chat';
    colorClass = 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary';
    desc = 'Tombol akses cepat yang menghubungkan pasien langsung dengan tim layanan pelanggan via WhatsApp.';
  } else if (lowerFeature.includes('mobile') || lowerFeature.includes('responsive') || lowerFeature.includes('lokasi') || lowerFeature.includes('maps')) {
    icon = 'smartphone';
    colorClass = 'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary';
    desc = 'Tampilan situs yang secara otomatis beradaptasi dengan mulus pada layar handphone, tablet, dan komputer.';
  }

  // Fallback colors for generic items based on index if not matched
  if (icon === 'star') {
    const colors = [
      'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary',
      'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary',
      'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary',
      'bg-primary-container/20 text-primary group-hover:bg-primary-container group-hover:text-on-primary-container'
    ];
    colorClass = colors[index % colors.length];
  }

  return { icon, colorClass, desc };
};


const TemplateDetail = () => {
  const { lang, t } = useAppContext();
  const { slug } = useParams();
  
  const template = templatesData.find(t => t.slug === slug);
  
  useEffect(() => {
    if (template) {
      document.title = `${template.title} - ${template.categoryLabel} | ${SITE_CONFIG.name}`;
    } else {
      document.title = `Template Tidak Ditemukan | ${SITE_CONFIG.name}`;
    }
    
    return () => {
      document.title = `${SITE_CONFIG.name} — Spesialis Website Kesehatan`;
    };
  }, [template]);

  // Handle Not Found State
  if (!template) {
    return (
      <div className="min-h-screen bg-surface pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center max-w-lg">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-panel p-8 rounded-3xl border border-outline-variant/30 shadow-[0_20px_40px_rgba(15,23,42,0.05)] flex flex-col items-center bg-surface"
          >
            <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-6">
              <SearchX size={40} className="text-outline" />
            </div>
            <h1 className="text-2xl font-bold text-on-surface mb-3">Template Tidak Ditemukan</h1>
            <p className="text-on-surface-variant mb-8">
              Maaf, template dengan URL <code className="bg-surface-container-high px-2 py-1 rounded text-sm font-mono text-primary">{slug}</code> tidak tersedia.
            </p>
            <Link 
              to="/template" 
              className="flex items-center gap-2 bg-primary text-on-primary font-semibold rounded-full px-6 py-3 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
              {t('catalog.back')}
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const { title, categoryLabel, description, description_en, thumbnail, demoUrl, features, features_en, status } = template;
  const isComingSoon = status === 'coming-soon';
  const waMessage = `Halo, saya tertarik dengan template *${title}*. Saya ingin mendapatkan informasi lebih lanjut mengenai pembuatan website untuk fasilitas kesehatan saya.`;

  return (
    <div className="relative min-h-screen overflow-x-hidden antialiased bg-surface text-on-surface pt-32 pb-24">
      {/* Ambient Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none bg-[radial-gradient(circle_at_15%_30%,rgba(33,112,228,0.03)_0%,transparent_40%),radial-gradient(circle_at_85%_70%,rgba(0,108,73,0.03)_0%,transparent_40%)]"></div>

      <main className="px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Breadcrumb & Back Link */}
        <motion.nav 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full"
        >
          <ol className="flex items-center space-x-2 text-on-surface-variant text-sm font-medium">
            <li><Link className="hover:text-primary transition-colors" to="/template">{lang === 'en' ? 'Catalog' : 'Katalog'}</Link></li>
            <li><span className="material-symbols-outlined text-[14px]">chevron_right</span></li>
            <li className="font-bold text-on-surface">{title}</li>
          </ol>
          <Link 
            to="/template" 
            className="flex items-center text-primary hover:text-primary-container transition-colors text-sm font-semibold"
          >
            <span className="material-symbols-outlined mr-1 text-[18px]" data-icon="arrow_back">arrow_back</span>
            {t('catalog.back')}
          </Link>
        </motion.nav>

        {/* Hero Bento Layout */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Left: Thumbnail Gallery (8 cols) */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-2xl glass-panel border border-outline-variant/30 h-[400px] md:h-[600px] bg-surface-container">
            {demoUrl && !isComingSoon ? (
              <iframe 
                src={demoUrl} 
                className="w-full h-full border-none" 
                title={`Live Preview of ${title}`} 
              />
            ) : thumbnail ? (
              <div 
                className="w-full h-full bg-cover bg-top transition-transform duration-700 ease-in-out group-hover:scale-105" 
                style={{ backgroundImage: `url(${thumbnail})` }}
              ></div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-on-surface-variant font-medium">
                Gambar tidak tersedia
              </div>
            )}
            
            {/* Status Badge Overlay */}
            <div className="absolute top-6 right-6">
              {isComingSoon ? (
                <span className="inline-flex items-center bg-surface/90 text-on-surface-variant border border-outline-variant/50 rounded-full px-4 py-1.5 text-sm font-bold tracking-wider backdrop-blur-md uppercase">
                  Coming Soon
                </span>
              ) : (
                <span className="inline-flex items-center bg-secondary/90 text-on-secondary border border-secondary/20 rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-md shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
                  Active Template
                </span>
              )}
            </div>
          </div>

          {/* Right: Details & Context (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Title & Meta */}
            <div className="glass-panel bg-surface border border-outline-variant/30 rounded-2xl p-8 flex flex-col gap-4 shadow-[0_20px_40px_rgba(15,23,42,0.05)]">
              <div className="inline-flex">
                <span className="bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {categoryLabel}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-on-surface leading-tight">
                {title}
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                {lang === 'en' ? description_en : description}
              </p>
            </div>

            {/* CTA Container */}
            <div className="glass-panel bg-surface border border-outline-variant/30 rounded-2xl p-8 flex flex-col gap-4 mt-auto shadow-[0_20px_40px_rgba(15,23,42,0.05)]">
              <p className="text-sm font-semibold text-on-surface-variant mb-2">Mulai transformasi digital klinik Anda hari ini.</p>
              
              <a 
                href={WA_LINK(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-secondary text-on-secondary text-sm font-bold rounded-full px-6 py-4 hover:scale-[1.02] transition-transform shadow-lg shadow-secondary/20"
              >
                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                Konsultasi via WhatsApp
              </a>
              
              {demoUrl && !isComingSoon ? (
                <a 
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-white/50 border border-primary text-primary text-sm font-bold rounded-full px-6 py-4 hover:bg-white/80 transition-colors"
                >
                  <span className="material-symbols-outlined" data-icon="visibility">visibility</span>
                  Lihat Demo
                </a>
              ) : (
                <button 
                  disabled
                  className="w-full flex items-center justify-center gap-2 bg-surface-container-high border border-outline-variant/30 text-outline text-sm font-bold rounded-full px-6 py-4 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined" data-icon="visibility_off">visibility_off</span>
                  Demo Belum Tersedia
                </button>
              )}
            </div>
          </div>
        </motion.section>

        {/* Detailed Description & Feature Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4"
        >
          {/* Description Canvas (5 cols) */}
          <div className="lg:col-span-5 glass-panel bg-surface border border-outline-variant/30 rounded-2xl p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-on-surface mb-6 leading-tight">Mengapa Template Ini Sempurna Untuk Fasilitas Anda?</h2>
            <div className="space-y-4 text-on-surface-variant text-base leading-relaxed">
              <p>Template <strong>{title}</strong> dibangun dengan pemahaman mendalam tentang alur kerja fasilitas kesehatan. Desain antarmuka (UI) mengutamakan prinsip aksesibilitas, memastikan pasien dari berbagai rentang usia dapat melakukan navigasi dan reservasi tanpa hambatan.</p>
              <p>Secara arsitektur, template ini dioptimalkan untuk kecepatan pemuatan (loading speed) dan SEO, memastikan layanan kesehatan Anda mudah ditemukan oleh calon pasien di mesin pencari. Estetika yang bersih dan profesional menanamkan rasa percaya sejak detik pertama pasien mengunjungi situs Anda.</p>
            </div>
          </div>

          {/* Feature Bento Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(lang === 'en' ? features_en : features).map((feature, idx) => {
              const { icon, colorClass, desc } = getFeatureDetails(feature, idx);
              return (
                <div key={idx} className="glass-panel bg-surface border border-outline-variant/30 rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform group shadow-sm">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${colorClass}`}>
                    <span className="material-symbols-outlined text-[24px]" data-icon={icon}>{icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-on-surface leading-tight">{feature}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {/* Simplified for now since we don't have English feature descriptions mapped, will keep them as is or omit mapping if not essential */}
                    {desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.section>

      </main>
    </div>
  );
};

export default TemplateDetail;
