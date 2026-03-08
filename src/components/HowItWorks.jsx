import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const steps = [
  { num: "01", title: "Connect Google Calendar", desc: "RepRadar syncs your meetings and joins as a bot — no manual setup." },
  { num: "02", title: "Calls get transcribed & analyzed", desc: "AI scores discovery, objections, closing, and rapport. Get key moments and improvement tips." },
  { num: "03", title: "See insights & improve", desc: "Dashboard, leaderboard, and actionable feedback for every rep." },
];

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

export default function HowItWorks() {
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
            <SectionLabel center>How it works</SectionLabel>
          </motion.div>
          <motion.h2
            variants={item}
            className="font-display font-bold text-section text-primary tracking-tight"
          >
            Effortless call analysis
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-4 text-body text-secondary max-w-2xl mx-auto"
          >
            Connect once, get insights on every call. No manual work.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
          className="grid gap-8 sm:grid-cols-3 sm:gap-8"
        >
          {steps.map((step, i) => (
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
                {step.title}
              </h3>
              <p className="mt-3 text-body text-secondary">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
