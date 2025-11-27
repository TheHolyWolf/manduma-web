// components/IntegrationsSection.tsx
export default function IntegrationsSection() {
  return (
    <section className="py-10 border-y border-slate-50 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
          We work directly with your existing finance stack
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition duration-500 font-bold text-2xl text-slate-400">
          <span>QuickBooks</span>
          <span>Xero</span>
          <span>Excel</span>
          <span>HubSpot</span>
          <span>Jira</span>
        </div>
      </div>
    </section>
  );
}