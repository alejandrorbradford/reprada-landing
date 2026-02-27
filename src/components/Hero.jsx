import SectionLabel from "./SectionLabel";
import Button from "./Button";
import CallReportCard from "./mockups/CallReportCard";

export default function Hero() {
  return (
    <section className="pt-24 pb-32 sm:pt-32 sm:pb-40">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <SectionLabel center>AI-powered sales coaching</SectionLabel>
        <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight max-w-3xl mx-auto">
          Turn every sales call into a coaching moment
        </h1>
        <p className="mt-6 text-body text-secondary max-w-2xl mx-auto">
          RepRadar analyzes your calls with AI — scores, talk ratio, key moments,
          and improvement tips. Connect Google Calendar and get insights automatically.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Sign in</Button>
        </div>
        <p className="mt-6 text-label text-secondary">No credit card required</p>
        <div className="mt-16">
          <CallReportCard />
        </div>
      </div>
    </section>
  );
}
