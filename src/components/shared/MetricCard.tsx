import { RiskPill } from "./RiskPill";

export function MetricCard({ label, value, sublabel, tone = "cyan" }: { label: string; value: string; sublabel?: string; tone?: "green" | "cyan" | "blue" | "amber" | "red" | "muted" }) {
  return (
    <div className="panel p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] uppercase text-text-muted">{label}</p>
        <RiskPill tone={tone}>{tone}</RiskPill>
      </div>
      <div className="mt-3 text-2xl font-semibold text-text-primary">{value}</div>
      {sublabel && <p className="mt-1 text-xs text-text-secondary">{sublabel}</p>}
    </div>
  );
}
