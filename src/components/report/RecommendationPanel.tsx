import { recommendations } from "../../data/mockData";

export function RecommendationPanel() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {recommendations.map((group) => (
        <div key={group.group} className="panel p-4">
          <h3 className="text-sm font-semibold">{group.group}</h3>
          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            {group.items.map((item) => <li key={item} className="border-l border-ciq-cyan/50 pl-3">{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
