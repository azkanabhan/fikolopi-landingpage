import Card from "@/components/Card";
import Section from "@/components/Section";

const commercialPremium = ["Robusta", "Excelsa", "Arabica", "House Blend"];
const specialPremium = [
  "Luwak",
  "Kopi Lanang",
  "Robusta Wine",
  "Excelsa Wine",
  "Arabica Wine",
];

const goals = [
  "End-to-end integration",
  "Quality standardization",
  "Farmer empowerment",
  "Market expansion & education",
];

function ProductBlock({ title, items }) {
  return (
    <Card title={title}>
      <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-[var(--muted)]">
        {items.map((item) => (
          <li key={item} className="rounded-lg border border-[var(--border-soft)] px-3 py-2">
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function ProductAndGoalsSection() {
  return (
    <>
      <Section
        id="products"
        eyebrow="Product Classification"
        title="Portofolio kopi premium untuk segmen komersial dan spesialti."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ProductBlock title="Commercial Premium" items={commercialPremium} />
          <ProductBlock title="Special Premium" items={specialPremium} />
        </div>
      </Section>
      <Section id="goals" eyebrow="Project Goals" title="Arah strategis Filokopi Coffee">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal) => (
            <Card key={goal} title={goal} />
          ))}
        </div>
      </Section>
    </>
  );
}
