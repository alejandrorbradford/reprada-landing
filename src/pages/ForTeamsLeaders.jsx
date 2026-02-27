import { Crown, BarChart3, Users, Target, MessageSquare } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import LeaderboardPreview from "../components/mockups/LeaderboardPreview";

const valueProps = [
  {
    icon: BarChart3,
    title: "See who's ahead and who's behind",
    desc: "Team leaderboard with average scores per rep. Spot top performers and identify who needs coaching — at a glance, without listening to every call.",
  },
  {
    icon: Crown,
    title: "Coach the right reps at the right time",
    desc: "Actionable insights tell you exactly what to discuss. 'Marcus needs work on objection handling' — so you know which 1:1 to prioritize and what to cover.",
  },
  {
    icon: Users,
    title: "Team-wide trends and patterns",
    desc: "Understand common objections across your team, which discovery questions work best, and where reps consistently struggle. Data-driven coaching, not gut feel.",
  },
];

const capabilities = [
  "Team leaderboard with average call scores",
  "Per-rep call history and score trends",
  "Identify reps who need coaching — and why",
  "Skip the 1:1 prep — see exactly what to discuss",
  "Track improvement over time",
  "No more spot-checking calls — AI does the work",
];

export default function ForTeamsLeaders() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>For Teams & Leaders</SectionLabel>
              <h1 className="font-display font-bold text-hero sm:text-[60px] text-primary tracking-tight">
                Visibility on your sales team. Coach smarter, not harder.
              </h1>
              <p className="mt-6 text-body text-secondary max-w-lg">
                See who's performing well and who's lagging behind. RepRadar gives managers the insights to
                coach the right reps at the right time — without listening to every call. Leaderboard, team
                rankings, and call history so you know exactly where to focus.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button variant="primary">Get started</Button>
                <Button variant="secondary" href="/contact">Contact us</Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <LeaderboardPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The problem / The solution */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display font-bold text-feature text-primary tracking-tight">
                Without RepRadar
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  You spot-check a few calls, miss the rest
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  1:1s are reactive — you find out about issues too late
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Hard to know who needs help and with what
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Coaching feels like guesswork
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-display font-bold text-feature text-primary tracking-tight">
                With RepRadar
              </h2>
              <ul className="mt-4 space-y-3 text-body text-secondary">
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Every call analyzed — no gaps in visibility
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  See who's struggling before the 1:1
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Know exactly what to coach on — objection handling, discovery, closing
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">—</span>
                  Data-driven coaching that scales
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionLabel center>Built for managers</SectionLabel>
            <h2 className="font-display font-bold text-section text-primary tracking-tight">
              Everything you need to lead your team
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-subtle border border-border rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-border flex items-center justify-center mb-4">
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

      {/* Capabilities list */}
      <section className="py-section sm:py-section-lg bg-subtle">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionLabel>What you get</SectionLabel>
              <h2 className="font-display font-bold text-section text-primary tracking-tight">
                Full visibility. Zero guesswork.
              </h2>
              <p className="mt-4 text-body text-secondary max-w-lg">
                RepRadar gives you the data to coach effectively. See every rep's performance, understand
                trends, and have the right conversations at the right time.
              </p>
              <ul className="mt-8 space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex gap-3">
                    <Target className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-body text-primary">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <LeaderboardPreview />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching callout */}
      <section className="py-section">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
          <div className="bg-primary text-white rounded-2xl p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <MessageSquare className="w-10 h-10 mb-4 opacity-80" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-section tracking-tight">
                  Skip the 1:1 prep
                </h2>
                <p className="mt-4 text-body opacity-90">
                  Walk into every 1:1 knowing exactly what to discuss. RepRadar surfaces the improvement tips
                  for each rep — so you can have targeted, actionable conversations instead of generic check-ins.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <span className="font-display font-bold text-6xl">100%</span>
                  <p className="mt-2 text-body opacity-90">of calls analyzed</p>
                  <p className="text-label opacity-75">No spot-checking. No gaps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section sm:py-section-lg">
        <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-section text-primary tracking-tight">
            Ready to see your team's performance?
          </h2>
          <p className="mt-4 text-body text-secondary max-w-xl mx-auto">
            Get in touch for a demo or start free with your team.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary">Get started</Button>
            <Button variant="secondary" href="/contact">Contact us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
