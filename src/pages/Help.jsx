import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, ChevronDown } from "lucide-react";
import { useLocale } from "../contexts/LocaleContext";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";

const faqKeys = [
  { qKey: "pages.help.faq1q", aKey: "pages.help.faq1a" },
  { qKey: "pages.help.faq2q", aKey: "pages.help.faq2a" },
  { qKey: "pages.help.faq3q", aKey: "pages.help.faq3a" },
  { qKey: "pages.help.faq4q", aKey: "pages.help.faq4a" },
  { qKey: "pages.help.faq5q", aKey: "pages.help.faq5a" },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left gap-4"
      >
        <span className="font-semibold text-primary text-[15px]">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 text-body text-secondary">{a}</div>
      )}
    </div>
  );
}

export default function Help() {
  const { t } = useTranslation();
  const { localizePath } = useLocale();
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <SectionLabel center>{t("pages.help.label")}</SectionLabel>
          <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
            {t("pages.help.title")}
          </h1>
          <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
            {t("pages.help.subtitle")}
          </p>
          <div className="mt-10 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary" />
            <input
              type="search"
              placeholder={t("pages.help.searchPlaceholder")}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-white text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
        </div>
      </section>

      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-section text-primary tracking-tight mb-8">
              {t("pages.help.faqTitle")}
            </h2>
            <div className="bg-white border border-border rounded-xl px-6 overflow-hidden">
              {faqKeys.map((faq, idx) => (
                <FaqItem
                  key={faq.qKey}
                  q={t(faq.qKey)}
                  a={t(faq.aKey)}
                  isOpen={openIdx === idx}
                  onToggle={() => setOpenIdx(openIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            {t("pages.help.stillNeedHelp")}
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            {t("pages.help.supportDesc")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href={localizePath("/contact")}>{t("pages.help.contactSupport")}</Button>
            <a
              href="mailto:support@repradar.com"
              className="text-body text-secondary hover:text-primary transition-colors"
            >
              support@repradar.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
