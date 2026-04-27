import Card from "@/components/Card";
import Section from "@/components/Section";

export default function OperationsAndMarketSection({ dictionary }) {
  const operations = dictionary?.operations ?? {};
  const market = dictionary?.market ?? {};

  return (
    <>
      <Section id="process" eyebrow={operations.eyebrow} title={operations.title}>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {(operations.items ?? []).map((item, index) => (
            <li
              key={item}
              className="glass-panel rounded-2xl p-5 text-center"
              data-reveal
            >
              <span className="text-xs text-[var(--muted)]">
                {operations.stage} {index + 1}
              </span>
              <p className="mt-2 font-semibold">{item}</p>
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
