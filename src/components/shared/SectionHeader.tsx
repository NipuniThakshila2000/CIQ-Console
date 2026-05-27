export function SectionHeader({ title, eyebrow, action }: { title: string; eyebrow?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-start justify-between gap-4">
      <div>
        {eyebrow && <p className="text-[11px] uppercase text-ciq-cyan">{eyebrow}</p>}
        <h2 className="text-base font-semibold text-text-primary">{title}</h2>
      </div>
      {action}
    </div>
  );
}
