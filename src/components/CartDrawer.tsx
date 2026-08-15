"use client";

import Image from "next/image";
import { useCart } from "@/lib/cart";

export function CartDrawer() {
  const { open, setOpen, lines, count, remove, clear, add } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-earth/45 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col border-l border-mist bg-canvas transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
        aria-label="Shopping cart"
        role="dialog"
      >
        <div className="flex items-center justify-between border-b border-mist px-5 py-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em]">
            Cart ({count})
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="font-mono text-xs uppercase tracking-[0.14em] underline-offset-4 hover:underline"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <p className="font-serif text-lg text-ink-soft">
              Your cart is quiet. Add a protocol when you&apos;re ready.
            </p>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => (
                <li
                  key={line.product.id}
                  className="flex gap-3 border-b border-mist pb-4"
                >
                  <div className="relative h-20 w-20 overflow-hidden bg-canvas-deep">
                    <Image
                      src={line.product.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em]">
                        {line.product.name}
                      </p>
                      <p className="font-mono text-[11px]">
                        [${line.product.price * line.qty}]
                      </p>
                    </div>
                    <p className="mt-1 font-serif text-sm text-ink-soft">
                      {line.product.blurb}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        className="border border-mist px-3 py-1 font-mono text-[10px] uppercase tracking-wider hover:border-ink"
                        onClick={() => add(line.product.id)}
                      >
                        + Qty ({line.qty})
                      </button>
                      <button
                        type="button"
                        className="font-mono text-[10px] uppercase tracking-wider text-ink-soft underline-offset-2 hover:underline"
                        onClick={() => remove(line.product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-mist px-5 py-5">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
            Checkout isn&apos;t live yet
          </p>
          <button
            type="button"
            disabled={lines.length === 0}
            className="w-full bg-pollen px-4 py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Check out
          </button>
          {lines.length > 0 ? (
            <button
              type="button"
              onClick={clear}
              className="mt-3 w-full font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft underline-offset-2 hover:underline"
            >
              Clear cart
            </button>
          ) : null}
        </div>
      </aside>
    </>
  );
}
