import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Check, ArrowRight } from 'lucide-react';
import { generateWaLink } from '../../utils/whatsapp';

const packages = [
  {
    name: 'Landing Page',
    desc: 'Untuk kebutuhan publikasi informasi pendidikan ringkas dalam satu halaman.',
    features: [
      '1 Halaman Utama',
      'Desain Responsif',
      'Form Pendaftaran Biasa',
      'Integrasi WhatsApp',
      'Revisi Minor 2x'
    ],
    highlight: false,
    delay: '100ms'
  },
  {
    name: 'Company / Profile',
    desc: 'Sistem multi-halaman standar untuk sekolah atau kursus.',
    features: [
      'Hingga 5 Halaman',
      'Profil & Sejarah',
      'Galeri Kegiatan',
      'Form Kontak & Maps',
      'Dasar SEO Setup'
    ],
    highlight: false,
    delay: '200ms'
  },
  {
    name: 'Professional',
    desc: 'Website lengkap dengan fitur akademik dan interaktif.',
    features: [
      'Halaman Tak Terbatas',
      'Detail Program & Kurikulum',
      'Profil Pengajar Lengkap',
      'Sistem Berita/Blog',
      'Optimasi Kecepatan',
      'Prioritas Dukungan'
    ],
    highlight: true,
    delay: '300ms'
  },
  {
    name: 'Enterprise / Custom',
    desc: 'Sistem kompleks yang disesuaikan khusus dengan proses bisnis institusi.',
    features: [
      'Desain UI/UX Custom Eksklusif',
      'Integrasi Sistem Pihak Ke-3',
      'Sistem PPDB / Registrasi Lanjut',
      'Arsitektur Skala Besar',
      'Dukungan Teknis Dedikasi',
      'Konsultasi Mendalam'
    ],
    highlight: false,
    delay: '400ms'
  }
];

const PricingSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="harga" className="py-10 lg:py-14 bg-white dark:bg-[#080D1C]" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="reveal-up">
          <SectionHeader
            eyebrow="Pilihan Paket"
            title="Investasi yang Fleksibel"
            description="Kami menyediakan struktur paket yang dapat disesuaikan dengan skala kebutuhan publikasi institusi Anda. Konsultasikan dengan tim kami untuk mendapatkan penawaran terbaik."
            className="mb-8 lg:mb-10"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {packages.map((pkg, idx) => (
            <div 
              key={idx}
              className={`reveal-up relative flex flex-col rounded-3xl p-5 transition-all duration-300 ${
                pkg.highlight 
                  ? 'bg-slate-900 dark:bg-blue-900/20 border-2 border-slate-900 dark:border-blue-500/50 shadow-xl lg:-translate-y-2' 
                  : 'bg-slate-50 dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
              style={{ transitionDelay: pkg.delay }}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  Paling Diminati
                </div>
              )}
              
              <div className="mb-5">
                <h3 className={`text-base font-bold mb-1.5 ${pkg.highlight ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {pkg.name}
                </h3>
                <p className={`text-[13px] leading-relaxed ${pkg.highlight ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                  {pkg.desc}
                </p>
              </div>

              <div className="flex-grow space-y-3 mb-5">
                {pkg.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-blue-400' : 'text-slate-400 dark:text-slate-500'}`} />
                    <span className={`text-[13px] font-medium ${pkg.highlight ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}`}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <a 
                href={generateWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  pkg.highlight
                    ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md'
                    : 'bg-white dark:bg-[#1E293B] text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                Konsultasikan Kebutuhan
                <ArrowRight size={16} className={`transition-transform duration-300 ${pkg.highlight ? 'group-hover:translate-x-1' : ''}`} />
              </a>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PricingSection;
