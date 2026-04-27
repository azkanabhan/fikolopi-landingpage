import Card from "@/components/Card";
import Image from "next/image";
import Section from "@/components/Section";

export default function OperationsAndMarketSection({ dictionary }) {
  const operations = dictionary?.operations ?? {};
  const market = dictionary?.market ?? {};

  return (
    <>
      <Section id="process" eyebrow={operations.eyebrow} title={operations.title}>
        <ol className="space-y-7 lg:space-y-10">
          {(operations.items ?? []).map((item, index) => (
            <li
              key={`${item.title}-${index}`}
              className="glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-6"
              data-reveal
            >
              <span className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent lg:block" />

              <div
                className={`grid items-stretch gap-5 lg:grid-cols-2 lg:gap-8 ${
                  index % 2 === 0 ? "" : "lg:[&>div:first-child]:order-2 lg:[&>div:last-child]:order-1"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
                  <Image
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    width={1200}
                    height={760}
                    className="h-64 w-full object-cover transition duration-500 ease-out group-hover:scale-105 sm:h-72"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
                      {operations.stage} {index + 1}
                    </p>
                    <p className="mt-2 text-sm font-medium sm:text-base">{item.title}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl leading-none">{item.icon}</span>
                    <h3 className="text-lg font-semibold leading-tight sm:text-xl">{item.title}</h3>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                    {operations.processLabel}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-[var(--muted)] sm:text-base">
                    {(item.processes ?? []).map((process) => (
                      <li key={process} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--coffee-soft)]" />
                        <span>{process}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 rounded-xl border border-[var(--coffee-soft)]/35 bg-[var(--coffee)]/15 p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--coffee-soft)]">
                      {operations.outputLabel}
                    </p>
                    <p className="mt-1 text-sm font-medium sm:text-base">{item.output}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="market" eyebrow={market.eyebrow} title={market.title}>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title={market.channelsTitle}>
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              {(market.channels ?? []).map((channel) => (
                <li key={channel}>- {channel}</li>
              ))}
            </ul>
          </Card>
          <Card title={market.targetTitle}>
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              {(market.target ?? []).map((targetItem) => (
                <li key={targetItem}>- {targetItem}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
