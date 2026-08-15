"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { NavOverlay } from "@/components/NavOverlay";
import {
  isProductPath,
  navPanels,
  type NavPanelId,
} from "@/content/site";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const pathname = usePathname();
  const { count, setOpen: setCartOpen } = useCart();
  const [activePanel, setActivePanel] = useState<NavPanelId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pdpScrolled, setPdpScrolled] = useState(false);
  const panelLabelId = useId();
  const isHome = pathname === "/";
  const isProduct = isProductPath(pathname);

  const panel = activePanel
    ? navPanels.find((p) => p.id === activePanel) ?? null
    : null;
  const overlayOpen = Boolean(panel);

  useEffect(() => {
    setActivePanel(null);
    setMobileOpen(false);
    setPdpScrolled(false);
  }, [pathname]);

  useEffect(() => {
    if (!overlayOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePanel(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [overlayOpen, mobileOpen]);

  useEffect(() => {
    if (!isProduct || overlayOpen || mobileOpen) {
      setPdpScrolled(false);
      return;
    }
    const onScroll = () => {
      const threshold =
        window.innerWidth >= 768
          ? window.innerHeight * 0.72
          : Math.min(window.innerWidth * 1.15, window.innerHeight * 0.9);
      setPdpScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isProduct, overlayOpen, mobileOpen]);

  function togglePanel(id: NavPanelId) {
    setMobileOpen(false);
    setActivePanel((current) => (current === id ? null : id));
  }

  const chromeActive = overlayOpen || isHome;
  const pdpQuiet = isProduct && !overlayOpen && !mobileOpen;
  const pdpLight = pdpQuiet && pdpScrolled;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {!overlayOpen && !isHome && !isProduct ? (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas via-canvas/80 to-transparent"
            aria-hidden
          />
        ) : null}

        {pdpQuiet ? (
          <div
            className={`relative mx-auto flex max-w-[1680px] items-center justify-between px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))] transition-colors duration-300 sm:px-5 sm:py-5 md:px-8 md:py-6 ${
              pdpLight
                ? "bg-canvas/90 shadow-[0_1px_0_0_var(--mist)] backdrop-blur-md"
                : ""
            }`}
          >
            <button
              type="button"
              onClick={() => togglePanel("Shop")}
              className={`min-h-11 px-1 py-1 font-mono text-[11px] uppercase tracking-[0.18em] hover:opacity-70 ${
                pdpLight ? "text-ink" : "text-white"
              }`}
            >
              Menu
            </button>
            <Link
              href="/"
              aria-label="Second Nature home"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Logo
                variant="mark"
                invert={!pdpLight}
                className="h-8 w-8 md:h-9 md:w-9"
              />
            </Link>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label={count > 0 ? `Cart, ${count} items` : "Cart"}
              className={`min-h-11 px-1 py-1 font-mono text-[11px] uppercase tracking-[0.18em] hover:opacity-70 ${
                pdpLight ? "text-ink" : "text-white"
              }`}
            >
              Cart{count > 0 ? ` (${count})` : ""}
            </button>
          </div>
        ) : (
        <div className="relative mx-auto flex max-w-[1680px] items-stretch gap-2 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:gap-3 sm:px-4 md:gap-4 md:px-6 md:py-4">
          <Link
            href="/"
            aria-label="Second Nature home"
            className="relative z-10 flex shrink-0 items-center self-center"
            onClick={() => setActivePanel(null)}
          >
            <Logo
              variant="mark"
              invert={chromeActive}
              className="h-8 w-8 md:h-9 md:w-9"
            />
          </Link>

          {/* Usal-style: menu items span the top bar */}
          <nav
            className="hidden min-w-0 flex-1 md:flex"
            aria-label="Primary"
            aria-describedby={panelLabelId}
          >
            <span id={panelLabelId} className="sr-only">
              Opens an overlay menu. Press Escape to close.
            </span>
            <div className="flex w-full items-stretch gap-1.5">
              {navPanels.map((item) => {
                const isOn = activePanel === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-expanded={isOn}
                    aria-controls="nav-overlay"
                    onClick={() => togglePanel(item.id)}
                    className={`flex flex-1 items-center gap-2 px-3 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                      isOn
                        ? "bg-white text-ink"
                        : chromeActive
                          ? "border border-white/35 text-white hover:bg-white/10"
                          : "border border-ink/25 text-ink hover:bg-ink/5"
                    }`}
                  >
                    <span
                      className={`inline-block h-2 w-2 shrink-0 rounded-full border ${
                        isOn
                          ? "border-ink bg-ink"
                          : chromeActive
                            ? "border-white bg-transparent"
                            : "border-ink bg-transparent"
                      }`}
                      aria-hidden
                    />
                    <span className="pt-0.5">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-1 self-center sm:gap-2 md:ml-0">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label={count > 0 ? `Cart, ${count} items` : "Cart"}
              className={`min-h-11 px-2.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] sm:px-3 ${
                chromeActive
                  ? "text-white hover:opacity-70"
                  : "text-ink hover:opacity-60"
              }`}
            >
              Cart{count > 0 ? ` (${count})` : ""}
            </button>
            <button
              type="button"
              className={`min-h-11 px-2.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] md:hidden sm:px-3 ${
                chromeActive
                  ? "border border-white text-white"
                  : "border border-ink text-ink"
              }`}
              aria-expanded={mobileOpen || overlayOpen}
              aria-controls="mobile-nav"
              onClick={() => {
                if (overlayOpen) {
                  setActivePanel(null);
                  return;
                }
                setMobileOpen((v) => !v);
              }}
            >
              {mobileOpen || overlayOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        )}

        {/* Mobile: pick a panel */}
        {mobileOpen && !overlayOpen ? (
          <div
            id="mobile-nav"
            className="max-h-[min(70dvh,28rem)] overflow-y-auto border-t border-mist bg-canvas px-4 py-4 text-ink md:hidden"
          >
            <ul className="space-y-0">
              {navPanels.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 border-b border-mist py-4 text-left font-mono text-sm uppercase tracking-[0.16em]"
                    onClick={() => {
                      setMobileOpen(false);
                      setActivePanel(item.id);
                    }}
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full bg-ink"
                      aria-hidden
                    />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </header>

      {panel ? (
        <div id="nav-overlay">
          <NavOverlay panel={panel} onClose={() => setActivePanel(null)} />
        </div>
      ) : null}
    </>
  );
}
