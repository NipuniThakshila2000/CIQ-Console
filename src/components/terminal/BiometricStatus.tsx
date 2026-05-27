import { Camera, Mic, RadioTower } from "lucide-react";
import { SignalBadge } from "../shared/SignalBadge";

export function BiometricStatus() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
      <SignalBadge label="Camera / pupil" state="stable" />
      <SignalBadge label="Voice stress" state="sync" />
      <SignalBadge label="Biometric window" state="warning" />
      <div className="hidden"><Camera /><Mic /><RadioTower /></div>
    </div>
  );
}
