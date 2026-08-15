"use client";

import Image from "next/image";
import Link from "next/link";
import { VerticalMarquee } from "@/components/VerticalMarquee";
import {
  featuredProducts,
  type NavPanel,
} from "@/content/site";

export function NavOverlay({
  panel,
  onClose,
}: {
  panel: NavPanel;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-40 flex flex-col bg-ink text-white"
      role="dialog"
      aria-modal="true"
      aria-label={`${panel.label} menu`}
    >
      {/* Blurred atmospheric plate - sits under chrome; header remains above (z-50) */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={panel.background}
          alt=""
          fill
          priority
          className="scale-110 object-cover blur-xl brightness-[0.5] saturate-[0.8]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 pt-[max(4.5rem,calc(env(safe-area-inset-top)+3.75rem))]">
        {/* Left - oversized category index */}
        <div
          className={`flex min-h-0 flex-1 flex-col justify-center overflow-y-auto px-4 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-4 md:px-10 md:pb-10 md:pt-6 ${
            panel.showProductFeed ? "md:w-[62%] md:flex-none" : ""
          }`}
        >
          <ul className="max-w-3xl">
            {panel.links.map((link) => (
              <li key={`${panel.id}-${link.label}`}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group flex min-h-12 items-baseline gap-2 py-1.5 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-x-3 focus-visible:translate-x-3 sm:gap-3 md:hover:translate-x-8"
                >
                  <span className="font-display text-[clamp(1.75rem,7vw,4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white/70 transition-colors duration-250 group-hover:text-white">
                    {link.label}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-white/40 transition-colors group-hover:text-white/75 sm:text-sm md:text-base">
                    [{String(link.count).padStart(2, "0")}]
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - product feed (Shop only), auto-scrolls until hover */}
        {panel.showProductFeed ? (
          <aside className="relative hidden h-full w-[38%] shrink-0 bg-canvas md:block">
            <VerticalMarquee durationSec={36} className="h-full">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/shop/${product.id}`}
                  onClick={onClose}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/5] w-full bg-canvas-deep">
                    <Image
                      src={product.image}
                      alt=""
                      fill
                      className="object-cover transition-opacity duration-200 group-hover:opacity-90"
                      sizes="38vw"
                    />
                  </div>
                  <div className="flex items-stretch border-b border-mist bg-foam">
                    <span className="shrink-0 bg-mist px-2 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                      Featured
                    </span>
                    <span className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                      {product.name}
                    </span>
                  </div>
                </Link>
              ))}
            </VerticalMarquee>
          </aside>
        ) : null}
      </div>
    </div>
  );
}
