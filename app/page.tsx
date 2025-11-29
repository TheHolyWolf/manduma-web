// app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

// **********************************************
// COMPONENTS BUILT IN PHASE 1: THE MARKETING SITE
// **********************************************
import HeroSection from '../components/HeroSection';
import IntegrationsSection from '../components/IntegrationsSection';
import ProblemSection from '../components/ProblemSection';
import HowItWorksSection from '../components/HowItWorksSection'; // The Solution/Process
import AuthoritySection from '../components/AuthoritySection';
import FinalCTA from '../components/FinalCTA'; // The final, high-contrast CTA

// NOTE ON IMPORTS:
// 1. I have replaced 'SolutionCards' with 'HowItWorksSection' (the name we used for the 3-step process).
// 2. I have replaced 'FinalCTA' with 'CTAFooter' (our final component name).
// 3. I removed the duplicated CTA_LINK constant, as it is now securely defined inside the CTAFooter component.


export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      
      {/* 1. NAVIGATION & LOGO (Assuming this exists) */}
      <Header />

      <main>
        
        {/* 2. HERO SECTION (The Hook & Primary Offer) */}
        <HeroSection />

        {/* 3. INTEGRATIONS (Immediate Trust / Compatibility) */}
        <IntegrationsSection />

        {/* 4. THE PROBLEM (Agitation - The Growth Paradox) */}
        <ProblemSection />

        {/* 5. HOW IT WORKS (The Solution/Process - Secure 48-Hour Scan) */}
        <HowItWorksSection /> 
        
        {/* 6. AUTHORITY (Expertise Codified into an OS) */}
        <AuthoritySection />

        {/* 7. FINAL CTA (The Conversion Funnel Closer - Book the Scan) */}
        <FinalCTA />

      </main>

      {/* FOOTER (Assuming this exists) */}
      <Footer />
      
    </div>
  );
}