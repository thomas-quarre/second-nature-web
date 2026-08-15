"use client";

import type { ReactNode } from "react";

/**
 * Usal-style vertical marquee: continuous CSS scroll that pauses on hover.
 * Duplicates children for a seamless loop (data-marqy pattern).
 */
export function VerticalMarquee({
  children,
  durationSec = 32,
  className = "",
}: {
  children: ReactNode;
  durationSec?: number;
  className?: string;
}) {
  return (
    <div
      className={`marqy-root h-full overflow-hidden ${className}`}
      data-marqy=""
      data-direction="vertical"
      data-pause-on-hover=""
    >
      <div className="marqy-inner flex h-full flex-col">
        <div
          className="marqy-content marqy-vertical flex flex-col"
          style={{ animationDuration: `${durationSec}s` }}
        >
          <div className="marqy-item flex flex-col">{children}</div>
        </div>
        <div
          className="marqy-content marqy-vertical flex flex-col"
          style={{ animationDuration: `${durationSec}s` }}
          aria-hidden
        >
          <div className="marqy-item flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
}
