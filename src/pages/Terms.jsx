import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";

function Section({ title, children }) {
  return (
    <div className="py-8 border-b border-border last:border-0">
      <h2 className="font-display font-bold text-feature text-primary mb-4">{title}</h2>
      <div className="space-y-4 text-body text-secondary leading-relaxed">{children}</div>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="space-y-2 mt-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Terms() {
  const { t } = useTranslation();
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>{t("pages.terms.label")}</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            {t("pages.terms.title")}
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            {t("pages.terms.updated")}
          </p>
        </div>
      </section>

      <section className="pb-section sm:pb-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">

            <Section title="Agreement to Terms">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("you" or "User") and RepRadar ("we," "our," or "us") governing your access to and use of the RepRadar platform, including our website, web application, meeting bot, email reports, and all related services (collectively, the "Service").
              </p>
              <p>
                By creating an account, clicking "Get started," or otherwise using the Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you are using the Service on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.
              </p>
              <p>
                If you do not agree to these Terms, do not use the Service.
              </p>
            </Section>

            <Section title="Description of Service">
              <p>
                RepRadar is an AI-powered sales coaching platform. The Service allows sales professionals and their managers to:
              </p>
              <Bullets items={[
                "Connect calendar accounts (Google Calendar, Outlook) to automatically detect sales meetings",
                "Deploy a meeting bot to join calls on Google Meet, Zoom, and Microsoft Teams",
                "Receive AI-generated transcripts, scores, talk ratio analysis, and coaching tips for each call",
                "Receive automated coaching emails immediately after each call",
                "Access a personal dashboard, call history, and improvement trends",
                "Enable team features including leaderboards, manager dashboards, and shared reporting",
              ]} />
              <p>
                We reserve the right to modify, update, or discontinue any aspect of the Service with reasonable notice. We will not materially reduce core functionality without notifying paid subscribers.
              </p>
            </Section>

            <Section title="Eligibility and Accounts">
              <p>To use RepRadar, you must:</p>
              <Bullets items={[
                "Be at least 18 years old",
                "Provide accurate and complete registration information",
                "Keep your account credentials confidential",
                "Notify us immediately at support@repradar.com if you suspect unauthorized access to your account",
              ]} />
              <p>
                You are responsible for all activity that occurs under your account. We may suspend or terminate accounts that show signs of unauthorized use or that violate these Terms.
              </p>
              <p>
                One account per individual. You may not share account credentials with other people or create accounts on behalf of others without authorization.
              </p>
            </Section>

            <Section title="Acceptable Use">
              <p>You agree to use RepRadar only for lawful purposes and in accordance with these Terms. You may not:</p>
              <Bullets items={[
                "Record calls without obtaining all legally required consents from participants (see Call Recording section below)",
                "Use the Service to harass, defame, or harm any individual",
                "Attempt to reverse-engineer, decompile, or extract the source code or AI models underlying the Service",
                "Scrape, crawl, or otherwise extract data from the Service using automated means beyond our API",
                "Resell, sublicense, or white-label the Service without our prior written consent",
                "Upload malicious code, interfere with the Service's infrastructure, or attempt to gain unauthorized access to our systems",
                "Use the Service in violation of any applicable law or regulation",
                "Misrepresent your identity or affiliation, or impersonate any person or entity",
                "Use the Service to process calls in industries or jurisdictions where AI analysis is prohibited",
              ]} />
              <p>
                We may investigate suspected violations and, at our sole discretion, suspend or terminate accounts that we believe are in violation of these Terms.
              </p>
            </Section>

            <Section title="Call Recording and Consent">
              <p>
                RepRadar's meeting bot joins calls you designate and records audio for the purpose of transcription and AI analysis. You acknowledge and agree that:
              </p>
              <Bullets items={[
                "You are solely responsible for complying with all applicable laws and regulations regarding call recording in your jurisdiction, including obtaining informed consent from all call participants",
                "In many jurisdictions (including certain US states and most of the EU), recording a call without all-party consent is illegal. You must inform participants that the call will be recorded.",
                "RepRadar's bot will identify itself when joining a meeting, which may satisfy notice requirements in some jurisdictions — but this does not substitute for your legal obligation to obtain consent",
                "You will not use the Service to record calls in jurisdictions or contexts where recording is prohibited",
                "RepRadar is not liable for any legal claims arising from your failure to obtain proper recording consent",
              ]} />
              <p>
                We recommend including a statement in your meeting invitations such as: "This meeting will be recorded and analyzed by RepRadar, our AI sales coaching tool."
              </p>
            </Section>

            <Section title="Subscriptions, Fees, and Payment">
              <p>
                RepRadar offers free and paid subscription plans.
              </p>
              <p className="font-medium text-primary mt-2">Free tier</p>
              <p>
                The free tier provides limited access to the Service as described on our Pricing page. We may change free tier limits at any time with reasonable notice.
              </p>
              <p className="font-medium text-primary mt-4">Paid subscriptions</p>
              <Bullets items={[
                "Paid plans are billed monthly or annually as selected at checkout",
                "All fees are in US dollars unless otherwise stated",
                "Subscriptions renew automatically at the end of each billing period unless cancelled",
                "You may cancel your subscription at any time from your account settings; cancellation takes effect at the end of the current billing period",
                "We do not offer refunds for partial billing periods, except where required by law",
                "Overage fees (calls exceeding your plan's included limit) are billed at the per-call rate shown for your plan",
              ]} />
              <p>
                We may update pricing with at least 30 days' notice to existing subscribers. Price changes will not apply until your next renewal date. If you do not agree to a price change, you may cancel before it takes effect.
              </p>
              <p>
                Payment is processed by a third-party provider (currently Stripe). By providing payment information, you authorize us to charge your payment method on a recurring basis. If a payment fails, we may suspend access to paid features until the outstanding balance is resolved.
              </p>
            </Section>

            <Section title="Your Content">
              <p>
                "Your Content" means all data you provide to the Service, including call recordings, transcripts, account information, and any other materials.
              </p>
              <Bullets items={[
                "You retain ownership of Your Content. We do not claim any ownership rights over your call recordings or transcripts.",
                "You grant us a limited, non-exclusive license to store, process, and analyze Your Content solely to provide and improve the Service.",
                "You represent that you have all rights necessary to grant us this license and that Your Content does not violate any third-party rights or applicable law.",
                "We may use aggregated, anonymized, de-identified data derived from Your Content to improve our AI models and product features. This data cannot be used to identify you or your business.",
              ]} />
            </Section>

            <Section title="Intellectual Property">
              <p>
                The Service, including our website, application, AI models, scoring rubrics, UI designs, and all related materials, is owned by RepRadar and protected by intellectual property laws. These Terms do not grant you any rights to our intellectual property beyond the limited license to use the Service as described herein.
              </p>
              <p>
                "RepRadar" and associated logos and marks are our trademarks. You may not use them without our prior written consent.
              </p>
            </Section>

            <Section title="Confidentiality">
              <p>
                Each party may receive confidential information from the other in connection with the Service. Each party agrees to:
              </p>
              <Bullets items={[
                "Use confidential information only for the purposes of using or providing the Service",
                "Not disclose confidential information to third parties without prior written consent",
                "Protect confidential information with at least the same care used for its own confidential information, and no less than reasonable care",
              ]} />
              <p>
                This obligation does not apply to information that is publicly available, was already known, is independently developed, or is required to be disclosed by law.
              </p>
            </Section>

            <Section title="Disclaimers and Warranties">
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
              </p>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES INCLUDING:</p>
              <Bullets items={[
                "Implied warranties of merchantability, fitness for a particular purpose, and non-infringement",
                "That the Service will be uninterrupted, error-free, or free from viruses or other harmful components",
                "That AI-generated analysis, scores, and coaching tips will be accurate, complete, or suitable for any specific purpose",
                "That the Service will meet your specific requirements or produce any particular business outcome",
              ]} />
              <p>
                AI coaching outputs are meant to assist — not replace — human judgment. Do not rely solely on RepRadar's analysis for hiring, performance reviews, or other consequential decisions.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, REPRADAR AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY:
              </p>
              <Bullets items={[
                "Indirect, incidental, special, consequential, or punitive damages",
                "Loss of profits, revenue, data, business, or goodwill",
                "Damages arising from unauthorized access to your account or data",
                "Damages resulting from AI analysis errors or omissions",
                "Damages arising from your failure to comply with call recording consent laws",
              ]} />
              <p>
                OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM OR (B) $100 USD.
              </p>
              <p>
                Some jurisdictions do not allow exclusion of certain warranties or limitation of liability. In those jurisdictions, our liability is limited to the maximum extent permitted by law.
              </p>
            </Section>

            <Section title="Indemnification">
              <p>
                You agree to defend, indemnify, and hold harmless RepRadar and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or relating to:
              </p>
              <Bullets items={[
                "Your use of the Service in violation of these Terms",
                "Your violation of any applicable law, including call recording consent laws",
                "Your Content or your grant of rights to us regarding Your Content",
                "Any claim by a third party that the recording or analysis of a call violated their rights",
              ]} />
            </Section>

            <Section title="Termination">
              <p>
                Either party may terminate these Terms at any time.
              </p>
              <Bullets items={[
                "You may cancel your account at any time from Settings. Your access to paid features will continue until the end of your current billing period.",
                "We may suspend or terminate your access immediately for material violations of these Terms, fraudulent activity, or non-payment.",
                "We may discontinue the Service with 60 days' notice to paid subscribers and 14 days' notice to free users.",
              ]} />
              <p>
                Upon termination: your right to access the Service ceases immediately; we will retain and then delete Your Content per our data retention policy; and provisions that by their nature should survive (Intellectual Property, Indemnification, Limitation of Liability, Governing Law) will continue in effect.
              </p>
            </Section>

            <Section title="Governing Law and Disputes">
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict-of-law provisions.
              </p>
              <p>
                Before filing any legal action, you agree to contact us at{" "}
                <a href="mailto:legal@repradar.com" className="text-primary hover:underline">legal@repradar.com</a>{" "}
                and attempt to resolve the dispute informally. If the dispute is not resolved within 30 days, either party may pursue formal legal remedies.
              </p>
              <p>
                Any dispute that cannot be resolved informally shall be resolved by binding arbitration administered by the American Arbitration Association under its Commercial Arbitration Rules. The arbitration shall take place in Delaware. Class action arbitrations and class action lawsuits are not permitted.
              </p>
              <p>
                Notwithstanding the above, either party may seek injunctive or other equitable relief from a court of competent jurisdiction to prevent irreparable harm.
              </p>
            </Section>

            <Section title="General Provisions">
              <Bullets items={[
                "Entire agreement: These Terms, together with our Privacy Policy, constitute the entire agreement between you and RepRadar regarding the Service and supersede all prior agreements.",
                "Severability: If any provision is found to be unenforceable, the remaining provisions will continue in full force.",
                "No waiver: Our failure to enforce any right or provision does not constitute a waiver of that right or provision.",
                "Assignment: You may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights in connection with a merger, acquisition, or sale of assets.",
                "Force majeure: We are not liable for delays or failures caused by circumstances beyond our reasonable control, including internet outages, natural disasters, or third-party service failures.",
                "Notices: Legal notices to us must be sent to legal@repradar.com. We will send notices to the email address on your account.",
              ]} />
            </Section>

            <Section title="Changes to These Terms">
              <p>
                We may update these Terms from time to time. When we make material changes, we will notify you by email and display a prominent notice in the application at least 14 days before the changes take effect.
              </p>
              <p>
                Your continued use of the Service after the effective date of updated Terms constitutes your acceptance of those Terms. If you do not agree to the updated Terms, you must stop using the Service and cancel your account before the effective date.
              </p>
            </Section>

            <Section title="Contact">
              <p>Questions about these Terms? Get in touch:</p>
              <div className="mt-4 p-5 rounded-xl bg-subtle border border-border text-body text-primary">
                <p className="font-medium">RepRadar Legal</p>
                <p className="mt-1">
                  <a href="mailto:legal@repradar.com" className="text-primary hover:underline">legal@repradar.com</a>
                </p>
              </div>
            </Section>

          </div>
        </div>
      </section>
    </>
  );
}
