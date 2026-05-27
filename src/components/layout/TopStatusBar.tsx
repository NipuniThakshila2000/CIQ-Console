import { CircleUserRound, Database, RefreshCcw } from "lucide-react";
import { RiskPill } from "../shared/RiskPill";

export function TopStatusBar({ title }: { title: string }) {
  return (
    <header className="border-b border-border-soft bg-panel">
      <div className="flex h-11 items-center justify-between border-b border-ciq-green/30 bg-ciq-green/10 px-4 text-xs text-ciq-green">
        <span className="font-semibold uppercase">SIMULATION DATA / TRAINING MODE</span>
        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-1.5 sm:flex"><RefreshCcw size={13} /> Sync live</span>
          <RiskPill tone="cyan">Mock data</RiskPill>
          <CircleUserRound size={18} />
        </div>
      </div>
      <div className="flex h-14 items-center justify-between px-4">
        <div>
          <p className="text-[11px] uppercase text-text-muted">Workspace</p>
          <h1 className="text-lg font-semibold">{title}</h1>
        </div>
        <div className="hidden items-center gap-2 text-xs text-text-secondary md:flex">
          <Database size={14} className="text-ciq-cyan" />
          Synthetic telemetry only
        </div>
      </div>
    </header>
  );
}
