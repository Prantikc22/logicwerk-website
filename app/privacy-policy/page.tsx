import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Logicwerk",
  description: "Learn about how Logicwerk collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <p className="text-lg text-gray-600 mb-8">
            This Privacy Policy applies to the online presence of Logicwerk, including Logicwerk.com, its subsidiaries,
            affiliates, and related entities.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Collection and Processing of Personal Data</h2>
            <p className="text-gray-700 mb-4">
              We collect Personal Information that identifies or contributes to the identification of an individual.
              This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Personal data you provide on our website, such as name, email, job title, and company.</li>
              <li>
                Information about your device and site usage, such as IP address, demographics, operating system, and
                browser type, gathered through cookies.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Your Personal Data</h2>
            <p className="text-gray-700 mb-4">We use your Personal Data to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Enhance site usability, maintenance, and troubleshooting.</li>
              <li>Monitor site usage and engagement.</li>
              <li>Respond to your queries and requests.</li>
              <li>Manage job applications and provide requested services.</li>
              <li>Communicate with clients, handle service administration, and conduct marketing campaigns.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Basis for Data Processing</h2>
            <p className="text-gray-700 mb-4">
              We process Personal Data to promote our services, improve offerings, and fulfill legal or contractual
              obligations. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Service communication and customer support.</li>
              <li>Personalized advertising and market research.</li>
              <li>Enhancing the functionality and security of our website.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing and Transfer of Personal Data</h2>
            <p className="text-gray-700 mb-4">
              Logicwerk does not share Personal Data for marketing without your consent. We may share data with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Logicwerk entities and subsidiaries.</li>
              <li>Business partners, service vendors, and authorized agents.</li>
              <li>
                Third-party service providers in countries outside the European Economic Area (EEA) with adequate data
                protection measures.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
            <p className="text-gray-700 mb-4">Subject to applicable laws, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access, update, or delete your Personal Data.</li>
              <li>Request data portability in a structured format.</li>
              <li>Object to or restrict data processing.</li>
              <li>Withdraw consent for data processing.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Security of Your Personal Data</h2>
            <p className="text-gray-700">
              Logicwerk implements administrative, physical, and technical safeguards to protect your Personal Data from
              unauthorized access, use, or disclosure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
            <p className="text-gray-700">
              Personal Data is retained as long as necessary to fulfill the purposes for which it was collected or as
              required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Links to Partner Websites</h2>
            <p className="text-gray-700">
              Our site may contain links to third-party websites. Logicwerk is not responsible for the privacy practices
              or content of these external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Privacy Policy</h2>
            <p className="text-gray-700">
              Logicwerk reserves the right to modify this Privacy Policy at any time. Changes will be posted on our
              website.
            </p>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@logicwerk.com" className="text-blue-600 hover:text-blue-800">
                privacy@logicwerk.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
