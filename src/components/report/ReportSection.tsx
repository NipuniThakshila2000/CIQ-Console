export function ReportSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold uppercase text-text-secondary">{title}</h3>
      {children}
    </section>
  );
}
