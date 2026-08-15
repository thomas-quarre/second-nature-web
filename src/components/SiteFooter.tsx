"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-canvas">
      <div className="mx-auto grid max-w-[1680px] gap-10 border-t border-mist px-4 py-12 md:grid-cols-2 md:px-8">
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <label
            htmlFor="newsletter"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft"
          >
            Subscribe for first look at new protocols &amp; rituals
          </label>
          <div className="flex items-end gap-3 border-b border-ink pb-2">
            <input
              id="newsletter"
              name="email"
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent font-serif text-base outline-none placeholder:text-ink-soft/60"
            />
            <button
              type="submit"
              className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] transition-colors hover:text-forest"
            >
              Submit
            </button>
          </div>
        </form>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden px-4 pb-5 pt-3 md:px-8 md:pb-8 md:pt-4">
        <Logo className="mx-auto block h-8 w-[min(100%,22rem)] md:mx-0 md:h-auto md:w-full md:max-w-none" />
      </div>

      <div className="flex flex-col gap-2 border-t border-mist px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Second Nature</p>
        <p className="md:text-center">Human performance that feels natural</p>
        <p>Privacy · Terms</p>
      </div>
    </footer>
  );
}
