export default function LeaderboardPreview() {
  const rows = [
    { name: "Sarah C.", score: 84 },
    { name: "Marcus R.", score: 79 },
    { name: "Emily F.", score: 76 },
  ];
  return (
    <div className="bg-subtle border border-border rounded-2xl p-6 -rotate-1 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <p className="text-sm text-primary font-medium mb-4">Team leaderboard</p>
      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <span className="text-sm text-primary">{row.name}</span>
            <span className="text-sm font-medium text-primary">{row.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
