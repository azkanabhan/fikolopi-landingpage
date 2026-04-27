import Section from "@/components/Section";

export default function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="Company Profile"
      title="Membangun ekosistem kopi bernilai tinggi dari hulu ke hilir."
      className="section-glow"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div data-reveal>
          <p className="text-lg leading-relaxed text-[var(--muted)]">
            Filokopi adalah entitas kopi terintegrasi yang beroperasi dari{" "}
            <span className="text-[var(--foreground)]">hulu ke hilir</span>. Kami
            lahir dari tanah{" "}
            <span className="text-[var(--foreground)]">Jawa Tengah</span> yang
            subur, membawa misi untuk memperkenalkan keunggulan Robusta dan
            Arabika khas pegunungan Jawa Tengah ke level yang lebih tinggi.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
            Kami tidak hanya menjual kopi; kami mengelola seluruh ekosistemnya.
            Mulai dari pembinaan petani di perkebunan, proses pasca-panen yang
            terkontrol, hingga teknik penyangraian modern yang menghasilkan
            produk akhir dalam kemasan{" "}
            <span className="text-[var(--foreground)]">premium</span>.
          </p>
        </div>
        <div className="glass-panel relative overflow-hidden rounded-3xl p-7" data-reveal>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/40 to-transparent" />
          <div className="relative z-10 mt-40">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              Story of Origin
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug">
              Dari lereng pegunungan Jawa Tengah menuju cangkir kopi modern dunia.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
