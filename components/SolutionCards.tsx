// components/SolutionCards.tsx
export default function SolutionCards() {
  return (
    <section id="solution" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The 90-Day Margin Sprint
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-16">
          We don't just find problems. We fix your top 3 leaks and prove the impact in your numbers.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300">
            <div className="text-blue-500 mb-4 text-4xl">🔍</div>
            <h3 className="text-xl font-bold mb-2">1. The MRI Scan</h3>
            <p className="text-slate-400">
              We connect to your books and generate a <strong>Health Score</strong> and a <strong>Leak Map</strong> showing exactly where money is lost.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300">
            <div className="text-blue-500 mb-4 text-4xl">🛠️</div>
            <h3 className="text-xl font-bold mb-2">2. The Fix</h3>
            <p className="text-slate-400">
              A 90-day sprint with weekly <strong>Health Clinics</strong>. We run specific protocols to plug the leaks.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition duration-300">
            <div className="text-blue-500 mb-4 text-4xl">📈</div>
            <h3 className="text-xl font-bold mb-2">3. The Scoreboard</h3>
            <p className="text-slate-400">
              We track the before/after impact. You get a clean ledger of every dollar saved and margin point gained.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}