import { Lock, Zap, BarChart3, Clock } from 'lucide-react';

const steps = [
  {
    icon: Lock,
    title: "1. Secure Data Connect (30 Minutes)",
    description: "You grant Manduma secured, read-only access to your financial data (QuickBooks, Xero, or clean CSV/Excel exports). We use encrypted tokens. You maintain full control, and we never touch transactions.",
    trust: "SECURITY: Read-only access, encrypted tokens. You can revoke access anytime.",
  },
  {
    icon: Zap,
    title: "2. The Manduma Algorithm (48 Hours)",
    description: "Our proprietary Health OS runs your data through 30+ margin-leak protocols: pricing structure, service utilization, and collection velocity. This replaces weeks of manual analyst work.",
    trust: "STABILITY: Automated protocol ensures consistent, non-biased results every time.",
  },
  {
    icon: BarChart3,
    title: "3. Health Score & Leak Map (The Truth)",
    description: "We deliver your personalized Business Health Score (0-100) and a prioritized Leak Map—the 3 specific areas where cash is going right now. This is the foundation for your 90-Day Sprint.",
    trust: "DELIVERY: Clear, quantified report ready to drive immediate decisions.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-indigo-600 uppercase mb-3">
            The Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            The Manduma 48-Hour Scan
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A fast, low-friction, high-impact assessment based on your existing data.
          </p>
          <div className="flex items-center justify-center gap-3 text-slate-500 mt-4">
            <Clock className="w-5 h-5 text-indigo-500" />
            <span className="font-semibold">Timeline: 48 Hours</span>
          </div>
        </div>

        {/* The New Single-Column Timeline */}
        <div className="relative space-y-12">
          
          {/* Vertical Separator Line (Runs down the center) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-indigo-200" />

          {steps.map((step, index) => (
            <div key={index} className="flex relative items-start justify-center">
              
              {/* Central Marker (The Step Number) */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 items-center justify-center text-white z-10 absolute left-1/2 -translate-x-1/2 top-0 md:top-auto flex">
                <span className="font-bold">{index + 1}</span>
              </div>
              
              {/* Content Card (Centered in the max-width) */}
              <div className="w-full max-w-lg mx-auto p-6 md:p-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100/50 relative md:mt-6">
                      <div className="flex items-center gap-4 mb-3">
                          <step.icon className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                          <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                      </div>
                      <p className="text-slate-600 mb-4">{step.description}</p>
                      <div className="text-xs font-mono text-indigo-700 bg-indigo-50 p-2 rounded-md border border-indigo-100">
                          {step.trust}
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}