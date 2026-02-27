import SectionLabel from "./SectionLabel";

const steps = [
  { num: "01", title: "Connect Google Calendar", desc: "RepRadar syncs your meetings and joins as a bot — no manual setup." },
  { num: "02", title: "Calls get transcribed & analyzed", desc: "AI scores discovery, objections, closing, and rapport. Get key moments and improvement tips." },
  { num: "03", title: "See insights & improve", desc: "Dashboard, leaderboard, and actionable feedback for every rep." },
];

export default function HowItWorks() {
  return (
    <section className="py-section sm:py-section-lg">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel center>How it works</SectionLabel>
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Effortless call analysis
          </h2>
          <p className="mt-4 text-body text-secondary max-w-2xl mx-auto">
            Connect once, get insights on every call. No manual work.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="text-center sm:text-left">
              <span className="font-display font-bold text-4xl text-border">
                {step.num}
              </span>
              <h3 className="mt-4 font-display font-semibold text-feature text-primary">
                {step.title}
              </h3>
              <p className="mt-3 text-body text-secondary">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
