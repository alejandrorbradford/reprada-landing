import { useTranslation } from "react-i18next";
import { Shield, Lock, Headphones, Building2, Check, Server } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { useLocale } from "../contexts/LocaleContext";

const valuePropIcons = [Building2, Lock, Headphones];

export default function Enterprise() {
  const { t } = useTranslation();
  const { localizePath } = useLocale();
  const contactHref = localizePath("/contact");

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>{t("pages.enterprise.hero.label")}</SectionLabel>
              <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
                {t("pages.enterprise.hero.headline")}
              </h1>
              <p className="mt-6 text-body text-secondary max-w-lg">
                {t("pages.enterprise.hero.subheadline")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href={contactHref}>
                  {t("pages.enterprise.hero.contactSales")}
                </Button>
                <Button variant="secondary" href={contactHref}>
                  {t("pages.enterprise.hero.requestDemo")}
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-subtle border border-border rounded-2xl p-6 -rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-primary">Enterprise</p>
                </div>
                <ul className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-primary">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2.5} />
                      {t(`pages.enterprise.hero.checklist${i}`)}
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
                {t("pages.enterprise.standardLimits.title")}
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {t(`pages.enterprise.standardLimits.bullet${i}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-bold text-feature text-primary tracking-tight">
                {t("pages.enterprise.repRadarEnterprise.title")}
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {t(`pages.enterprise.repRadarEnterprise.bullet${i}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel center>{t("pages.enterprise.builtForScale.label")}</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              {t("pages.enterprise.builtForScale.title")}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => {
              const Icon = valuePropIcons[i - 1];
              return (
                <div key={i} className="bg-subtle border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-feature text-primary">
                    {t(`pages.enterprise.builtForScale.value${i}Title`)}
                  </h3>
                  <p className="mt-3 text-body text-secondary">
                    {t(`pages.enterprise.builtForScale.value${i}Desc`)}
                  </p>
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
              <SectionLabel>{t("pages.enterprise.whatsIncluded.label")}</SectionLabel>
              <h2 className="font-display font-bold text-section text-primary tracking-tight">
                {t("pages.enterprise.whatsIncluded.title")}
              </h2>
              <p className="mt-4 text-body text-secondary max-w-lg">
                {t("pages.enterprise.whatsIncluded.desc")}
              </p>
              <ul className="mt-8 space-y-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <li key={i} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-body text-primary">
                      {t(`pages.enterprise.whatsIncluded.cap${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-white border border-border rounded-2xl p-6 rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-6">
                  <Server className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-primary">
                    {t("pages.enterprise.whatsIncluded.deploymentLabel")}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-secondary">
                  {[1, 2, 3, 4].map((i) => (
                    <li key={i}>{t(`pages.enterprise.whatsIncluded.deploy${i}`)}</li>
                  ))}
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
                  {t("pages.enterprise.securityCompliance.title")}
                </h2>
                <p className="mt-4 text-body opacity-90">
                  {t("pages.enterprise.securityCompliance.desc")}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 opacity-80 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-body">
                      {t(`pages.enterprise.securityCompliance.compliance${i}`)}
                    </span>
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
            {t("pages.enterprise.cta.title")}
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            {t("pages.enterprise.cta.subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href={contactHref}>
              {t("pages.enterprise.cta.contactSales")}
            </Button>
            <Button variant="secondary" href={contactHref}>
              {t("pages.enterprise.cta.requestDemo")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
