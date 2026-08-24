import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';

const TemplateCard = ({ template }) => {
  const { slug, title, categoryLabel, description, thumbnail, features, status } = template;

  const isComingSoon = status === 'coming-soon';

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-primary/30 group">
      {/* Thumbnail Container */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={`Thumbnail untuk ${title}`} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            No Image
          </div>
        )}
        
        {isComingSoon && (
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="shadow-lg backdrop-blur-md bg-secondary/90 text-secondary-foreground border-none">
              Coming Soon
            </Badge>
          </div>
        )}
      </div>

      {/* Content Container */}
      <CardContent className="p-5 flex flex-col flex-grow">
        <div className="mb-4">
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">
            {categoryLabel}
          </span>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features List */}
        {features && features.length > 0 && (
          <ul className="mb-6 space-y-2 mt-auto">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                <Check size={14} className="text-secondary flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
            {features.length > 3 && (
              <li className="text-xs text-muted-foreground italic ml-6">
                + {features.length - 3} fitur lainnya
              </li>
            )}
          </ul>
        )}

        {/* CTA */}
        <div className="mt-auto pt-4 border-t border-border">
          <Button 
            to={`/template/${slug}`} 
            variant={isComingSoon ? "outline" : "primary"}
            className="w-full group/btn flex items-center justify-center gap-2"
          >
            Lihat Detail
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
