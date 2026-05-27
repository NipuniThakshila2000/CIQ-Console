import type { PageKey } from "../App";

export const exercise = {
  name: "Exercise Session 204 / Northern Corridor",
  sessionId: "CIQ-SIM-204-77A",
  operatorHash: "OPR-92F7A1C",
  timestamp: "2026-05-27 09:42 LKT",
  workspaceLabel: "Strategic Simulation",
};

export const navItems: Array<{ key: PageKey; label: string }> = [
  { key: "overview", label: "Overview" },
  { key: "terminal", label: "CIQ Terminal" },
  { key: "events", label: "Simulation Events" },
  { key: "graph", label: "Data Graph" },
  { key: "models", label: "Model Library" },
  { key: "evaluation", label: "Evaluation" },
  { key: "reports", label: "Reports" },
  { key: "governance", label: "Governance" },
];

export const terminalMessages = [
  {
    role: "assistant",
    time: "09:21:03",
    title: "Baseline calibration complete.",
    body: "Blink variability, voice stress, and gaze stability are inside the usable range.",
    status: "stable",
  },
  {
    role: "assistant",
    time: "09:29:41",
    title: "Question block attached to Exercise Session 204.",
    body: "BAT/CBI/CIQ Block 01 is synchronized to the simulation event timeline.",
    status: "synced",
  },
  {
    role: "assistant",
    time: "09:38:22",
    title: "Elevated cognitive load detected during Decision Node 03.",
    body: "Attach biometric window and generate readiness interpretation?",
    status: "warning",
  },
  {
    role: "operator",
    time: "09:39:09",
    title: "Operator response captured.",
    body: "Response indicates slight overload under time compression with acceptable recovery.",
    status: "captured",
  },
];

export const telemetry = [
  { label: "Pupil Delta", value: "+0.42 mm", status: "amber", score: 71 },
  { label: "Blink Variability", value: "18%", status: "green", score: 84 },
  { label: "Voice Stress", value: "0.61", status: "amber", score: 68 },
  { label: "Decision Latency", value: "18.4s", status: "red", score: 55 },
  { label: "Gaze Stability", value: "82%", status: "green", score: 82 },
  { label: "Signal Quality", value: "91%", status: "green", score: 91 },
];

export const decisionNodes = [
  { id: "DN-01", x: 18, y: 34, load: 61, stress: 54, label: "Decision Node 01" },
  { id: "DN-02", x: 45, y: 52, load: 66, stress: 59, label: "Decision Node 02" },
  { id: "DN-03", x: 67, y: 37, load: 73, stress: 68, label: "Decision Node 03" },
  { id: "DN-04", x: 79, y: 67, load: 78, stress: 71, label: "Decision Node 04" },
];

export const interviewQuestions = Array.from({ length: 52 }, (_, index) => {
  const domains = ["Cognitive Baseline", "Burnout Pattern", "Control", "Challenge-Skill", "Justice/Fairness"];
  return {
    id: `Q-${String(index + 1).padStart(2, "0")}`,
    domain: domains[index % domains.length],
    prompt:
      index === 17
        ? "During the last decision window, how much control did you feel you had over the outcome?"
        : "Rate the current balance between task demand, clarity, and available control.",
  };
});

export const chartData = [
  { t: "Baseline", cognitive: 42, stress: 34, blink: 84, pupil: 12, latency: 9, confidence: 94 },
  { t: "Q Block 01", cognitive: 58, stress: 46, blink: 77, pupil: 24, latency: 12, confidence: 92 },
  { t: "DN-01", cognitive: 61, stress: 54, blink: 73, pupil: 28, latency: 14, confidence: 90 },
  { t: "DN-02", cognitive: 66, stress: 59, blink: 69, pupil: 32, latency: 16, confidence: 88 },
  { t: "DN-03", cognitive: 73, stress: 68, blink: 61, pupil: 42, latency: 18, confidence: 86 },
  { t: "Recovery", cognitive: 57, stress: 49, blink: 78, pupil: 22, latency: 11, confidence: 91 },
];

export const models = [
  ["CIQ Cognitive Load Model", "Pupil delta, blink variability, latency", "Load index", "Active", "v1.8.2", "2026-05-12", "Local inference"],
  ["CIQ Stress Load Model", "Voice stress, gaze stability, HRV proxy", "Stress score", "Active", "v1.6.4", "2026-05-09", "Edge runtime"],
  ["Burnout Risk Model", "CBI domain scores, recovery trend", "Watch/High risk", "Review", "v0.9.7", "2026-04-28", "Decision support"],
  ["Challenge-Skill Balance Model", "Response scale, latency, load index", "Balance state", "Active", "v1.2.1", "2026-05-17", "Local inference"],
  ["Signal Quality Model", "Camera, audio, biometric completeness", "Confidence", "Active", "v2.1.0", "2026-05-20", "Pre-processing"],
];

export const questionInterpretations = [
  ["Q-03", "Control", "4 / 7", "+12%", "Moderate", "Perceived control held under scenario ambiguity.", "91%"],
  ["Q-11", "Challenge-Skill", "6 / 7", "+24%", "Elevated", "Demand exceeded practiced rhythm during time compression.", "88%"],
  ["Q-18", "Burnout Pattern", "5 / 7", "+31%", "Elevated", "Recovery language weakened after repeated decision pressure.", "86%"],
  ["Q-27", "Justice/Fairness", "3 / 7", "+9%", "Stable", "No significant fairness-related load deviation.", "93%"],
  ["Q-41", "Cognitive Baseline", "5 / 7", "+18%", "Moderate", "Sustained focus with mild latency drift.", "89%"],
];

export const recommendations = [
  { group: "Immediate recalibration", items: ["Run a 4-minute baseline reset before next decision block.", "Reduce simultaneous cues during first replay pass."] },
  { group: "Recovery protocol", items: ["Add a 12-minute low-stimulus recovery window.", "Re-check voice stress and gaze stability before next exercise."] },
  { group: "Training adjustment", items: ["Repeat Decision Node 03 with reduced time compression.", "Introduce progressive ambiguity instead of stacked alerts."] },
  { group: "Follow-up assessment", items: ["Re-run CIQ Block 02 within 48 hours.", "Review burnout-watch trend with qualified human oversight."] },
];
