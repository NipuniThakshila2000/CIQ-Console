type Tone = "green" | "cyan" | "blue" | "amber" | "red" | "muted";

const toneClass: Record<Tone, string> = {
  green: "border-ciq-green/50 bg-ciq-green/10 text-ciq-green",
  cyan: "border-ciq-cyan/50 bg-ciq-cyan/10 text-ciq-cyan",
  blue: "border-ciq-blue/50 bg-ciq-blue/10 text-ciq-blue",
  amber: "border-ciq-amber/50 bg-ciq-amber/10 text-ciq-amber",
  red: "border-ciq-red/50 bg-ciq-red/10 text-ciq-red",
  muted: "border-border-soft bg-panel-soft text-text-secondary",
};

export function RiskPill({ children, tone = "muted" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-flex items-center rounded px-2 py-1 text-[11px] font-semibold uppercase tracking-normal border ${toneClass[tone]}`}>
      {children}
    </span>
  );
}
