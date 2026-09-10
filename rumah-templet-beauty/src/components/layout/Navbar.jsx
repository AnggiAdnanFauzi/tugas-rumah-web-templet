import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { cn } from "../../lib/utils";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-beauty-border shadow-beauty-sm py-3"
          : "bg-white/60 backdrop-blur-sm border-b border-transparent py-5"
      )}
    >
      <div className="beauty-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-beauty-primary to-beauty-secondary flex items-center justify-center text-white font-bold text-lg shadow-beauty-sm group-hover:scale-105 group-hover:shadow-beauty-md transition-all duration-300">
                R
              </div>
              <span className="font-semibold text-xl tracking-tight text-beauty-foreground">
                RumahWebTemplate <span className="text-beauty-primary font-bold italic">Beauty</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.mainNav.map((item) => {
              const isActive = location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full group",
                    isActive 
                      ? "text-beauty-primary" 
                      : "text-beauty-muted hover:text-beauty-foreground hover:bg-beauty-surface-hover"
                  )}
                >
                  {item.title}
                  
                  {/* Active Indicator (Dot) */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-beauty-primary shadow-[0_0_8px_rgba(183,110,121,0.6)]"></span>
                  )}
                  
                  {/* Hover Underline Effect for inactive links */}
                  {!isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-beauty-primary/50 transition-all duration-300 group-hover:w-1/2 rounded-full opacity-0 group-hover:opacity-100"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button as={Link} to="/templates" variant="primary" size="default" className="rounded-full shadow-beauty-sm hover:shadow-beauty-md hover:-translate-y-0.5 transition-all duration-300">
              Lihat Template
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-beauty-muted hover:text-beauty-primary p-2 transition-colors"
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
      <div 
        className={cn(
          "md:hidden absolute w-full left-0 top-full bg-white/95 backdrop-blur-xl border-b border-beauty-bg-tertiary shadow-lg transition-all duration-300 overflow-hidden origin-top",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
          {siteConfig.mainNav.map((item) => {
            const isActive = location.pathname === item.href || (item.href !== "/" && location.pathname.startsWith(item.href));
            
            return (
              <Link
                key={item.title}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block px-4 py-3 text-base font-semibold rounded-xl transition-colors",
                  isActive
                    ? "bg-beauty-primary/10 text-beauty-primary border-l-4 border-beauty-primary"
                    : "text-beauty-muted hover:text-beauty-primary hover:bg-beauty-surface-hover border-l-4 border-transparent"
                )}
              >
                {item.title}
              </Link>
            );
          })}
          <div className="pt-5 px-2">
            <Button as={Link} to="/templates" onClick={() => setIsMobileMenuOpen(false)} variant="primary" size="lg" className="w-full rounded-xl shadow-beauty-md">
              Lihat Template
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
