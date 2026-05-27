import type { PageKey } from "../App";
import { TerminalPanel } from "../components/terminal/TerminalPanel";
import { SimulationCanvas } from "../components/simulation/SimulationCanvas";
import { TelemetryStrip } from "../components/simulation/TelemetryStrip";
import { MetricCard } from "../components/shared/MetricCard";
import { SectionHeader } from "../components/shared/SectionHeader";

export function Dashboard({ mode }: { mode: PageKey }) {
  if (mode === "events" || mode === "governance") {
    return (
      <div className="space-y-4">
        <SectionHeader title={mode === "events" ? "Simulation Events" : "Governance"} eyebrow="Training mode" />
        <div className="grid gap-3 md:grid-cols-3">
          <MetricCard label="Decision nodes" value="4" sublabel="All fictional exercise events" tone="cyan" />
          <MetricCard label="Attached windows" value="7" sublabel="Pseudonymized biometric windows" tone="green" />
          <MetricCard label="Oversight status" value="Required" sublabel="Decision-support only" tone="amber" />
        </div>
        <div className="panel p-4 text-sm leading-6 text-text-secondary">
          This prototype does not include targeting, weapons guidance, route optimization, or operational battlefield functionality. It is a synthetic training and after-action readiness interface.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[48fr_52fr]">
        <TerminalPanel />
        <SimulationCanvas />
      </div>
      <TelemetryStrip />
    </div>
  );
}
