// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        
        {/* Manduma Logo & Description */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                  src="/MandumaLogo.svg" // 👈 Assuming path is /public/logos/manduma-logo.svg
                  alt="Manduma Business Health OS Logo"
                  width={30} 
                  height={30} 
              />
              <span className="text-2xl font-bold text-white">Manduma<span className="text-purple-600">.</span></span>
          </Link>
          <p className="mt-4 text-sm max-w-xs">
            The Business Health OS for service companies. Finding and fixing margin & cash leaks.
          </p>
        </div>
        
        {/* Company Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#problem" className="hover:text-white transition">Our Vision</a></li>
            <li><a href="#authority" className="hover:text-white transition">The Protocol</a></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        
        {/* Legal Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 text-center text-xs border-t border-slate-800 pt-8 mt-4">
        &copy; {currentYear} Manduma. All rights reserved.
      </div>
    </footer>
  );
}