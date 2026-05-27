import { Bot, UserRound } from "lucide-react";
import { RiskPill } from "../shared/RiskPill";

export function TerminalMessage({ message }: { message: { role: string; time: string; title: string; body: string; status: string } }) {
  const isOperator = message.role === "operator";
  const tone = message.status === "warning" ? "amber" : message.status === "synced" ? "cyan" : "green";
  const Icon = isOperator ? UserRound : Bot;
  return (
    <div className="hover-lift border border-border-soft bg-panel-soft p-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Icon size={15} className={isOperator ? "text-ciq-blue" : "text-ciq-cyan"} />
          {message.title}
        </div>
        <RiskPill tone={tone}>{message.status}</RiskPill>
      </div>
      <p className="text-sm leading-5 text-text-secondary">{message.body}</p>
      <p className="mt-2 font-mono text-[11px] text-text-muted">{message.time}</p>
    </div>
  );
}
