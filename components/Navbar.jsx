"use client";

import { useEffect, useState } from "react";
import { defaultLocale, locales } from "@/lib/i18n";

export default function Navbar({ locale = defaultLocale, dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const activeLocale = locales.includes(locale) ? locale : defaultLocale;
  const altLocale = activeLocale === "en" ? "id" : "en";
  const languageLabel = activeLocale === "en" ? "ID" : "EN";
  const links = dictionary?.nav?.links ?? [];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--border-soft)] bg-[#0c0907]/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href={`/${activeLocale}#home`}
          className="font-serif text-2xl tracking-wide text-[var(--foreground)]"
        >
          {dictionary?.nav?.brand ?? "Filokopi"}
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={`/${activeLocale}#${link.href}`}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`/${altLocale}`}
              hrefLang={altLocale}
              className="rounded-full border border-[var(--border-soft)] px-3 py-1 text-xs font-semibold tracking-wider text-[var(--foreground)] transition-colors hover:border-[var(--coffee-soft)]"
              aria-label={`Switch language to ${altLocale}`}
            >
              {languageLabel}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
