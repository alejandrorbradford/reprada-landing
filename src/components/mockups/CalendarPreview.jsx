export default function CalendarPreview() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const dates = [null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  return (
    <div className="bg-subtle border border-border rounded-2xl p-6 -rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-primary font-medium">Google Calendar</span>
        <span className="px-2 py-1 rounded-md bg-primary text-white text-xs font-medium">
          Connected
        </span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {days.map((d, i) => (
          <span key={i} className="text-xs text-secondary">{d}</span>
        ))}
        {dates.map((n, i) => (
          <span
            key={i}
            className={`text-xs py-1 rounded ${n === 15 ? "bg-primary text-white" : "text-secondary"}`}
          >
            {n ?? ""}
          </span>
        ))}
      </div>
    </div>
  );
}
