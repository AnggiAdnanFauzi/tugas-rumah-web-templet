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
    id: "tpl-school-01",
    slug: "sekolah-unggulan-modern",
    title: "Sekolah Unggulan Modern",
    category: "school",
    categoryLabel: "Sekolah",
    thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop",
    description: "Desain elegan untuk SMA/SMK dengan fitur integrasi pendaftaran (PPDB) dan portal akademik interaktif.",
    features: ["Profil Sekolah", "Program Pendidikan", "Pendaftaran"],
    status: "active",
    demoUrl: "",
  },
  {
    id: "tpl-school-02",
    slug: "sekolah-dasar-kreatif",
    title: "Sekolah Dasar Kreatif",
    category: "school",
    categoryLabel: "Sekolah",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
    description: "Tampilan ceria dan informatif untuk SD atau TK. Menonjolkan galeri aktivitas anak dan informasi untuk orang tua.",
    features: ["Galeri Kegiatan", "Info Guru", "Agenda"],
    status: "active",
    demoUrl: "",
  },
  {
    id: "tpl-course-01",
    slug: "kursus-bahasa-profesional",
    title: "Kursus Bahasa Profesional",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    description: "Tampilan konversi tinggi untuk lembaga kursus dan bimbel. Dilengkapi daftar program unggulan dan testimoni.",
    features: ["Katalog Program", "Testimoni", "Pendaftaran"],
    status: "active",
    demoUrl: "",
  },
  {
    id: "tpl-course-02",
    slug: "bimbingan-belajar-intensif",
    title: "Bimbel Intensif",
    category: "course",
    categoryLabel: "Kursus",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    description: "Template berorientasi prestasi untuk bimbel UTBK/SNBT. Fokus pada hasil kelulusan dan keunggulan pengajar.",
    features: ["Profil Tutor", "Paket Belajar", "Hasil Kelulusan"],
    status: "active",
    demoUrl: "",
  },
  {
    id: "tpl-training-01",
    slug: "pusat-training-korporat",
    title: "Pusat Training Korporat",
    category: "training",
    categoryLabel: "Training",
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    description: "Desain berwibawa untuk lembaga pelatihan korporat dan sertifikasi profesional. Menampilkan jadwal dan silabus lengkap.",
    features: ["Jadwal Training", "Silabus", "Sertifikasi"],
    status: "active",
    demoUrl: "",
  },
  {
    id: "tpl-training-02",
    slug: "pelatihan-skill-digital",
    title: "Pelatihan Skill Digital",
    category: "training",
    categoryLabel: "Training",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    description: "Tema modern dan tech-savvy untuk bootcamp atau pelatihan IT. Mengoptimalkan pendaftaran langsung secara online.",
    features: ["Portofolio Alumni", "Kurikulum Tech", "Karir"],
    status: "active",
    demoUrl: "",
  }
];

export default templates;
