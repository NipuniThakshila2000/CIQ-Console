import type { PageKey } from "../../App";
import { Sidebar } from "./Sidebar";
import { TopStatusBar } from "./TopStatusBar";

export function AppShell({ activePage, pageTitle, onNavigate, children }: { activePage: PageKey; pageTitle: string; onNavigate: (page: PageKey) => void; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-main text-text-primary">
      <div className="flex min-h-screen">
        <Sidebar activePage={activePage} onNavigate={onNavigate} />
        <main className="min-w-0 flex-1">
          <TopStatusBar title={pageTitle} />
          <div className="p-4 xl:p-5">{children}</div>
        </main>
      </div>
    </div>
  );
}
