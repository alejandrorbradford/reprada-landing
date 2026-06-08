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

export default function Privacy() {
  const { t } = useTranslation();
  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>{t("pages.privacy.label")}</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            {t("pages.privacy.title")}
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            {t("pages.privacy.updated")}
          </p>
        </div>
      </section>

      <section className="pb-section sm:pb-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">

            <Section title="Overview">
              <p>
                RepRadar ("we," "our," or "us") operates an AI-powered sales coaching platform that analyzes sales calls and delivers automated feedback to sales professionals and their managers. We are committed to being transparent about how we handle your data and to processing it responsibly.
              </p>
              <p>
                This Privacy Policy applies to all information collected through our website, web application, browser extensions, and any related services (collectively, the "Service"). By using RepRadar, you agree to the collection and use of information in accordance with this policy.
              </p>
            </Section>

            <Section title="Information We Collect">
              <p>We collect information in the following categories:</p>
              <p className="font-medium text-primary mt-2">Account and contact information</p>
              <Bullets items={[
                "Name, email address, and password when you create an account",
                "Company name, role, and team size if provided",
                "Billing information (processed by our payment provider — we do not store card numbers)",
              ]} />
              <p className="font-medium text-primary mt-4">Calendar and meeting data</p>
              <Bullets items={[
                "Calendar events and meeting metadata when you connect Google Calendar or another calendar provider",
                "Meeting participants, titles, scheduled times, and video conference links (Zoom, Google Meet, Microsoft Teams)",
                "We only access the minimum calendar data necessary to detect and join sales calls",
              ]} />
              <p className="font-medium text-primary mt-4">Call recordings and transcripts</p>
              <Bullets items={[
                "Audio recordings of calls that you authorize RepRadar to join via our meeting bot",
                "Automatically generated transcripts of those recordings",
                "AI-generated analysis, scores, key moments, and coaching notes derived from transcripts",
              ]} />
              <p className="font-medium text-primary mt-4">Usage and technical data</p>
              <Bullets items={[
                "Log data including IP address, browser type, pages visited, and timestamps",
                "Device information and operating system",
                "Cookies and similar tracking technologies (see the Cookies section below)",
              ]} />
            </Section>

            <Section title="How We Use Your Information">
              <p>We use the information we collect to:</p>
              <Bullets items={[
                "Operate and maintain the RepRadar platform and deliver AI call analysis",
                "Generate coaching reports and email you post-call summaries, scores, and improvement tips",
                "Enable team features such as leaderboards, manager dashboards, and shared call history",
                "Process payments and manage your subscription",
                "Send transactional emails (account confirmations, call reports, billing receipts)",
                "Send product updates and announcements (you can opt out at any time)",
                "Improve our AI models and product features using aggregated, de-identified data",
                "Detect, investigate, and prevent fraud, abuse, and security incidents",
                "Comply with legal obligations",
              ]} />
              <p>We do not sell your personal information or use it to serve third-party advertising.</p>
            </Section>

            <Section title="Legal Basis for Processing (GDPR)">
              <p>
                If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data under the following legal bases:
              </p>
              <Bullets items={[
                "Contract performance — to provide the Service you signed up for",
                "Legitimate interests — to improve our product, prevent abuse, and ensure security",
                "Consent — for optional communications such as newsletters and product updates",
                "Legal obligation — when required by applicable law",
              ]} />
              <p>
                Where we rely on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.
              </p>
            </Section>

            <Section title="Call Recording and Participant Notice">
              <p>
                RepRadar joins calls via a meeting bot that is visible to all participants. You are responsible for:
              </p>
              <Bullets items={[
                "Obtaining any required consent from call participants before enabling RepRadar on a meeting",
                "Complying with applicable call recording laws in your jurisdiction (e.g., two-party consent states in the US)",
                "Informing your prospects and colleagues that calls may be recorded and analyzed",
              ]} />
              <p>
                RepRadar's bot announces itself when joining a call. We recommend including a recording notice in your meeting invitations. We are not liable for your failure to comply with applicable recording consent laws.
              </p>
            </Section>

            <Section title="Data Sharing and Third Parties">
              <p>We share your data only in the following circumstances:</p>
              <Bullets items={[
                "Service providers: We work with third-party vendors for hosting, transcription, AI processing, email delivery, and payment processing. These providers are contractually bound to process data only on our instructions and to protect it appropriately.",
                "Your organization: If your account is managed by a company (e.g., your employer purchased a Teams plan), administrators on that account may have access to call data, scores, and reports for all team members.",
                "Legal requirements: We may disclose information when required by law, court order, or to protect the rights, property, or safety of RepRadar, our users, or the public.",
                "Business transfers: In the event of a merger, acquisition, or sale of assets, your data may be transferred to the successor entity. We will notify you before your data is transferred and becomes subject to a different privacy policy.",
              ]} />
              <p>We do not sell, rent, or trade your personal data to any third party for marketing purposes.</p>
            </Section>

            <Section title="Data Retention and Deletion">
              <p>We retain your data for as long as necessary to provide the Service and comply with legal obligations:</p>
              <Bullets items={[
                "Account data is retained while your account is active and for 30 days after deletion",
                "Call recordings and transcripts are retained for the duration of your subscription, unless you delete them earlier",
                "AI-generated analysis and reports are retained in your dashboard for the life of your account",
                "Billing records are retained for seven years as required by tax law",
                "Anonymized, aggregated usage data may be retained indefinitely for product improvement",
              ]} />
              <p>
                You can delete individual calls, transcripts, and your account at any time from Settings. Upon account deletion, all personal data is purged from our systems within 30 days, except where retention is required by law.
              </p>
            </Section>

            <Section title="Your Rights">
              <p>
                Depending on your location, you may have the following rights regarding your personal data:
              </p>
              <Bullets items={[
                "Access — request a copy of the data we hold about you",
                "Rectification — correct inaccurate or incomplete data",
                "Erasure — request deletion of your data (\"right to be forgotten\")",
                "Portability — receive your data in a structured, machine-readable format",
                "Restriction — ask us to limit how we use your data in certain circumstances",
                "Objection — object to processing based on legitimate interests",
                "Withdraw consent — where processing is based on consent, withdraw it at any time",
              ]} />
              <p>
                To exercise any of these rights, email{" "}
                <a href="mailto:privacy@repradar.com" className="text-primary hover:underline">privacy@repradar.com</a>.
                {" "}We will respond within 30 days. We may need to verify your identity before fulfilling certain requests.
              </p>
            </Section>

            <Section title="Cookies and Tracking">
              <p>We use cookies and similar technologies for the following purposes:</p>
              <Bullets items={[
                "Essential cookies: Required for the Service to function (authentication sessions, security tokens). Cannot be disabled.",
                "Analytics cookies: Help us understand how users interact with RepRadar so we can improve it (e.g., page views, feature usage). These are anonymized.",
                "Preference cookies: Remember your settings and language selection.",
              ]} />
              <p>
                We do not use cookies for cross-site tracking or third-party advertising. You can control non-essential cookies through your browser settings or our cookie preference center.
              </p>
            </Section>

            <Section title="California Residents (CCPA)">
              <p>
                If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA):
              </p>
              <Bullets items={[
                "Right to Know: Request disclosure of the categories and specific pieces of personal information we have collected about you in the past 12 months",
                "Right to Delete: Request deletion of personal information we have collected from you",
                "Right to Opt-Out: We do not sell personal information, so there is nothing to opt out of",
                "Right to Non-Discrimination: We will not discriminate against you for exercising your CCPA rights",
              ]} />
              <p>
                To submit a CCPA request, contact us at{" "}
                <a href="mailto:privacy@repradar.com" className="text-primary hover:underline">privacy@repradar.com</a>.
              </p>
            </Section>

            <Section title="Security">
              <p>
                We take the security of your data seriously. Our measures include:
              </p>
              <Bullets items={[
                "Encryption in transit using TLS 1.2 or higher for all data between your browser and our servers",
                "Encryption at rest for call recordings, transcripts, and sensitive account data",
                "Role-based access controls limiting which employees can access user data",
                "Regular security audits and vulnerability assessments",
                "Incident response procedures with notification timelines consistent with applicable law",
              ]} />
              <p>
                No method of transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security. If you discover a security vulnerability, please report it to{" "}
                <a href="mailto:security@repradar.com" className="text-primary hover:underline">security@repradar.com</a>.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p>
                RepRadar is not directed to children under 16. We do not knowingly collect personal information from anyone under 16. If you believe a child has provided us with personal information, contact us at{" "}
                <a href="mailto:privacy@repradar.com" className="text-primary hover:underline">privacy@repradar.com</a>{" "}
                and we will promptly delete it.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and display a notice in the application at least 14 days before the changes take effect. Your continued use of RepRadar after the effective date constitutes acceptance of the updated policy.
              </p>
              <p>
                The date at the top of this page reflects the most recent update. We encourage you to review this policy periodically.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                For privacy-related questions, data requests, or concerns, contact us at:
              </p>
              <div className="mt-4 p-5 rounded-xl bg-subtle border border-border text-body text-primary">
                <p className="font-medium">RepRadar Privacy Team</p>
                <p className="mt-1">
                  <a href="mailto:privacy@repradar.com" className="text-primary hover:underline">privacy@repradar.com</a>
                </p>
              </div>
            </Section>

          </div>
        </div>
      </section>
    </>
  );
}
