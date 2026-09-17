"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { FieldStory } from "@/lib/field";

const TARGET = 603_840;
const BASELINE = 572_017;
const TICKS = 48;

function formatTons(n: number) {
  return n.toLocaleString("en-AU");
}

export function MiningSwarm({ story }: { story: FieldStory }) {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);
  const [tons, setTons] = useState(TARGET);

  useEffect(() => {
    if (reduced) {
      setTons(TARGET);
      setActive(0);
      return;
    }
    let frame = 0;
    setTons(0);
    const agentId = window.setInterval(() => {
      setActive((value) => (value + 1) % story.loop.length);
    }, 1500);
    const tonId = window.setInterval(() => {
      frame += 1;
      const t = Math.min(1, frame / TICKS);
      const eased = 1 - (1 - t) * (1 - t);
      setTons(Math.round(TARGET * eased));
      if (t >= 1) window.clearInterval(tonId);
    }, 120);
    return () => {
      window.clearInterval(agentId);
      window.clearInterval(tonId);
    };
  }, [reduced, story.loop.length]);

  return (
    <div className="mv-swarm">
      <div className="mv-swarm__agents">
        {story.loop.map((name, index) => (
          <div
            key={name}
            className={`mv-swarm__agent${index === active || reduced ? " is-on" : ""}`}
          >
            <span className="mv-swarm__dot" />
            {name}
          </div>
        ))}
      </div>
      <p className="mv-swarm__msg">
        Structured state in, structured state out. Not a chat room for the pit.
      </p>
      <div className="mv-swarm__tons">
        <div className="mv-ops__k">Simulated 12-hour shift</div>
        <div className="mv-swarm__n">{formatTons(tons)} tons</div>
        <div className="mv-swarm__base">
          Baseline {formatTons(BASELINE)} · +5.56% in sim
        </div>
      </div>
      <p className="mv-loop__cap">{story.loopCaption}</p>
    </div>
  );
}
