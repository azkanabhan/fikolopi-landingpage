"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";
import Section from "@/components/Section";

const productImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517701550927-30cf4ba1f9d0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
];
const INITIAL_COMMERCIAL_COUNT = 4;
const INITIAL_SPECIAL_COUNT = 3;

function getDummyDescription(name) {
  return `${name} blend with balanced body, warm aroma, and a premium finish crafted for everyday excellence.`;
}

function ProductCard({ category, type, name, image }) {
  const isSpecial = type === "special";
  const tone = isSpecial
    ? {
        border: "border-amber-200/25",
        badge:
          "border-amber-200/40 bg-amber-300/15 text-amber-100",
        glow: "from-amber-200/25 via-transparent to-transparent",
      }
    : {
        border: "border-[var(--border-soft)]",
        badge:
          "border-[var(--border-soft)] bg-black/35 text-[var(--foreground)]",
        glow: "from-[rgba(185,137,97,0.25)] via-transparent to-transparent",
      };

  return (
    <Card className={`h-full overflow-hidden p-0 ${tone.border}`}>
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={`${name} coffee`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${tone.glow}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/40 to-transparent" />
        <p
          className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs uppercase tracking-[0.16em] ${tone.badge}`}
        >
          {category}
        </p>
      </div>
      <div className="flex h-[calc(100%-11rem)] flex-col p-5">
        <h3 className="font-serif text-xl text-[var(--foreground)]">{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {getDummyDescription(name)}
        </p>
      </div>
    </Card>
  );
}

const goalDetailsId = [
  {
    title: "INTEGRASI HULU KE HILIR",
    summary: "Integrasi Hulu ke Hilir yang Transparan",
    description:
      "Membangun ekosistem rantai pasok yang terintegrasi secara penuh, memastikan setiap biji kopi dapat ditelusuri (traceability) mulai dari lahan petani di Jawa Tengah hingga ke tangan konsumen dalam kemasan premium.",
  },
  {
    title: "STANDARISASI KUALITAS PREMIUM",
    summary: "Kontrol kualitas ketat dari pasca-panen hingga roasting",
    description:
      "Menetapkan standar kontrol kualitas yang ketat pada proses pasca-panen dan penyangraian (roasting) untuk menghasilkan profil rasa Arabika dan Robusta Jawa Tengah yang konsisten, guna bersaing di pasar kopi spesialti (specialty coffee).",
  },
  {
    title: "PEMBERDAYAAN EKONOMI PETANI LOKAL",
    summary: "Nilai ekonomi berkelanjutan untuk komunitas petani",
    description:
      "Meningkatkan taraf hidup komunitas petani kopi di Jawa Tengah melalui sistem perdagangan adil (fair trade), pendampingan teknik tani berkelanjutan, serta pemberian nilai tambah pada hasil panen mereka melalui brand Filokopi.",
  },
  {
    title: "EKSPANSI PASAR & EDUKASI FILOKOPI",
    summary: "Memperluas pasar sambil membangun literasi kopi",
    description:
      "Memperluas jangkauan pasar ke segmen gaya hidup modern dan korporasi melalui kemasan yang eksklusif, sembari mengedukasi konsumen mengenai nilai filosofis di balik setiap cangkir kopi yang mereka nikmati.",
  },
];

const goalDetailsEn = [
  {
    title: "UPSTREAM-TO-DOWNSTREAM INTEGRATION",
    summary: "Transparent end-to-end supply integration",
    description:
      "Building a fully integrated supply-chain ecosystem to ensure bean traceability from Central Java farms to consumers through premium packaging.",
  },
  {
    title: "PREMIUM QUALITY STANDARDIZATION",
    summary: "Strict quality control from post-harvest to roasting",
    description:
      "Applying rigorous quality control standards in post-harvest and roasting to deliver consistent Arabica and Robusta profiles from Central Java for specialty coffee markets.",
  },
  {
    title: "LOCAL FARMER ECONOMIC EMPOWERMENT",
    summary: "Sustainable economic value for farming communities",
    description:
      "Improving farmer livelihoods through fair trade systems, sustainable cultivation mentoring, and greater value capture through the Filokopi brand.",
  },
  {
    title: "MARKET EXPANSION & FILOKOPI EDUCATION",
    summary: "Scale market reach while educating consumers",
    description:
      "Expanding into modern lifestyle and corporate segments through exclusive packaging while educating customers on the philosophy behind every cup.",
  },
];

function GoalSynergyCard({ goal, index, total }) {
  const isLast = index === total - 1;

  return (
    <article
      className="group relative"
      data-reveal
    >
      {!isLast && (
        <div className="pointer-events-none absolute left-[calc(100%-1rem)] top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[var(--coffee-soft)]/70 to-transparent lg:block" />
      )}
      <div className="glass-panel relative h-full rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-1">
        <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-soft)] text-xs font-semibold text-[var(--foreground)]">
          {index + 1}
        </span>
        <h3 className="font-serif text-lg leading-snug text-[var(--foreground)]">{goal.title}</h3>
        <p className="mt-3 text-sm text-[var(--muted)]">{goal.summary}</p>
      </div>
      <div className="pointer-events-none absolute left-3 right-3 top-3 z-20 rounded-2xl border border-white/20 bg-[#17110d]/95 p-5 opacity-0 shadow-2xl transition-all duration-300 group-hover:pointer-events-auto group-hover:-translate-y-[104%] group-hover:opacity-100">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--coffee-soft)]">
          Project Insight
        </p>
        <h4 className="mt-2 font-serif text-base text-[var(--foreground)]">{goal.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{goal.description}</p>
      </div>
    </article>
  );
}

export default function ProductAndGoalsSection({ dictionary, locale = "id" }) {
  const [showAllCommercial, setShowAllCommercial] = useState(false);
  const [showAllSpecial, setShowAllSpecial] = useState(false);
  const products = dictionary?.products ?? {};
  const goals = dictionary?.goals ?? {};
  const commercialProducts = (products.commercialItems ?? []).map((name) => ({
    category: products.commercial,
    type: "commercial",
    name,
  }));
  const specialProducts = (products.specialItems ?? []).map((name) => ({
    category: products.special,
    type: "special",
    name,
  }));
  const visibleCommercial = showAllCommercial
    ? commercialProducts
    : commercialProducts.slice(0, INITIAL_COMMERCIAL_COUNT);
  const visibleSpecial = showAllSpecial
    ? specialProducts
    : specialProducts.slice(0, INITIAL_SPECIAL_COUNT);
  const commercialHasToggle = commercialProducts.length > INITIAL_COMMERCIAL_COUNT;
  const specialHasToggle = specialProducts.length > INITIAL_SPECIAL_COUNT;
  const commercialButtonLabel = showAllCommercial
    ? locale === "id"
      ? "Tampilkan lebih sedikit"
      : "Show less"
    : locale === "id"
      ? "Tampilkan lebih banyak"
      : "Show more";
  const specialButtonLabel = showAllSpecial
    ? locale === "id"
      ? "Tampilkan lebih sedikit"
      : "Show less"
    : locale === "id"
      ? "Tampilkan lebih banyak"
      : "Show more";

  return (
    <>
      <Section
        id="products"
        eyebrow={products.eyebrow}
        title={products.title}
      >
        <div className="space-y-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              {products.commercial}
            </p>
            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visibleCommercial.map((product, index) => (
                <ProductCard
                  key={`${product.category}-${product.name}`}
                  category={product.category}
                  type={product.type}
                  name={product.name}
                  image={productImages[index % productImages.length]}
                />
              ))}
            </div>
            {commercialHasToggle && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllCommercial((current) => !current)}
                  className="rounded-full border border-[var(--border-soft)] px-6 py-3 text-sm font-semibold tracking-wide text-[var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--coffee-soft)] hover:bg-white/5"
                >
                  {commercialButtonLabel}
                </button>
              </div>
            )}
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-amber-200/80">
              {products.special}
            </p>
            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleSpecial.map((product, index) => (
                <ProductCard
                  key={`${product.category}-${product.name}`}
                  category={product.category}
                  type={product.type}
                  name={product.name}
                  image={
                    productImages[(index + commercialProducts.length) % productImages.length]
                  }
                />
              ))}
            </div>
            {specialHasToggle && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowAllSpecial((current) => !current)}
                  className="rounded-full border border-amber-200/30 px-6 py-3 text-sm font-semibold tracking-wide text-amber-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-200/60 hover:bg-amber-200/10"
                >
                  {specialButtonLabel}
                </button>
              </div>
            )}
          </div>
        </div>
      </Section>
      <Section id="goals" eyebrow={goals.eyebrow} title={goals.title}>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[var(--coffee-soft)]/35 to-transparent lg:block" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(locale === "id" ? goalDetailsId : goalDetailsEn).map((goal, index, list) => (
              <GoalSynergyCard key={goal.title} goal={goal} index={index} total={list.length} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
