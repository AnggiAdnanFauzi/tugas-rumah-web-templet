/**
 * CATATAN UNTUK DEVELOPER:
 * ============================================================
 * File ini adalah SATU-SATUNYA sumber data (single source of truth) untuk
 * seluruh katalog template di aplikasi ini.
 *
 * CARA MENGGANTI DUMMY DATA DENGAN TEMPLATE ASLI:
 * 1. Edit atau ganti object di dalam array `templates` di bawah.
 * 2. Pastikan setiap object mengikuti schema berikut:
 *
 * {
 *   id          : string  — unik, contoh: "tpl-school-03"
 *   slug        : string  — unik, URL-friendly, contoh: "sekolah-terpadu-islam"
 *   title       : string  — judul template
 *   category    : "school" | "course" | "training"  — wajib salah satu dari tiga ini
 *   categoryLabel: "Sekolah" | "Kursus" | "Training"
 *   description : string  — deskripsi singkat
 *   thumbnail   : string  — URL gambar (Unsplash, CDN, atau path lokal di /public)
 *   features    : string[] — array fitur utama
 *   status      : "active"
 *   demoUrl     : string  — URL demo langsung, atau "" jika belum tersedia
 * }
 *
 * 3. Tidak perlu mengubah komponen UI apapun — Landing Page,
 *    Katalog, Search, Filter, dan Halaman Detail akan otomatis
 *    menyesuaikan diri dengan data baru.
 *
 * PERHATIAN: Hanya ada 3 kategori yang valid:
 *   school | course | training
 * ============================================================
 */

const templates = [
  {
    id: "tpl-01",
    slug: "britania-les",
    title: "Britania Les",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    description: "Template modern untuk lembaga kursus bahasa atau bimbingan belajar dengan fokus pada konversi.",
    features: ["Katalog Program", "Testimoni", "Pendaftaran"],
    status: "active",
    demoUrl: "https://britania-les.vercel.app/"
  },
  {
    id: "tpl-02",
    slug: "sekolah-murid-merdeka",
    title: "Sekolah Murid Merdeka",
    category: "school",
    categoryLabel: "Sekolah",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    description: "Desain interaktif dan modern yang cocok untuk sekolah dengan kurikulum merdeka.",
    features: ["Profil Sekolah", "Galeri Kegiatan", "Info Pendaftaran"],
    status: "active",
    demoUrl: "https://sekolah-murid-merdeka.vercel.app/"
  },
  {
    id: "tpl-03",
    slug: "akamon-beta",
    title: "Akamon Beta",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    description: "Template profesional untuk platform kursus intensif dan bimbingan karir.",
    features: ["Profil Pengajar", "Paket Kursus", "FAQ"],
    status: "active",
    demoUrl: "https://akamon-beta.vercel.app/"
  },
  {
    id: "tpl-04",
    slug: "deutchcastle",
    title: "Deutchcastle",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e73929c8a?q=80&w=800&auto=format&fit=crop",
    description: "Desain elegan untuk kursus bahasa asing, khususnya bahasa Jerman atau Eropa.",
    features: ["Level Bahasa", "Jadwal Kelas", "Pendaftaran"],
    status: "active",
    demoUrl: "https://deutchcastle.vercel.app/"
  },
  {
    id: "tpl-05",
    slug: "core-lab-sable",
    title: "Core Lab Sable",
    category: "training",
    categoryLabel: "Training",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    description: "Template dinamis untuk pusat pelatihan IT, laboratorium teknologi, dan bootcamp.",
    features: ["Silabus Tech", "Portofolio", "Pendaftaran"],
    status: "active",
    demoUrl: "https://core-lab-sable.vercel.app/"
  },
  {
    id: "tpl-06",
    slug: "cahaya-nusantara",
    title: "Cahaya Nusantara",
    category: "school",
    categoryLabel: "Sekolah",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    description: "Desain inspiratif untuk lembaga pendidikan formal dari tingkat dasar hingga menengah.",
    features: ["Profil Sekolah", "Ekstrakurikuler", "Prestasi"],
    status: "active",
    demoUrl: "https://cahaya-nsntr.vercel.app/"
  },
  {
    id: "tpl-07",
    slug: "match-academy",
    title: "Match Academy",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    description: "Template interaktif untuk akademi digital atau platform belajar online.",
    features: ["Daftar Kelas", "Profil Mentor", "Review Siswa"],
    status: "active",
    demoUrl: "https://match-academy-2va5.vercel.app/"
  },
  {
    id: "tpl-08",
    slug: "astro-snbt",
    title: "Astro SNBT",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    description: "Template berorientasi target untuk bimbingan belajar persiapan masuk perguruan tinggi.",
    features: ["Tryout Online", "Tips Belajar", "Pendaftaran"],
    status: "active",
    demoUrl: "https://astro-snbt.vercel.app/"
  },
  {
    id: "tpl-09",
    slug: "kalanusantara",
    title: "Kalanusantara",
    category: "school",
    categoryLabel: "Sekolah",
    thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
    description: "Tampilan berbudaya dan elegan untuk institusi pendidikan nasional.",
    features: ["Visi Misi", "Fasilitas Belajar", "Info Pendaftaran"],
    status: "active",
    demoUrl: "https://kalanusantara.vercel.app/"
  },
  {
    id: "tpl-10",
    slug: "kodenaut",
    title: "Kodenaut",
    category: "training",
    categoryLabel: "Training",
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
    description: "Template bertema teknologi untuk pelatihan coding, programming, dan tech talent.",
    features: ["Kurikulum Tech", "Karir", "Testimoni"],
    status: "active",
    demoUrl: "https://kodenaut.vercel.app/"
  },
  {
    id: "tpl-11",
    slug: "kalkulus-gold",
    title: "Kalkulus Gold",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    description: "Desain premium untuk bimbingan belajar eksklusif kelas matematika atau sains.",
    features: ["Materi Eksklusif", "Tutor Premium", "Hasil Belajar"],
    status: "active",
    demoUrl: "https://kalkulus-gold.vercel.app/"
  },
  {
    id: "tpl-12",
    slug: "aurora-corporate",
    title: "Aurora Corporate",
    category: "training",
    categoryLabel: "Training",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop",
    description: "Tema berwibawa untuk layanan pelatihan dan pengembangan SDM perusahaan.",
    features: ["Solusi B2B", "Katalog Training", "Klien Kami"],
    status: "active",
    demoUrl: "https://aurora-corporate-dusky.vercel.app/"
  },
  {
    id: "tpl-13",
    slug: "kreatif-pixel",
    title: "Kreatif Pixel",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    description: "Template kreatif untuk kursus desain grafis, animasi, dan seni digital.",
    features: ["Showcase Karya", "Kelas Desain", "Mentor Kreatif"],
    status: "active",
    demoUrl: "https://kreatif-pixel.vercel.app/"
  },
  {
    id: "tpl-14",
    slug: "kosmoskill",
    title: "Kosmoskill",
    category: "training",
    categoryLabel: "Training",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    description: "Tampilan futuristik untuk platform pengembangan skill dan upskilling profesional.",
    features: ["Path Belajar", "Sertifikasi", "Komunitas"],
    status: "active",
    demoUrl: "https://kosmoskill.vercel.app/"
  }
];

export default templates;
