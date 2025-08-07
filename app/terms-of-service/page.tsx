import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Logicwerk",
  description: "Read the terms and conditions governing the use of Logicwerk's services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <p className="text-lg text-gray-600 mb-8">
            These Terms and Conditions ("Terms") govern the provision of services by Logicwerk ("we," "us," or "our") to
            our clients and visitors ("you" or "your"). By accessing or using our services, you agree to be bound by
            these Terms. Please read them carefully.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope and Changes</h2>
            <p className="text-gray-700">
              Logicwerk provides services to clients under these Terms. We reserve the right to modify these Terms at
              any time. Changes will be posted on our website, and continued use of our services constitutes acceptance
              of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Contract Formation</h2>
            <p className="text-gray-700">
              A contract between Logicwerk and the client is formed upon the client's order and acceptance of the terms
              detailed in the invoice issued by Logicwerk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing and Services</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>3.1</strong> All prices are exclusive of applicable taxes such as GST. For services provided
                within India, an 18% GST rate applies.
              </p>
              <p>
                <strong>3.2</strong> Optional services are not included unless specifically ordered. Optional items will
                be clearly marked.
              </p>
              <p>
                <strong>3.3</strong> It is assumed that clients will provide necessary digital content and desired
                plugins or templates unless specified otherwise.
              </p>
              <p>
                <strong>3.4</strong> Additional services not included in the original order will be charged on a Time &
                Material basis at an hourly rate of USD 25.00 – USD 40.00.
              </p>
              <p>
                <strong>3.5</strong> Project contracts will specify the scope and cost based on requirements. Changes in
                scope may affect project costs and will be documented as amendments.
              </p>
              <p>
                <strong>3.6</strong> Components developed by third parties are covered by their respective warranties,
                not by Logicwerk.
              </p>
              <p>
                <strong>3.7</strong> All customized solutions are copyrighted and are not for redistribution without
                permission.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Delivery and Payment</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>4.1</strong> Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Standard packages: Payment in advance.</li>
                <li>Custom projects: One-third upfront, two-thirds upon installation.</li>
              </ul>
              <p>
                <strong>4.2</strong> Delivery timelines commence upon receipt of payment and an initial kickoff meeting.
                Delays caused by client acceptance or feedback may extend these timelines.
              </p>
              <p>
                <strong>4.3</strong> Logicwerk is not liable for delays due to force majeure events like strikes,
                lockouts, or government actions.
              </p>
              <p>
                <strong>4.4</strong> Payment can be made via PayPal or Bank Transfer as instructed by our Accounts
                Department.
              </p>
              <p>
                <strong>4.5</strong> Prices are in INR for Indian clients and in USD, GBP, or other currencies for
                international clients.
              </p>
              <p>
                <strong>4.6</strong> Any objections to delivery must be raised within 14 days of receipt. Beyond this
                period, services are considered accepted.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Late Payments and Penalties</h2>
            <p className="text-gray-700">
              Interest of 5% may be charged on overdue payments. Additional costs may be incurred for collections.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ownership and Cancellation</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>6.1</strong> Services remain the property of Logicwerk until full payment is made. Unpaid
                services can be reclaimed in case of default.
              </p>
              <p>
                <strong>6.2</strong> If a client cancels a project without fault on our part, Logicwerk reserves the
                right to charge for work completed up to that point.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liability and Warranty</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>7.1</strong> Logicwerk is not liable for damages arising from the use of delivered products.
              </p>
              <p>
                <strong>7.2</strong> Defective services will be repaired or replaced. If unsuccessful, the client may
                request a refund or contract termination.
              </p>
              <p>
                <strong>7.3</strong> Logicwerk's liability is limited to intent and gross negligence.
              </p>
              <p>
                <strong>7.4</strong> Clients are responsible for ensuring that their logos and content do not infringe
                on third-party rights.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Protection</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>8.1</strong> Personal data collected during service provision will be handled in accordance with
                international data protection laws.
              </p>
              <p>
                <strong>8.2</strong> Unless expressly objected, Logicwerk may showcase completed projects for
                promotional purposes.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Licensing</h2>
            <p className="text-gray-700">
              Clients receive full usage rights for delivered services (websites, apps, etc.).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of India. Disputes will be resolved in the jurisdiction of Kolkata,
              West Bengal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Amendments</h2>
            <p className="text-gray-700">Changes or additions to these Terms must be agreed upon in writing.</p>
          </section>

          <div className="bg-gray-50 p-6 rounded-lg mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@logicwerk.com" className="text-blue-600 hover:text-blue-800">
                legal@logicwerk.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
