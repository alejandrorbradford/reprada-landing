import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    quote: "We switched from Gong. RepRadar's talk ratio metric alone changed how we coach — we show reps the numbers instead of guessing.",
    name: "Sarah Chen",
    title: "VP Sales, B2B SaaS (40 reps)",
    avatar: "SC",
  },
  {
    quote: "The key moments and improvement tips are spot-on. Our reps actually use them. Finally, AI that understands sales.",
    name: "Marcus Rodriguez",
    title: "Sales Manager, Fintech (12 reps)",
    avatar: "MR",
  },
  {
    quote: "Call reviews went from a weekly chore to a daily habit. Every rep knows exactly where to improve before their next 1:1.",
    name: "Emily Foster",
    title: "Director of Sales Ops, B2B software (25 reps)",
    avatar: "EF",
  },
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
            <SectionLabel center>Testimonials</SectionLabel>
          </motion.div>
          <motion.h2
            variants={card}
            className="font-display font-bold text-section text-primary tracking-tight"
          >
            Don't just take our word for it
          </motion.h2>
          <motion.p
            variants={card}
            className="mt-4 text-body text-secondary max-w-2xl mx-auto"
          >
            Sales leaders and teams trust RepRadar to coach every rep.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
              className="p-8 rounded-xl bg-white border border-border"
            >
              <p className="text-body text-primary">{t.quote}</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center text-sm font-medium text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-medium text-primary">{t.name}</p>
                  <p className="text-sm text-secondary">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
