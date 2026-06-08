import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionLabel from "./SectionLabel";

const StarRating = () => (
  <div className="flex gap-0.5 mb-4" aria-label="5 stars">
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F59E0B" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 1l1.854 3.756L14 5.528l-3 2.922.708 4.126L8 10.5l-3.708 2.076L5 8.45 2 5.528l4.146-.772L8 1z"/>
      </svg>
    ))}
  </div>
);

const testimonialKeys = [
  { quoteKey: "testimonials.quote1", nameKey: "testimonials.name1", titleKey: "testimonials.title1", avatar: "SC", avatarBg: "#DCFCE7", avatarColor: "#166534" },
  { quoteKey: "testimonials.quote2", nameKey: "testimonials.name2", titleKey: "testimonials.title2", avatar: "MR", avatarBg: "#DBEAFE", avatarColor: "#1E40AF" },
  { quoteKey: "testimonials.quote3", nameKey: "testimonials.name3", titleKey: "testimonials.title3", avatar: "EF", avatarBg: "#FEF3C7", avatarColor: "#92400E" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Testimonials() {
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
          <motion.div variants={card}>
            <SectionLabel center>{t("testimonials.label")}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={card}
            className="font-display font-bold text-section text-primary tracking-tight"
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.p
            variants={card}
            className="mt-4 text-body text-secondary max-w-2xl mx-auto"
          >
            {t("testimonials.subtitle")}
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonialKeys.map((item) => (
            <motion.div
              key={item.avatar}
              variants={card}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-xl bg-white border border-border"
            >
              <StarRating />
              <p className="text-body text-primary">{t(item.quoteKey)}</p>
              <div className="mt-6 flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                  style={{ backgroundColor: item.avatarBg, color: item.avatarColor }}
                >
                  {item.avatar}
                </div>
                <div>
                  <p className="font-medium text-primary">{t(item.nameKey)}</p>
                  <p className="text-sm text-secondary">{t(item.titleKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
