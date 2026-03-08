import { Check, Zap, Users, Building2 } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

const plans = [
  {
    planId: "starter",
    name: "Starter",
    price: 49,
    period: "per seat / month",
    desc: "For individual reps getting started",
    calls: 25,
    callsLabel: "calls per seat",
    maxDuration: "2 hours",
    overage: "$2.00/call",
    features: [
      "AI call scores & improvement tips",
      "Talk ratio & key moments",
      "Email reports after every call",
      "Google Calendar sync",
      "Call history & dashboard",
    ],
    cta: "Start free trial",
    ctaHref: `${APP_URL}/login?redirect=${encodeURIComponent("/checkout?plan=starter")}`,
    ctaVariant: "primary",
    popular: false,
    icon: Zap,
  },
  {
    planId: "pro",
    name: "Pro",
    price: 99,
    period: "per seat / month",
    desc: "For reps who want to improve faster",
    calls: 60,
    callsLabel: "calls per seat",
    maxDuration: "2 hours",
    overage: "$1.75/call",
    features: [
      "Everything in Starter",
      "60 calls per month",
      "Priority analysis",
      "Export & integrations",
      "Dedicated support",
    ],
    cta: "Start free trial",
    ctaHref: `${APP_URL}/login?redirect=${encodeURIComponent("/checkout?plan=pro")}`,
    ctaVariant: "primary",
    popular: true,
    icon: Zap,
  },
  {
    planId: "teams",
    name: "Teams",
    price: 199,
    period: "per month",
    desc: "For teams of up to 5 reps",
    calls: 150,
    callsLabel: "calls shared",
    seats: "5 seats included",
    maxDuration: "2 hours",
    overage: "$1.50/call",
    extraSeat: "+$35/seat",
    features: [
      "Everything in Pro",
      "150 calls shared across team",
      "Team leaderboard",
      "Manager dashboard",
      "Admin controls",
      "Extra seats: +$35/seat",
    ],
    cta: "Start free trial",
    ctaHref: `${APP_URL}/login?redirect=${encodeURIComponent("/checkout?plan=teams")}`,
    ctaVariant: "primary",
    popular: false,
    icon: Users,
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>Pricing</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            Start with one free call. No credit card required. Upgrade when you're ready
            to improve every call.
          </p>
        </div>
      </section>

      {/* Free trial callout */}
      <section className="pb-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-subtle border border-border rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-feature text-primary">
              Try RepRadar free
            </h2>
            <p className="mt-2 text-body text-secondary">
              1 call, up to 45 minutes. See your score, key moments, and improvement tips.
            </p>
            <p className="mt-1 text-label text-secondary">
              No credit card required. Upgrade to continue.
            </p>
            <Button variant="primary" className="mt-6">
              Start free trial
            </Button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-white border-2 border-primary shadow-lg"
                      : "bg-white border border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-label font-medium">
                        Most popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <h3 className="font-display font-semibold text-feature text-primary">
                      {plan.name}
                    </h3>
                  </div>
                  <p className="text-body text-secondary">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display font-bold text-4xl text-primary">
                      ${plan.price}
                    </span>
                    <span className="text-body text-secondary">{plan.period}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-secondary">
                    <span>{plan.calls} {plan.callsLabel}</span>
                    {plan.seats && <span>{plan.seats}</span>}
                    <span>Max {plan.maxDuration}/call</span>
                    <span>Overage: {plan.overage}</span>
                    {plan.extraSeat && (
                      <span className="text-primary font-medium">{plan.extraSeat}</span>
                    )}
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-body text-primary">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.ctaVariant}
                    href={plan.ctaHref}
                    className="mt-8 w-full justify-center"
                  >
                    {plan.cta}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Limits & how it works */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionLabel center>How it works</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight text-center">
              Limits & billing
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="bg-subtle border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-feature text-primary">
                  Call duration
                </h3>
                <p className="mt-3 text-body text-secondary">
                  Maximum 2 hours per call. The bot automatically leaves at 2 hours to keep
                  costs predictable. Most discovery calls are 30–45 minutes.
                </p>
              </div>
              <div className="bg-subtle border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-feature text-primary">
                  Overage
                </h3>
                <p className="mt-3 text-body text-secondary">
                  Need more calls? Overage is billed per call at the rate shown for each plan.
                  No surprise fees. Usage is tracked in your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              Enterprise
            </h2>
            <p className="mt-4 text-body text-secondary">
              Custom deployment, SSO, security, and dedicated support for larger organizations.
              Volume pricing available.
            </p>
            <Button variant="secondary" href="/contact" className="mt-8">
              Contact sales
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Ready to improve every call?
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            Start with one free call. No credit card required.
          </p>
          <Button variant="primary" className="mt-8">
            Start free trial
          </Button>
        </div>
      </section>
    </>
  );
}
