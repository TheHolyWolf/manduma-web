// components/RevealOnScroll.tsx
'use client'; 

import { motion, useScroll, useTransform } from 'framer-motion'; // 👈 CHANGED IMPORTS
import { ReactNode, useRef } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  yRange?: number[]; // [start_y_offset, end_y_offset]
  opacityRange?: number[]; // [start_opacity, end_opacity]
}

// We are no longer using useInView. The animation is driven by the scroll position.

export default function RevealOnScroll({ 
  children, 
  yRange = [50, 0],       // Default: start 50px lower, end at 0px
  opacityRange = [0, 1],  // Default: start transparent, end opaque
}: RevealOnScrollProps) {
  
  const ref = useRef<HTMLDivElement>(null);

  // 1. Hook the component's scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    // Define when the animation starts and ends relative to the viewport.
    // start: 'start end' means the animation begins when the top of the target hits the bottom of the viewport.
    // end: 'start 70%' means the animation ends when the top of the target is 70% down the viewport.
    offset: ['start end', 'start 70%'], 
  });
  
  // 2. Map the scroll progress (0 to 1) to the desired CSS properties
  
  // Maps scroll progress to the Y position (e.g., 0 -> 50, 1 -> 0)
  const y = useTransform(scrollYProgress, [0, 1], yRange); 
  
  // Maps scroll progress to the Opacity (e.g., 0 -> 0, 1 -> 1)
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange); 

  return (
    <motion.div
      ref={ref}
      // Apply the scroll-driven style properties directly
      style={{ y, opacity }} 
    >
      {children}
    </motion.div>
  );
}