import { useState } from "react";
import { AppShell } from "./components/layout/AppShell";
import { Dashboard } from "./pages/Dashboard";
import { Interview } from "./pages/Interview";
import { DataGraphPage } from "./pages/DataGraphPage";
import { ModelLibraryPage } from "./pages/ModelLibraryPage";
import { EvaluationPage } from "./pages/EvaluationPage";
import { ReportPage } from "./pages/ReportPage";

export type PageKey =
  | "overview"
  | "terminal"
  | "events"
  | "graph"
  | "models"
  | "evaluation"
  | "reports"
  | "governance";

const pageMap: Record<PageKey, string> = {
  overview: "Overview",
  terminal: "CIQ Terminal",
  events: "Simulation Events",
  graph: "Data Graph",
  models: "Model Library",
  evaluation: "Evaluation",
  reports: "Reports",
  governance: "Governance",
};

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>("overview");

  const renderPage = () => {
    if (activePage === "terminal") return <Interview />;
    if (activePage === "graph") return <DataGraphPage />;
    if (activePage === "models") return <ModelLibraryPage />;
    if (activePage === "evaluation") return <EvaluationPage />;
    if (activePage === "reports") return <ReportPage />;
    return <Dashboard mode={activePage} />;
  };

  return (
    <AppShell
      activePage={activePage}
      pageTitle={pageMap[activePage]}
      onNavigate={setActivePage}
    >
      {renderPage()}
    </AppShell>
  );
}
