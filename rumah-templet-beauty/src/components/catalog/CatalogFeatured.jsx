import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { templates } from "../../data/templates";

export function CatalogFeatured() {
  // Grab the first featured template (e.g., isPremium or highest sales)
  const featured = [...templates].sort((a, b) => b.sales - a.sales)[0];

  if (!featured) return null;

  return (
    <section className="py-8 md:py-12 bg-beauty-background">
      <div className="beauty-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-beauty-border shadow-beauty-md flex flex-col md:flex-row bg-beauty-surface"
        >
          {/* Image Side */}
          <div className="w-full md:w-3/5 lg:w-2/3 aspect-[4/3] md:aspect-auto md:min-h-[400px] relative">
            <img 
              src={featured.image} 
              alt={featured.title}
              className="w-full h-full object-cover object-top"
            />
            {/* Optional Overlay gradient for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:from-transparent to-transparent md:bg-none"></div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-2/5 lg:w-1/3 p-6 md:p-8 flex flex-col justify-center -mt-16 md:mt-0 relative z-10 bg-beauty-surface/95 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none rounded-t-2xl md:rounded-t-none">
            <p className="text-xs font-bold uppercase tracking-wider text-beauty-primary mb-3">
              Featured • {featured.categoryName}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-beauty-foreground mb-4">
              {featured.title}
            </h3>
            <p className="text-sm text-beauty-muted mb-8 leading-relaxed italic font-serif">
              "Elegant digital experience for modern beauty businesses."
            </p>
            
            <a 
              href={`/templates/${featured.slug}`}
              className="group inline-flex items-center justify-center gap-2 bg-beauty-foreground text-white px-6 py-3 rounded-full text-sm font-bold transition-all hover:bg-beauty-foreground/90 w-full md:w-auto mt-auto md:mt-0"
            >
              View Template
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
