import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { templates } from "../../data/templates";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function FeaturedTemplates() {
  const featured = templates.slice(0, 3);
  const mainFeatured = featured[0];
  const secondaryFeatured = featured.slice(1);

  return (
    <section className="py-14 md:py-20 bg-beauty-surface border-y border-beauty-border">
      <div className="beauty-container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-beauty-foreground mb-4 leading-tight"
          >
            Template yang Dibuat untuk Membuat Brand Beauty Terlihat Lebih Mahal
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-base text-beauty-muted max-w-xl mx-auto"
          >
            Mulai dari salon, skincare, makeup, spa, hingga personal beauty brand — pilih fondasi website yang sudah dirancang untuk tampil profesional.
          </motion.p>
        </div>

        {/* Asymmetric Product Showcase */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* LEFT: Large Featured Template */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col group"
          >
            <a href={`/templates/${mainFeatured.slug}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-beauty-background border border-beauty-border mb-4">
              <motion.img 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={mainFeatured.image} 
                alt={mainFeatured.title} 
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-4 left-4 flex gap-2">
                {mainFeatured.isPremium && <Badge variant="premium">Premium</Badge>}
                <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-none shadow-sm">{mainFeatured.categoryName}</Badge>
              </div>

              {/* Subtle hover overlay CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 self-end">
                  <Button variant="primary" size="sm" className="rounded-full shadow-beauty-md">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            </a>
            
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-beauty-foreground mb-1 group-hover:text-beauty-primary transition-colors">
                  {mainFeatured.title}
                </h3>
                <p className="text-sm text-beauty-muted max-w-md line-clamp-2">
                  {mainFeatured.description}
                </p>
              </div>
              <div className="flex items-center gap-1 bg-beauty-background px-2.5 py-1 rounded-md border border-beauty-border">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                <span className="text-xs font-bold text-beauty-foreground">{mainFeatured.rating}</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Secondary Templates */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {secondaryFeatured.map((template, idx) => (
              <motion.div 
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (idx * 0.1) }}
                className="group flex flex-col sm:flex-row lg:flex-col gap-4"
              >
                <a href={`/templates/${template.slug}`} className="block relative w-full sm:w-1/2 lg:w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-[16/9] rounded-xl overflow-hidden bg-beauty-background border border-beauty-border shrink-0">
                  <motion.img 
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    src={template.image} 
                    alt={template.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="outline" className="bg-white/90 backdrop-blur-sm border-none shadow-sm text-[10px] py-0.5 px-2">
                      {template.categoryName}
                    </Badge>
                  </div>
                </a>
                
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-beauty-foreground mb-1 group-hover:text-beauty-primary transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-beauty-muted line-clamp-2 mb-3">
                    {template.description}
                  </p>
                  <a href={`/templates/${template.slug}`} className="text-xs font-bold text-beauty-primary flex items-center group-hover:text-beauty-accent transition-colors">
                    Lihat Template <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
