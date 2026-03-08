import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const steps = [
  { num: "01", titleKey: "howItWorks.step1Title", descKey: "howItWorks.step1Desc" },
  { num: "02", titleKey: "howItWorks.step2Title", descKey: "howItWorks.step2Desc" },
  { num: "03", titleKey: "howItWorks.step3Title", descKey: "howItWorks.step3Desc" },
];

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="py-section sm:py-section-lg">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.div variants={item}>
            <SectionLabel center>{t("howItWorks.label")}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-display font-bold text-section text-primary tracking-tight"
          >
            {t("howItWorks.title")}
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-body text-secondary max-w-2xl mx-auto"
          >
            {t("howItWorks.subtitle")}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid gap-8 sm:grid-cols-3 sm:gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="text-center sm:text-left p-6 rounded-xl hover:bg-subtle/50 transition-colors"
            >
              <span className="font-display font-bold text-4xl text-border">
                {step.num}
              </span>
              <h3 className="mt-4 font-display font-semibold text-feature text-primary">
                {t(step.titleKey)}
              </h3>
              <p className="mt-3 text-body text-secondary">{t(step.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
