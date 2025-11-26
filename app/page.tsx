export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. HEADER (Navigation) */}
      <header className="py-4 shadow-md bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Manduma</h1>
          {/* We'll add real navigation links here later */}
        </div>
      </header>

      {/* 2. HERO SECTION (The Hook) */}
      <section className="text-center py-20 bg-blue-800 text-white">
        <h2 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
          Innovating the Future of [Your Industry]
        </h2>
        <p className="mt-4 text-xl sm:text-2xl opacity-90">
          Partner with us to transform your business digitally.
        </p>
        {/* Placeholder for the main CTA button */}
        <button className="mt-8 px-8 py-3 border border-transparent text-lg font-medium rounded-full text-blue-800 bg-white hover:bg-gray-200">
          Book a Consultation Today
        </button>
      </section>

      {/* 3. SERVICES SECTION (The Details) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Our Core Services
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Placeholder for 3 Service Cards */}
            <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-2">Digital Strategy</h4>
              <p className="text-gray-600">Mapping your path to digital success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-2">Application Development</h4>
              <p className="text-gray-600">Building stable, secure web applications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-blue-600">
              <h4 className="text-xl font-semibold mb-2">Cloud Integration</h4>
              <p className="text-gray-600">Seamless integration with modern cloud platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT / LEAD FORM SECTION */}
      <section id="contact" className="py-24 bg-gray-100">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Ready to Start? Book a Meeting
          </h3>
          <form 
            // *** CRITICAL STEP: PASTE YOUR FORMSPREE ENDPOINT HERE ***
            action="https://formspree.io/f/xblvjqln" 
            method="POST"
            className="space-y-6 bg-white p-8 rounded-lg shadow-2xl"
          >
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="full-name" 
                required 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company Name</label>
              <input 
                type="text" 
                name="Company" 
                id="company" 
                required 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
                placeholder="Manduma Inc."
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                name="_replyto" // Formspree uses this field to reply directly
                id="email" 
                required 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border" 
                placeholder="client@business.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Describe Your Project Needs</label>
              <textarea 
                name="message" 
                id="message" 
                rows={4}
                required 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                placeholder="We need assistance with..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit & Request Meeting
            </button>
          </form>
        </div>
      </section>
      
      {/* 4. FOOTER */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm">
          &copy; {new Date().getFullYear()} Manduma. All rights reserved.
        </div>
      </footer>
    </div>
  );
}