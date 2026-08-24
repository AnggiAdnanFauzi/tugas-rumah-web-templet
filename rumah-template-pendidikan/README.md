# Rumah Template Pendidikan

Katalog template website profesional untuk institusi pendidikan di Indonesia — Sekolah, Kursus, dan Training.

---

## Tentang Project

**Rumah Template Pendidikan** adalah aplikasi SPA (Single Page Application) berbasis React yang menyediakan katalog template website siap pakai untuk:

- 🏫 **Sekolah** — SD, SMP, SMA/SMK, Pesantren
- 📚 **Kursus** — Bimbel, Kursus Bahasa, LKP, dan lembaga kursus lainnya
- 🎓 **Training** — Pelatihan korporat, bootcamp, dan lembaga sertifikasi profesional

Pengunjung dapat menelusuri katalog, memfilter berdasarkan kategori, mencari template secara *real-time*, melihat halaman detail masing-masing template, dan langsung menghubungi tim melalui WhatsApp.

---

## Tech Stack

| Teknologi | Versi | Fungsi |
|---|---|---|
| **React** | 19 | Library UI utama |
| **Vite** | 8 | Build tool & dev server |
| **Tailwind CSS** | 4 | Utility-first CSS styling |
| **React Router DOM** | 7 | SPA routing & navigasi |
| **Lucide React** | 1.33 | Icon library |

---

## Cara Menjalankan Project

### Prasyarat
- Node.js (versi 18 ke atas)
- npm

### Langkah

```bash
# 1. Install dependensi
npm install

# 2. Jalankan development server
npm run dev

# 3. Build untuk produksi
npm run build

# 4. Preview build produksi secara lokal
npm run preview
```

Dev server secara default berjalan di `http://localhost:5173`.

---

## Struktur Routing

| Route | Halaman |
|---|---|
| `/` | Landing Page utama |
| `/template` | Halaman Katalog (dengan search & filter) |
| `/template/:slug` | Halaman Detail Template dinamis |

---

## Mengelola Data Template

### Lokasi File

```
src/data/templates.data.js
```

File ini adalah **satu-satunya sumber data** untuk seluruh katalog. Semua komponen UI (Landing Page, Katalog, Search, Filter, Detail) membaca data dari sini secara otomatis.

### Schema Data Template

```js
{
  id          : "tpl-school-01",          // unik, tidak boleh duplikat
  slug        : "sekolah-unggulan-modern", // unik, URL-friendly (huruf kecil, tanda hubung)
  title       : "Sekolah Unggulan Modern",
  category    : "school",                 // "school" | "course" | "training"
  categoryLabel: "Sekolah",               // "Sekolah" | "Kursus" | "Training"
  description : "Deskripsi singkat template...",
  thumbnail   : "https://...",            // URL gambar (Unsplash, CDN, atau /public/images/...)
  features    : ["Fitur 1", "Fitur 2"],   // array of strings
  status      : "active",
  demoUrl     : "",                       // URL demo langsung, atau "" jika belum ada
}
```

### Cara Menambah Template Baru

1. Buka `src/data/templates.data.js`
2. Tambahkan object baru di dalam array `templates`
3. Pastikan `id` dan `slug` unik
4. Pastikan `category` adalah salah satu dari: `school` | `course` | `training`
5. Simpan file — halaman Katalog, Landing Page, dan halaman Detail akan otomatis memperbarui tampilannya

### Cara Mengubah Template yang Ada

Edit field yang diinginkan pada object yang sesuai di dalam array `templates`. Perubahan akan langsung terlihat di seluruh halaman yang merujuk template tersebut.

### Cara Menghapus Template

Hapus seluruh object template dari array `templates`. Pastikan tidak ada link yang masih mengarah ke `slug` template yang dihapus.

---

## Kategori Template

Hanya ada **3 kategori** yang valid dan dikenali oleh sistem filter:

| `category` (key) | `categoryLabel` (tampilan) |
|---|---|
| `school` | Sekolah |
| `course` | Kursus |
| `training` | Training |

Jangan menggunakan kategori lain di luar ketiga nilai di atas — sistem filter tidak akan mengenalinya.

---

## Konfigurasi WhatsApp

Nomor WhatsApp dan pesan konsultasi default dikonfigurasi di:

```
src/config/site.js
```

```js
export const SITE_CONFIG = {
  brandName: "Rumah Template Pendidikan",
  whatsappNumber: "6280000000000",   // ← Ganti dengan nomor WA aktif (format: 62xxxxxxxxxxx)
  defaultConsultationMessage: "Halo, saya ingin berkonsultasi mengenai pembuatan website pendidikan.",
};
```

Utilitas `generateWaLink(templateName)` di `src/utils/whatsapp.js` secara otomatis membaca nilai ini untuk membuat URL WA dengan pesan dinamis berdasarkan nama template.

---

## Struktur Folder Utama

```
src/
├── App.jsx                     # Root component & routing
├── config/
│   └── site.js                 # Konfigurasi global (WhatsApp, nama brand)
├── data/
│   ├── templates.data.js       # ← SINGLE SOURCE OF TRUTH data template
│   ├── categories.data.js      # Data filter kategori
│   └── faq.data.js             # Data FAQ Landing Page
├── pages/
│   ├── LandingPage.jsx
│   ├── TemplatesPage.jsx       # Halaman katalog
│   └── TemplateDetailPage.jsx  # Halaman detail dinamis
├── components/
│   ├── catalog/
│   │   ├── CatalogSearch.jsx   # Komponen search bar
│   │   ├── CategoryFilter.jsx  # Komponen filter kategori
│   │   ├── EmptyState.jsx      # Tampilan kosong saat tidak ada hasil
│   │   ├── TemplateCard.jsx    # Card template (katalog)
│   │   └── TemplateGrid.jsx    # Grid container
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/               # Section-section Landing Page
├── hooks/
│   └── useScrollReveal.js      # Hook animasi scroll reveal
└── utils/
    └── whatsapp.js             # Generator URL WhatsApp
```

---

## Catatan Pengembangan

- Data template dummy saat ini digunakan untuk keperluan pengujian UI dan flow.
- Untuk mengganti ke data asli, cukup edit `src/data/templates.data.js` — tidak diperlukan perubahan pada komponen apapun.
- Aplikasi mendukung **dark mode** yang dikontrol melalui `ThemeContext`.
- Gambar thumbnail saat ini menggunakan URL Unsplash sebagai placeholder.
