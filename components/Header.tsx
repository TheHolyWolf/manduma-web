// components/Header.tsx
import Link from 'next/link';

// NOTE: Ensure your correct Calendly link is here
const CTA_LINK = "https://calendly.com/boulazragyoussef/30min";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tighter text-blue-900">
          Manduma<span className="text-blue-500">.</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#problem" className="hover:text-blue-600 transition">The Problem</a>
          <a href="#solution" className="hover:text-blue-600 transition">The Scan</a>
          <a href="#team" className="hover:text-blue-600 transition">Expert Guild</a>
        </div>
        <a href={CTA_LINK} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition shadow-lg shadow-blue-600/20">
          Book Free Scan
        </a>
      </div>
    </nav>
  );
}