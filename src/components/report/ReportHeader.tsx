import { exercise } from "../../data/mockData";
import { RiskPill } from "../shared/RiskPill";

export function ReportHeader() {
  return (
    <div className="panel p-5">
      <div className="flex flex-col justify-between gap-4 md:flex-row">
        <div>
          <p className="text-[11px] uppercase text-ciq-cyan">After-action human readiness brief</p>
          <h2 className="mt-1 text-2xl font-semibold">CIQ Readiness Report</h2>
          <p className="mt-2 text-sm text-text-secondary">{exercise.name}</p>
        </div>
        <RiskPill tone="green">Simulation / Training Mode</RiskPill>
      </div>
      <div className="mt-5 grid gap-3 text-sm md:grid-cols-4">
        <div><p className="text-[11px] uppercase text-text-muted">Session ID</p><p className="font-mono">{exercise.sessionId}</p></div>
        <div><p className="text-[11px] uppercase text-text-muted">Operator ID</p><p className="font-mono">{exercise.operatorHash}</p></div>
        <div><p className="text-[11px] uppercase text-text-muted">Date/time</p><p>{exercise.timestamp}</p></div>
        <div><p className="text-[11px] uppercase text-text-muted">Mode</p><p>Mock data / no operational control</p></div>
      </div>
    </div>
  );
}
