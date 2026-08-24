import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { School, GraduationCap, Presentation, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const problems = [
  {
    id: 'sekolah',
    title: 'Sekolah',
    icon: <School size={24} className="text-blue-500" />,
    desc: 'Bukan sekadar company profile biasa. Website sekolah butuh struktur informasi akademik yang jelas untuk orang tua dan siswa.',
    points: ['Profil Sekolah', 'Informasi Akademik', 'Program Unggulan', 'PPDB / Penerimaan'],
    delay: '100ms'
  },
  {
    id: 'kursus',
    title: 'Kursus',
    icon: <GraduationCap size={24} className="text-amber-500" />,
    desc: 'Lembaga kursus harus fokus pada konversi pendaftaran dengan menampilkan program dan keunggulan pengajar secara menarik.',
    points: ['Program Kursus', 'Paket Belajar', 'Profil Pengajar', 'Pendaftaran Online'],
    delay: '200ms'
  },
  {
    id: 'training',
    title: 'Training',
    icon: <Presentation size={24} className="text-emerald-500" />,
    desc: 'Pusat pelatihan membutuhkan etalase program yang terstruktur untuk meyakinkan profesional maupun perusahaan.',
    points: ['Program Pelatihan', 'Jadwal Training', 'Profil Trainer', 'Registrasi Peserta'],
    delay: '300ms'
  }
];

const SolusiSection = () => {
  const revealRef = useScrollReveal();

  return (
    <section id="solusi" className="py-10 lg:py-14 bg-white dark:bg-[#080D1C] relative" ref={revealRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="reveal-up max-w-3xl mx-auto text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs lg:text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
            Mengapa Spesifik Pendidikan?
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
            Website Pendidikan Tidak Bisa <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Dibuat Asal Jadi.</span>
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Website sekolah, lembaga kursus, dan pusat training membutuhkan struktur, fitur, dan penataan informasi yang berbeda dari website bisnis biasa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* Sekolah - Large full width or spanning 8 cols */}
          <div 
            className="reveal-up lg:col-span-12 bg-slate-50 dark:bg-[#0C1221] rounded-3xl p-5 lg:p-6 border border-slate-100 dark:border-slate-800/60 hover:shadow-xl transition-all duration-300 group flex flex-col lg:flex-row gap-5 lg:gap-8 items-start lg:items-center"
            style={{ transitionDelay: problems[0].delay }}
          >
            <div className="flex-1">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white dark:bg-[#111827] shadow-sm flex items-center justify-center mb-3 border border-slate-100 dark:border-slate-800 transition-transform duration-300 group-hover:-translate-y-1">
                {problems[0].icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{problems[0].title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {problems[0].desc}
              </p>
            </div>
            <div className="flex-1 w-full bg-white dark:bg-[#111827] rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
              <ul className="grid sm:grid-cols-2 gap-4">
                {problems[0].points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 size={18} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kursus & Training - Half width each */}
          {problems.slice(1).map((item) => (
            <div 
              key={item.id}
              className="reveal-up lg:col-span-6 bg-slate-50 dark:bg-[#0C1221] rounded-3xl p-5 lg:p-6 border border-slate-100 dark:border-slate-800/60 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              style={{ transitionDelay: item.delay }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-white dark:bg-[#111827] shadow-sm flex items-center justify-center mb-3 border border-slate-100 dark:border-slate-800 transition-transform duration-300 group-hover:-translate-y-1">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-sm flex-grow">
                {item.desc}
              </p>
              <div className="bg-white dark:bg-[#111827] rounded-2xl p-4 border border-slate-100 dark:border-slate-800">
                <ul className="space-y-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-500 dark:text-blue-400 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SolusiSection;
