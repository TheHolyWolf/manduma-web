// components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
// NOTE: Ensure your correct Calendly link is here
const CTA_LINK = "https://calendly.com/boulazragyoussef/30min";

export default function Header() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/MandumaLogo.svg" // 👈 CHANGE THIS PATH
              alt="Manduma Business Health OS Logo"
              width={36} 
              height={36} 
            />
            {/* The text is optional now, but nice for visual assurance */}
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                Manduma<span className="text-purple-600">.</span>
            </span>
        </Link>
          

        
        {/* Dynamic Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#problem" className="hover:text-blue-600 transition">The Paradox</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">The 48-Hour Scan</a>
          <a href="#authority" className="hover:text-blue-600 transition">The Protocol</a>
        </div>
        
        {/* CTA Button */}
        <a 
          href={CTA_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition shadow-lg shadow-blue-600/20"
        >
          Book Free Scan
        </a>
      </div>
    </nav>
  );
}