import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import DarkShowcase from '../components/DarkShowcase';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      <BentoGrid />
      <Timeline />
      <DarkShowcase />
      <FAQ />
    </div>
  );
};

export default Home;
