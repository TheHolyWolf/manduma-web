// components/IntegrationsSection.tsx
import Image from 'next/image';

const integrationLogos = [
    // 🛑 FIX: Correcting paths. When linking to files in the /public folder in Next.js,
    // the path should start with a leading slash, not a relative path like '../public/'.
    // Assuming your images are in /public/quickbooks.svg, /public/xero.svg, etc.
    { name: 'QuickBooks', src: '/quickbooks.svg', width: 84, height: 32 },   
    { name: 'Xero', src: '/Xero.svg', width: 63, height: 32 },              
    { name: 'Excel/CSV', src: '/Excel.svg', width: 63, height: 32 },         
    { name: 'SAP', src: '/SAP.svg', width: 70, height: 32 },                 
  ];

export default function IntegrationsSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-sm font-bold tracking-wide text-slate-700 uppercase mb-3">
                Built for your existing stack
            </h2>
            <p className="text-3xl font-bold text-slate-900">
                Seamless connection to your financial ledger.
            </p>
        </div>

        {/* Integration Logos (FIXED to use Image component) */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {integrationLogos.map((integration, index) => (
            <div key={index} className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
              
              {/* 🛑 FIX: Using the correct Image component instead of placeholder <div> */}
              <Image 
                src={integration.src} 
                alt={`${integration.name} Logo`}
                width={integration.width} 
                height={integration.height} 
                className="object-contain"
              />
              
              <span className="sr-only">{integration.name}</span> {/* Accessible text for screen readers */}
            </div>
          ))}
        </div>

        {/* Confidence Message */}
        <div className="mt-12">
            <p className="text-slate-600 max-w-3xl mx-auto">
                <b>Security Note:</b> We only require <b>read-only access</b> to your data. No installation. No API keys stored long-term. Your data remains fully private.
            </p>
        </div>
      </div>
    </section>
  );
}