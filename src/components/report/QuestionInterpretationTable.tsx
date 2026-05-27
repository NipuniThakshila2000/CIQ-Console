import { questionInterpretations } from "../../data/mockData";
import { RiskPill } from "../shared/RiskPill";

export function QuestionInterpretationTable() {
  return (
    <div className="panel overflow-x-auto">
      <table className="w-full min-w-[900px] text-left text-sm">
        <thead className="bg-panel-soft text-[11px] uppercase text-text-muted">
          <tr>{["Question ID", "Domain", "Operator Response", "Biometric Deviation", "Cognitive Load", "Interpretation", "Confidence"].map((h) => <th key={h} className="px-4 py-3">{h}</th>)}</tr>
        </thead>
        <tbody>
          {questionInterpretations.map((row) => (
            <tr key={row[0]} className="border-t border-border-soft">
              {row.map((cell, index) => (
                <td key={`${row[0]}-${cell}`} className="px-4 py-3 text-text-secondary">
                  {index === 4 ? <RiskPill tone={cell === "Elevated" ? "amber" : "cyan"}>{cell}</RiskPill> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
