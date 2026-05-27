import type { Node } from "reactflow";
import { RiskPill } from "../shared/RiskPill";

export function NodeInspector({ node }: { node?: Node | null }) {
  const label = String(node?.data?.label ?? "Decision Node");
  const type = String(node?.data?.type ?? "CIQ analytic");
  return (
    <aside className="panel w-full p-4 xl:w-80">
      <h3 className="text-sm font-semibold">Node Inspector</h3>
      <p className="mt-1 text-xs text-text-muted">Selected ontology metadata</p>
      <div className="mt-4 space-y-3 text-sm">
        {[
          ["Node", label],
          ["Node type", type],
          ["Source", "CIQ synthetic exercise layer"],
          ["Timestamp", "2026-05-27 09:38:22"],
          ["Confidence", "88%"],
          ["Related decision node", "DN-03"],
          ["Privacy level", "Pseudonymized"],
          ["Retention policy", "Training review / 30 days"],
        ].map(([k, v]) => (
          <div key={k} className="border-b border-border-soft pb-2">
            <p className="text-[11px] uppercase text-text-muted">{k}</p>
            <p className="mt-1 text-text-primary">{v}</p>
          </div>
        ))}
      </div>
      <div className="mt-4"><RiskPill tone="green">Human oversight required</RiskPill></div>
    </aside>
  );
}
