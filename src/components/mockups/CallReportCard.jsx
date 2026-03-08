export default function CallReportCard() {
  return (
    <div
      className="w-full max-w-lg mx-auto bg-subtle border border-border rounded-2xl p-8 -rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)] animate-float"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm text-secondary mb-1">Discovery Call</p>
          <p className="text-base text-primary font-medium">Acme Corp — Q1 Review</p>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium">
          78
        </div>
      </div>
      <div className="mb-6">
        <p className="text-xs text-secondary mb-2">Talk ratio</p>
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <div className="h-full w-[45%] bg-primary rounded-full" />
        </div>
        <p className="text-xs text-secondary mt-1">45% — in sweet spot</p>
      </div>
      <div>
        <p className="text-xs text-secondary mb-2">Improvement tips</p>
        <ul className="space-y-1.5 text-sm text-primary">
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            Ask one more discovery question before presenting
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">•</span>
            Clarify next steps before ending the call
          </li>
        </ul>
      </div>
    </div>
  );
}
