import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Komponen pembungkus untuk membuat efek parallax saat di-scroll.
 * Semakin besar speed, semakin cepat elemen bergerak.
 * Nilai speed negatif akan membalikkan arah pergerakan.
 */
export function Parallax({ children, className, speed = 1, rotation = 0 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50 * speed, -50 * speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotation]);

  return (
    <motion.div ref={ref} style={{ y, rotate }} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Komponen objek melayang (bisa di-scroll dan punya animasi idle)
 * Dirancang dengan tema "Beauty" (Soft colors, blur, atau line art)
 */
export function FloatingOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <Parallax speed={1.5} className="absolute top-20 left-[10%] opacity-40">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 bg-beauty-primary/20 rounded-full blur-[80px]"
        />
      </Parallax>

      <Parallax speed={-0.8} className="absolute top-[40%] right-[10%] opacity-30">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-96 h-96 bg-beauty-accent/20 rounded-full blur-[100px]"
        />
      </Parallax>
      
      <Parallax speed={2} rotation={45} className="absolute bottom-[20%] left-[30%] opacity-20">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 rounded-[40%] border border-beauty-primary/50"
        />
      </Parallax>
    </div>
  );
}
