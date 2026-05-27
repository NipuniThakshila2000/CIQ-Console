import { Camera, Mic, RadioTower } from "lucide-react";
import { interviewQuestions } from "../data/mockData";
import { MetricCard } from "../components/shared/MetricCard";
import { RiskPill } from "../components/shared/RiskPill";
import { SectionHeader } from "../components/shared/SectionHeader";

export function Interview() {
  const current = interviewQuestions[17];
  return (
    <div className="grid gap-4 xl:grid-cols-[1fr_360px]">
      <section className="panel p-5">
        <SectionHeader title="BAT + CBI + CIQ Question Flow" eyebrow="52-question assessment structure" action={<RiskPill tone="cyan">18 / 52</RiskPill>} />
        <div className="h-2 bg-panel-soft"><div className="h-full w-[35%] bg-ciq-cyan" /></div>
        <div className="mt-6 border border-border-soft bg-panel-soft p-5">
          <p className="text-[11px] uppercase text-text-muted">{current.id} / {current.domain}</p>
          <h2 className="mt-3 text-xl font-semibold">{current.prompt}</h2>
          <div className="mt-6 grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }, (_, i) => (
              <button key={i} className={`border py-3 text-sm ${i === 4 ? "border-ciq-blue bg-ciq-blue/20 text-text-primary" : "border-border-soft bg-panel text-text-secondary"}`}>{i + 1}</button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Status icon={RadioTower} label="Voice agent" value="Listening" />
          <Status icon={Camera} label="Camera / pupil" value="Locked" />
          <Status icon={Mic} label="Voice stress" value="Tracking" />
        </div>
      </section>
      <aside className="space-y-3">
        <MetricCard label="Current confidence" value="88%" sublabel="Question + biometric window" tone="green" />
        <MetricCard label="Cognitive load" value="73" sublabel="Elevated against baseline" tone="amber" />
        <MetricCard label="Stress load" value="68" sublabel="Moderate, recovering" tone="cyan" />
        <MetricCard label="Signal warnings" value="1" sublabel="Gaze stability drift at DN-03" tone="amber" />
      </aside>
    </div>
  );
}

function Status({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="panel-soft p-3">
      <Icon size={18} className="text-ciq-cyan" />
      <p className="mt-2 text-[11px] uppercase text-text-muted">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}
