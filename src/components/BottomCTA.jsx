import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import { useLocale } from "../contexts/LocaleContext";

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

export default function BottomCTA() {
  const { t } = useTranslation();
  const { basePath } = useLocale();
  return (
    <section className="py-section sm:py-section-lg">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel center>{t("bottomCta.label")}</SectionLabel>
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            {t("bottomCta.title")}
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            {t("bottomCta.subtitle")}
          </p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Button variant="primary" href={`${APP_URL}${basePath || ""}/register`}>{t("bottomCta.getStarted")}</Button>
            <Button variant="secondary" href={`${APP_URL}${basePath || ""}/login`}>{t("bottomCta.signIn")}</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
