import Button from "@/components/Button";

export default function HeroSection({ locale, dictionary }) {
  const hero = dictionary?.hero ?? {};

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(185,137,97,0.2),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(138,90,59,0.2),transparent_32%),linear-gradient(180deg,#16100d_0%,#0c0907_70%)]" />
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />
      <div className="mx-auto grid min-h-[78vh] w-full max-w-6xl place-items-center px-5 py-20 text-center sm:px-8">
        <div data-reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button as="a" href={`/${locale}#products`}>
              {hero.ctaPrimary}
            </Button>
            <Button as="a" href={`/${locale}#contact`} variant="ghost">
              {hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
