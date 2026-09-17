"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Static frame shown on the server and for reduced motion. */
const FROZEN = { days: 14, hours: 3, minutes: 12, seconds: 8 };
const OFFSET_MS =
  FROZEN.days * 86_400_000 +
  FROZEN.hours * 3_600_000 +
  FROZEN.minutes * 60_000 +
  FROZEN.seconds * 1_000;

function pad(n: number, width = 2) {
  return String(n).padStart(width, "0");
}

function split(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(total / 86_400);
  const hours = Math.floor((total % 86_400) / 3_600);
  const minutes = Math.floor((total % 3_600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

export function UptimeClock() {
  const reduced = usePrefersReducedMotion();
  const [elapsed, setElapsed] = useState(FROZEN);

  useEffect(() => {
    if (reduced) {
      setElapsed(FROZEN);
      return;
    }
    const started = Date.now() - OFFSET_MS;
    const tick = () => setElapsed(split(Date.now() - started));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <time
      className="mv-uptime"
      dateTime={`P${elapsed.days}DT${elapsed.hours}H${elapsed.minutes}M${elapsed.seconds}S`}
      aria-label={`Instance uptime ${elapsed.days} days ${elapsed.hours} hours ${elapsed.minutes} minutes ${elapsed.seconds} seconds`}
    >
      <span className="mv-uptime__n">
        {elapsed.days}
        <small>d</small>
      </span>
      <span className="mv-uptime__n">
        {pad(elapsed.hours)}
        <small>h</small>
      </span>
      <span className="mv-uptime__n">
        {pad(elapsed.minutes)}
        <small>m</small>
      </span>
      <span className="mv-uptime__n">
        {pad(elapsed.seconds)}
        <small>s</small>
      </span>
    </time>
  );
}
