import Section from "@/components/Section";

function highlightText(text, highlights = []) {
  if (!highlights.length) return text;

  const escaped = highlights.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  return text.split(regex).map((chunk, index) => {
    const isHighlight = highlights.some(
      (word) => word.toLowerCase() === chunk.toLowerCase()
    );
    return isHighlight ? (
      <span key={`${chunk}-${index}`} className="text-[var(--foreground)]">
        {chunk}
      </span>
    ) : (
      chunk
    );
  });
}

export default function AboutSection({ dictionary }) {
  const about = dictionary?.about ?? {};

  return (
    <Section
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      className="section-glow"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div data-reveal>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            {highlightText(about.p1, about.highlights)}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            {highlightText(about.p2, about.highlights)}
          </p>
        </div>
        <div className="glass-panel relative overflow-hidden rounded-3xl p-7" data-reveal>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/40 to-transparent" />
          <div className="relative z-10 mt-40">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {about.originLabel}
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug">
              {about.originText}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
