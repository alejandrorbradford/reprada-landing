import { useTranslation } from "react-i18next";
import { Check, Zap, Users, Building2 } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { useLocale } from "../contexts/LocaleContext";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

const planConfig = [
  {
    planId: "starter",
    price: 49,
    calls: 20,
    featureCount: 5,
    icon: Zap,
  },
  {
    planId: "pro",
    price: 99,
    calls: 45,
    featureCount: 5,
    icon: Zap,
    popular: true,
  },
  {
    planId: "teams",
    price: 199,
    calls: 100,
    featureCount: 6,
    icon: Users,
    hasSeats: true,
    extraSeat: true,
  },
];

export default function PricingPage() {
  const { t } = useTranslation();
  const { basePath, localizePath } = useLocale();
  const contactHref = localizePath("/contact");

  function getCtaHref(planId) {
    const checkoutPath = basePath ? `${basePath}/checkout` : "/checkout";
    return `${APP_URL}${basePath || ""}/register?redirect=${encodeURIComponent(checkoutPath + "?plan=" + planId)}`;
  }

  const startFreeTrialHref = `${APP_URL}${basePath || ""}/register`;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>{t("pages.pricingPage.hero.label")}</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
            {t("pages.pricingPage.hero.title")}
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            {t("pages.pricingPage.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Free trial callout */}
      <section className="pb-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-subtle border border-border rounded-2xl p-8 text-center">
            <h2 className="font-display font-bold text-feature text-primary">
              {t("pages.pricingPage.freeTrial.title")}
            </h2>
            <p className="mt-2 text-body text-secondary">
              {t("pages.pricingPage.freeTrial.desc1")}
            </p>
            <p className="mt-1 text-label text-secondary">
              {t("pages.pricingPage.freeTrial.desc2")}
            </p>
            <Button variant="primary" className="mt-6" href={startFreeTrialHref}>
              {t("pages.pricingPage.freeTrial.cta")}
            </Button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {planConfig.map((plan) => {
              const Icon = plan.icon;
              const prefix = `pages.pricingPage.plans.${plan.planId}`;
              const features = Array.from({ length: plan.featureCount }, (_, i) =>
                t(`${prefix}.feature${i + 1}`)
              );
              return (
                <div
                  key={plan.planId}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? "bg-white border-2 border-primary shadow-lg"
                      : "bg-white border border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-label font-medium">
                        {t(`${prefix}.mostPopular`)}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    <h3 className="font-display font-semibold text-feature text-primary">
                      {t(`${prefix}.name`)}
                    </h3>
                  </div>
                  <p className="text-body text-secondary">{t(`${prefix}.desc`)}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display font-bold text-4xl text-primary">
                      ${plan.price}
                    </span>
                    <span className="text-body text-secondary">{t(`${prefix}.period`)}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-secondary">
                    <span>
                      {plan.calls} {t(`${prefix}.callsLabel`)}
                    </span>
                    {plan.hasSeats && (
                      <span>{t(`${prefix}.seats`)}</span>
                    )}
                    <span>
                      Max {t(`${prefix}.maxDuration`)}/call
                    </span>
                    <span>
                      Overage: {t(`${prefix}.overage`)}
                    </span>
                    {plan.extraSeat && (
                      <span className="text-primary font-medium">
                        {t(`${prefix}.extraSeat`)}
                      </span>
                    )}
                  </div>
                  <ul className="mt-8 space-y-4">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-body text-primary">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    href={getCtaHref(plan.planId)}
                    className="mt-8 w-full justify-center"
                  >
                    {t(`${prefix}.cta`)}
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
            <SectionLabel center>{t("pages.pricingPage.limitsBilling.label")}</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight text-center">
              {t("pages.pricingPage.limitsBilling.title")}
            </h2>
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
              <div className="bg-subtle border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-feature text-primary">
                  {t("pages.pricingPage.limitsBilling.callDurationTitle")}
                </h3>
                <p className="mt-3 text-body text-secondary">
                  {t("pages.pricingPage.limitsBilling.callDurationDesc")}
                </p>
              </div>
              <div className="bg-subtle border border-border rounded-xl p-6">
                <h3 className="font-display font-semibold text-feature text-primary">
                  {t("pages.pricingPage.limitsBilling.overageTitle")}
                </h3>
                <p className="mt-3 text-body text-secondary">
                  {t("pages.pricingPage.limitsBilling.overageDesc")}
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
              {t("pages.pricingPage.enterprise.title")}
            </h2>
            <p className="mt-4 text-body text-secondary">
              {t("pages.pricingPage.enterprise.desc")}
            </p>
            <Button variant="secondary" href={contactHref} className="mt-8">
              {t("pages.pricingPage.enterprise.contactSales")}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            {t("pages.pricingPage.cta.title")}
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            {t("pages.pricingPage.cta.subtitle")}
          </p>
          <Button variant="primary" className="mt-8" href={startFreeTrialHref}>
            {t("pages.pricingPage.cta.startFreeTrial")}
          </Button>
        </div>
      </section>
    </>
  );
}
