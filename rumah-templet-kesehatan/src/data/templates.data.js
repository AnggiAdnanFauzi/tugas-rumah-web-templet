/**
 * templates.data.js
 *
 * Sumber kebenaran tunggal (single source of truth) untuk seluruh data template.
 *
 * SCHEMA WAJIB — setiap template harus mengikuti field berikut:
 *
 * id          : string  — identifier unik, format "health-001"
 * slug        : string  — URL-friendly, format "nama-template"
 * title       : string  — nama tampilan template
 * category    : string  — merujuk ke id kategori di categories.data.js
 * categoryLabel: string — label tampilan kategori (untuk display, bukan filter logic)
 * description : string  — deskripsi singkat 1-2 kalimat
 * thumbnail   : string  — URL gambar preview (gunakan SELALU `thumbnail`, bukan `image`)
 * demoUrl     : string  — URL live demo template (kosong string jika belum ada)
 * features    : Array<string> — daftar fitur utama
 * status      : "active" | "coming-soon" | "archived"
 */

export const templatesData = [
  {
    id: "health-001",
    slug: "klinik-sehat-modern",
    title: "Klinik Sehat Modern",
    category: "klinik",
    categoryLabel: "Klinik",
    description: "Desain website komprehensif untuk klinik umum atau spesialis. Dilengkapi dengan sistem antrian digital dan galeri fasilitas.",
    thumbnail: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    demoUrl: "",
    features: [
      "Sistem Booking Online via WhatsApp",
      "Direktori & Jadwal Dokter Terintegrasi",
      "Galeri Fasilitas Resolusi Tinggi",
      "Blog Edukasi Kesehatan SEO Friendly"
    ],
    status: "active",
  },
  {
    id: "health-002",
    slug: "dokter-care-professional",
    title: "Dokter Care Professional",
    category: "dokter",
    categoryLabel: "Dokter",
    description: "Template elegan untuk personal branding dokter spesialis. Bangun kepercayaan pasien sebelum mereka tiba di ruang praktik.",
    thumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://example.com/demo",
    features: [
      "Profil & Riwayat Pendidikan Dokter",
      "Integrasi Artikel Kesehatan Pribadi",
      "Formulir Konsultasi Pra-Kunjungan",
      "Tampilan Mobile-First Cepat"
    ],
    status: "active",
  },
  {
    id: "health-003",
    slug: "dental-smile-clinic",
    title: "Dental Smile Clinic",
    category: "dental",
    categoryLabel: "Dental",
    description: "Desain bersih dan menenangkan khusus untuk klinik gigi. Tampilkan before-after perawatan dengan galeri interaktif.",
    thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    demoUrl: "",
    features: [
      "Katalog Layanan Ortodonti & Kosmetik",
      "Galeri Interaktif Before-After",
      "Testimoni Pasien Video/Teks",
      "FAQ Perawatan Gigi Terstruktur"
    ],
    status: "coming-soon",
  },
  {
    id: "health-004",
    slug: "wellness-balance",
    title: "Wellness Balance",
    category: "wellness",
    categoryLabel: "Wellness",
    description: "Template bernuansa tenang untuk spa, pusat terapi, dan kebugaran. Hadirkan nuansa rileks sejak pandangan pertama.",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    demoUrl: "https://example.com/demo-wellness",
    features: [
      "Katalog Paket Terapi & Spa",
      "Sistem Reservasi Sesi Pribadi",
      "Integrasi Instagram Feed Dinamis",
      "Tampilan Elegan dengan Animasi Halus"
    ],
    status: "active",
  },
  {
    id: "health-005",
    slug: "medica-care-utama",
    title: "Medica Care Utama",
    category: "klinik",
    categoryLabel: "Klinik",
    description: "Template skala besar untuk puskesmas atau rumah sakit cabang. Mengelola multi-layanan dan direktori staf yang ekstensif.",
    thumbnail: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
    demoUrl: "",
    features: [
      "Dashboard Layanan Kesehatan Lengkap",
      "Pusat Informasi & Pengumuman Pasien",
      "Sistem Antrian Real-time Terintegrasi",
      "Arsitektur Data Besar yang Cepat"
    ],
    status: "coming-soon",
  },
];
