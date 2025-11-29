import { Shield, BookOpen, Clock, Users, Zap, Code } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    title: "Protocol-First System",
    description: "The Manduma Algorithm is not a black box; it's a codified system built by a guild of financial operators who have scaled and sold multiple service businesses. It finds leaks others miss.",
  },
  {
    icon: Code,
    title: "Stability and Rigor",
    description: "Our system is rigid. We only use confirmed, audit-grade data from your Ledger to generate the Health Score. No subjective guesswork, only quantifiable truth.",
  },
  {
    icon: Shield,
    title: "Engineered for Trust",
    description: "Every step—from data ingestion to report delivery—is built using enterprise-grade security standards. Our focus on 'read-only' access ensures maximum client data privacy.",
  },
];

export default function AuthoritySection() {
  return (
    <section className="py-24 bg-white" id="authority">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-slate-700 uppercase mb-3">
            The Manduma Difference
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Expertise Codified into an Operating System.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We’re not consultants. We’re financial architects—creators of the system you’ve always wished existed.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-xl border border-slate-100/70 text-center flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-6">
                <pillar.icon className="w-6 h-6 text-slate-800" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h4>
              <p className="text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Authority Statement */}
        <div className="mt-20 p-8 md:p-12 bg-blue-700 text-white rounded-xl text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
                <Users className="w-8 h-8"/>
                <h4 className="text-2xl md:text-3xl font-bold">Built by the Guild. Powered by the Protocol.</h4>
            </div>
            <p className="text-blue-200 text-lg">
                The Manduma platform captures decades of financial strategy, ensuring your analysis is consistently world-class and deeply secure.
            </p>
        </div>

      </div>
    </section>
  );
}