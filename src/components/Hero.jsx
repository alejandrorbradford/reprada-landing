import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import SampleReport from "./mockups/SampleReport";
import { useLocale } from "../contexts/LocaleContext";

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const APP_URL = import.meta.env.VITE_APP_URL || "http://localhost:3000";

export default function Hero() {
  const { t } = useTranslation();
  const { basePath } = useLocale();
  return (
    <section className="pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center"
        >
          <motion.div variants={item}>
            <SectionLabel center>{t("hero.label")}</SectionLabel>
          </motion.div>
          <motion.h1
            variants={item}
            className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto"
          >
            {t("hero.headline")}
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-body text-secondary max-w-2xl mx-auto"
          >
            {t("hero.subheadline")}
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`${APP_URL}${basePath || ""}/register`}
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] bg-primary text-white hover:bg-black"
            >
              {t("hero.getStarted")}
            </a>
            <Button variant="secondary" href={`${APP_URL}${basePath || ""}/login`}>{t("hero.signIn")}</Button>
          </motion.div>
          <motion.p variants={item} className="mt-6 text-label text-secondary">
            {t("hero.noCreditCard")}
          </motion.p>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SampleReport variant="strong" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
