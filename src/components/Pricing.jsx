import { Link } from "react-router-dom";
import SectionLabel from "./SectionLabel";
import Button from "./Button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-section sm:py-section-lg">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel center>Pricing</SectionLabel>
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Start for free
          </h2>
          <p className="mt-4 text-body text-secondary">
            Get started with RepRadar at no cost. Free for individuals and small teams.
            Contact us for enterprise pricing.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary">Get started</Button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[15px] font-medium border border-border text-primary hover:bg-subtle transition-colors"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
