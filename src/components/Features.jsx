import SectionLabel from "./SectionLabel";
import CalendarPreview from "./mockups/CalendarPreview";
import AnalysisPreview from "./mockups/AnalysisPreview";
import LeaderboardPreview from "./mockups/LeaderboardPreview";
import EmailReportPreview from "./mockups/EmailReportPreview";

const features = [
  {
    label: "Connect Calendar",
    title: "Connect Google Calendar",
    desc: "RepRadar syncs your meetings and joins as a bot. No manual setup.",
    mockup: CalendarPreview,
  },
  {
    label: "AI Analysis",
    title: "AI call scores & key moments",
    desc: "Strict rubric for discovery, objections, closing, and rapport. Get actionable improvement tips.",
    mockup: AnalysisPreview,
  },
  {
    label: "Teams & Leaders",
    title: "Visibility on your sales team",
    desc: "See who's performing well and who's lagging behind. Leaderboard, team rankings, and call history — so managers can coach the right reps at the right time.",
    mockup: LeaderboardPreview,
  },
  {
    label: "Email Reports",
    title: "Get reports after every call",
    desc: "Summary, key moments, and improvement tips delivered to your inbox when the call ends. No need to log in — insights come to you.",
    mockup: EmailReportPreview,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-section sm:py-section-lg bg-subtle">
      <div className="max-w-content mx-auto px-5 sm:px-6 lg:px-8">
        {features.map((f) => {
          const Mockup = f.mockup;
          return (
            <div key={f.label} className="mb-24 last:mb-0">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <SectionLabel>{f.label}</SectionLabel>
                  <h2 className="font-display font-bold text-section text-primary tracking-tight">
                    {f.title}
                  </h2>
                  <p className="mt-4 text-body text-secondary max-w-lg">
                    {f.desc}
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-sm">
                    <Mockup />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
