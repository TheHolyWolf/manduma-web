// components/ProblemSection.tsx
export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The "Gut Feeling" Trap
          </h2>
          <div className="space-y-6 text-lg text-slate-600">
            <p>
              Most founders are stuck in fire-fighting mode. You have tools—Excel, HubSpot, Jira—but nobody is turning them into clear, weekly decisions.
            </p>
            <ul className="space-y-4 mt-8">
              {[
                "Revenue rises, but cash account stays flat.",
                "Over-servicing clients kills project margins.",
                "Slow collections put payroll at risk."
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-red-100 text-red-600 mt-1 mr-3">
                    ✕
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Visual representation of 'Chaos' vs 'Order' */}
        <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200 aspect-square flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🌪️</div>
            <p className="text-slate-400 font-medium italic">Chaos vs Clarity</p>
          </div>
        </div>
      </div>
    </section>
  );
}