import { useTranslation } from "react-i18next";
import { Sparkles, Mail, Target, Zap } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import CallReportCard from "../components/mockups/CallReportCard";
import AnalysisPreview from "../components/mockups/AnalysisPreview";
import EmailReportPreview from "../components/mockups/EmailReportPreview";
import { useLocale } from "../contexts/LocaleContext";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

const valuePropIcons = [Target, Sparkles, Mail];
const valuePropKeys = ["scored", "tips", "reports"];

const howItWorksSteps = [
  { step: "01", key: "step1" },
  { step: "02", key: "step2" },
  { step: "03", key: "step3" },
];

export default function ForSalesReps() {
  const { t } = useTranslation();
  const { basePath } = useLocale();
  const appRegisterHref = `${APP_URL}${basePath || ""}/register`;
  const appLoginHref = `${APP_URL}${basePath || ""}/login`;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>{t("pages.forSalesReps.hero.label")}</SectionLabel>
              <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
                {t("pages.forSalesReps.hero.headline")}
              </h1>
              <p className="mt-6 text-body text-secondary max-w-lg">
                {t("pages.forSalesReps.hero.subheadline")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href={appRegisterHref}>
                  {t("pages.forSalesReps.hero.startFree")}
                </Button>
                <Button variant="secondary" href={appLoginHref}>
                  {t("pages.forSalesReps.hero.signIn")}
                </Button>
              </div>
              <p className="mt-6 text-label text-secondary">
                {t("pages.forSalesReps.hero.noCreditCard")}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <CallReportCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for reps */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel center>{t("pages.forSalesReps.howItWorks.label")}</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              {t("pages.forSalesReps.howItWorks.title")}
            </h2>
            <p className="mt-4 text-body text-secondary max-w-2xl mx-auto">
              {t("pages.forSalesReps.howItWorks.subtitle")}
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {howItWorksSteps.map(({ step, key }) => (
              <div key={step} className="bg-white border border-border rounded-xl p-6">
                <span className="font-display font-bold text-3xl text-border">{step}</span>
                <h3 className="mt-4 font-display font-semibold text-feature text-primary">
                  {t(`pages.forSalesReps.howItWorks.${key}Title`)}
                </h3>
                <p className="mt-3 text-body text-secondary">
                  {t(`pages.forSalesReps.howItWorks.${key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props with mockups */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* AI scores */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <SectionLabel>{t("pages.forSalesReps.aiAnalysis.label")}</SectionLabel>
                <h2 className="font-display font-bold text-section text-primary tracking-tight">
                  {t("pages.forSalesReps.aiAnalysis.title")}
                </h2>
                <p className="mt-4 text-body text-secondary max-w-lg">
                  {t("pages.forSalesReps.aiAnalysis.desc")}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm">
                  <AnalysisPreview />
                </div>
              </div>
            </div>

            {/* Email reports */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <SectionLabel>{t("pages.forSalesReps.emailReports.label")}</SectionLabel>
                <h2 className="font-display font-bold text-section text-primary tracking-tight">
                  {t("pages.forSalesReps.emailReports.title")}
                </h2>
                <p className="mt-4 text-body text-secondary max-w-lg">
                  {t("pages.forSalesReps.emailReports.desc")}
                </p>
              </div>
              <div className="flex justify-center lg:justify-start order-1 lg:order-2">
                <div className="w-full max-w-sm">
                  <EmailReportPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props grid */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel center>{t("pages.forSalesReps.builtForReps.label")}</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              {t("pages.forSalesReps.builtForReps.title")}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {valuePropKeys.map((key, i) => {
              const Icon = valuePropIcons[i];
              const titleKey = key === "scored" ? "scoredTitle" : key === "tips" ? "tipsTitle" : "reportsTitle";
              const descKey = key === "scored" ? "scoredDesc" : key === "tips" ? "tipsDesc" : "reportsDesc";
              return (
                <div key={key} className="bg-white border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-subtle border border-border flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-feature text-primary">
                    {t(`pages.forSalesReps.builtForReps.${titleKey}`)}
                  </h3>
                  <p className="mt-3 text-body text-secondary">
                    {t(`pages.forSalesReps.builtForReps.${descKey}`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talk ratio callout */}
      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 text-center">
            <Zap className="w-10 h-10 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
            <h2 className="font-display font-bold text-section tracking-tight">
              {t("pages.forSalesReps.talkRatio.title")}
            </h2>
            <p className="mt-4 text-body max-w-2xl mx-auto opacity-90">
              {t("pages.forSalesReps.talkRatio.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            {t("pages.forSalesReps.cta.title")}
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            {t("pages.forSalesReps.cta.subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href={appRegisterHref}>
              {t("pages.forSalesReps.cta.startFree")}
            </Button>
            <Button variant="secondary" href={appLoginHref}>
              {t("pages.forSalesReps.cta.signIn")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
