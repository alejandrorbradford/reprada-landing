import { Sparkles } from "lucide-react";

export default function SectionLabel({ children, icon: Icon = Sparkles, center = false }) {
  return (
    <div className={`flex items-center gap-2 mb-2 ${center ? "justify-center" : ""}`}>
      <Icon className="w-3.5 h-3.5 text-secondary" strokeWidth={2} />
      <span className="text-label text-secondary font-medium uppercase tracking-wide">
        {children}
      </span>
    </div>
  );
}
