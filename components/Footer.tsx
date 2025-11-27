// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <span className="text-2xl font-bold text-white">Manduma.</span>
          <p className="mt-4 text-sm max-w-xs">
            The Business Health OS for service companies. Finding and fixing margin & cash leaks.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Manifesto</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 text-center text-xs border-t border-slate-800 pt-8">
        &copy; {new Date().getFullYear()} Manduma. All rights reserved.
      </div>
    </footer>
  );
}