"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  fieldNotes,
  getCategoryById,
  productLifestyle,
  productSizes,
  productSlides,
  products,
  type Product,
} from "@/content/site";
import { useCart } from "@/lib/cart";

export function ProductDetail({ product }: { product: Product }) {
  const { add } = useCart();
  const category = getCategoryById(product.category);
  const slides = productSlides(product);
  const sizes = productSizes(product);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sizeId, setSizeId] = useState(sizes[0]?.id ?? "10mg");
  const selectedSize = sizes.find((size) => size.id === sizeId) ?? sizes[0];
  const vialPrice = selectedSize?.price ?? product.price;
  const [openPanel, setOpenPanel] = useState<
    "list" | "protocol" | "specs" | "notes" | null
  >("list");

  const activeImage = slides[activeIndex] ?? product.image;
  const feel =
    product.specs.find((spec) => spec.label === "Feel")?.value ??
    category?.tagline ??
    product.blurb;
  const notes = [
    {
      label: "Top",
      value:
        product.specs.find((spec) => spec.label === "Timing")?.value ?? "-",
    },
    {
      label: "Heart",
      value: product.specs.find((spec) => spec.label === "Feel")?.value ?? "-",
    },
    {
      label: "Base",
      value: product.specs.find((spec) => spec.label === "Form")?.value ?? "-",
    },
  ];
  const lifestyle = productLifestyle(product);
  const related = [
    ...products.filter(
      (item) => item.category === product.category && item.id !== product.id,
    ),
    ...products.filter(
      (item) => item.category !== product.category && item.id !== product.id,
    ),
  ].slice(0, 4);

  function go(delta: number) {
    if (slides.length < 2) return;
    setActiveIndex(
      (current) => (current + delta + slides.length) % slides.length,
    );
  }

  return (
    <main>
      <section className="grid min-h-0 md:min-h-dvh md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-foam sm:aspect-[3/4] md:aspect-auto md:min-h-dvh">
          <Image
            src={activeImage}
            alt={product.name}
            fill
            priority
            quality={100}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {slides.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-ink/50 transition-opacity hover:text-ink md:left-3"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-ink/50 transition-opacity hover:text-ink md:right-3"
                aria-label="Next image"
              >
                ›
              </button>
              <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2.5 md:bottom-8">
                {slides.map((src, index) => {
                  const active = index === activeIndex;
                  return (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        active ? "bg-pollen" : "bg-ink/20 hover:bg-ink/45"
                      }`}
                      aria-label={`View image ${index + 1}`}
                      aria-pressed={active}
                    />
                  );
                })}
              </div>
            </>
          ) : null}
        </div>

        <div className="relative flex min-h-[auto] flex-col justify-center overflow-hidden bg-forest-deep text-foam md:min-h-dvh">
          <Image
            src={product.image}
            alt=""
            fill
            className="object-cover scale-150 blur-md"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-forest-deep/45"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-forest-deep/25 via-transparent to-forest-deep/70"
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-[26rem] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-28">
            <p className="text-[11px] uppercase tracking-[0.22em] text-foam/80">
              {category?.label ?? product.category}
            </p>
            <h1 className="mt-3 text-[1.65rem] font-medium uppercase leading-[1.05] tracking-[0.04em] sm:mt-4 sm:text-[1.85rem] md:text-[2.15rem] md:leading-none">
              {product.name}
            </h1>
            <p className="mt-3 text-[15px] text-foam/90 sm:mt-4">${vialPrice} USD</p>

            <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3 sm:mt-10 sm:gap-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-foam/80">
                {feel}
              </p>
              <a
                href="#notes"
                className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-foam/80 underline-offset-4 hover:underline"
              >
                Notes
              </a>
            </div>

            <p className="mt-6 text-[15px] leading-[1.7] text-foam/90 sm:mt-8">
              {product.description}
            </p>
            <p className="mt-5 text-[15px] font-semibold leading-[1.7] sm:mt-6">
              &ldquo;{product.blurb}&rdquo;
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-3 sm:mt-12 sm:gap-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-foam/80">
                Size
              </p>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => {
                  const selected = size.id === sizeId;
                  return (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSizeId(size.id)}
                      className={`min-w-[4.5rem] px-3 py-2.5 text-[12px] uppercase tracking-[0.08em] ${
                        selected
                          ? "border border-foam bg-foam/15"
                          : "bg-forest text-foam/70 hover:text-foam"
                      }`}
                      aria-pressed={selected}
                    >
                      {size.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={() => add(product.id)}
              className="mt-5 w-full bg-pollen px-5 py-3.5 text-[12px] uppercase tracking-[0.18em] text-ink transition-opacity duration-200 hover:opacity-80"
            >
              Add to bag
            </button>
            <button
              type="button"
              onClick={() => add(product.id)}
              className="mt-2 w-full border border-foam/80 bg-transparent px-5 py-3.5 text-[12px] uppercase tracking-[0.18em] text-foam transition-colors duration-200 hover:bg-foam hover:text-forest-deep"
            >
              Subscribe · ${vialPrice} / mo
            </button>
            <p className="mt-3 text-center text-[12px] text-foam/65">
              Monthly protocol · pause anytime
            </p>
          </div>
        </div>
      </section>

      <section className="bg-foam px-5 py-14 sm:px-6 sm:py-20 md:px-16 md:py-28">
        <blockquote className="mx-auto max-w-3xl text-center">
          <p className="text-[1.25rem] leading-snug tracking-[-0.02em] sm:text-[1.5rem] md:text-[2rem]">
            {category?.poetic ?? product.blurb}
          </p>
          <footer className="mt-8 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
            Second Nature · {category?.label ?? product.category}
          </footer>
        </blockquote>
      </section>

      <section
        id="notes"
        className="scroll-mt-24 border-t border-mist bg-canvas px-5 py-14 sm:px-6 sm:py-20 md:px-16 md:py-24"
      >
        <h2 className="text-center text-[11px] uppercase tracking-[0.28em]">
          Notes
        </h2>
        <dl className="mx-auto mt-14 grid max-w-4xl gap-12 sm:grid-cols-3">
          {notes.map((note) => (
            <div key={note.label} className="text-center">
              <dt className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                {note.label}
              </dt>
              <dd className="mt-4 text-[16px] leading-snug">{note.value}</dd>
            </div>
          ))}
        </dl>

        <ul className="mx-auto mt-20 max-w-2xl border-y border-mist">
          {product.signals.map((signal) => (
            <li
              key={`${signal.amount}-${signal.name}`}
              className="flex flex-col gap-1 border-b border-mist py-5 font-mono text-[11px] uppercase tracking-[0.12em] last:border-b-0 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1 sm:text-[12px]"
            >
              <span>
                ({signal.amount}) {signal.unit}
              </span>
              <span>{signal.name}</span>
              <span className="text-ink-soft sm:ml-auto">{signal.note}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 max-w-2xl border-t border-mist">
          <AccordionRow
            label="Full list"
            open={openPanel === "list"}
            onToggle={() =>
              setOpenPanel((v) => (v === "list" ? null : "list"))
            }
          >
            <p className="text-[15px] leading-[1.85] text-ink">
              {product.composition}
            </p>
            <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">
              {product.callouts}
            </p>
          </AccordionRow>
          <AccordionRow
            label="Protocol"
            open={openPanel === "protocol"}
            onToggle={() =>
              setOpenPanel((v) => (v === "protocol" ? null : "protocol"))
            }
          >
            <ol className="space-y-4">
              {product.protocol.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-5 text-[15px] leading-relaxed text-ink-soft"
                >
                  <span className="font-mono text-[11px] text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </AccordionRow>
          <AccordionRow
            label="Specs"
            open={openPanel === "specs"}
            onToggle={() =>
              setOpenPanel((v) => (v === "specs" ? null : "specs"))
            }
          >
            <dl>
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
              className="grid grid-cols-[minmax(5.5rem,7rem)_1fr] gap-3 border-b border-mist py-3 last:border-0 sm:gap-4"
                >
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    {spec.label}
                  </dt>
                  <dd className="text-[15px]">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </AccordionRow>
          <AccordionRow
            label="Field notes"
            open={openPanel === "notes"}
            onToggle={() =>
              setOpenPanel((v) => (v === "notes" ? null : "notes"))
            }
          >
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
              Human first, scientific second. Written for regenerative
              practice in ordinary life, not a clinical checklist.
            </p>
            {category ? (
              <Link
                href={`/shop/${category.slug}`}
                className="mt-5 inline-flex text-[11px] uppercase tracking-[0.16em] underline-offset-4 hover:underline"
              >
                Explore {category.label} family
              </Link>
            ) : null}
          </AccordionRow>
        </div>
      </section>

      <section
        className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] md:aspect-[16/9]"
        aria-label={`${product.name} lifestyle`}
      >
        <Image
          src={lifestyle}
          alt=""
          fill
          priority={false}
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
      </section>

      <section className="bg-foam px-5 py-14 sm:px-6 sm:py-20 md:px-16 md:py-24">
        <div className="mx-auto flex max-w-5xl items-end justify-between gap-4">
          <h2 className="text-[11px] uppercase tracking-[0.22em]">
            From the field
          </h2>
          <Link
            href="/#field-notes"
            className="text-[11px] uppercase tracking-[0.16em] underline-offset-4 hover:underline"
          >
            Read all
          </Link>
        </div>
        <ul className="mx-auto mt-10 grid max-w-5xl gap-8 sm:mt-12 sm:gap-10 md:grid-cols-3">
          {fieldNotes.map((note) => (
            <li key={note.title} className="border-t border-mist pt-5 sm:pt-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                {note.date}
              </p>
              <p className="mt-3 text-[16px] leading-snug sm:mt-4 sm:text-[17px]">
                {note.title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft sm:mt-3">
                {note.dek}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-mist bg-canvas pb-[max(4rem,env(safe-area-inset-bottom))] pt-12 sm:pb-24 sm:pt-16">
          <h2 className="px-5 text-center text-[11px] uppercase tracking-[0.28em] sm:px-6 md:px-16">
            You may also like
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <RelatedCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}

function AccordionRow({
  label,
  open,
  onToggle,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-mist">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] uppercase tracking-[0.18em]">{label}</span>
        <span className="text-sm" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
      {open ? <div className="pb-8">{children}</div> : null}
    </div>
  );
}

function RelatedCard({ product }: { product: Product }) {
  const { add } = useCart();
  const category = getCategoryById(product.category);

  return (
    <article className="group relative bg-foam">
      <Link
        href={`/shop/${product.id}`}
        className="relative block aspect-[4/5] overflow-hidden bg-foam"
        aria-label={`View ${product.name}`}
      >
        <Image
          src={product.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </Link>
      <div className="flex items-start justify-between gap-3 px-5 py-5">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.18em] text-ink-soft">
            {category?.label ?? product.category}
          </p>
          <Link
            href={`/shop/${product.id}`}
            className="mt-1.5 block text-[13px] uppercase tracking-[0.08em] hover:opacity-60"
          >
            {product.name}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => add(product.id)}
          className="shrink-0 pt-0.5 text-[10px] uppercase tracking-[0.16em] underline-offset-4 hover:underline"
        >
          Quick add
        </button>
      </div>
    </article>
  );
}
