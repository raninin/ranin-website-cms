import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ranin International",
  description:
    "Privacy Policy for Ranin International Contracting Company — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
            <h2 className="font-display text-2xl tracking-wide text-white">1. Introduction</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Ranin International Contracting Company (&quot;Ranin International,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), headquartered in Al Jubail, Kingdom of Saudi Arabia, is committed to protecting the privacy of individuals who visit our website, submit inquiries, or engage with our industrial and construction services. This Privacy Policy explains how we collect, use, store, and disclose your personal information in accordance with applicable Saudi Arabian data protection regulations.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">2. Information We Collect</h2>

            <h3 className="mt-6 text-lg font-medium text-white/90">2.1 Information You Provide</h3>
            <p className="mt-3 text-sm leading-relaxed text-ranin-steel">
              When you interact with our website or contact us directly, we may collect:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li>Full name and job title</li>
              <li>Company or organization name</li>
              <li>Email address and phone number</li>
              <li>Project details, scope requirements, and service inquiries</li>
              <li>Any other information you voluntarily provide through contact forms or email correspondence</li>
            </ul>

            <h3 className="mt-6 text-lg font-medium text-white/90">2.2 Information Collected Automatically</h3>
            <p className="mt-3 text-sm leading-relaxed text-ranin-steel">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li>IP address and approximate geographic location</li>
              <li>Browser type, operating system, and device information</li>
              <li>Pages visited, time spent on pages, and referral sources</li>
              <li>Cookies and similar tracking technologies as described in Section 6</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">3. How We Use Your Information</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              We use the collected information for the following purposes:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li><span className="font-medium text-white">Service delivery:</span> To respond to inquiries about our manpower services, materials supply, operation &amp; maintenance, fabrication work, sandblasting &amp; painting, and printing press services</li>
              <li><span className="font-medium text-white">Communication:</span> To correspond regarding project proposals, quotations, contract discussions, and ongoing project updates</li>
              <li><span className="font-medium text-white">Business operations:</span> To manage client relationships, process contracts, and coordinate workforce deployment</li>
              <li><span className="font-medium text-white">Website improvement:</span> To analyze website usage patterns and improve user experience</li>
              <li><span className="font-medium text-white">Legal compliance:</span> To comply with applicable laws, regulations, and contractual obligations within the Kingdom of Saudi Arabia</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">4. Information Sharing and Disclosure</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              We do not sell, rent, or trade your personal information to third parties. We may share your information with:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li><span className="font-medium text-white">Project partners and subcontractors:</span> When necessary to fulfill service obligations on joint projects</li>
              <li><span className="font-medium text-white">Regulatory authorities:</span> When required by Saudi Arabian law, including compliance with Saudi Aramco, SABIC, Royal Commission, or other regulatory body requirements</li>
              <li><span className="font-medium text-white">Service providers:</span> Trusted third-party vendors who assist with website hosting, analytics, and business operations, bound by confidentiality agreements</li>
              <li><span className="font-medium text-white">Legal proceedings:</span> When required by law, court order, or governmental request</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">5. Data Security</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission, secure server infrastructure, and restricted access controls. However, no method of transmission over the Internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">6. Cookies and Tracking Technologies</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Our website uses cookies and similar technologies to enhance your browsing experience. These include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li><span className="font-medium text-white">Essential cookies:</span> Required for basic website functionality</li>
              <li><span className="font-medium text-white">Analytics cookies:</span> Help us understand how visitors interact with our website</li>
              <li><span className="font-medium text-white">Performance cookies:</span> Used to improve website speed and performance</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              You can manage cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">7. Data Retention</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements. Inquiry and contact form data is retained for up to 24 months unless an ongoing business relationship exists.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">8. Your Rights</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Subject to applicable Saudi Arabian data protection laws, you have the right to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-relaxed text-ranin-steel">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or incomplete information</li>
              <li>Request deletion of your personal information, subject to legal retention requirements</li>
              <li>Withdraw consent for non-essential data processing</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">9. Third-Party Links</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Our website may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites. We encourage you to review the privacy policies of any external websites you visit.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">10. Children&apos;s Privacy</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">11. Changes to This Policy</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated policy will be posted on this page with a revised &quot;Last updated&quot; date. We encourage you to review this page periodically.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="font-display text-2xl tracking-wide text-white">12. Contact Us</h2>
            <p className="mt-4 text-sm leading-relaxed text-ranin-steel">
              If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
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
