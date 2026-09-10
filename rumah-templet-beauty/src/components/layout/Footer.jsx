import { siteConfig } from "../../config/site";

export function Footer() {
  return (
    <footer className="bg-beauty-background border-t border-beauty-border pt-16 pb-8">
      <div className="beauty-container">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-beauty-primary to-beauty-secondary flex items-center justify-center text-white font-bold text-lg shadow-sm">
                R
              </div>
              <span className="font-semibold text-xl tracking-tight text-beauty-foreground">
                RumahWebTemplate <span className="text-beauty-primary">Beauty</span>
              </span>
            </a>
            <p className="text-sm text-beauty-muted max-w-sm mb-6 leading-relaxed">
              {siteConfig.description} Solusi website instan, profesional, dan elegan untuk mengembangkan bisnis Anda.
            </p>
            <div className="flex gap-4">
              <a href="/" className="text-sm font-semibold text-beauty-muted hover:text-beauty-primary transition-colors">
                Facebook
              </a>
              <a href="/" className="text-sm font-semibold text-beauty-muted hover:text-beauty-primary transition-colors">
                Instagram
              </a>
              <a href="/" className="text-sm font-semibold text-beauty-muted hover:text-beauty-primary transition-colors">
                Twitter
              </a>
              <a href="/" className="text-sm font-semibold text-beauty-muted hover:text-beauty-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-beauty-foreground mb-4">Template</h3>
            <ul className="space-y-3">
              <li><a href="/templates" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Semua Template</a></li>
              <li><a href="/templates?premium=true" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Premium Template</a></li>
              <li><a href="/pricing" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Harga & Paket</a></li>
              <li><a href="/features" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Fitur Website</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-bold text-beauty-foreground mb-4">Kategori</h3>
            <ul className="space-y-3">
              <li><a href="/templates?category=salon" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Salon & Studio</a></li>
              <li><a href="/templates?category=skincare" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Skincare & Klinik</a></li>
              <li><a href="/templates?category=spa" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Spa & Wellness</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h3 className="font-bold text-beauty-foreground mb-4">Bantuan</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Tentang Kami</a></li>
              <li><a href="/faq" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">FAQ</a></li>
              <li><a href="/contact" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Hubungi Kami</a></li>
              <li><a href="/terms" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="/privacy" className="text-sm text-beauty-muted hover:text-beauty-primary transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-beauty-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-beauty-muted text-center md:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-beauty-muted font-medium">Made with ❤️ for Beauty Brands</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
