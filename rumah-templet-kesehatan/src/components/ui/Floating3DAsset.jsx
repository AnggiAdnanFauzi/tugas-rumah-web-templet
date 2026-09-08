import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../utils/cn';

const SvgAssets = {
  pill: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pill-top" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F87171" />
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="pill-bottom" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1F5F9" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="8" stdDeviation="6" floodOpacity="0.2" />
        </filter>
        <linearGradient id="glass" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="white" stopOpacity="0.8" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g filter="url(#shadow)" transform="rotate(45 50 50)">
        <path d="M 30,50 A 20,20 0 0,1 70,50 L 70,50 L 30,50 Z" fill="url(#pill-top)" />
        <path d="M 30,50 A 20,20 0 0,0 70,50 L 70,50 L 30,50 Z" fill="url(#pill-bottom)" />
        {/* Reflection */}
        <path d="M 35,45 A 12,12 0 0,1 65,45 A 15,15 0 0,0 35,45 Z" fill="url(#glass)" />
      </g>
    </svg>
  ),
  cross: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cross-grad" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <filter id="shadow-cross">
          <feDropShadow dx="4" dy="10" stdDeviation="8" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#shadow-cross)">
        <path d="M35 20 H65 V35 H80 V65 H65 V80 H35 V65 H20 V35 H35 V20Z" fill="url(#cross-grad)" rx="5" />
        {/* 3D Edge Highlight */}
        <path d="M35 20 H65 V35 H80 V37 H65 V67 H35 V67 H20 V37 H35 V20Z" fill="white" fillOpacity="0.3" />
      </g>
    </svg>
  ),
  dna: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dna-1" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#38BDF8" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <linearGradient id="dna-2" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#818CF8" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>
        <filter id="shadow-dna">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#shadow-dna)">
        <path d="M 30,20 Q 50,50 30,80" stroke="url(#dna-1)" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M 70,20 Q 50,50 70,80" stroke="url(#dna-2)" strokeWidth="8" strokeLinecap="round" fill="none" />
        <circle cx="30" cy="20" r="8" fill="url(#dna-1)" />
        <circle cx="70" cy="80" r="8" fill="url(#dna-2)" />
        <circle cx="70" cy="20" r="8" fill="url(#dna-2)" />
        <circle cx="30" cy="80" r="8" fill="url(#dna-1)" />
        <line x1="38" y1="35" x2="62" y2="35" stroke="#CBD5E1" strokeWidth="4" />
        <line x1="45" y1="50" x2="55" y2="50" stroke="#94A3B8" strokeWidth="4" />
        <line x1="38" y1="65" x2="62" y2="65" stroke="#CBD5E1" strokeWidth="4" />
      </g>
    </svg>
  ),
  sphere: (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sphere-grad" cx="30" cy="30" r="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDF4FF" />
          <stop offset="0.3" stopColor="#C084FC" />
          <stop offset="1" stopColor="#7E22CE" />
        </radialGradient>
        <filter id="shadow-sphere">
          <feDropShadow dx="5" dy="15" stdDeviation="10" floodOpacity="0.4" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="35" fill="url(#sphere-grad)" filter="url(#shadow-sphere)" />
    </svg>
  )
};

export const Floating3DAsset = ({
  type = 'pill',
  className,
  parallaxFactor = 0.2, // Positive goes down, negative goes up on scroll
  rotateFactor = 1, // Positive rotates right
  baseScale = 1
}) => {
  const { scrollYProgress } = useScroll();
  
  // Maps scroll progress to vertical transform
  const y = useTransform(scrollYProgress, [0, 1], [0, parallaxFactor * 1000]);
  // Maps scroll progress to rotation
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotateFactor * 360]);

  return (
    <motion.div
      className={cn("absolute pointer-events-none z-0", className)}
      style={{
        y,
        rotate,
        scale: baseScale
      }}
    >
      {SvgAssets[type] || SvgAssets.sphere}
    </motion.div>
  );
};
