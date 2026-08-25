import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-beauty-border shadow-beauty-sm py-3"
          : "bg-white border-transparent py-4"
      )}
    >
      <div className="beauty-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-beauty-primary to-beauty-secondary flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
                R
              </div>
              <span className="font-semibold text-xl tracking-tight text-beauty-foreground">
                RumahWebTemplate <span className="text-beauty-primary">Beauty</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.mainNav.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-beauty-muted hover:text-beauty-primary transition-colors rounded-md hover:bg-beauty-surface-hover"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button as="a" href="/templates" variant="primary" size="default" className="rounded-full shadow-beauty-sm">
              Lihat Template
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-beauty-muted hover:text-beauty-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-beauty-bg-tertiary shadow-lg absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
            {siteConfig.mainNav.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-beauty-muted hover:text-beauty-primary hover:bg-beauty-surface-hover rounded-md"
              >
                {item.title}
              </a>
            ))}
            <div className="pt-4">
              <Button as="a" href="/templates" variant="primary" size="lg" className="w-full rounded-xl">
                Lihat Template
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
