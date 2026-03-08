import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Button from "./Button";
import CallReportCard from "./mockups/CallReportCard";

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

export default function Hero() {
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
            <SectionLabel center>AI-powered sales coaching</SectionLabel>
          </motion.div>
          <motion.h1
            variants={item}
            className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto"
          >
            Turn every sales call into a coaching moment
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-body text-secondary max-w-2xl mx-auto"
          >
            RepRadar analyzes your calls with AI — scores, talk ratio, key moments,
            and improvement tips. Connect Google Calendar and get insights automatically.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="primary">Get started</Button>
            <Button variant="secondary">Sign in</Button>
          </motion.div>
          <motion.p variants={item} className="mt-6 text-label text-secondary">
            No credit card required
          </motion.p>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <CallReportCard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
