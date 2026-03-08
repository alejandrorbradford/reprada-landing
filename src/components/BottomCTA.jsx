import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

export default function BottomCTA() {
  return (
    <section className="py-section sm:py-section-lg">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel center>Get started</SectionLabel>
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Ready to improve every call?
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            Start for free. No credit card required.
          </p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Button variant="primary">Get started</Button>
            <Button variant="secondary">Sign in</Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
