import Button from "@/components/Button";
import Section from "@/components/Section";

export default function CTASection() {
  return (
    <Section id="cta" className="pt-8">
      <div className="glass-panel rounded-3xl px-6 py-12 text-center sm:px-10">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]" data-reveal>
          Partnership Opportunity
        </p>
        <h2 className="mt-4 font-serif text-4xl" data-reveal>
          Join the Coffee Movement
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted)]" data-reveal>
          Mari membangun nilai kopi Indonesia bersama Filokopi melalui kolaborasi
          bisnis, distribusi, dan edukasi pasar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4" data-reveal>
          <Button as="a" href="#contact">
            Become Partner
          </Button>
          <Button as="a" href="#contact" variant="ghost">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
