// app/privacy/page.tsx
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-24">
        
        {/* Page Title and Date */}
        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">
          Manduma Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-12">
          Last Updated: November 29, {currentYear}
        </p>

        {/* ---------------------------------------------------- */}
        {/* Manduma-Specific Section (Highly Recommended) */}
        {/* ---------------------------------------------------- */}
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
          1. Data Collection for the Free Scan
        </h2>
        <p className="text-slate-700 mb-6 leading-relaxed">
          For the Manduma 48-Hour Scan, we require <strong>read-only access</strong> to your existing financial data (e.g., QuickBooks, Xero, or CSV files). This data is accessed using encrypted, temporary tokens and is used solely for the purpose of generating your Business Health Score and Leak Map. <strong>We do not store API keys long-term, and we never manipulate or execute transactions on your ledger.</strong>
        </p>

        {/* ---------------------------------------------------- */}
        {/* Converted Legal Boilerplate Content */}
        {/* ---------------------------------------------------- */}

        <h2 className="text-3xl font-extrabold text-slate-900 mt-12 mb-6">
          Full Privacy Policy Details
        </h2>
        
        <p className="text-slate-700 mb-4 leading-relaxed">
          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the{' '}
          <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Free Privacy Policy Generator
          </a>.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Interpretation and Definitions</h2>
        
        <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-2">Interpretation</h3>
        <p className="text-slate-700 mb-4 leading-relaxed">
          The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
        </p>
        
        <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-2">Definitions</h3>
        <p className="text-slate-700 mb-2 leading-relaxed">
          For the purposes of this Privacy Policy:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-700 mb-8 leading-relaxed">
          <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
          <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
          <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Manduma.</li>
          <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
          <li><strong>Country</strong> refers to: Portugal</li>
          <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
          <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong> refers to the Website.</li>
          <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
          <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
          <li>
              <strong>Website</strong> refers to Manduma, accessible from{' '}
              <a href="https://manduma.com/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:underline">
                  https://manduma.com/
              </a>
          </li>
          <li>
              <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
          </li>
      </ul>
        
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Collecting and Using Your Personal Data</h2>
        
        <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-2">Types of Data Collected</h3>
        
        <h4 className="text-lg font-medium text-slate-700 mt-4 mb-2">Personal Data</h4>
        <p className="text-slate-700 mb-4 leading-relaxed">
          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-700 mb-8 leading-relaxed">
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>
        
        <h4 className="text-lg font-medium text-slate-700 mt-4 mb-2">Usage Data</h4>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Usage Data is collected automatically when using the Service.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
        </p>
        
        <h4 className="text-lg font-medium text-slate-700 mt-4 mb-2">Tracking Technologies and Cookies</h4>
        <p className="text-slate-700 mb-4 leading-relaxed">
          We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-4 text-slate-700 mb-8 leading-relaxed">
          <li>
            <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
          </li>
          <li>
            <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
          </li>
        </ul>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the{' '}
          <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Free Privacy Policy website
          </a>{' '}
          article.
        </p>
        <p className="text-slate-700 mb-2 leading-relaxed">
          We use both Session and Persistent Cookies for the purposes set out below:
        </p>
        <ul className="list-disc list-inside space-y-4 pl-4 text-slate-700 mb-8 leading-relaxed">
          <li><strong>Necessary / Essential Cookies</strong>
            <p>Type: Session Cookies</p>
            <p>Administered by: Us</p>
            <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
          </li>
          <li><strong>Cookies Policy / Notice Acceptance Cookies</strong>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
          </li>
          <li><strong>Functionality Cookies</strong>
            <p>Type: Persistent Cookies</p>
            <p>Administered by: Us</p>
            <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
          </li>
        </ul>
        <p className="text-slate-700 mb-4 leading-relaxed">
          For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
        </p>
      </main>

      <Footer />
    </div>
  );
}
