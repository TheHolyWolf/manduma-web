// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';

// Standard SVG for an Email Icon
const MailIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="w-5 h-5 text-slate-400 hover:text-white transition-colors duration-200"
    >
        <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
        <path d="M22 6L12 13 2 6"></path>
    </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 md:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        
        {/* Manduma Logo & Description */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                  src="/MandumaLogo.svg" // Assuming this is correct for your logo
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
            <li><Link href="mailto:team@manduma.com" className="hover:text-white transition">Contact Us</Link></li>
            
            {/* Social Icons (New Section) */}
            <li className="pt-4 flex space-x-4">
                {/* 1. Email Link */}
                <Link href="mailto:team@manduma.com" target="_blank" rel="noopener noreferrer" aria-label="Email Manduma">
                    <MailIcon />
                </Link>
                
                {/* 2. LinkedIn Link */}
                <Link 
                    href="https://www.linkedin.com/company/manduma/?originalSubdomain=ma" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Manduma LinkedIn Page"
                >
                    <Image 
                        src="/LinkedIn.svg" 
                        alt="LinkedIn Logo"
                        width={20}
                        height={20}
                        // Note: For custom SVGs, the hover color (text-slate-400/hover:text-white) 
                        // only works if the SVG's fill/stroke is set to "currentColor".
                        className="text-slate-400 hover:text-white transition-colors duration-200" 
                    />
                </Link>
                
                {/* 3. Telegram Bot Link */}
                <Link 
                    href="https://t.me/Manduma_bot" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Manduma Telegram Bot"
                >
                    <Image 
                        src="/AiBot1.svg" 
                        alt="Telegram Bot Logo"
                        width={20}
                        height={20}
                        className="text-slate-400 hover:text-white transition-colors duration-200"
                    />
                </Link>
            </li>
            {/* End Social Icons */}
            
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