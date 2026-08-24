import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Card, CardContent } from './Card';

export const CategoryCard = ({ 
  id, 
  label, 
  description, 
  icon: Icon,
  className 
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/template?category=${id}`} className="block h-full group">
        <Card className={cn("h-full transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md", className)}>
          <CardContent className="p-6 flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
              {Icon && <Icon size={32} strokeWidth={1.5} />}
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                {label}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};
