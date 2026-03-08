import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";

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

      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12 text-body text-secondary">
              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.terms.acceptanceTitle")}
                </h2>
                <p>{t("pages.terms.acceptance")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.terms.useOfServiceTitle")}
                </h2>
                <p>{t("pages.terms.useOfService")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.terms.restrictionsTitle")}
                </h2>
                <p>{t("pages.terms.restrictions")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.terms.ipTitle")}
                </h2>
                <p>{t("pages.terms.ip")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.terms.liabilityTitle")}
                </h2>
                <p>{t("pages.terms.liability")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.terms.terminationTitle")}
                </h2>
                <p>{t("pages.terms.termination")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.terms.contactTitle")}
                </h2>
                <p>
                  {t("pages.terms.contactPrefix")}{" "}
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
