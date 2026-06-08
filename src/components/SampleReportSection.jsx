import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";
import SampleReport from "./mockups/SampleReport";

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

const variants = ["strong", "rough"];

export default function SampleReportSection() {
  const { t } = useTranslation();
  const [variant, setVariant] = useState("strong");

  return (
    <section className="py-section sm:py-section-lg bg-subtle">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={container}
          className="text-center mb-12"
        >
          <motion.div variants={item}>
            <SectionLabel center>{t("sampleReport.label")}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-display font-bold text-section text-primary tracking-tight"
          >
            {t("sampleReport.title")}
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-body text-secondary max-w-2xl mx-auto"
          >
            {t("sampleReport.subtitle")}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 inline-flex items-center gap-1 p-1 rounded-xl bg-white border border-border"
          >
            {variants.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setVariant(v)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  variant === v
                    ? "bg-primary text-white"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {t(`sampleReport.toggle.${v}`)}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={variant}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <SampleReport variant={variant} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
