export default function AnalysisPreview() {
  return (
    <div className="bg-subtle border border-border rounded-2xl p-6 rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full border-4 border-primary border-t-border flex items-center justify-center text-xl font-bold text-primary">
          78
        </div>
        <div>
          <p className="text-sm text-primary font-medium">Call score</p>
          <p className="text-xs text-secondary">Discovery, objections, closing</p>
        </div>
      </div>
      <div>
        <p className="text-xs text-secondary mb-2">Key moments</p>
        <ul className="space-y-1 text-sm text-primary">
          <li className="flex gap-2">
            <span className="text-secondary">2:15</span>
            Objection on pricing
          </li>
          <li className="flex gap-2">
            <span className="text-secondary">5:30</span>
            Strong discovery question
          </li>
        </ul>
      </div>
    </div>
  );
}
