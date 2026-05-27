import { telemetry } from "../../data/mockData";

const dotClass: Record<string, string> = {
  green: "bg-ciq-green",
  cyan: "bg-ciq-cyan",
  amber: "bg-ciq-amber",
  red: "bg-ciq-red",
  blue: "bg-ciq-blue",
};

export function TelemetryStrip() {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-6">
      {telemetry.map((item) => (
        <div key={item.label} className="hover-lift border border-border-soft bg-panel px-3 py-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] uppercase text-text-muted">{item.label}</p>
            <span className={`h-2 w-2 rounded-full ${dotClass[item.status] ?? "bg-text-muted"}`} />
          </div>
          <p className="mt-1 font-mono text-lg text-text-primary">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
