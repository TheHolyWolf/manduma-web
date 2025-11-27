// components/HeroSection.tsx
import Link from 'next/link';

const CTA_LINK = "https://calendly.com/boulazragyoussef/30min"; 

export default function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-3 py-1 mb-8">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">New</span>
            <span className="text-xs text-blue-800">For agencies 20–100 FTE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
            Where the hell is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">money going?</span>
          </h1>

          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Revenue looks fine on paper, but profit and cash are volatile. We find your top 3 margin & cash leaks in 48 hours—using your existing tools.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href={CTA_LINK} className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full transition shadow-xl shadow-blue-600/20">
              Get Free Business Health Scan
            </a>
            <p className="text-sm text-slate-500 mt-4 sm:mt-0">No new software. No commitment.</p>
          </div>
        </div>
      </section>
  );
}