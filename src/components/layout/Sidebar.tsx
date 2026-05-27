import { Activity, BarChart3, BrainCircuit, FileText, GitBranch, Library, Radar, ShieldCheck, TerminalSquare } from "lucide-react";
import type { PageKey } from "../../App";
import { exercise, navItems } from "../../data/mockData";

const icons: Record<PageKey, React.ElementType> = {
  overview: Radar,
  terminal: TerminalSquare,
  events: Activity,
  graph: GitBranch,
  models: Library,
  evaluation: BarChart3,
  reports: FileText,
  governance: ShieldCheck,
};

export function Sidebar({ activePage, onNavigate }: { activePage: PageKey; onNavigate: (page: PageKey) => void }) {
  return (
    <aside className="hidden w-72 shrink-0 border-r border-border-soft bg-[#0d141c] lg:flex lg:flex-col">
      <div className="border-b border-border-soft p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-ciq-cyan/50 bg-ciq-cyan/10 font-mono text-sm font-bold text-ciq-cyan">CIQ</div>
          <div>
            <div className="text-sm font-semibold text-text-primary">CIQ Console</div>
            <div className="text-xs text-text-muted">{exercise.workspaceLabel}</div>
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <p className="mb-3 text-[11px] uppercase text-text-muted">Navigation</p>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = icons[item.key];
            const active = item.key === activePage;
            return (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`flex w-full items-center gap-3 border px-3 py-2 text-left text-sm transition ${
                  active ? "border-ciq-blue/50 bg-ciq-blue/10 text-text-primary" : "border-transparent text-text-secondary hover:border-border-soft hover:bg-panel"
                }`}
              >
                <Icon size={16} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto border-t border-border-soft p-4">
        <p className="text-[11px] uppercase text-text-muted">Exercise</p>
        <p className="mt-1 text-sm text-text-secondary">{exercise.name}</p>
      </div>
    </aside>
  );
}
