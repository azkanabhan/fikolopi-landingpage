import Card from "@/components/Card";
import Section from "@/components/Section";

const operations = [
  "Upstream (farm)",
  "Post-harvest",
  "Roasting",
  "Packaging",
  "Customer & analytics",
];

const channels = ["Social media", "B2B & reseller", "Events", "Marketplace"];
const targetMarket = ["Coffee lovers", "Coffee shops", "Event participants"];

export default function OperationsAndMarketSection() {
  return (
    <>
      <Section id="process" eyebrow="Operational System" title="Integrated Operation Timeline">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {operations.map((item, index) => (
            <li
              key={item}
              className="glass-panel rounded-2xl p-5 text-center"
              data-reveal
            >
              <span className="text-xs text-[var(--muted)]">Stage {index + 1}</span>
              <p className="mt-2 font-semibold">{item}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="market" eyebrow="Marketing & Distribution" title="Go-To-Market Strategy">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Channels">
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              {channels.map((channel) => (
                <li key={channel}>- {channel}</li>
              ))}
            </ul>
          </Card>
          <Card title="Target Market">
            <ul className="mt-4 space-y-3 text-[var(--muted)]">
              {targetMarket.map((market) => (
                <li key={market}>- {market}</li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>
    </>
  );
}
