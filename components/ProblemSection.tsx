import { AlertTriangle, TrendingDown, Layers, Activity } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header: The "Painful Question" */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold tracking-wide text-blue-600 uppercase mb-3">
            The Growth Paradox
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            "Revenue looks fine on paper. <br />
            So why is cash so tight?"
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            Most 20–100 person Businesses share the same hidden story. You have grown past the "startup" phase, 
            but you are now stuck in the "fire-fighting" phase.
          </p>
        </div>

        {/* The 3 Core Pains Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Pain 1: Volatility */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              Profit & Cash Volatility
            </h4>
            <p className="text-slate-600">
              One bad quarter puts the business at risk. You are constantly surprised by cash dips despite having a full pipeline.
            </p>
          </div>

          {/* Pain 2: The Data Fog */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              Drowning in Tools, Starving for Truth
            </h4>
            <p className="text-slate-600">
              You have QuickBooks, HubSpot, and Jira. But nobody is turning that data into clear, weekly decisions. You are flying blind.
            </p>
          </div>

          {/* Pain 3: The Founder Trap */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <Activity className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              Stuck in "Gut Feeling" Mode
            </h4>
            <p className="text-slate-600">
              You are over-servicing clients and mispricing retainers because you rely on instinct rather than a clear Health Score.
            </p>
          </div>

        </div>

        {/* The Bridge to Solution */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm font-medium mb-4">
            THE SYMPTOMS: OVER-SERVICING • SLOW COLLECTIONS • MISPRICED RETAINERS
          </p>
        </div>
        
      </div>
    </section>
  );
}