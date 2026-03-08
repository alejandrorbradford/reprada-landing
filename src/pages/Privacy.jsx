import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";

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

      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-12 text-body text-secondary">
              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.privacy.infoWeCollectTitle")}
                </h2>
                <p>{t("pages.privacy.infoWeCollect")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.privacy.howWeUseTitle")}
                </h2>
                <p>{t("pages.privacy.howWeUse")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.privacy.cookiesTitle")}
                </h2>
                <p>{t("pages.privacy.cookies")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.privacy.thirdPartiesTitle")}
                </h2>
                <p>{t("pages.privacy.thirdParties")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.privacy.dataRetentionTitle")}
                </h2>
                <p>{t("pages.privacy.dataRetention")}</p>
              </div>

              <div>
                <h2 className="font-display font-bold text-feature text-primary mb-4">
                  {t("pages.privacy.contactUsTitle")}
                </h2>
                <p>
                  {t("pages.privacy.contactUsPrefix")}{" "}
                  <a href="mailto:privacy@repradar.com" className="text-primary hover:underline">
                    privacy@repradar.com
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
