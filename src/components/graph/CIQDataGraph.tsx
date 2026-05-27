import { useMemo, useState } from "react";
import ReactFlow, { Background, Controls, Node } from "reactflow";
import { SlidersHorizontal, Waypoints } from "lucide-react";
import { NodeInspector } from "./NodeInspector";

const colorByType: Record<string, string> = {
  platform: "#2F80ED",
  biometric: "#36A9E1",
  analytic: "#D79B32",
  report: "#18A76B",
  risk: "#D94C4C",
};

export function CIQDataGraph() {
  const nodes = useMemo<Node[]>(
    () => [
      ["exercise", "Exercise", "platform", 0, 80],
      ["operator", "Operator", "platform", 0, 220],
      ["session", "Session", "platform", 180, 150],
      ["event", "Simulation Event", "platform", 380, 80],
      ["decision", "Decision Node", "platform", 580, 80],
      ["question", "Question Block", "analytic", 380, 220],
      ["window", "Biometric Window", "biometric", 580, 220],
      ["pupil", "Pupil Dilation", "biometric", 780, 130],
      ["blink", "Blink Rate", "biometric", 780, 220],
      ["voice", "Voice Stress", "biometric", 780, 310],
      ["gaze", "Gaze Stability", "biometric", 780, 400],
      ["cognitive", "Cognitive Load Index", "analytic", 1000, 170],
      ["stress", "Stress Load Index", "risk", 1000, 280],
      ["balance", "Challenge-Skill Balance", "analytic", 1000, 390],
      ["report", "Readiness Report", "report", 1220, 240],
      ["recommendation", "Recommendation", "report", 1420, 240],
    ].map(([id, label, type, x, y]) => ({
      id: String(id),
      position: { x: Number(x), y: Number(y) },
      data: { label, type },
      style: { borderColor: colorByType[String(type)], background: `${colorByType[String(type)]}22`, width: 160 },
    })),
    []
  );
  const edges = [
    ["exercise", "session"],
    ["operator", "session"],
    ["session", "event"],
    ["event", "decision"],
    ["session", "question"],
    ["question", "window"],
    ["decision", "window"],
    ["window", "pupil"],
    ["window", "blink"],
    ["window", "voice"],
    ["window", "gaze"],
    ["pupil", "cognitive"],
    ["blink", "cognitive"],
    ["voice", "stress"],
    ["gaze", "balance"],
    ["cognitive", "report"],
    ["stress", "report"],
    ["balance", "report"],
    ["report", "recommendation"],
  ].map(([source, target]) => ({ id: `${source}-${target}`, source, target }));
  const [selected, setSelected] = useState<Node | null>(nodes[4]);

  return (
    <div className="flex flex-col gap-4 xl:flex-row">
      <div className="panel h-[720px] min-w-0 flex-1 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border-soft p-3">
          <div className="flex items-center gap-2 text-sm font-semibold"><Waypoints size={16} className="text-ciq-cyan" /> CIQ Ontology Graph</div>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Layout", "Filter", "Show biometrics", "Show events", "Show report path"].map((label) => (
              <button key={label} className="inline-flex items-center gap-1 border border-border-soft bg-panel-soft px-2 py-1 text-text-secondary"><SlidersHorizontal size={12} /> {label}</button>
            ))}
          </div>
        </div>
        <ReactFlow nodes={nodes} edges={edges} onNodeClick={(_, node) => setSelected(node)} fitView>
          <Background color="#31465A" gap={24} />
          <Controls />
        </ReactFlow>
      </div>
      <NodeInspector node={selected} />
    </div>
  );
}
