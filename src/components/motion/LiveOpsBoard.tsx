"use client";

import { useEffect, useState } from "react";
import { McpChip } from "@/components/motion/McpChip";
import { UptimeClock } from "@/components/motion/UptimeClock";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type CallRow = {
  t: string;
  tool: string;
  outcome: "allow" | "deny";
};

const CALLS: CallRow[] = [
  { t: "12:04:18", tool: "python.exec", outcome: "allow" },
  { t: "12:04:19", tool: "retrieve", outcome: "allow" },
  { t: "12:04:21", tool: "pandas.read", outcome: "allow" },
  { t: "12:04:24", tool: "shell.unrestricted", outcome: "deny" },
  { t: "12:04:26", tool: "python.exec", outcome: "allow" },
  { t: "12:04:31", tool: "net.raw", outcome: "deny" },
];

export function LiveOpsBoard() {
  const reduced = usePrefersReducedMotion();
  const [head, setHead] = useState(2);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setHead((value) => (value + 1) % CALLS.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [reduced]);

  const visible = [0, 1, 2, 3].map((offset) => {
    const index = (head - offset + CALLS.length) % CALLS.length;
    return { ...CALLS[index], key: `${index}-${offset}`, fresh: offset === 0 };
  });

  return (
    <div className="ps-figure-wrap">
      <div className="mv-ops" aria-label="Live instance board, illustrative">
        <div className="mv-ops__head">
          <div>
            <div className="mv-ops__title">instance-medium</div>
            <div className="mv-ops__sub">Persistent interpreter · fixed $/hr</div>
          </div>
          <McpChip />
        </div>

        <div className="mv-ops__uptime">
          <div className="mv-ops__k">Uptime</div>
          <UptimeClock />
        </div>

        <div className="mv-ops__feed" aria-live="polite">
          <div className="mv-ops__k">Tool calls landing</div>
          <ol className="mv-ops__list">
            {visible.map((row) => (
              <li
                key={row.key}
                className={`mv-ops__row${row.fresh ? " is-fresh" : ""} mv-ops__row--${row.outcome}`}
              >
                <span className="mv-ops__t">{row.t}</span>
                <code>{row.tool}</code>
                <span className="mv-ops__out">
                  {row.outcome === "allow" ? "allow" : "deny"}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mv-ops__foot">
          <div>
            <div className="mv-ops__k">Warm cache</div>
            <div className="mv-ops__val">numpy · pandas · httpx</div>
          </div>
          <div>
            <div className="mv-ops__k">Rate</div>
            <div className="mv-ops__val">US$0.08 / hr</div>
          </div>
          <div>
            <div className="mv-ops__k">Isolation</div>
            <div className="mv-ops__val">System container</div>
          </div>
        </div>
      </div>

      <div className="ps-float ps-float--tl">
        <div className="ps-float__k">FIXED RATE</div>
        <div className="ps-float__v">$0.08 / hr</div>
      </div>
      <div className="ps-float ps-float--navy ps-float--r">
        <div className="ps-float__k">PACKAGES</div>
        <div className="ps-float__v">Still installed</div>
      </div>
      <div className="ps-float ps-float--bl">
        <div className="ps-float__k">DESTINATION</div>
        <div className="ps-float__v">python.exec</div>
      </div>
    </div>
  );
}
