import SectionLabel from "../components/SectionLabel";

export default function Terms() {
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>Legal</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            Terms of Service
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            Last updated: February 2025
          </p>
        </div>
      </section>

      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12 text-body text-secondary">
              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Acceptance of terms
                </h2>
                <p>
                  By accessing or using RepRadar, you agree to these Terms of Service. If you do not
                  agree, do not use our service.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Use of the service
                </h2>
                <p>
                  You may use RepRadar for lawful purposes only. You are responsible for your
                  account and for ensuring that your use complies with applicable laws and your
                  organization's policies.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Restrictions
                </h2>
                <p>
                  You may not: reverse engineer or attempt to extract our source code; use the service
                  to harm others or violate any law; resell or redistribute the service without our
                  permission; or use automated means to access the service beyond our API.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Intellectual property
                </h2>
                <p>
                  RepRadar and its content, features, and functionality are owned by us and are
                  protected by copyright, trademark, and other laws. You retain ownership of your
                  data; we do not claim ownership of your call transcripts or analysis results.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Limitation of liability
                </h2>
                <p>
                  To the maximum extent permitted by law, RepRadar is provided "as is" without
                  warranties of any kind. We are not liable for any indirect, incidental, special,
                  or consequential damages arising from your use of the service.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Termination
                </h2>
                <p>
                  We may suspend or terminate your access at any time for violation of these terms.
                  You may cancel your account at any time. Upon termination, your right to use the
                  service ceases immediately.
                </p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  Contact
                </h2>
                <p>
                  For questions about these terms, contact us at{" "}
                  <a href="mailto:legal@repradar.com" className="text-primary hover:underline">
                    legal@repradar.com
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
