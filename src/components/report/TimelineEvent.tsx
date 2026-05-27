export function TimelineEvent({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="border-l border-ciq-cyan/50 pl-3">
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-xs text-text-secondary">{detail}</p>
    </div>
  );
}
