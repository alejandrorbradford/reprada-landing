import { useTranslation } from "react-i18next";
import { Crown, BarChart3, Users, Target, MessageSquare } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import LeaderboardPreview from "../components/mockups/LeaderboardPreview";
import { useLocale } from "../contexts/LocaleContext";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

const valuePropIcons = [BarChart3, Crown, Users];

export default function ForTeamsLeaders() {
  const { t } = useTranslation();
  const { basePath, localizePath } = useLocale();
  const contactHref = localizePath("/contact");
  const appRegisterHref = `${APP_URL}${basePath || ""}/register`;

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>{t("pages.forTeamsLeaders.hero.label")}</SectionLabel>
              <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
                {t("pages.forTeamsLeaders.hero.headline")}
              </h1>
              <p className="mt-6 text-body text-secondary max-w-lg">
                {t("pages.forTeamsLeaders.hero.subheadline")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href={appRegisterHref}>
                  {t("pages.forTeamsLeaders.hero.getStarted")}
                </Button>
                <Button variant="secondary" href={contactHref}>
                  {t("pages.forTeamsLeaders.hero.contactUs")}
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <LeaderboardPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The problem / The solution */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-feature text-primary tracking-tight">
                {t("pages.forTeamsLeaders.withoutRepRadar.title")}
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {t(`pages.forTeamsLeaders.withoutRepRadar.bullet${i}`)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display font-bold text-feature text-primary tracking-tight">
                {t("pages.forTeamsLeaders.withRepRadar.title")}
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                {[1, 2, 3, 4].map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary">—</span>
                    {t(`pages.forTeamsLeaders.withRepRadar.bullet${i}`)}
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
            <SectionLabel center>
              {t("pages.forTeamsLeaders.builtForManagers.label")}
            </SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              {t("pages.forTeamsLeaders.builtForManagers.title")}
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
                    {t(`pages.forTeamsLeaders.builtForManagers.value${i}Title`)}
                  </h3>
                  <p className="mt-3 text-body text-secondary">
                    {t(`pages.forTeamsLeaders.builtForManagers.value${i}Desc`)}
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
              <SectionLabel>{t("pages.forTeamsLeaders.whatYouGet.label")}</SectionLabel>
              <h2 className="font-display font-bold text-section text-primary tracking-tight">
                {t("pages.forTeamsLeaders.whatYouGet.title")}
              </h2>
              <p className="mt-4 text-body text-secondary max-w-lg">
                {t("pages.forTeamsLeaders.whatYouGet.desc")}
              </p>
              <ul className="mt-8 space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex gap-3">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-body text-primary">
                      {t(`pages.forTeamsLeaders.whatYouGet.cap${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <LeaderboardPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching callout */}
      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <MessageSquare className="w-10 h-10 mb-4 opacity-80" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-section tracking-tight">
                  {t("pages.forTeamsLeaders.skip1on1.title")}
                </h2>
                <p className="mt-4 text-body opacity-90">
                  {t("pages.forTeamsLeaders.skip1on1.desc")}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display font-bold text-6xl">100%</span>
                  <p className="mt-2 text-body opacity-90">
                    {t("pages.forTeamsLeaders.skip1on1.allCallsAnalyzed")}
                  </p>
                  <p className="text-label opacity-75">
                    {t("pages.forTeamsLeaders.skip1on1.noSpotChecking")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            {t("pages.forTeamsLeaders.cta.title")}
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            {t("pages.forTeamsLeaders.cta.subtitle")}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href={appRegisterHref}>
              {t("pages.forTeamsLeaders.cta.getStarted")}
            </Button>
            <Button variant="secondary" href={contactHref}>
              {t("pages.forTeamsLeaders.cta.contactUs")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
