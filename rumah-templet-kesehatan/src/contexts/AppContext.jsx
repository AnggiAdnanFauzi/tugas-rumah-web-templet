import React, { createContext, useState, useEffect, useContext } from 'react';

// Static Dictionary for basic i18n
export const translations = {
  id: {
    navbar: {
      why_us: 'Mengapa Kami',
      template: 'Template',
      pricing: 'Harga',
      features: 'Fitur',
      faq: 'FAQ',
      contact: 'Hubungi Kami'
    },
    hero: {
      kicker: 'Healthcare • Medical • Wellness',
      title1: 'Website Profesional untuk',
      title_highlight: 'Layanan Kesehatan',
      title2: 'Modern',
      desc: 'Hadirkan kredibilitas dan kemudahan akses bagi pasien Anda dengan template website spesifik medis. Desain responsif, cepat, dan siap pakai tanpa kerumitan teknis.',
      cta_primary: 'Jelajahi Template',
      cta_secondary: 'Lihat Cara Kerja',
    },
    why_us: {
      title: 'Mengapa Memilih Kami?',
      desc: 'Desain yang berfokus pada kebutuhan layanan kesehatan modern.',
      card1_title: 'Tampilan Profesional',
      card1_desc: 'Desain elegan yang meningkatkan kredibilitas fasilitas kesehatan Anda di mata pasien.',
      card2_title: 'Fleksibel & Responsif',
      card2_desc: 'Tampil sempurna di semua perangkat, dari smartphone hingga layar desktop lebar.',
      card3_title: 'Fokus pada Pengguna',
      card3_desc: 'Struktur konten yang dirancang khusus untuk kemudahan navigasi pasien mencari informasi medis.'
    },
    category: {
      title: 'Pilih Kategori Anda',
      desc: 'Template yang disesuaikan untuk spesialisasi medis Anda.',
      link: 'Lihat Semua Kategori'
    },
    top_templates: {
      kicker: 'KOLEKSI TERBAIK',
      title: 'Template Pilihan Untuk Anda',
      desc: 'Intip sekilas beberapa karya desain terbaik kami yang telah dioptimalkan khusus untuk masing-masing bidang layanan kesehatan.',
      link: 'Lihat Semua Katalog',
      all_categories: 'Semua Kategori'
    },
    features: {
      title: 'Fitur Unggulan',
      desc: 'Semua yang Anda butuhkan untuk membangun kehadiran digital yang profesional.'
    },
    testimonials: {
      title: 'Apa Kata Klien Kami',
      desc: 'Bergabunglah dengan puluhan fasilitas kesehatan yang telah meningkatkan layanan mereka.'
    },
    pricing: {
      title: 'Pilih Paket yang Sesuai',
      desc: 'Transparan, tanpa biaya tersembunyi. Skalakan sesuai kebutuhan praktik Anda.'
    },
    faq: {
      title: 'Pertanyaan Umum',
      desc: 'Temukan jawaban seputar layanan dan template kami.'
    },
    contact: {
      title: 'Siap Membangun Website Anda?',
      desc: 'Konsultasikan kebutuhan spesifik dengan tim ahli kami.',
      btn: 'Mulai Konsultasi Gratis'
    },
    footer: {
      desc: 'Platform penyedia template website medis terbaik di Indonesia.',
      rights: 'Hak Cipta Dilindungi.',
      links: 'Tautan',
      legal: 'Legal'
    },
    catalog: {
      title: 'Katalog Template',
      desc: 'Jelajahi koleksi desain website profesional untuk layanan kesehatan Anda.',
      search: 'Cari template...',
      no_results: 'Tidak ditemukan',
      no_results_desc: 'Coba ubah kata kunci pencarian atau kategori filter.',
      reset_filter: 'Reset Filter',
      detail_title: 'Detail Template',
      live_demo: 'Lihat Live Demo',
      features: 'Fitur Unggulan',
      back: 'Kembali'
    }
  },
  en: {
    navbar: {
      why_us: 'Why Us',
      template: 'Templates',
      pricing: 'Pricing',
      features: 'Features',
      faq: 'FAQ',
      contact: 'Contact Us'
    },
    hero: {
      kicker: 'Healthcare • Medical • Wellness',
      title1: 'Professional Websites for Modern',
      title_highlight: 'Healthcare Services',
      title2: '',
      desc: 'Bring credibility and easy access for your patients with medical-specific website templates. Responsive, fast, and ready-to-use designs without technical complexities.',
      cta_primary: 'Explore Templates',
      cta_secondary: 'See How It Works',
    },
    why_us: {
      title: 'Why Choose Us?',
      desc: 'Designs focused on modern healthcare needs.',
      card1_title: 'Professional Look',
      card1_desc: 'Elegant designs that enhance the credibility of your healthcare facility in the eyes of patients.',
      card2_title: 'Flexible & Responsive',
      card2_desc: 'Looks perfect on all devices, from smartphones to wide desktop screens.',
      card3_title: 'User-Centric Focus',
      card3_desc: 'Content structures specifically designed to make it easy for patients to find medical information.'
    },
    category: {
      title: 'Choose Your Category',
      desc: 'Templates tailored to your medical specialization.',
      link: 'View All Categories'
    },
    top_templates: {
      kicker: 'BEST COLLECTION',
      title: 'Curated Templates For You',
      desc: 'Take a sneak peek at some of our best design works specifically optimized for each healthcare field.',
      link: 'View Full Catalog',
      all_categories: 'All Categories'
    },
    features: {
      title: 'Key Features',
      desc: 'Everything you need to build a professional digital presence.'
    },
    testimonials: {
      title: 'What Our Clients Say',
      desc: 'Join dozens of healthcare facilities that have improved their services.'
    },
    pricing: {
      title: 'Choose the Right Plan',
      desc: 'Transparent, no hidden fees. Scale as your practice needs.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      desc: 'Find answers about our services and templates.'
    },
    contact: {
      title: 'Ready to Build Your Website?',
      desc: 'Consult your specific needs with our expert team.',
      btn: 'Start Free Consultation'
    },
    footer: {
      desc: 'The best medical website template platform in Indonesia.',
      rights: 'All Rights Reserved.',
      links: 'Links',
      legal: 'Legal'
    },
    catalog: {
      title: 'Template Catalog',
      desc: 'Explore our collection of professional website designs for your healthcare services.',
      search: 'Search templates...',
      no_results: 'No results found',
      no_results_desc: 'Try changing your search keyword or category filter.',
      reset_filter: 'Reset Filter',
      detail_title: 'Template Detail',
      live_demo: 'View Live Demo',
      features: 'Key Features',
      back: 'Back'
    }
  }
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Theme State
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Language State
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'id';
  });

  // Apply Theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Apply Language
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(lang === 'id' ? 'en' : 'id');

  // Translation function
  const t = (path) => {
    const keys = path.split('.');
    let result = translations[lang];
    for (let key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <AppContext.Provider value={{ isDark, toggleTheme, lang, toggleLang, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
