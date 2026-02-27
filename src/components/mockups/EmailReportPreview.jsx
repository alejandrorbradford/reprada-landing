export default function EmailReportPreview() {
  return (
    <div className="bg-subtle border border-border rounded-2xl p-6 rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
          <span className="text-xs">✉</span>
        </div>
        <p className="text-sm text-primary font-medium">Call report</p>
      </div>
      <div className="space-y-3 text-sm text-primary">
        <div className="flex justify-between">
          <span className="text-secondary">Discovery Call — Acme Corp</span>
          <span className="font-medium">78</span>
        </div>
        <p className="text-xs text-secondary">
          Summary, key moments & tips delivered to your inbox after every call.
        </p>
      </div>
    </div>
  );
}
