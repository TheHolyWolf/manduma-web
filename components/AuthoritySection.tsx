// components/AuthoritySection.tsx
export default function AuthoritySection() {
  return (
    <section id="team" className="py-24 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Not "Consultants". We are Operators.
        </h2>
        <p className="text-lg text-slate-600 mb-12">
          Manduma is built by fractional COOs and CTOs who have run agencies. We act as your internal "Iron Man Suit"—equipping your leadership with the data they need to lead.
        </p>
        <div className="inline-block p-6 bg-white rounded-xl shadow-sm border border-slate-100">
          <p className="text-xl font-medium text-slate-900">
            "We only build product features that remove real pain from service delivery."
          </p>
          <div className="mt-4 flex items-center justify-center space-x-3">
            <div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center">M</div>
            <div className="text-left">
              <p className="text-sm font-bold text-slate-900">Manduma Leadership</p>
              <p className="text-xs text-slate-500">Guild Experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}