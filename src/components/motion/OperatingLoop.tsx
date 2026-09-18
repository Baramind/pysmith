"use client";

import { StageLoop } from "@/components/motion/StageLoop";

const stages = [
  "Load data",
  "Analyse",
  "Run code",
  "Simulate alternatives",
  "Validate results",
  "Save a checkpoint",
  "Wait for new information",
  "Resume and replan",
];

export function OperatingLoop() {
  return (
    <StageLoop
      stages={stages}
      caption="Load once. Keep the workspace. Resume when the facts change — not from a blank interpreter."
      gateLabel="Resume and replan"
    />
  );
}
