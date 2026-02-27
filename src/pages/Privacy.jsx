import SectionLabel from "../components/SectionLabel";

export default function Privacy() {
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>Legal</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            Privacy Policy
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            Last updated: February 2025
          </p>
        </div>
      </section>

      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-12 text-body text-secondary">
              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Information we collect
                </h2>
                <p>
                  We collect information you provide directly (name, email, company) when you sign up,
                  contact us, or use our services. We also collect call transcripts and meeting data
                  when you connect your calendar and use RepRadar to analyze calls.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  How we use your information
                </h2>
                <p>
                  We use your information to provide, maintain, and improve RepRadar; to generate
                  AI-powered call analysis and insights; to communicate with you; and to comply with
                  legal obligations. We do not sell your personal information.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Cookies and tracking
                </h2>
                <p>
                  We use cookies and similar technologies to operate our service, remember your
                  preferences, and understand how you use RepRadar. You can control cookies through
                  your browser settings.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Third parties
                </h2>
                <p>
                  We work with service providers (e.g., hosting, analytics, AI) to operate
                  RepRadar. These providers are contractually bound to protect your data. We may
                  share information when required by law or to protect our rights.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Data retention and deletion
                </h2>
                <p>
                  You can delete your data at any time from Settings. We retain data as needed to
                  provide our services and as required by law. Deleted data is removed from our
                  systems within 30 days.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Contact us
                </h2>
                <p>
                  For privacy-related questions, contact us at{" "}
                  <a href="mailto:privacy@repradar.com" className="text-primary hover:underline">
                    privacy@repradar.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
