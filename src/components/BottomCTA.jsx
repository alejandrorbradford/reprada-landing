import SectionLabel from "./SectionLabel";
import Button from "./Button";

export default function BottomCTA() {
  return (
    <section className="py-section sm:py-section-lg">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <SectionLabel center>Get started</SectionLabel>
        <h2 className="font-display font-bold text-section text-primary tracking-tight">
          Ready to improve every call?
        </h2>
        <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
          Start for free. No credit card required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Sign in</Button>
        </div>
      </div>
    </section>
  );
}
