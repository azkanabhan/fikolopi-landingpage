export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-3xl" data-reveal>
            {eyebrow ? (
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-serif text-3xl leading-tight text-[var(--foreground)] sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
