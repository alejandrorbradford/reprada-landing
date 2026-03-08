import { useState } from "react";
import { useTranslation } from "react-i18next";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

export default function Contact() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>{t("pages.contact.label")}</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            {t("pages.contact.title")}
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            {t("pages.contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <h2 className="font-display font-bold text-section text-primary tracking-tight">
                {t("pages.contact.sendMessage")}
              </h2>
              <p className="mt-4 text-body text-secondary">
                {t("pages.contact.formDesc")}
              </p>
              <div className="mt-8 space-y-4">
                <p className="text-body text-secondary">
                  <strong className="text-primary">Email</strong> —{" "}
                  <a href="mailto:hello@repradar.com" className="hover:underline">
                    hello@repradar.com
                  </a>
                </p>
                <p className="text-body text-secondary">
                  <strong className="text-primary">Support</strong> —{" "}
                  <a href="mailto:support@repradar.com" className="hover:underline">
                    support@repradar.com
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white border border-border rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="font-semibold text-primary text-lg">{t("pages.contact.thanks")}</p>
                  <p className="mt-2 text-body text-secondary">
                    {t("pages.contact.thanksDesc")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-label font-medium text-primary mb-1">
                      {t("pages.contact.name")}
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder={t("pages.contact.namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-label font-medium text-primary mb-1">
                      {t("pages.contact.email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder={t("pages.contact.emailPlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-label font-medium text-primary mb-1">
                      {t("pages.contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder={t("pages.contact.messagePlaceholder")}
                    />
                  </div>
                  <Button variant="primary" type="submit" className="w-full justify-center">
                    {t("pages.contact.submit")}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
