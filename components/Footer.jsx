import { defaultLocale } from "@/lib/i18n";

export default function Footer({ locale = defaultLocale, dictionary }) {
  const links = dictionary?.nav?.links ?? [];
  const footer = dictionary?.footer ?? {};

  return (
    <footer id="contact" className="border-t border-[var(--border-soft)] py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:justify-between">
        <div>
          <h3 className="font-serif text-2xl">{footer.brand}</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            {footer.text}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
          {links.map((link) => (
            <a
              key={link.label}
              href={`/${locale}#${link.href}`}
              className="transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-sm text-[var(--muted)]">
          <p>{footer.social}</p>
          <p className="mt-2">{footer.email}</p>
        </div>
      </div>
    </footer>
  );
}
