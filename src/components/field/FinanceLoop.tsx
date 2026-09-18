"use client";

import { StageLoop } from "@/components/motion/StageLoop";
import type { FieldStory } from "@/lib/field";

export function FinanceLoop({ story }: { story: FieldStory }) {
  return (
    <StageLoop
      stages={story.loop}
      caption={story.loopCaption}
      gateLabel="Human approve"
    />
  );
}
