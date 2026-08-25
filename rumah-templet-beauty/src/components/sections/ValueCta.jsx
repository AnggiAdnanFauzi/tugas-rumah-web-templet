import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Laptop, SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/Button";

export function ValueCta() {
  const benefits = [
    "Akses Seumur Hidup (Lifetime)",
    "Kode Sumber Lengkap (React/Vite)",
    "Aset Desain Premium",
    "Dokumentasi Panduan",
    "Dukungan Pemasangan",
  ];

  const trustElements = [
    { name: "Responsive", icon: Laptop },
    { name: "Modern UI", icon: Zap },
    { name: "Easy to Customize", icon: SlidersHorizontal },
    { name: "Built for Beauty", icon: ShieldCheck },
  ];

  return (
    <section className="py-14 md:py-20 bg-beauty-background border-t border-beauty-border">
      <div className="beauty-container">
        
        {/* Pricing Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl border border-beauty-border shadow-beauty-lg relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-beauty-primary/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            
            {/* Left Content (What You Get) */}
            <div className="p-6 md:p-8 flex-1 w-full border-b md:border-b-0 md:border-r border-beauty-border">
              <h2 className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-2">
                Template Premium
              </h2>
              <p className="text-sm text-beauty-muted mb-8">
                Investasi sekali bayar untuk fondasi website kecantikan profesional Anda. Tidak ada biaya berlangganan.
              </p>
              
              <ul className="flex flex-col gap-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-beauty-primary shrink-0" />
                    <span className="text-sm font-medium text-beauty-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content (Price & CTA) */}
            <div className="p-6 md:p-8 w-full md:w-[320px] lg:w-[380px] flex flex-col items-center justify-center text-center bg-gray-50/50">
              <p className="text-xs font-bold text-beauty-muted uppercase tracking-wider mb-3">Mulai Dari</p>
              <div className="flex items-start justify-center gap-1 mb-2">
                <span className="text-xl font-bold text-beauty-foreground mt-1">Rp</span>
                <span className="text-3xl lg:text-4xl font-bold text-beauty-foreground tracking-tight">199</span>
                <span className="text-xl font-bold text-beauty-foreground mt-1">.000</span>
              </div>
              <p className="text-xs text-beauty-muted font-medium mb-8">Lisensi satu proyek (One Project)</p>
              
              <Button as="a" href="/templates" variant="primary" size="lg" className="w-full rounded-full shadow-beauty-md group">
                Beli Template Sekarang <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-[10px] text-gray-400 mt-4 text-center max-w-[200px]">
                Pembayaran satu kali, desain ini 100% milik Anda.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Trust Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-5 md:gap-8 mt-8 md:mt-12"
        >
          {trustElements.map((el, idx) => {
            const Icon = el.icon;
            return (
              <div key={idx} className="flex items-center gap-2 text-beauty-muted">
                <Icon className="w-5 h-5 text-beauty-primary/60" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{el.name}</span>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
