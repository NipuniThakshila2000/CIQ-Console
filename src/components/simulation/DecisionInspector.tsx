import { decisionNodes } from "../../data/mockData";
import { RiskPill } from "../shared/RiskPill";

export function DecisionInspector() {
  const node = decisionNodes[2];
  return (
    <div className="absolute right-4 top-4 w-64 border border-border-strong bg-[#111820]/95 p-3 shadow-2xl">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold">{node.label}</h3>
        <RiskPill tone="amber">Watch</RiskPill>
      </div>
      {[
        ["Response Latency", "18.4s"],
        ["Cognitive Load", String(node.load)],
        ["Stress Load", String(node.stress)],
        ["Signal Confidence", "86%"],
      ].map(([label, value]) => (
        <div key={label} className="flex justify-between border-t border-border-soft py-2 text-xs">
          <span className="text-text-muted">{label}</span>
          <span className="font-mono text-text-primary">{value}</span>
        </div>
      ))}
    </div>
  );
}
