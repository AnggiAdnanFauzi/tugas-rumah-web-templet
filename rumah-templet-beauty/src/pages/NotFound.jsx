import { Link } from "react-router-dom";
import { SearchX, ChevronLeft } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";

export function NotFound() {
  if (typeof document !== 'undefined') {
    document.title = "Halaman Tidak Ditemukan | Rumah Web Template";
  }

  return (
    <div className="min-h-screen bg-beauty-background font-sans flex flex-col">
      <Navbar />

      <main className="flex-grow pt-[72px] flex items-center justify-center py-20">
        <div className="beauty-container text-center max-w-xl">
          <div className="w-20 h-20 bg-beauty-surface rounded-full flex items-center justify-center mx-auto mb-6 text-beauty-muted border border-beauty-border">
            <SearchX className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-beauty-foreground mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm md:text-base text-beauty-muted mb-8 leading-relaxed">
            Maaf, halaman atau template yang Anda cari mungkin telah dipindahkan, diganti nama, atau tidak pernah ada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as={Link} to="/" variant="outline" className="rounded-full shadow-sm flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" /> Kembali ke Beranda
            </Button>
            <Button as={Link} to="/templates" variant="primary" className="rounded-full shadow-beauty-md">
              Lihat Katalog Template
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
