import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import SampleReport from "./mockups/SampleReport";
import { useLocale } from "../contexts/LocaleContext";

const GoogleMeetIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="22" height="22" rx="6" fill="#00897B"/>
    <path d="M5 9C5 8.45 5.45 8 6 8H12.5C13.05 8 13.5 8.45 13.5 9V13C13.5 13.55 13.05 14 12.5 14H6C5.45 14 5 13.55 5 13V9Z" fill="white"/>
    <path d="M13.5 10.5L17 8.5V13.5L13.5 11.5V10.5Z" fill="white"/>
  </svg>
);

const ZoomIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="22" height="22" rx="6" fill="#2D8CFF"/>
    <path d="M4 9C4 8.45 4.45 8 5 8H11.5C12.05 8 12.5 8.45 12.5 9V13C12.5 13.55 12.05 14 11.5 14H5C4.45 14 4 13.55 4 13V9Z" fill="white"/>
    <path d="M12.5 10.25L17 8V14L12.5 11.75V10.25Z" fill="white"/>
  </svg>
);

const TeamsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="22" height="22" rx="6" fill="#5B5EA6"/>
    <path d="M7 8H15" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M11 8V15" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M7.5 11H9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

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
    <section
      className="pt-24 pb-32 sm:pt-32 sm:pb-40 overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(17,17,17,0.04) 0%, transparent 70%)" }}
    >
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

          {/* Platform integrations strip */}
          <motion.div variants={item} className="mt-8 flex flex-col items-center gap-3">
            <p className="text-xs font-medium text-secondary uppercase tracking-widest">Works with</p>
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <GoogleMeetIcon />
                <span className="text-sm font-medium text-primary/70">Google Meet</span>
              </div>
              <div className="w-px h-4 bg-border flex-shrink-0" />
              <div className="flex items-center gap-2">
                <ZoomIcon />
                <span className="text-sm font-medium text-primary/70">Zoom</span>
              </div>
              <div className="w-px h-4 bg-border flex-shrink-0" />
              <div className="flex items-center gap-2">
                <TeamsIcon />
                <span className="text-sm font-medium text-primary/70">Microsoft Teams</span>
              </div>
            </div>
          </motion.div>

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
