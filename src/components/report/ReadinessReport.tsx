import { MetricChart } from "../evaluation/MetricChart";
import { ReportHeader } from "./ReportHeader";
import { ReportMetricCard } from "./ReportMetricCard";
import { DecisionTimeline } from "./DecisionTimeline";
import { QuestionInterpretationTable } from "./QuestionInterpretationTable";
import { RecommendationPanel } from "./RecommendationPanel";
import { ReportSection } from "./ReportSection";

export function ReadinessReport() {
  return (
    <div className="space-y-5">
      <ReportHeader />
      <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        <ReportMetricCard label="Overall Readiness" value="78 / 100" state="Ready-watch" tone="green" />
        <ReportMetricCard label="Cognitive Load" value="Elevated" state="Watch" tone="amber" />
        <ReportMetricCard label="Stress Load" value="Moderate" state="Stable" tone="cyan" />
        <ReportMetricCard label="Burnout Risk" value="Watch" state="Monitor" tone="amber" />
        <ReportMetricCard label="Challenge-Skill" value="Slight Overload" state="Review" tone="blue" />
        <ReportMetricCard label="Signal Quality" value="91%" state="Usable" tone="green" />
      </div>
      <ReportSection title="Readiness Timeline"><DecisionTimeline /></ReportSection>
      <ReportSection title="Biometric Signal Panel">
        <div className="grid gap-4 lg:grid-cols-3">
          <MetricChart title="Pupil dilation delta" dataKey="pupil" color="#36A9E1" />
          <MetricChart title="Blink-rate variability" dataKey="blink" color="#18A76B" />
          <MetricChart title="Voice stress index" dataKey="stress" color="#D79B32" />
          <MetricChart title="Decision latency" dataKey="latency" color="#D94C4C" />
          <MetricChart title="Gaze stability" dataKey="blink" color="#8E6AD8" />
          <MetricChart title="Signal confidence" dataKey="confidence" color="#2F80ED" />
        </div>
      </ReportSection>
      <ReportSection title="Question Interpretation"><QuestionInterpretationTable /></ReportSection>
      <ReportSection title="Decision-Node Correlation">
        <div className="grid gap-3 md:grid-cols-3">
          {["Decision Node 01", "Decision Node 03", "Decision Node 04"].map((node, index) => (
            <div key={node} className="panel hover-lift p-4">
              <h4 className="text-sm font-semibold">{node}</h4>
              <p className="mt-3 text-xs text-text-muted">Simulation Context</p>
              <p className="text-sm text-text-secondary">Time-compressed training event with stacked scenario cues.</p>
              <p className="mt-3 font-mono text-sm">Latency: {index === 1 ? "18.4s" : "13.2s"} / Load Spike: {index === 1 ? "+31%" : "+14%"}</p>
              <p className="mt-3 text-sm text-text-secondary">CIQ Insight: {index === 1 ? "Elevated cognitive load aligned with slower response recovery." : "Within expected training deviation."}</p>
              <p className="mt-3 text-xs text-ciq-cyan">AAR Note: Human review required before any readiness conclusion.</p>
            </div>
          ))}
        </div>
      </ReportSection>
      <ReportSection title="Recommended Actions"><RecommendationPanel /></ReportSection>
      <footer className="border border-border-soft bg-[#0f1720] p-4 text-sm text-text-secondary">
        CIQ outputs are decision-support indicators for simulation, training, and readiness review. They are not medical diagnoses and should be interpreted with qualified human oversight.
      </footer>
    </div>
  );
}
