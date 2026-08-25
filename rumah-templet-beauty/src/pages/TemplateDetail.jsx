import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, SearchX, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { TemplateCard } from "../components/ui/TemplateCard";
import { templates } from "../data/templates";

// Basic site config mockup since the user mentioned SITE_CONFIG
const SITE_CONFIG = {
  name: "Rumah Web Template",
  whatsappNumber: "6281234567890" // Placeholder
};

const WA_LINK = (templateName) => {
  const message = encodeURIComponent(`Halo, saya tertarik dengan template ${templateName}. Saya ingin mendapatkan informasi lebih lanjut.`);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`;
};

export function TemplateDetail() {
  const { slug } = useParams();
  
  // Find template
  const template = templates.find(t => t.slug === slug);

  // NOT FOUND STATE
  if (!template) {
    return (
      <div className="min-h-screen bg-beauty-background font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow pt-[72px] flex items-center justify-center py-20">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 rounded-full bg-beauty-surface border border-beauty-border flex items-center justify-center text-beauty-muted mx-auto mb-6">
              <SearchX className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold text-beauty-foreground mb-3">
              Template Tidak Ditemukan
            </h2>
            <p className="text-sm text-beauty-muted mb-8">
              Template yang Anda cari tidak tersedia atau mungkin sudah dipindahkan.
            </p>
            <Button as={Link} to="/templates" variant="primary" className="rounded-full">
              Kembali ke Katalog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // SEO Update
  // In a real app this would be in a useEffect, but we'll set it here safely
  if (typeof document !== 'undefined') {
    document.title = `${template.title} | ${SITE_CONFIG.name}`;
  }

  // Related Templates
  const relatedTemplates = templates
    .filter(t => t.categoryId === template.categoryId && t.id !== template.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-beauty-background font-sans flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-[72px]">
        {/* Breadcrumb */}
        <div className="border-b border-beauty-border bg-beauty-surface">
          <div className="beauty-container py-3">
            <nav className="flex items-center text-xs md:text-sm font-medium text-beauty-muted overflow-x-auto whitespace-nowrap scrollbar-hide">
              <Link to="/" className="hover:text-beauty-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beauty-primary/50 rounded px-1 -ml-1 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 mx-1 md:mx-2 shrink-0" />
              <Link to="/templates" className="hover:text-beauty-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beauty-primary/50 rounded px-1 transition-colors">Templates</Link>
              <ChevronRight className="w-3.5 h-3.5 mx-1 md:mx-2 shrink-0" />
              <span className="text-beauty-foreground line-clamp-1">{template.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-8 md:py-12 lg:py-16">
          <div className="beauty-container max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              
              {/* Image Preview (Left) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-beauty-border shadow-beauty-md bg-beauty-surface group"
              >
                <img 
                  src={template.image} 
                  alt={`Preview of ${template.title}`}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </motion.div>

              {/* Product Info (Right) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <Badge variant="outline">{template.categoryName}</Badge>
                  {template.isPremium && <Badge variant="premium">Premium</Badge>}
                  {template.isNew && <Badge variant="new">New</Badge>}
                  <div className="flex items-center gap-1 text-beauty-accent ml-2 text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    {template.rating}
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-beauty-foreground mb-4 leading-tight">
                  {template.title}
                </h1>
                
                <p className="text-sm md:text-base text-beauty-muted mb-8 leading-relaxed">
                  {template.description}
                </p>

                <div className="p-6 rounded-xl bg-white border border-beauty-border shadow-sm mb-8">
                  <p className="text-xs font-bold text-beauty-muted uppercase tracking-wider mb-1">Mulai Dari</p>
                  <div className="text-3xl md:text-4xl font-bold text-beauty-foreground">
                    Rp {template.price ? template.price.toLocaleString("id-ID") : "Hubungi untuk Detail"}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button 
                    as="a" 
                    href={WA_LINK(template.title)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="primary" 
                    size="lg" 
                    className="rounded-full shadow-beauty-md w-full sm:flex-1"
                  >
                    Gunakan Template Ini
                  </Button>
                  
                  {template.demoUrl ? (
                    <Button 
                      as="a" 
                      href={template.demoUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline" 
                      size="lg" 
                      className="rounded-full w-full sm:flex-1"
                    >
                      Lihat Demo
                    </Button>
                  ) : (
                    <Button 
                      disabled
                      variant="outline" 
                      size="lg" 
                      className="rounded-full w-full sm:flex-1 opacity-60 cursor-not-allowed"
                    >
                      Demo Segera Hadir
                    </Button>
                  )}
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Features / What's Included */}
        <section className="py-12 md:py-16 bg-beauty-surface border-y border-beauty-border">
          <div className="beauty-container max-w-6xl">
            
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left: Why this template */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-beauty-foreground mb-4">Kenapa Template Ini?</h2>
                <p className="text-sm md:text-base text-beauty-muted mb-6 leading-relaxed">
                  Dirancang secara presisi untuk bisnis yang bergerak di bidang <strong className="text-beauty-foreground font-semibold">{template.categoryName}</strong>. 
                  Sangat cocok untuk studio kecantikan, klinik, atau layanan treatment yang ingin tampil elegan, modern, dan mudah dipercaya sejak kunjungan pertama.
                </p>
                <div className="p-5 bg-beauty-primary/5 border border-beauty-primary/10 rounded-xl">
                  <p className="text-sm text-beauty-primary font-medium italic">
                    "Fokus pada karya Anda, biarkan website ini yang memukau calon klien Anda."
                  </p>
                </div>
              </motion.div>

              {/* Right: What's included */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-beauty-foreground mb-6">Yang Anda Dapatkan</h2>
                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                  {template.features && template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-beauty-border rounded-xl shadow-beauty-sm">
                      <CheckCircle2 className="w-5 h-5 text-beauty-primary shrink-0" />
                      <span className="text-sm font-semibold text-beauty-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 bg-beauty-background">
          <div className="beauty-container text-center max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4"
            >
              Siap Membuat Website Beauty Anda?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm md:text-base text-beauty-muted mb-8"
            >
              Mulai dari template yang sudah dirancang secara visual, lalu sesuaikan dengan karakter brand Anda bersama tim kami.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button as="a" href={WA_LINK(template.title)} target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="rounded-full shadow-beauty-md">
                Gunakan Template Ini
              </Button>
              <Button as={Link} to="/templates" variant="outline" size="lg" className="rounded-full">
                Kembali ke Katalog
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Related Templates */}
        {relatedTemplates.length > 0 && (
          <section className="py-12 md:py-16 bg-beauty-surface border-t border-beauty-border">
            <div className="beauty-container">
              <h2 className="text-xl md:text-2xl font-bold text-beauty-foreground mb-8">
                Template Lain yang Mungkin Anda Suka
              </h2>
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {relatedTemplates.map((relTemplate, idx) => (
                  <TemplateCard key={relTemplate.id} template={relTemplate} index={idx} />
                ))}
              </motion.div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}
