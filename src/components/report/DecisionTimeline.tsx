import { chartData } from "../../data/mockData";

export function DecisionTimeline() {
  return (
    <div className="panel p-4">
      <h3 className="text-sm font-semibold">Readiness Timeline</h3>
      <div className="mt-6 grid gap-3 md:grid-cols-6">
        {chartData.map((point) => (
          <div key={point.t} className="relative border-t border-border-strong pt-4">
            <span className="absolute -top-1.5 left-0 h-3 w-3 bg-ciq-cyan" />
            <p className="text-xs font-semibold">{point.t}</p>
            <p className="mt-2 font-mono text-xs text-text-secondary">CL {point.cognitive}</p>
            <p className="font-mono text-xs text-text-secondary">SL {point.stress}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
