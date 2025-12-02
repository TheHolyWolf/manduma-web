// app/page.tsx
'use client'; // FIX: Mark the root page as a client component to allow dynamic imports with ssr: false

import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RevealOnScroll from '../components/RevealOnScroll';

// **********************************************
// DYNAMIC IMPORTS: Lazy-load components to improve performance
// **********************************************
import HeroSection from '../components/HeroSection'; 

// Use dynamic() wrapper for components that use client-side logic (RevealOnScroll)
const DynamicIntegrationsSection = dynamic(() => import('../components/IntegrationsSection'), { ssr: false });
const DynamicProblemSection = dynamic(() => import('../components/ProblemSection'), { ssr: false });
const DynamicHowItWorksSection = dynamic(() => import('../components/HowItWorksSection'), { ssr: false });
const DynamicAuthoritySection = dynamic(() => import('../components/AuthoritySection'), { ssr: false });
const DynamicFinalCTA = dynamic(() => import('../components/FinalCTA'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      
      {/* 1. NAVIGATION & LOGO */}
      <Header />

      <main>
        
        {/* 2. HERO SECTION (Has its own framer-motion stagger animation) */}
        <HeroSection />

        {/* 3. INTEGRATIONS - LAZY LOADED & ANIMATED (Using Parallax defaults) */}
        <RevealOnScroll>
            <DynamicIntegrationsSection />
        </RevealOnScroll>

        {/* 4. THE PROBLEM - LAZY LOADED & ANIMATED (Using Parallax defaults) */}
        <RevealOnScroll>
            <DynamicProblemSection />
        </RevealOnScroll>

        {/* 5. HOW IT WORKS - LAZY LOADED & ANIMATED (Using Parallax defaults) */}
        <RevealOnScroll>
            <DynamicHowItWorksSection /> 
        </RevealOnScroll>
        
        {/* 6. AUTHORITY - LAZY LOADED & ANIMATED (Using Parallax defaults) */}
        <RevealOnScroll>
            <DynamicAuthoritySection />
        </RevealOnScroll>

        {/* 7. FINAL CTA - LAZY LOADED & ANIMATED (Using Parallax defaults) */}
        <RevealOnScroll>
            <DynamicFinalCTA />
        </RevealOnScroll>

      </main>

      {/* FOOTER (Assuming this exists) */}
      <Footer />
      
    </div>
  );
}