// ============================================================
// Konfigurasi Bisnis - Ganti dengan data Anda yang sebenarnya
// ============================================================

export const SITE_CONFIG = {
  name: "HealthTemplate Hub",
  tagline: "Spesialis Website Kesehatan Indonesia",
  waNumber: "6281234567890", // Ganti: format internasional tanpa +, cth: 628123456789
  email: "halo@healthtemplatehub.id",
  operationalHours: "Senin–Sabtu, 08.00–17.00 WIB",
};

export const WA_LINK = (message) =>
  `https://wa.me/${SITE_CONFIG.waNumber}?text=${encodeURIComponent(message)}`;
