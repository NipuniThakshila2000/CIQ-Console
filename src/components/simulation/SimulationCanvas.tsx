import { MapPinned } from "lucide-react";
import { decisionNodes } from "../../data/mockData";
import { SectionHeader } from "../shared/SectionHeader";
import { DecisionInspector } from "./DecisionInspector";

export function SimulationCanvas() {
  return (
    <section className="panel flex min-h-[620px] flex-col p-4">
      <SectionHeader title="Simulation Workspace" eyebrow="Synthetic training scenario" />
      <div className="technical-grid relative flex-1 overflow-hidden border border-border-soft bg-[#0b1118]">
        <div className="absolute left-[8%] top-[15%] h-32 w-44 border border-ciq-blue/40 bg-ciq-blue/10" />
        <div className="absolute bottom-[12%] right-[10%] h-28 w-56 border border-ciq-amber/40 bg-ciq-amber/10" />
        <div className="absolute left-[34%] top-[36%] h-52 w-52 rounded-full border border-ciq-green/30 bg-ciq-green/5" />
        {decisionNodes.map((node, index) => (
          <div
            key={node.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 border px-2 py-1 text-xs shadow-xl ${
              index === 2 ? "border-ciq-amber bg-ciq-amber/20 text-ciq-amber" : "border-ciq-cyan bg-ciq-cyan/10 text-ciq-cyan"
            }`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.id}
          </div>
        ))}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-border-soft bg-[#111820]/90 px-3 py-2 text-xs text-text-secondary">
          <MapPinned size={14} className="text-ciq-cyan" />
          Fictional grid, zones, markers, and readiness overlays only
        </div>
        <DecisionInspector />
      </div>
    </section>
  );
}
