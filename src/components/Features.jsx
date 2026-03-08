import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";
import CalendarPreview from "./mockups/CalendarPreview";
import AnalysisPreview from "./mockups/AnalysisPreview";
import LeaderboardPreview from "./mockups/LeaderboardPreview";
import EmailReportPreview from "./mockups/EmailReportPreview";

const featureKeys = [
  { key: "connectCalendar", mockup: CalendarPreview },
  { key: "aiAnalysis", mockup: AnalysisPreview },
  { key: "teams", mockup: LeaderboardPreview },
  { key: "emailReports", mockup: EmailReportPreview },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className="py-section sm:py-section-lg bg-subtle">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        {featureKeys.map((f, i) => {
          const Mockup = f.mockup;
          const label = t(`features.${f.key}.label`);
          const title = t(`features.${f.key}.title`);
          const desc = t(`features.${f.key}.desc`);
          const isReversed = i % 2 === 1;
          return (
            <motion.div
              key={f.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={container}
              className="mb-24 last:mb-0"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                  variants={isReversed ? slideInRight : slideInLeft}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  <SectionLabel>{label}</SectionLabel>
                  <h2 className="font-display font-bold text-section text-primary tracking-tight">
                    {title}
                  </h2>
                  <p className="mt-4 text-body text-secondary max-w-lg">
                    {desc}
                  </p>
                </motion.div>
                <motion.div
                  variants={isReversed ? slideInLeft : slideInRight}
                  className={`flex justify-center lg:justify-end ${isReversed ? "lg:order-1" : ""}`}
                >
                  <motion.div
                    className="w-full max-w-sm"
                    whileHover={{ scale: 1.02, y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mockup />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
