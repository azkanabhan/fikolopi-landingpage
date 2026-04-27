export default function Button({
  as = "button",
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300";
  const variants = {
    primary:
      "bg-[var(--coffee)] text-[var(--foreground)] hover:bg-[var(--coffee-soft)] hover:-translate-y-0.5 hover:shadow-lg",
    ghost:
      "border border-[var(--border-soft)] text-[var(--foreground)] hover:border-[var(--coffee-soft)] hover:bg-white/5",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`.trim();

  if (as === "a" || href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
