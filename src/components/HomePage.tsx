import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { Logo } from "@/components/Logo";
import { StatusStrip } from "@/components/StatusStrip";
import { community, fieldNotes, pathways, pillars } from "@/content/site";

export function HomePage() {
  return (
    <main>
      {/* 1 · Full-bleed hero */}
      <section className="relative min-h-dvh overflow-hidden bg-earth text-white">
        <HeroVideo
          src="/media/hero-tailgate.mp4"
          poster="/media/hero-tailgate-poster.jpg"
          className="absolute inset-0 h-full w-full scale-105 object-cover object-center blur-[2px]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-earth/85 via-earth/30 to-earth/40" />

        <div className="pointer-events-none relative z-10 flex min-h-dvh flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(7rem,calc(env(safe-area-inset-top)+5.5rem))] md:px-8 md:pb-10">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <Link
              href="/"
              aria-label="Second Nature home"
              className="pointer-events-auto mb-5 md:mb-8"
            >
              <Logo invert className="h-[1.25rem] md:h-[1.55rem]" />
            </Link>
            <h1 className="max-w-[14ch] px-1 font-display text-[clamp(1.7rem,7.6vw,5.75rem)] font-medium leading-[1.05] tracking-[-0.03em] text-balance sm:max-w-[18ch] md:max-w-none md:whitespace-nowrap md:leading-[0.98]">
              Natural Human Performance
            </h1>
            <p className="mt-5 inline-block max-w-lg px-1 font-serif text-lg leading-snug text-white/92 md:mt-6 md:text-2xl">
              Applied Regenerative Biology
            </p>
            <Link
              href="/shop"
              className="pointer-events-auto mt-8 inline-flex border border-white bg-white px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors duration-200 hover:border-pollen hover:bg-pollen md:mt-10"
            >
              Shop treatments
            </Link>
          </div>

          <StatusStrip
            invert
            timeOnly
            className="pointer-events-auto mx-auto max-w-xl text-center"
          />
        </div>
      </section>

      {/* 2 · Pathways index over motion plate */}
      <section
        id="pathways"
        className="relative overflow-hidden border-b border-mist"
      >
        <div className="absolute inset-0">
          <Image
            src="/media/hero-grass-v2.jpg"
            alt=""
            fill
            className="scale-110 object-cover blur-md brightness-75"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-canvas/78" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1680px] px-4 py-16 md:px-8 md:py-24">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
              Choose how you return.
            </h2>
            <p className="mt-4 font-serif text-lg text-ink-soft md:text-xl">
              Health as a system, not a shortcut.
            </p>
          </div>

          <ul>
            {pathways.map((item) => (
              <li key={item.label} className="border-t border-ink/20 last:border-b">
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between gap-6 py-4 md:py-5"
                >
                  <span className="font-display text-[clamp(1.75rem,4.5vw,3.5rem)] font-semibold tracking-[-0.03em] transition-opacity group-hover:opacity-55">
                    {item.label}
                  </span>
                  <span className="shrink-0 font-mono text-sm text-ink-soft md:text-base">
                    [{String(item.count).padStart(2, "0")}]
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Philosophy - deck page-05 asymmetry */}
      <section id="philosophy" className="border-b border-mist bg-canvas">
        <div className="mx-auto grid max-w-[1680px] md:grid-cols-[minmax(0,0.95fr)_minmax(0,2fr)]">
          <div className="relative min-h-[520px] md:min-h-full">
            <Image
              src="/media/motion-athlete-v2.jpg"
              alt=""
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 768px) 100vw, 34vw"
            />
          </div>

          <div className="flex flex-col justify-between px-4 py-14 md:px-12 md:py-20 lg:px-16">
            <div>
              <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.035em]">
                Core Philosophy
              </h2>
              <p className="mt-6 max-w-xl font-serif text-xl leading-snug text-ink-soft md:text-2xl">
                Helping your body return to its optimal state.
              </p>
            </div>

            <div className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.n} className="flex min-h-[220px] flex-col">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.08em]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 flex-1 font-serif text-base leading-relaxed text-ink-soft">
                    {pillar.body}
                  </p>
                  <p className="mt-8 font-display text-5xl font-semibold tracking-[-0.04em] text-ink md:text-6xl">
                    {pillar.n}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Forest flood Community */}
      <section
        id="community"
        className="border-b border-forest-deep bg-forest text-white"
      >
        <div className="mx-auto max-w-[1680px] px-4 py-16 md:px-8 md:py-24">
          <h2 className="max-w-4xl font-display text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
            {community.headline}
          </h2>
          <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-white/85 md:text-xl">
            {community.dek}
          </p>

          <div className="mt-12 grid min-w-0 gap-8 md:grid-cols-3 md:gap-6">
            {community.columns.map((col) => (
              <div key={col.src} className="flex min-w-0 flex-col gap-4">
                {col.body ? (
                  <p className="min-w-0 font-serif text-base leading-relaxed text-white/85">
                    {col.body}
                  </p>
                ) : null}
                {col.points ? (
                  <ul className="flex min-w-0 list-disc flex-col gap-2 pl-4 font-serif text-base leading-relaxed text-white/85">
                    {col.points.map((point) => (
                      <li key={point} className="min-w-0 break-words">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="relative mt-auto aspect-[4/5] overflow-hidden bg-forest-deep">
                  <Image
                    src={col.src}
                    alt={col.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Field Notes editorial strip */}
      <section
        id="field-notes"
        className="border-b border-mist bg-canvas px-4 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-[1680px]">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.03em]">
                Science as ritual, not lecture.
              </h2>
            </div>
            <p className="max-w-md font-serif text-lg italic text-ink-soft">
              What you do frequently becomes your frequency.
            </p>
          </div>

          <ul className="divide-y divide-mist border-y border-mist">
            {fieldNotes.map((note) => (
              <li key={note.title}>
                <article className="grid gap-3 py-6 md:grid-cols-[7rem_1fr] md:gap-10 md:py-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">
                    {note.date}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                      {note.title}
                    </h3>
                    <p className="mt-2 font-serif text-base text-ink-soft md:text-lg">
                      {note.dek}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 · Opportunity split */}
      <section className="border-b border-mist">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[460px] bg-canvas-deep">
            <Image
              src="/media/macro-leaf-v2.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-canvas px-6 py-16 md:px-14">
            <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
              Made to feel as natural as the systems they support.
            </h2>
            <p className="mt-5 font-serif text-lg text-ink-soft md:text-xl">
              Advanced biology, held with warmth and craft. Human first,
              scientific second.
            </p>
            <Link
              href="/shop"
              className="mt-10 inline-flex w-fit bg-pollen px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:bg-forest hover:text-white"
            >
              Enter the shop
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee - allowed ambient */}
      <div className="overflow-hidden border-b border-mist bg-canvas-deep py-3 text-ink">
        <div className="marquee-track font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="px-4">
            Free shipping on orders over $60 · Regenerative health without the
            clinical cold · It&apos;s a feeling ·{" "}
          </span>
          <span className="px-4" aria-hidden>
            Free shipping on orders over $60 · Regenerative health without the
            clinical cold · It&apos;s a feeling ·{" "}
          </span>
        </div>
      </div>
    </main>
  );
}
