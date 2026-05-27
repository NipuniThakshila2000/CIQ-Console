import { CheckCircle2, RadioTower, TriangleAlert } from "lucide-react";

export function SignalBadge({ label, state = "stable" }: { label: string; state?: "stable" | "sync" | "warning" }) {
  const Icon = state === "warning" ? TriangleAlert : state === "sync" ? RadioTower : CheckCircle2;
  const tone = state === "warning" ? "text-ciq-amber border-ciq-amber/40 bg-ciq-amber/10" : "text-ciq-green border-ciq-green/40 bg-ciq-green/10";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded border px-2 py-1 text-xs ${tone}`}>
      <Icon size={13} />
      {label}
    </span>
  );
}
