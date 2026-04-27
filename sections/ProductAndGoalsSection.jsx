import Card from "@/components/Card";
import Section from "@/components/Section";

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

export default function ProductAndGoalsSection({ dictionary }) {
  const products = dictionary?.products ?? {};
  const goals = dictionary?.goals ?? {};

  return (
    <>
      <Section
        id="products"
        eyebrow={products.eyebrow}
        title={products.title}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <ProductBlock title={products.commercial} items={products.commercialItems} />
          <ProductBlock title={products.special} items={products.specialItems} />
        </div>
      </Section>
      <Section id="goals" eyebrow={goals.eyebrow} title={goals.title}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(goals.items ?? []).map((goal) => (
            <Card key={goal} title={goal} />
          ))}
        </div>
      </Section>
    </>
  );
}
