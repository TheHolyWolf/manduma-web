// components/HeroSection.tsx
'use client'; // 👈 FIX: This directive tells Next.js to render this component in the browser

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Define animation variants for a clean stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      
      {/* Background decoration (The "Tech" feel) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />
      </div>

      {/* ⚠️ ANIMATED CONTAINER WRAPPER */}
      <motion.div 
        className="container mx-auto px-4 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* The Badge - Animated */}
        <motion.div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-8"
            variants={itemVariants}
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          Accepting Early Design Partners
        </motion.div>

        {/* The Headline - Animated */}
        <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6"
            variants={itemVariants}
        >
          The Business Health <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Operating System
          </span>
        </motion.h1>

        {/* The Subhead - Animated */}
        <motion.p 
            className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
        >
          For Businesses (20–100 FTE). <br />
          Stop asking <b>"Where is the money going?" </b> <br />
          We connect to your data to find your top margin & cash leaks in <b>48 hours</b>.
        </motion.p>

        {/* The Action Buttons - Animated */}
        <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
        >
          <Link 
            href="https://calendly.com/boulazragyoussef/30min" 
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20"
          >
            Get Your Free Scan
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link 
            href="#how-it-works" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all"
          >
            How it works
          </Link>
        </motion.div>

        {/* Trust Signals / Micro-features - Animated */}
        <motion.div 
            className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-slate-500"
            variants={itemVariants}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Connects to Xero/QuickBooks</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>No new dashboard setup</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>100% Data Privacy</span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}