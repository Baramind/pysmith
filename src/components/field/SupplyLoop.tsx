"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { StageLoop } from "@/components/motion/StageLoop";
import type { FieldStory } from "@/lib/field";

const CARDS = [
  { title: "Baseline plan", meta: "Locked Monday" },
  { title: "Supplier slip +4d", meta: "Exception" },
  { title: "Alt: expedite lane", meta: "Solver" },
  { title: "Alt: substitute SKU", meta: "Solver" },
];

export function SupplyLoop({ story }: { story: FieldStory }) {
  const reduced = usePrefersReducedMotion();
  const [stack, setStack] = useState(reduced ? CARDS.length : 1);

  useEffect(() => {
    if (reduced) {
      setStack(CARDS.length);
      return;
    }
    const id = window.setInterval(() => {
      setStack((value) => (value % CARDS.length) + 1);
    }, 1800);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className="mv-supply">
      <StageLoop
        stages={story.loop}
        caption={story.loopCaption}
        gateLabel="Recommend"
      />
      <div className="mv-supply__workspace">
        <div className="mv-ops__k">PySmith workspace · scenario cards</div>
        <div className="mv-supply__stack">
          {CARDS.slice(0, stack).map((card, index) => (
            <article
              key={card.title}
              className={`mv-supply__card${card.meta === "Exception" ? " is-alert" : ""}`}
              style={{ transform: `translate(${index * 8}px, ${index * 8}px)` }}
            >
              <span>{card.meta}</span>
              <strong>{card.title}</strong>
            </article>
          ))}
        </div>
        <p className="mv-supply__opti">
          OptiGuide boundary: the language model may propose code; the{" "}
          <strong>solver remains the source of quantitative truth</strong>.
        </p>
      </div>
    </div>
  );
}
