import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Ranin International",
  description:
    "Terms of Service for Ranin International Contracting Company — conditions governing the use of our website and services.",
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-ranin-navy">
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-end overflow-hidden pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-to-b from-ranin-navy via-ranin-navy/95 to-ranin-navy" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ranin-accent">
            Legal
          </p>
          <h1 className="mt-4 font-display text-5xl text-white md:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-ranin-steel">
            Last updated: February 23, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-8">
        <div className="space-y-10">

          {/* 1 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">1. Acceptance of Terms</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              By accessing and using the website of Ranin International Contracting Company (&quot;Ranin International,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website. These terms apply to all visitors, users, and others who access or use the website.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">2. About Ranin International</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Ranin International Contracting Company is an industrial and construction services provider headquartered in Al Jubail, Kingdom of Saudi Arabia. We deliver comprehensive solutions including manpower services, materials supply, operation &amp; maintenance, fabrication work, sandblasting &amp; painting, and printing press services to clients across the petrochemical, oil &amp; gas, construction, power, and infrastructure sectors.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">3. Use of Website</h2>

            <h3 className="mt-6 text-lg font-medium text-white/90">3.1 Permitted Use</h3>
            <p className="mt-3 text-sm leading-relaxed text-ranin-steel">You may use our website to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li>Learn about our services, capabilities, and project experience</li>
              <li>Submit inquiries and requests for proposals or quotations</li>
              <li>Access company information and contact details</li>
              <li>Review our certifications, accreditations, and project portfolio</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium text-white/90">3.2 Prohibited Use</h3>
            <p className="mt-3 text-sm leading-relaxed text-ranin-steel">You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li>Use the website for any unlawful purpose or in violation of any applicable local, national, or international law</li>
              <li>Attempt to gain unauthorized access to any part of the website, server, or connected systems</li>
              <li>Transmit viruses, malware, or any other harmful code</li>
              <li>Scrape, data-mine, or use automated tools to extract content without written permission</li>
              <li>Reproduce, distribute, or commercially exploit website content without prior authorization</li>
              <li>Misrepresent your identity or affiliation when submitting inquiries</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">4. Intellectual Property</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              All content on this website — including but not limited to text, graphics, logos, images, photographs, project descriptions, service information, and design elements — is the property of Ranin International or its licensors and is protected by applicable intellectual property laws of the Kingdom of Saudi Arabia and international treaties.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              The Ranin International name, logo, and all related marks are trademarks of Ranin International Contracting Company. You may not use these marks without our prior written consent.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">5. Service Information and Quotations</h2>

            <h3 className="mt-6 text-lg font-medium text-white/90">5.1 Website Content</h3>
            <p className="mt-3 text-sm leading-relaxed text-ranin-steel">
              The information presented on this website regarding our services, capabilities, and project experience is provided for general informational purposes only. It does not constitute a binding offer, contract, or guarantee of service availability, pricing, or specific outcomes.
            </p>

            <h3 className="mt-6 text-lg font-medium text-white/90">5.2 Proposals and Contracts</h3>
            <p className="mt-3 text-sm leading-relaxed text-ranin-steel">
              Any service engagement with Ranin International is governed by a separate written contract or purchase order agreed upon by both parties. Website content, including service descriptions, project case studies, and capability statements, does not form part of any contractual agreement unless explicitly incorporated by reference in a signed contract.
            </p>

            <h3 className="mt-6 text-lg font-medium text-white/90">5.3 Pricing</h3>
            <p className="mt-3 text-sm leading-relaxed text-ranin-steel">
              We do not publish pricing on our website. All quotations are provided on a project-specific basis and are subject to scope, timeline, location, and prevailing market conditions. Quotations remain valid only for the period specified therein.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">6. Project Case Studies</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Project descriptions, case studies, and references on our website are presented for illustrative purposes to demonstrate our capabilities and experience. Specific project details, client names, and performance metrics are shared with client consent where applicable. Past project performance does not guarantee identical results on future engagements, as outcomes depend on project-specific conditions.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">7. Certifications and Compliance</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              References to certifications (ISO 9001:2015, ISO 14001:2015, ISO 45001:2018), client approvals (Saudi Aramco, SABIC, Royal Commission), and regulatory compliance are accurate as of the date of publication. Certification status may change due to renewal cycles, scope modifications, or regulatory updates. Current certification status is available upon request.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">8. Limitation of Liability</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              To the fullest extent permitted by applicable law:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li>The website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied</li>
              <li>We do not warrant that the website will be uninterrupted, error-free, or free of harmful components</li>
              <li>We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the website</li>
              <li>Our total liability for any claim related to the website shall not exceed the amount you paid to access the website (if any)</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">9. Indemnification</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              You agree to indemnify and hold harmless Ranin International, its officers, employees, and agents from any claims, damages, losses, or expenses (including reasonable legal fees) arising from your use of the website, violation of these terms, or infringement of any third-party rights.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">10. Third-Party Links</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Our website may contain links to third-party websites for your convenience. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites. Accessing linked sites is at your own risk.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">11. Privacy</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Your use of the website is also governed by our{" "}
              <Link href="/privacy-policy" className="text-ranin-accent hover:underline">
                Privacy Policy
              </Link>
              , which describes how we collect, use, and protect your personal information. By using the website, you consent to the data practices described in the Privacy Policy.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">12. Governing Law</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              These Terms of Service are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising from or related to these terms or your use of the website shall be subject to the exclusive jurisdiction of the competent courts in the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">13. Modifications to Terms</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page with an updated &quot;Last updated&quot; date. Your continued use of the website after any modifications constitutes acceptance of the revised terms.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">14. Severability</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              If any provision of these Terms of Service is found to be unenforceable or invalid under applicable law, the remaining provisions shall continue in full force and effect.
            </p>
          </div>

          {/* 15 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">15. Contact Us</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              For questions regarding these Terms of Service, please contact us:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li><span className="font-medium text-white">Email:</span> info@ranininternational.com</li>
              <li><span className="font-medium text-white">Phone:</span> +966 50 801 1632</li>
              <li><span className="font-medium text-white">Address:</span> Al Aas Ibn Hisham St., Al Safat Dist, Al Jubail, 35514, Kingdom of Saudi Arabia</li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}
