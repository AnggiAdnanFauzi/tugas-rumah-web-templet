import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, CheckCircle2, MessageCircle, ExternalLink, SearchX, ShieldCheck } from 'lucide-react';
import { templatesData } from '../data/templates.data';
import { WA_LINK, SITE_CONFIG } from '../config/site';
import { Button } from '../components/common/Button';
import { Card, CardContent } from '../components/common/Card';
import { Badge } from '../components/common/Badge';

const TemplateDetail = () => {
  const { slug } = useParams();
  
  const template = templatesData.find(t => t.slug === slug);
  
  useEffect(() => {
    if (template) {
      document.title = `${template.title} | ${SITE_CONFIG.name}`;
    } else {
      document.title = `Template Tidak Ditemukan | ${SITE_CONFIG.name}`;
    }
    
    // Cleanup function
    return () => {
      document.title = `${SITE_CONFIG.name} — Spesialis Website Kesehatan`;
    };
  }, [template]);

  // Handle Not Found State
  if (!template) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center max-w-lg">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-3xl border border-border shadow-sm flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
              <SearchX size={40} className="text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">Template Tidak Ditemukan</h1>
            <p className="text-muted-foreground mb-8">
              Maaf, template dengan url <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{slug}</code> tidak tersedia atau telah dihapus.
            </p>
            <Button to="/template" variant="primary" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Kembali ke Katalog
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  const { title, categoryLabel, description, thumbnail, demoUrl, features, status } = template;
  const isComingSoon = status === 'coming-soon';

  const waMessage = `Halo, saya tertarik dengan template *${title}*. Saya ingin mendapatkan informasi lebih lanjut mengenai pembuatan website untuk fasilitas kesehatan saya.`;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
        >
          <Link to="/template" className="hover:text-primary transition-colors">
            Katalog
          </Link>
          <ChevronRight size={14} className="text-muted-foreground flex-shrink-0" />
          <span className="text-foreground font-medium line-clamp-1">{title}</span>
        </motion.div>

        {/* Hero Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-5 items-start mb-12">
          
          {/* Left: Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative rounded-2xl overflow-hidden border border-border shadow-sm bg-white aspect-[4/3] flex items-center justify-center group"
          >
            {thumbnail ? (
              <img 
                src={thumbnail} 
                alt={`Preview ${title}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
            ) : (
              <span className="text-muted-foreground">Tidak Ada Gambar</span>
            )}
            
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge variant="primary" className="shadow-sm backdrop-blur-sm bg-primary/90">{categoryLabel}</Badge>
              {isComingSoon && (
                <Badge variant="secondary" className="shadow-sm backdrop-blur-sm bg-secondary/90 text-secondary-foreground border-none">Coming Soon</Badge>
              )}
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col h-full"
          >
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              {description}
            </p>

            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 mb-8 flex items-start gap-4">
              <ShieldCheck size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Website Siap untuk Layanan Kesehatan</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Semua template kami dibangun mengutamakan keamanan standar, aksesibilitas, dan performa tinggi untuk institusi kesehatan modern.
                </p>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Button 
                href={WA_LINK(waMessage)} 
                target="_blank" 
                rel="noopener noreferrer"
                variant="primary" 
                className="flex-1 flex items-center justify-center gap-2 py-4 shadow-md"
              >
                <MessageCircle size={18} />
                Konsultasi via WA
              </Button>
              
              {demoUrl ? (
                <Button 
                  href={demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="outline" 
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-white"
                >
                  Lihat Demo
                  <ExternalLink size={18} />
                </Button>
              ) : (
                <Button 
                  disabled
                  variant="outline" 
                  className="flex-1 flex items-center justify-center gap-2 py-4 opacity-50 cursor-not-allowed bg-muted/30"
                >
                  Demo Segera Hadir
                </Button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Feature Section */}
        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground tracking-tight">Fitur Template</h2>
              <p className="text-muted-foreground mt-2">Daftar kapabilitas bawaan dari desain ini.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <Card key={idx} className="bg-white hover:border-primary/30 transition-colors shadow-sm">
                  <CardContent className="p-4 sm:p-5 flex items-start gap-4">
                    <div className="bg-secondary/10 p-2.5 rounded-xl text-secondary flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-foreground text-sm sm:text-base font-medium leading-relaxed mt-1">
                      {feature}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Back to Catalog CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-border pt-10 flex justify-center md:justify-start"
        >
          <Button variant="outline" to="/template" className="flex items-center gap-2 px-6">
            <ArrowLeft size={16} />
            Kembali ke Katalog
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default TemplateDetail;
