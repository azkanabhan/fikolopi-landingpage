export default function Card({ title, description, className = "", children }) {
  return (
    <article
      className={`glass-panel rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 ${className}`}
      data-reveal
    >
      {title ? (
        <h3 className="font-serif text-xl text-[var(--foreground)]">{title}</h3>
      ) : null}
      {description ? (
        <p className="mt-3 leading-relaxed text-[var(--muted)]">{description}</p>
      ) : null}
      {children}
    </article>
  );
}
