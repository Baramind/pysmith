"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { FieldStory } from "@/lib/field";

type StageLoopProps = {
  stages: string[];
  caption: string;
  intervalMs?: number;
  gateLabel?: string;
};

export function StageLoop({
  stages,
  caption,
  intervalMs = 1400,
  gateLabel = "Human approve",
}: StageLoopProps) {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % stages.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduced, stages.length, intervalMs]);

  const shown = reduced ? stages.length - 1 : active;

  return (
    <div className="mv-loop">
      <ol className="mv-loop__row">
        {stages.map((stage, index) => {
          const isGate = stage === gateLabel;
          return (
            <li
              key={stage}
              className={`mv-loop__step${index === shown ? " is-on" : ""}${isGate ? " is-gate" : ""}`}
            >
              <span className="mv-loop__n">{String(index + 1).padStart(2, "0")}</span>
              {stage}
            </li>
          );
        })}
      </ol>
      <p className="mv-loop__cap">{caption}</p>
    </div>
  );
}

export function FinanceLoop({ story }: { story: FieldStory }) {
  return (
    <StageLoop
      stages={story.loop}
      caption={story.loopCaption}
      gateLabel="Human approve"
    />
  );
}
