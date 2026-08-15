"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductTile } from "@/components/ProductTile";
import { categories, products } from "@/content/site";

export function ShopGrid({
  initialFilter,
  hideFamilyNav = false,
}: {
  initialFilter?: string;
  hideFamilyNav?: boolean;
}) {
  const start =
    categories.find(
      (c) =>
        c.id.toLowerCase() === (initialFilter || "").toLowerCase() ||
        c.slug === (initialFilter || "").toLowerCase(),
    )?.id ?? null;

  const [filter, setFilter] = useState<string | null>(start);
  const [filtersOpen, setFiltersOpen] = useState(Boolean(start));

  const visible = useMemo(() => {
    if (!filter) return products;
    return products.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <div>
      {!hideFamilyNav ? (
        <div className="flex items-center justify-between gap-4 border-y border-mist px-4 py-3 md:px-8">
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-[13px] transition-opacity hover:opacity-55"
          >
            <span aria-hidden>{filtersOpen ? "−" : "+"}</span>
            {filtersOpen ? "Hide filters" : "Show filters"}
          </button>
          <p className="text-[13px] text-ink-soft">
            {visible.length} formulas
          </p>
        </div>
      ) : (
        <div className="flex items-center justify-end border-y border-mist px-4 py-3 md:px-8">
          <p className="text-[13px] text-ink-soft">
            {visible.length} formulas
          </p>
        </div>
      )}

      {filtersOpen && !hideFamilyNav ? (
        <div className="border-b border-mist px-4 py-6 md:px-8">
          <p className="mb-4 text-[13px] text-ink-soft">
            Choose a family
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <button
              type="button"
              onClick={() => setFilter(null)}
              className={`inline-flex items-center gap-2 text-[13px] transition-opacity ${
                !filter ? "text-ink" : "text-ink-soft hover:text-ink"
              }`}
            >
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full bg-ink ${
                  !filter ? "opacity-100" : "opacity-30"
                }`}
                aria-hidden
              />
              All
            </button>
            {categories.map((cat) => {
              const active = filter === cat.id;
              return (
                <Link
                  key={cat.slug}
                  href={`/shop/${cat.slug}`}
                  className={`inline-flex items-center gap-2 text-[13px] transition-opacity ${
                    active ? "text-ink" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full bg-ink ${
                      active ? "opacity-100" : "opacity-30"
                    }`}
                    aria-hidden
                  />
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-px bg-mist sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((product) => (
          <div key={product.id} className="bg-canvas p-3 md:p-4">
            <ProductTile product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
