import { RiskPill } from "../shared/RiskPill";

export function ReportMetricCard({ label, value, state, tone }: { label: string; value: string; state: string; tone: "green" | "cyan" | "amber" | "red" | "blue" }) {
  return (
    <div className="panel p-4">
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase text-text-muted">{label}</p>
        <RiskPill tone={tone}>{state}</RiskPill>
      </div>
      <p className="mt-4 text-3xl font-semibold">{value}</p>
    </div>
  );
}
