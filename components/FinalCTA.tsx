import { Zap, ArrowRight, Shield } from 'lucide-react';

// NOTE: Ensure your correct Calendly link is here
const CTA_LINK = "https://calendly.com/boulazragyoussef/30min"; 

export default function FinalCTA() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Main Pitch: Highlighting the immediate, next step */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-700 text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          Stop Guessing. Start Growing.
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to discover your exact margin leaks?
        </h2>

        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
          It takes <strong>30 minutes</strong> to set up the Free Scan. You will have your customized Health Score 
          and Leak Map within 48 hours. No obligation.
        </p>

        {/* The Final Button (Uses <a> tag for external Calendly link) */}
        <a 
          href={CTA_LINK} 
          target="_blank" // Opens Calendly in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-500 text-lg text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/30 transform hover:scale-[1.02]"
        >
          Book Your 30-Minute Free Scan
          <ArrowRight className="w-5 h-5" />
        </a>

        {/* Final Trust Signal */}
        <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
            <Shield className="w-4 h-4" />
            <span>Guaranteed Data Privacy. We use read-only access.</span>
        </div>

      </div>
    </section>
  );
}