import { Shield, Lock, Headphones, Building2, Check, Server } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const valueProps = [
  {
    icon: Building2,
    title: "Custom deployment",
    desc: "Run RepRadar in your environment — on-premise, private cloud, or hybrid. We deploy to your specs, integrate with your stack, and meet your data residency requirements.",
  },
  {
    icon: Lock,
    title: "SSO & enterprise security",
    desc: "Single sign-on with SAML, Okta, Azure AD. SOC 2 compliance, encryption at rest and in transit. Your call data stays in your control.",
  },
  {
    icon: Headphones,
    title: "Dedicated support",
    desc: "SLA-backed support, dedicated success manager, and custom integrations. We're with you from rollout through scale.",
  },
];

const capabilities = [
  "On-premise or private cloud deployment",
  "SAML / Okta / Azure AD SSO",
  "SOC 2 compliant infrastructure",
  "Custom data retention policies",
  "Dedicated success manager",
  "Priority support with SLA",
  "Custom integrations (CRM, LMS, etc.)",
  "Volume pricing for large teams",
];

const complianceItems = [
  "SOC 2 Type II",
  "Encryption at rest & in transit",
  "Role-based access control",
  "Audit logs",
];

export default function Enterprise() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>Enterprise</SectionLabel>
              <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
                RepRadar built for your organization
              </h1>
              <p className="mt-6 text-body text-secondary max-w-lg">
                Custom deployment, SSO, security, and dedicated support. RepRadar scales with your sales
                organization — whether you're 50 reps or 500. We meet your compliance requirements and
                integrate with your stack.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="/contact">Contact sales</Button>
                <Button variant="secondary" href="/contact">Request a demo</Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-subtle border border-border rounded-2xl p-6 -rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-primary">Enterprise</p>
                </div>
                <ul className="space-y-3">
                  {["Custom deployment", "SSO / SAML", "SOC 2", "Dedicated support"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-primary">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why enterprise */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-feature text-primary tracking-tight">
                Standard SaaS limits
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Data must live in shared cloud — compliance says no
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  No SSO — reps juggle another login
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Generic support — no one knows your org
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  One-size-fits-all — doesn't fit your workflow
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-bold text-feature text-primary tracking-tight">
                RepRadar Enterprise
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Deploy in your environment — your data, your rules
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  SSO with SAML, Okta, Azure AD — one login
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Dedicated success manager — we know your team
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Custom integrations — fits your stack
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel center>Built for scale</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              Everything enterprise teams need
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-subtle border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-feature text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body text-secondary">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities list */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>What's included</SectionLabel>
              <h2 className="font-display font-bold text-section text-primary tracking-tight">
                Full enterprise feature set
              </h2>
              <p className="mt-4 text-body text-secondary max-w-lg">
                Enterprise plans include everything in Teams, plus deployment flexibility, security controls,
                and white-glove support.
              </p>
              <ul className="mt-8 space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-body text-primary">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-white border border-border rounded-2xl p-6 rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-primary">Deployment options</p>
                </div>
                <ul className="space-y-3 text-sm text-secondary">
                  <li>On-premise</li>
                  <li>Private cloud (AWS, GCP, Azure)</li>
                  <li>Hybrid</li>
                  <li>Your data residency requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security callout */}
      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Lock className="w-10 h-10 mb-4 opacity-80" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-section tracking-tight">
                  Security & compliance
                </h2>
                <p className="mt-4 text-body opacity-90">
                  Your call data is sensitive. We treat it that way. SOC 2 Type II compliant infrastructure,
                  encryption everywhere, and controls that meet the bar for regulated industries.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {complianceItems.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-5 h-5 opacity-80 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Ready for enterprise?
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            Get in touch for custom pricing, a demo, or deployment options.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="/contact">Contact sales</Button>
            <Button variant="secondary" href="/contact">Request a demo</Button>
          </div>
        </div>
      </section>
    </>
  );
}
