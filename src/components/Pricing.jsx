import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import { useLocale } from "../contexts/LocaleContext";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

export default function Pricing() {
  const { t } = useTranslation();
  const { localizePath, basePath } = useLocale();
  return (
    <section id="pricing" className="py-section sm:py-section-lg">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <SectionLabel center>{t("pricingSection.label")}</SectionLabel>
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            {t("pricingSection.title")}
          </h2>
          <p className="mt-4 text-body text-secondary">
            {t("pricingSection.subtitle")}
          </p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button variant="primary" href={`${APP_URL}${basePath || ""}/register`}>{t("pricingSection.getStarted")}</Button>
            <Link
              to={localizePath("/contact")}
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium border border-border text-primary hover:bg-subtle transition-colors"
            >
              {t("pricingSection.contactSales")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
