import type { Metadata } from "next";
import Image from "next/image";
import { ShopGrid } from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Protocols for recovery, performance, sleep, and foundation, designed to feel like second nature.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="pt-24">
      <div className="mx-auto max-w-[1680px] px-4 pb-6 md:px-8">
        <h1 className="font-display text-[clamp(3rem,18vw,10rem)] font-semibold leading-[0.85] tracking-[-0.045em]">
          Shop
        </h1>
        <p className="mt-5 max-w-xl font-serif text-lg italic text-ink-soft md:text-xl">
          Regenerative tools, warm, precise, and built for the long game.
        </p>
      </div>

      <section className="border-y border-mist">
        <div className="mx-auto grid max-w-[1680px] md:grid-cols-12">
          <div className="relative min-h-[280px] bg-foam md:col-span-7 md:min-h-[520px]">
            <Image
              src="/media/vials-on-moss-clear.png"
              alt="Second Nature protocols on moss"
              fill
              priority
              quality={95}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
          </div>
          <div className="flex flex-col justify-between gap-10 bg-foam px-4 py-10 md:col-span-5 md:px-10 md:py-14">
            <div>
              <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
                Every protocol, morning through wind-down. Each formula is a
                practiced return, built to feel like second nature.
              </p>
            </div>
            <ul className="space-y-3 border-t border-mist pt-6">
              {[
                "Morning clarity",
                "Post-effort repair",
                "Wind-down signal",
              ].map((item, i) => (
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

      <ShopGrid initialFilter={params.filter} />
    </main>
  );
}
