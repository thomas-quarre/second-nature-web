"use client";

import { useEffect, useState } from "react";

/** Live clock for the hero video footer only. */
export function StatusStrip({
  invert = false,
  className = "",
}: {
  invert?: boolean;
  /** @deprecated Always time-only; kept for call-site compatibility */
  timeOnly?: boolean;
  className?: string;
}) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        d
          .toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })
          .replace(" ", "")
          .toUpperCase(),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) {
    return (
      <p
        className={`text-[13px] tabular-nums opacity-0 ${className}`}
        aria-hidden
      >
        00:00:00AM
      </p>
    );
  }

  return (
    <p
      className={`text-[13px] tabular-nums ${
        invert ? "text-white/85" : "text-ink-soft"
      } ${className}`}
    >
      <span>{now}</span>
    </p>
  );
}
