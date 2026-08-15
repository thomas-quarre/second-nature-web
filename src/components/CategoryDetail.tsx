import Image from "next/image";
import Link from "next/link";
import { ShopGrid } from "@/components/ShopGrid";
import {
  categories,
  type Category,
} from "@/content/site";

export function CategoryDetail({ category }: { category: Category }) {
  const others = categories.filter((c) => c.id !== category.id);

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1680px] px-4 pb-8 md:px-8">
        <nav
          className="flex flex-wrap items-center gap-2 text-[13px] text-ink-soft"
          aria-label="Breadcrumb"
        >
          <Link href="/shop" className="transition-opacity hover:opacity-60">
            Shop
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{category.label}</span>
        </nav>

        <h1 className="mt-8 font-display text-[clamp(2.75rem,14vw,9rem)] font-semibold leading-[0.9] tracking-[-0.045em]">
          {category.label}
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg italic text-ink-soft md:mt-5 md:text-2xl">
          {category.poetic}
        </p>
      </div>

      {/* Editorial plate - Abel / Leif family page rhythm */}
      <section className="border-y border-mist">
        <div className="mx-auto grid max-w-[1680px] md:grid-cols-12">
          <div className="relative min-h-[280px] md:col-span-7 md:min-h-[520px]">
            <Image
              src={category.heroImage}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <div className="flex flex-col justify-between gap-10 bg-foam px-4 py-10 md:col-span-5 md:px-10 md:py-14">
            <div>
              <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
                {category.description}
              </p>
            </div>
            <ul className="space-y-3 border-t border-mist pt-6">
              {category.focus.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 text-[13px]"
                >
                  <span className="text-ink-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1680px] px-4 py-10 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              Protocols
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-[13px] underline-offset-4 hover:underline"
          >
            All formulas
          </Link>
        </div>
      </div>

      <ShopGrid initialFilter={category.id} hideFamilyNav />

      <section className="border-t border-mist px-4 py-16 md:px-8">
        <div className="mx-auto max-w-[1680px]">
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.03em]">
            Other pathways
          </h2>
          <ul className="mt-10">
            {others.map((item) => (
              <li key={item.slug} className="border-t border-mist last:border-b">
                <Link
                  href={`/shop/${item.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="font-display text-2xl font-semibold tracking-[-0.03em] transition-opacity group-hover:opacity-55 md:text-3xl">
                    {item.label}
                  </span>
                  <span className="text-[13px] text-ink-soft">
                    [{item.count}]
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
