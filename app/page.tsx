import Link from 'next/link';

// 1. IMPORT YOUR COMPONENTS HERE :
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import IntegrationsSection from '../components/IntegrationsSection';
import ProblemSection from '../components/ProblemSection';
import SolutionCards from '../components/SolutionCards';
import AuthoritySection from '../components/AuthoritySection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';


const CTA_LINK = "https://calendly.com/boulazragyoussef/30min"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* 1. NAVIGATION & LOGO */}
      
      <Header />

      {/* 2. HERO SECTION (The Hook) */}
      
      <HeroSection />

      {/* 3. VISUAL CREDIBILITY (Integrations) */}
      
      <IntegrationsSection />

      {/* 4. THE PROBLEM (Agitation) */}
      
      <ProblemSection />

      {/* 5. THE SOLUTION (The Scan) - New Component */}
      <SolutionCards />

      {/* 6. TEAM / AUTHORITY - New Component */}
      <AuthoritySection />

      {/* 7. FINAL CTA - New Component */}
      <FinalCTA />

      {/* FOOTER - New Component */}
      <Footer />
      
    </div>
  );
}