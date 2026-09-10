import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Layout, MonitorSmartphone, Settings2, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { categories } from "../data/categories";

export function About() {
  const values = [
    { num: "01", title: "Designed to Impress", icon: Sparkles, desc: "Desain premium yang memukau sejak pandangan pertama." },
    { num: "02", title: "Built to Convert", icon: Layout, desc: "Struktur layout difokuskan untuk mendorong pengunjung menjadi klien." },
    { num: "03", title: "Easy to Customize", icon: Settings2, desc: "Sangat mudah disesuaikan dengan warna dan identitas brand Anda." },
    { num: "04", title: "Ready to Grow", icon: MonitorSmartphone, desc: "Website yang siap tumbuh bersama perkembangan bisnis Anda." },
  ];

  const trustStatements = [
    "Responsive di berbagai ukuran layar",
    "Struktur komponen mudah dikembangkan",
    "Desain dibuat dengan fokus pada pengalaman pengguna",
    "Template dapat disesuaikan dengan identitas brand"
  ];

  const steps = [
    { num: "01", title: "Pilih Template", desc: "Jelajahi katalog dan temukan desain yang sesuai." },
    { num: "02", title: "Preview", desc: "Lihat demo interaktif sebelum Anda memutuskan." },
    { num: "03", title: "Sesuaikan Brand", desc: "Ubah warna, gambar, dan teks dengan mudah." },
    { num: "04", title: "Launch", desc: "Website beauty Anda siap menyapa dunia." },
  ];

  return (
    <div className="min-h-screen bg-beauty-background font-sans flex flex-col overflow-hidden">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        
        {/* Breadcrumb */}
        <div className="border-b border-beauty-border bg-beauty-surface">
          <div className="beauty-container py-3">
            <nav className="flex items-center text-xs md:text-sm font-medium text-beauty-muted">
              <Link to="/" className="hover:text-beauty-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 mx-1 md:mx-2" />
              <span className="text-beauty-foreground">About</span>
            </nav>
          </div>
        </div>

        {/* 1. About Hero */}
        <section className="pt-12 md:pt-16 pb-12">
          <div className="beauty-container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h1 className="text-3xl md:text-4xl font-bold text-beauty-foreground leading-tight mb-4">
                  Cerita Kami: Mengubah Wajah Digital Bisnis Kecantikan
                </h1>
                <p className="text-sm md:text-base text-beauty-muted mb-8 leading-relaxed max-w-md">
                  Berawal dari passion untuk membantu para pelaku bisnis beauty, kami hadir sebagai mitra digital yang berdedikasi. Misi kami adalah memberdayakan salon, klinik, dan brand skincare agar bisa bersinar dengan identitas digital yang profesional dan elegan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button as={Link} to="/templates" variant="primary" size="lg" className="rounded-full shadow-beauty-md">
                    Jelajahi Template
                  </Button>
                  <Button as={Link} to="/templates" variant="outline" size="lg" className="rounded-full">
                    Lihat Koleksi
                  </Button>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-beauty-md border border-beauty-border group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1000" 
                  alt="Beauty lifestyle"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Trust Strip */}
        <section className="py-6 border-y border-beauty-border bg-beauty-surface">
          <div className="beauty-container max-w-6xl">
            <div className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-between items-center gap-4 lg:gap-6">
              {[
                { label: "Premium Visual Design", icon: Sparkles },
                { label: "Responsive by Default", icon: MonitorSmartphone },
                { label: "Easy to Customize", icon: Settings2 },
                { label: "Built for Beauty Business", icon: ShieldCheck }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-beauty-muted">
                  <item.icon className="w-4 h-4 text-beauty-primary shrink-0" />
                  <span className="text-xs md:text-sm font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Brand Story */}
        <section className="py-12 md:py-16">
          <div className="beauty-container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-beauty-sm border border-beauty-border group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1000" 
                  alt="Premium beauty clinic interior"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-6 leading-tight">
                  Perjalanan Kami
                </h2>
                <div className="space-y-4 text-sm md:text-base text-beauty-muted leading-relaxed">
                  <p>
                    Kami adalah sekumpulan desainer, developer, dan beauty enthusiast yang menyadari satu hal: banyak bisnis kecantikan luar biasa yang kesulitan menampilkan pesona mereka di dunia digital.
                  </p>
                  <p>
                    Dengan pengalaman bertahun-tahun membantu brand besar, kami memutuskan untuk membawa standar premium tersebut ke semua pelaku bisnis kecantikan. Mulai dari klinik lokal hingga brand skincare yang baru merintis, kami ingin memastikan identitas digital Anda memancarkan keindahan yang sama dengan layanan Anda.
                  </p>
                  <p>
                    Bagi kami, setiap detail warna, bentuk, dan kata di dalam website adalah representasi dari komitmen Anda terhadap pelanggan.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. Visual Values */}
        <section className="py-12 md:py-16 bg-beauty-surface border-y border-beauty-border">
          <div className="beauty-container max-w-6xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-10">
              Lebih dari Sekadar Template
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-xl border border-beauty-border shadow-beauty-sm flex flex-col items-center text-center hover:border-beauty-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-beauty-background flex items-center justify-center mb-4">
                    <val.icon className="w-5 h-5 text-beauty-primary" />
                  </div>
                  <span className="text-xs font-bold text-beauty-primary mb-1">{val.num}</span>
                  <h3 className="text-base font-bold text-beauty-foreground mb-2">{val.title}</h3>
                  <p className="text-xs text-beauty-muted leading-relaxed">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Beauty Business Use Case */}
        <section className="py-12 md:py-16">
          <div className="beauty-container max-w-6xl">
            <div className="text-center mb-10 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4">
                Untuk Bisnis Beauty yang Ingin Tampil Lebih Profesional
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.slice(0, 6).map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative rounded-2xl overflow-hidden border border-beauty-border shadow-beauty-sm bg-beauty-surface flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={cat.image || "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"} 
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-beauty-foreground mb-2 group-hover:text-beauty-primary transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-beauty-muted mb-4 flex-grow">
                      Solusi website terbaik untuk mempresentasikan keunggulan {cat.name.toLowerCase()} Anda kepada calon klien.
                    </p>
                    <Link 
                      to={`/templates?category=${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-xs font-semibold text-beauty-primary group-hover:text-beauty-foreground transition-colors"
                    >
                      Lihat Kategori <ChevronRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Confidence Section */}
        <section className="py-12 md:py-16 bg-beauty-background border-y border-beauty-border">
          <div className="beauty-container max-w-6xl text-center">
            <h2 className="text-xl md:text-2xl font-bold text-beauty-foreground mb-8">Kualitas yang Bisa Anda Percaya</h2>
            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {trustStatements.map((stmt, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-beauty-surface rounded-xl border border-beauty-border text-left"
                >
                  <CheckCircle2 className="w-5 h-5 text-beauty-primary shrink-0" />
                  <span className="text-sm font-semibold text-beauty-foreground">{stmt}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Process Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="beauty-container max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-beauty-foreground text-center mb-10">
              Mulai dari Template Sampai Website Siap Tampil
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-6 left-1/8 right-1/8 h-px bg-beauty-border" />
              
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative z-10 flex flex-col md:items-center text-left md:text-center p-4 bg-white md:bg-transparent rounded-xl border md:border-none border-beauty-border shadow-beauty-sm md:shadow-none"
                >
                  <div className="w-12 h-12 rounded-full bg-beauty-surface border border-beauty-border flex items-center justify-center font-bold text-beauty-primary mb-4 shrink-0 shadow-sm">
                    {step.num}
                  </div>
                  <h3 className="text-base font-bold text-beauty-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-beauty-muted">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Final CTA */}
        <section className="py-12 md:py-16 bg-beauty-background border-t border-beauty-border">
          <div className="beauty-container text-center max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
            >
              Brand Beauty Kamu Layak Tampil Lebih Premium.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-beauty-muted mb-8"
            >
              Ubah cara klien memandang bisnis Anda dengan template website yang elegan dan siap pakai.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button as={Link} to="/templates" variant="primary" size="lg" className="rounded-full shadow-beauty-md group">
                Jelajahi Template <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
