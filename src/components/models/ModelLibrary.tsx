import { BrainCircuit } from "lucide-react";
import { models } from "../../data/mockData";
import { MetricCard } from "../shared/MetricCard";
import { SectionHeader } from "../shared/SectionHeader";
import { ModelTable } from "./ModelTable";

export function ModelLibrary() {
  return (
    <div className="space-y-4">
      <SectionHeader title="CIQ Model Library" eyebrow="Interoperable readiness analytics" />
      <div className="grid gap-3 md:grid-cols-3">
        <MetricCard label="Active models" value="4" sublabel="One watch-listed model under review" tone="green" />
        <MetricCard label="Average confidence" value="89%" sublabel="Synthetic session telemetry" tone="cyan" />
        <MetricCard label="Deployment mode" value="Edge" sublabel="No backend required for prototype" tone="blue" />
      </div>
      <div className="grid gap-3 lg:grid-cols-5">
        {models.map((model) => (
          <div key={model[0]} className="panel p-4">
            <BrainCircuit className="mb-3 text-ciq-cyan" size={20} />
            <h3 className="text-sm font-semibold">{model[0]}</h3>
            <p className="mt-2 text-xs leading-5 text-text-secondary">{model[1]}</p>
          </div>
        ))}
      </div>
      <ModelTable />
    </div>
  );
}
