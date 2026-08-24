import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { BookOpen, FileText, Users, Newspaper, ImageIcon, Database, MessageSquare, HelpCircle } from 'lucide-react';

const features = [
  { 
    id: 'profil', 
    icon: <BookOpen size={20} />, 
    title: 'Profil Institusi', 
    desc: 'Informasi sekolah, kursus, atau training.' 
  },
  { 
    id: 'program', 
    icon: <FileText size={20} />, 
    title: 'Program & Layanan', 
    desc: 'Tampilkan program yang ditawarkan secara terstruktur.' 
  },
  { 
    id: 'pengajar', 
    icon: <Users size={20} />, 
    title: 'Pengajar', 
    desc: 'Kenalkan pengajar dan tenaga profesional.' 
  },
  { 
    id: 'berita', 
    icon: <Newspaper size={20} />, 
    title: 'Berita & Artikel', 
    desc: 'Bagikan informasi dan konten terbaru.' 
  },
  { 
    id: 'galeri', 
    icon: <ImageIcon size={20} />, 
    title: 'Galeri', 
    desc: 'Tampilkan aktivitas dan dokumentasi.' 
  },
  { 
    id: 'formulir', 
    icon: <Database size={20} />, 
    title: 'Formulir', 
    desc: 'Permudah pendaftaran dan kebutuhan informasi.' 
  },
  { 
    id: 'kontak', 
    icon: <MessageSquare size={20} />, 
    title: 'Kontak', 
    desc: 'Tampilkan lokasi dan informasi komunikasi.' 
  },
  { 
    id: 'faq', 
    icon: <HelpCircle size={20} />, 
    title: 'FAQ', 
    desc: 'Jawaban cepat untuk pertanyaan umum pengunjung.' 
  },
];

const FeatureSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="fitur" className="py-10 lg:py-12 bg-slate-50 dark:bg-[#0C1221]" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="reveal-up text-center mb-8 lg:mb-10">
          <SectionHeader
            eyebrow="FITUR WEBSITE"
            title="Fitur yang Bisa Disesuaikan"
            description="Sesuaikan website dengan kebutuhan sekolah, kursus, maupun training Anda."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feat, index) => (
            <div 
              key={feat.id}
              className="reveal-up group flex flex-col p-5 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-900/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center mb-3 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeatureSection;
