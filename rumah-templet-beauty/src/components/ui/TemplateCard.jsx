import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Eye } from "lucide-react";
import { Badge } from "./Badge";
import { Button } from "./Button";

export function TemplateCard({ template, index }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4 }}
      className="group flex flex-col bg-beauty-surface border border-beauty-border rounded-2xl overflow-hidden shadow-beauty-sm hover:shadow-beauty-md transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-beauty-background">
        <img
          src={template.image}
          alt={template.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {template.isPremium && <Badge variant="premium">Premium</Badge>}
          {template.isNew && <Badge variant="new">New</Badge>}
        </div>

        {template.demoUrl && (
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-white/20">
            Live Preview
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:flex items-end justify-center pb-4 px-4 gap-2">
          <Button 
            variant="primary" 
            as={Link} 
            to={`/preview/${template.slug}`} 
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 rounded-full shadow-beauty-md text-xs py-2 px-3.5 flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            Live Preview
          </Button>
          <Button 
            variant="outline" 
            as={Link} 
            to={`/templates/${template.slug}`} 
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 rounded-full bg-white/90 hover:bg-white text-beauty-foreground border-transparent text-xs py-2 px-3.5"
          >
            Detail
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="mb-2">{template.categoryName}</Badge>
          <div className="flex items-center gap-1 text-beauty-accent">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-medium text-beauty-foreground">{template.rating}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-beauty-foreground mb-2 group-hover:text-beauty-primary transition-colors">
          <Link to={`/templates/${template.slug}`}>
            {template.title}
          </Link>
        </h3>
        
        <p className="text-sm text-beauty-muted line-clamp-2 mb-4 flex-grow">
          {template.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-beauty-border mt-auto">
          <span className="font-semibold text-beauty-foreground text-sm">
            Rp {template.price.toLocaleString("id-ID")}
          </span>
          <div className="flex items-center gap-2">
            <Link 
              to={`/preview/${template.slug}`} 
              className="text-xs text-beauty-primary font-medium hover:underline flex items-center gap-1 lg:hidden"
            >
              <Eye className="w-3.5 h-3.5" /> Preview
            </Link>
            <Button variant="ghost" size="sm" as={Link} to={`/templates/${template.slug}`} className="p-0 hover:bg-transparent lg:hidden group/btn">
              Detail <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
