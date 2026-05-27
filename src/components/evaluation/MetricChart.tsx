import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartData } from "../../data/mockData";

export function MetricChart({ title, dataKey, color }: { title: string; dataKey: string; color: string }) {
  return (
    <div className="panel p-4">
      <h3 className="mb-3 text-sm font-semibold">{title}</h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="t" tick={{ fill: "#AAB7C4", fontSize: 11 }} axisLine={{ stroke: "#31465A" }} tickLine={false} />
            <YAxis tick={{ fill: "#AAB7C4", fontSize: 11 }} axisLine={{ stroke: "#31465A" }} tickLine={false} width={28} />
            <Tooltip contentStyle={{ background: "#182431", border: "1px solid #31465A", color: "#E6EEF5" }} />
            <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={{ r: 2 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
