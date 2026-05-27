import { Send, Sparkles } from "lucide-react";
import { terminalMessages } from "../../data/mockData";
import { SectionHeader } from "../shared/SectionHeader";
import { BiometricStatus } from "./BiometricStatus";
import { TerminalMessage } from "./TerminalMessage";

export function TerminalPanel() {
  return (
    <section className="panel flex min-h-[620px] flex-col p-4">
      <SectionHeader title="CIQ AI Terminal" eyebrow="Readiness interview active" />
      <BiometricStatus />
      <div className="mt-4 flex-1 space-y-3 overflow-auto">
        {terminalMessages.map((message) => (
          <TerminalMessage key={`${message.time}-${message.title}`} message={message} />
        ))}
      </div>
      <div className="mt-4 border border-border-soft bg-[#0f1720] p-2">
        <div className="mb-2 flex items-center gap-2 text-xs text-text-muted">
          <Sparkles size={13} className="text-ciq-cyan" />
          Ask the operator a readiness question or attach this window to a decision node.
        </div>
        <div className="flex gap-2">
          <input className="min-w-0 flex-1 border border-border-soft bg-panel px-3 py-2 text-sm text-text-primary outline-none focus:border-ciq-blue" placeholder="Generate readiness interpretation..." />
          <button className="inline-flex items-center gap-2 bg-ciq-blue px-3 py-2 text-sm font-semibold text-white">
            <Send size={15} />
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
