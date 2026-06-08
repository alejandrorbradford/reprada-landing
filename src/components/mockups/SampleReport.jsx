import { useTranslation } from "react-i18next";
import {
  Mic,
  HelpCircle,
  Ban,
  PauseCircle,
  ListChecks,
  Check,
} from "lucide-react";
import { SAMPLE_REPORTS } from "../../data/sampleReport";

function scoreStyle(score) {
  if (score >= 80) return "bg-[#ecfdf5] text-[#059669]";
  if (score >= 60) return "bg-[#fef3c7] text-[#b45309]";
  return "bg-[#fee2e2] text-[#dc2626]";
}

function interestBand(pct) {
  if (pct >= 80) return { key: "strong", bg: "bg-[#ecfdf5]", text: "text-[#059669]", border: "border-[#a7f3d0]", bar: "bg-[#059669]" };
  if (pct >= 60) return { key: "warm", bg: "bg-[#ecfdf5]", text: "text-[#059669]", border: "border-[#a7f3d0]", bar: "bg-[#059669]" };
  if (pct >= 40) return { key: "mixed", bg: "bg-[#fef3c7]", text: "text-[#b45309]", border: "border-[#fde68a]", bar: "bg-[#b45309]" };
  if (pct >= 20) return { key: "cool", bg: "bg-[#fef3c7]", text: "text-[#b45309]", border: "border-[#fde68a]", bar: "bg-[#b45309]" };
  return { key: "low", bg: "bg-[#fee2e2]", text: "text-[#dc2626]", border: "border-[#fecaca]", bar: "bg-[#dc2626]" };
}

const MOMENT_COLORS = {
  objection: "bg-[#fee2e2] text-[#dc2626]",
  question: "bg-[#dbeafe] text-[#2563eb]",
  discovery: "bg-[#dbeafe] text-[#2563eb]",
  closing: "bg-[#dcfce7] text-[#16a34a]",
  rapport: "bg-[#f3e8ff] text-[#7c3aed]",
  "buying-signal": "bg-[#dcfce7] text-[#15803d]",
  risk: "bg-[#fef3c7] text-[#b45309]",
};

function goodChip(good) {
  return good
    ? "bg-[#ecfdf5] text-[#059669]"
    : "bg-subtle text-secondary";
}

export default function SampleReport({ variant = "strong", data }) {
  const { t } = useTranslation();
  const report = data || SAMPLE_REPORTS[variant] || SAMPLE_REPORTS.strong;
  const band = interestBand(report.leadInterestPct);

  const metrics = [
    {
      icon: HelpCircle,
      label: t("sampleReport.metrics.questions"),
      value: `${report.questionCount.count}`,
      sub: `${t("sampleReport.metrics.target")} ${report.questionCount.target}`,
      good: report.questionCount.inTarget,
    },
    {
      icon: Ban,
      label: t("sampleReport.metrics.interruptions"),
      value: `${report.interruptionRate.pct}%`,
      sub: null,
      good: report.interruptionRate.good,
    },
    {
      icon: PauseCircle,
      label: t("sampleReport.metrics.pauses"),
      value: `${report.silenceRatio.pct}%`,
      sub: report.silenceRatio.sweetSpotRange,
      good: report.silenceRatio.inSweetSpot,
    },
    {
      icon: ListChecks,
      label: t("sampleReport.metrics.nextSteps"),
      value: report.nextSteps.has
        ? t("sampleReport.metrics.nextStepsYes")
        : t("sampleReport.metrics.nextStepsNo"),
      sub: null,
      good: report.nextSteps.has,
    },
  ];

  const moments = report.keyMoments.slice(0, 3);

  return (
    <div className="w-full max-w-lg mx-auto bg-white border border-border rounded-2xl p-7 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-xs text-secondary mb-1 uppercase tracking-wide">
            {t("sampleReport.discoveryCall")}
          </p>
          <p className="text-base text-primary font-medium">{report.title}</p>
        </div>
        <div className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${scoreStyle(report.score)}`}>
          {report.score}
        </div>
      </div>

      {/* Lead interest band */}
      <div className={`mb-6 rounded-xl border px-4 py-3 ${band.bg} ${band.border}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-secondary uppercase tracking-wide">
            {t("sampleReport.leadInterest")}
          </span>
          <span className={`text-sm font-semibold ${band.text}`}>
            {report.leadInterestPct}% · {t(`sampleReport.leadInterestLabels.${band.key}`)}
          </span>
        </div>
        <div className="h-1.5 bg-white/70 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${band.bar}`}
            style={{ width: `${report.leadInterestPct}%` }}
          />
        </div>
      </div>

      {/* Talk ratio */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-secondary flex items-center gap-1.5">
            <Mic className="w-3.5 h-3.5" strokeWidth={2} />
            {t("sampleReport.talkRatio")}
          </span>
          <span
            className={`text-xs font-medium ${report.talkRatio.inSweetSpot ? "text-[#059669]" : "text-secondary"}`}
          >
            {report.talkRatio.pct}% —{" "}
            {report.talkRatio.inSweetSpot
              ? `${t("sampleReport.inSweetSpot")} (${report.talkRatio.sweetSpotRange})`
              : `${t("sampleReport.aimFor")} ${report.talkRatio.sweetSpotRange}`}
          </span>
        </div>
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${report.talkRatio.inSweetSpot ? "bg-[#059669]" : "bg-[#d97706]"}`}
            style={{ width: `${report.talkRatio.pct}%` }}
          />
        </div>
      </div>

      {/* Metric chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.label}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium ${goodChip(m.good)}`}
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={2} />
              <span>
                {m.label}: {m.value}
                {m.sub ? ` (${m.sub})` : ""}
              </span>
              {m.good && <Check className="w-3 h-3" strokeWidth={2.5} />}
            </div>
          );
        })}
      </div>

      {/* Key moments */}
      <div className="mb-6">
        <p className="text-xs text-secondary mb-2.5 uppercase tracking-wide">
          {t("sampleReport.keyMoments")}
        </p>
        <div className="space-y-2">
          {moments.map((m, i) => (
            <div key={i} className="border border-border rounded-xl px-3 py-2.5">
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`px-2 py-0.5 rounded-md text-[11px] font-semibold capitalize ${MOMENT_COLORS[m.type] || MOMENT_COLORS.rapport}`}
                >
                  {t(`sampleReport.momentType.${m.type}`)}
                </span>
                <span className="text-[11px] text-secondary">{m.timestamp}</span>
              </div>
              <p className="text-[13px] text-primary/80">{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Improvement tips */}
      <div>
        <p className="text-xs text-secondary mb-2 uppercase tracking-wide">
          {t("sampleReport.improvementTips")}
        </p>
        <ul className="space-y-1.5 text-sm text-primary">
          {report.improvementTips.slice(0, 3).map((tip, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-secondary">•</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
