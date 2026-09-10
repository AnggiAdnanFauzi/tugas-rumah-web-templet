import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Monitor, 
  Tablet, 
  Smartphone, 
  RotateCw, 
  ExternalLink, 
  SearchX, 
  Sparkles,
  Loader2,
  MessageCircle
} from "lucide-react";
import { templates } from "../data/templates";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";

const SITE_CONFIG = {
  whatsappNumber: "6281234567890"
};

export function TemplatePreview() {
  const { slug } = useParams();
  const [device, setDevice] = useState("desktop"); // 'desktop' | 'tablet' | 'mobile'
  const [iframeKey, setIframeKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    return (
      <div className="min-h-screen bg-beauty-background flex items-center justify-center p-4">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl border border-beauty-border shadow-beauty-md">
          <div className="w-16 h-16 rounded-full bg-beauty-background flex items-center justify-center text-beauty-muted mx-auto mb-4">
            <SearchX className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-beauty-foreground mb-2">Template Tidak Ditemukan</h2>
          <p className="text-sm text-beauty-muted mb-6">
            Template yang ingin Anda preview tidak tersedia atau slug salah.
          </p>
          <Button as={Link} to="/templates" variant="primary" className="rounded-full">
            Kembali ke Katalog
          </Button>
        </div>
      </div>
    );
  }

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const waMessage = encodeURIComponent(
    `Halo, saya sangat tertarik dengan template "${template.title}". Saya ingin memesan dan mendapatkan detail lebih lanjut.`
  );
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${waMessage}`;

  return (
    <div className="h-screen w-screen flex flex-col bg-[#1A181B] text-white overflow-hidden select-none">
      {/* Top Preview Bar */}
      <header className="h-16 px-3 md:px-6 bg-[#232024] border-b border-white/10 flex items-center justify-between shrink-0 z-30 shadow-md">
        {/* Left: Back & Title */}
        <div className="flex items-center gap-2 md:gap-4 min-w-0">
          <Link
            to={`/templates/${template.slug}`}
            className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 shrink-0"
            title="Kembali ke Detail Template"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Detail</span>
          </Link>

          <div className="h-4 w-px bg-white/10 hidden sm:block"></div>

          <div className="flex items-center gap-2 truncate">
            <h1 className="text-sm md:text-base font-semibold truncate text-white">
              {template.title}
            </h1>
            <span className="hidden lg:inline-flex">
              <Badge variant="outline" className="text-[11px] border-white/20 text-white/80 py-0.5">
                {template.categoryName}
              </Badge>
            </span>
          </div>
        </div>

        {/* Center: Device Switcher */}
        <div className="flex items-center bg-black/40 p-1 rounded-xl border border-white/10">
          <button
            onClick={() => setDevice("desktop")}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "desktop"
                ? "bg-beauty-primary text-white shadow-sm"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
            title="Desktop View (100%)"
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden md:inline">Desktop</span>
          </button>

          <button
            onClick={() => setDevice("tablet")}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "tablet"
                ? "bg-beauty-primary text-white shadow-sm"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden md:inline">Tablet</span>
          </button>

          <button
            onClick={() => setDevice("mobile")}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "mobile"
                ? "bg-beauty-primary text-white shadow-sm"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
            title="Mobile View (390px)"
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden md:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Refresh iframe button */}
          <button
            onClick={handleRefresh}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            title="Muat Ulang Preview"
          >
            <RotateCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </button>

          {/* Open live url in new tab */}
          <a
            href={template.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs text-white/80 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
            title="Buka Website Asli di Tab Baru"
          >
            <span>Tab Baru</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* WhatsApp CTA */}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-beauty-primary hover:bg-beauty-primary-hover text-white text-xs font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm transition-all transform hover:scale-[1.02]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Gunakan Template</span>
          </a>
        </div>
      </header>

      {/* Frame Canvas Area */}
      <main className="flex-1 relative bg-[#131114] flex items-center justify-center overflow-hidden p-2 md:p-6">
        {/* Subtle grid pattern background */}
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#131114]/80 backdrop-blur-xs text-white pointer-events-none transition-opacity duration-300">
            <Loader2 className="w-8 h-8 text-beauty-primary animate-spin mb-3" />
            <p className="text-sm font-medium text-white/80">Memuat Live Preview...</p>
            <p className="text-xs text-white/40 mt-1">{template.demoUrl}</p>
          </div>
        )}

        {/* Responsive Device Frame Container */}
        <div
          className={`relative transition-all duration-300 ease-out flex flex-col overflow-hidden ${
            device === "desktop"
              ? "w-full h-full rounded-none border-0"
              : device === "tablet"
              ? "w-[768px] h-[96%] max-h-[1024px] rounded-2xl border-[10px] border-[#2E2B30] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
              : "w-[390px] h-[96%] max-h-[844px] rounded-[40px] border-[12px] border-[#2E2B30] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ring-white/10"
          }`}
        >
          {/* Mobile Notch / Speaker bar for realism */}
          {device === "mobile" && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#2E2B30] rounded-full z-10 pointer-events-none flex items-center justify-center">
              <div className="w-8 h-1 bg-white/20 rounded-full" />
            </div>
          )}

          {/* Iframe */}
          <iframe
            key={iframeKey}
            src={template.demoUrl}
            title={`Preview of ${template.title}`}
            onLoad={() => setIsLoading(false)}
            className="w-full h-full bg-white border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </main>
    </div>
  );
}
