import Button from "@/components/Button";
import Section from "@/components/Section";

export default function CTASection({ locale, dictionary }) {
  const cta = dictionary?.cta ?? {};

  return (
    <Section id="cta" className="pt-8">
      <div className="glass-panel rounded-3xl px-6 py-12 text-center sm:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]" data-reveal>
          {cta.eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-4xl" data-reveal>
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]" data-reveal>
          {cta.text}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4" data-reveal>
          <Button as="a" href={`/${locale}#contact`}>
            {cta.primary}
          </Button>
          <Button as="a" href={`/${locale}#contact`} variant="ghost">
            {cta.secondary}
          </Button>
        </div>
      </div>
    </Section>
  );
}
