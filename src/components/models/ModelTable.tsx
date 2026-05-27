import { models } from "../../data/mockData";
import { RiskPill } from "../shared/RiskPill";

export function ModelTable() {
  return (
    <div className="panel overflow-x-auto">
      <table className="w-full min-w-[900px] border-collapse text-left text-sm">
        <thead className="bg-panel-soft text-[11px] uppercase text-text-muted">
          <tr>{["Model", "Input signals", "Output score", "Status", "Version", "Last updated", "Deployment mode"].map((h) => <th key={h} className="border-b border-border-soft px-4 py-3">{h}</th>)}</tr>
        </thead>
        <tbody>
          {models.map((row) => (
            <tr key={row[0]} className="border-b border-border-soft">
              {row.map((cell, index) => (
                <td key={cell} className="px-4 py-4 text-text-secondary">
                  {index === 0 ? <span className="font-semibold text-text-primary">{cell}</span> : index === 3 ? <RiskPill tone={cell === "Review" ? "amber" : "green"}>{cell}</RiskPill> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
