import { MetricCard } from "../shared/MetricCard";
import { SectionHeader } from "../shared/SectionHeader";
import { MetricChart } from "./MetricChart";

export function EvaluationDashboard() {
  return (
    <div className="space-y-4">
      <SectionHeader title="Evaluation Dashboard" eyebrow="Model confidence and telemetry trend" />
      <div className="grid gap-3 md:grid-cols-4">
        <MetricCard label="Model agreement" value="87%" sublabel="Load/stress/balance ensemble" tone="green" />
        <MetricCard label="Confidence floor" value="86%" sublabel="Lowest at DN-03" tone="amber" />
        <MetricCard label="Latency drift" value="+9.4s" sublabel="From baseline to peak" tone="red" />
        <MetricCard label="Recovery slope" value="Good" sublabel="Returned toward baseline" tone="cyan" />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <MetricChart title="Cognitive load over time" dataKey="cognitive" color="#36A9E1" />
        <MetricChart title="Stress load over time" dataKey="stress" color="#D79B32" />
        <MetricChart title="Blink variability" dataKey="blink" color="#18A76B" />
        <MetricChart title="Pupil dilation delta" dataKey="pupil" color="#8E6AD8" />
        <MetricChart title="Decision latency" dataKey="latency" color="#D94C4C" />
        <MetricChart title="Signal confidence" dataKey="confidence" color="#2F80ED" />
      </div>
    </div>
  );
}
