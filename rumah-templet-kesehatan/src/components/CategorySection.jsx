import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, User, Smile, HeartPulse } from 'lucide-react';
import { templateCategories } from '../data/categories.data';
import { CategoryCard } from './common/CategoryCard';

const iconMap = {
  Stethoscope,
  User,
  Smile,
  HeartPulse
};

const CategorySection = () => {
  return (
    <section className="py-12 md:py-14 lg:py-16 bg-white" id="kategori">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Temukan Template untuk <br className="md:hidden" /> Kebutuhan Kesehatan Anda
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jelajahi berbagai kategori desain yang disesuaikan secara khusus untuk menonjolkan keahlian dan layanan medis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {templateCategories.map((category, idx) => {
            const IconComponent = iconMap[category.iconName];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <CategoryCard
                  id={category.id}
                  label={category.label}
                  description={category.description}
                  icon={IconComponent}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
