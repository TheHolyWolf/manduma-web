// components/FinalCTA.tsx
// NOTE: Ensure your correct Calendly link is here
const CTA_LINK = "https://calendly.com/boulazragyoussef/30min"; 

export default function FinalCTA() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
          Ready to stop the leaks?
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          It takes 30 minutes to set up the Free Scan. No obligation.
        </p>
        <a href={CTA_LINK} className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-full shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-1">
          Book Free Scan
        </a>
      </div>
    </section>
  );
}