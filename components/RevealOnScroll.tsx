// components/RevealOnScroll.tsx
'use client';

import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number; // Optional delay for the animation start
  duration?: number; // Optional duration of the animation
  yOffset?: number; // Distance the element slides up from
}

// Animation variants for the slide-up/fade-in effect
const variants: Variants = {
  hidden: (y: number) => ({ 
    opacity: 0, 
    y: y,
    transition: { ease: "easeOut" }
  }),
  visible: (duration: number) => ({ 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: duration, 
      ease: "easeOut",
      staggerChildren: 0.1, // If the child itself uses motion components
    }
  }),
};


export default function RevealOnScroll({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  yOffset = 50 
}: RevealOnScrollProps) {
  
  const ref = useRef(null);
  // useInView tracks if the component is currently visible in the viewport
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" }); 
  
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Start the animation when the element enters the view
      const timer = setTimeout(() => {
        controls.start("visible");
      }, delay * 1000); // Convert delay from seconds to milliseconds

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      custom={yOffset} // Pass yOffset to the hidden state variant
      // Pass duration to the visible state variant
      // The overall opacity fade is part of the 'variants' definitions
    >
      {children}
    </motion.div>
  );
}