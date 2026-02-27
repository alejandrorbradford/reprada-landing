import { Mic2, Sparkles, Mail, Target, TrendingUp, Zap } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import CallReportCard from "../components/mockups/CallReportCard";
import AnalysisPreview from "../components/mockups/AnalysisPreview";
import EmailReportPreview from "../components/mockups/EmailReportPreview";

const valueProps = [
  {
    icon: Target,
    title: "Get scored on every call",
    desc: "AI analyzes discovery, objections, closing, and rapport using a strict rubric. Know exactly how you performed — no guesswork, no waiting for manager feedback.",
  },
  {
    icon: Sparkles,
    title: "Actionable improvement tips",
    desc: "Get specific suggestions tailored to your performance. Not generic advice — insights like 'Ask one more discovery question before presenting' so you know exactly what to do next.",
  },
  {
    icon: Mail,
    title: "Reports in your inbox",
    desc: "Summary, key moments, and tips delivered after every call. No need to log in — insights come to you. Review on the go between meetings.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connect your calendar",
    desc: "One-click Google Calendar sync. RepRadar joins your meetings as a bot — no manual setup, no extra steps.",
  },
  {
    step: "02",
    title: "Calls get analyzed automatically",
    desc: "AI transcribes and scores every call. Discovery quality, objection handling, closing technique, and rapport — all measured against a consistent rubric.",
  },
  {
    step: "03",
    title: "Improve call by call",
    desc: "See your talk ratio (40–50% is the sweet spot), key moments, and improvement tips. Track your progress over time.",
  },
];

export default function ForSalesReps() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>For Sales Reps</SectionLabel>
              <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
                Get scored on every call. Improve without the guesswork.
              </h1>
              <p className="mt-6 text-body text-secondary max-w-lg">
                RepRadar analyzes your calls with AI — scores, talk ratio, key moments, and improvement tips.
                Connect Google Calendar and get insights automatically after every meeting. No more wondering
                how you did or what to work on next.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="primary">Start for free</Button>
                <Button variant="secondary">Sign in</Button>
              </div>
              <p className="mt-6 text-label text-secondary">No credit card required</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <CallReportCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works for reps */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel center>How it works</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              Three steps to better calls
            </h2>
            <p className="mt-4 text-body text-secondary max-w-2xl mx-auto">
              Set it once. Get insights on every call. No manual work.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.step} className="bg-white border border-border rounded-xl p-6">
                <span className="font-display font-bold text-3xl text-border">{item.step}</span>
                <h3 className="mt-4 font-display font-semibold text-feature text-primary">
                  {item.title}
                </h3>
                <p className="mt-3 text-body text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value props with mockups */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {/* AI scores */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <SectionLabel>AI call analysis</SectionLabel>
                <h2 className="font-display font-bold text-section text-primary tracking-tight">
                  Know exactly how you performed
                </h2>
                <p className="mt-4 text-body text-secondary max-w-lg">
                  Every call gets a 0–100 score across discovery, objection handling, closing, and rapport.
                  Key moments are flagged with timestamps — objection at 2:15, strong discovery question at 5:30.
                  No more vague feedback. Just clear, actionable data.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-sm">
                  <AnalysisPreview />
                </div>
              </div>
            </div>

            {/* Email reports */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <SectionLabel>Email reports</SectionLabel>
                <h2 className="font-display font-bold text-section text-primary tracking-tight">
                  Insights delivered to your inbox
                </h2>
                <p className="mt-4 text-body text-secondary max-w-lg">
                  When the call ends, your report is on its way. Summary, key moments, and improvement tips —
                  no need to log in. Review between meetings, on your phone, whenever it works for you.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start order-1 lg:order-2">
                <div className="w-full max-w-sm">
                  <EmailReportPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value props grid */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel center>Built for reps</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              Everything you need to improve
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-subtle border border-border flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-semibold text-feature text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-body text-secondary">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talk ratio callout */}
      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-12 text-center">
            <Zap className="w-10 h-10 mx-auto mb-4 opacity-80" strokeWidth={1.5} />
            <h2 className="font-display font-bold text-section tracking-tight">
              The 40–50% talk ratio sweet spot
            </h2>
            <p className="mt-4 text-body max-w-2xl mx-auto opacity-90">
              RepRadar tracks how much you talk vs. the prospect. The best discovery calls land in the 40–50% range —
              enough to guide the conversation, not dominate it. Get real-time feedback so you can adjust.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Ready to improve every call?
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            Start for free. Connect your calendar and get your first analysis within minutes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary">Start for free</Button>
            <Button variant="secondary">Sign in</Button>
          </div>
        </div>
      </section>
    </>
  );
}
