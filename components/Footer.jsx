const footerLinks = ["Home", "About", "Products", "Process", "Market", "Contact"];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--border-soft)] py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:justify-between">
        <div>
          <h3 className="font-serif text-2xl">Filokopi Coffee</h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Integrated coffee ecosystem from Central Java, crafted for modern premium markets.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--muted)]">
          {footerLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors hover:text-[var(--foreground)]"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-sm text-[var(--muted)]">
          <p>Instagram • LinkedIn • TikTok</p>
          <p className="mt-2">hello@filokopi.coffee</p>
        </div>
      </div>
    </footer>
  );
}
