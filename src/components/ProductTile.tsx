"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategoryById, type Product } from "@/content/site";

export function ProductTile({ product }: { product: Product }) {
  const category = getCategoryById(product.category);
  const href = `/shop/${product.id}`;

  return (
    <article className="group flex flex-col">
      <Link
        href={href}
        className="relative aspect-square overflow-hidden bg-canvas-deep"
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          quality={90}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-earth/70 px-3 py-2 text-[13px] text-white transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0 md:pointer-events-auto">
          View protocol
        </span>
      </Link>
      <div className="mt-3 flex items-baseline justify-between gap-3 px-0.5">
        <div className="min-w-0">
          <Link
            href={href}
            className="text-[15px] text-ink transition-opacity hover:opacity-60"
          >
            {product.name}
          </Link>
          {category ? (
            <p className="mt-1 text-[13px] text-ink-soft">
              {category.label}
            </p>
          ) : null}
        </div>
        <p className="shrink-0 font-mono text-[11px] text-ink-soft">
          [${product.price}]
        </p>
      </div>
    </article>
  );
}
