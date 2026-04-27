export const locales = ["en", "id"];
export const defaultLocale = "en";

export function isValidLocale(locale) {
  return locales.includes(locale);
}

export function getDictionary(locale = defaultLocale) {
  const selected = isValidLocale(locale) ? locale : defaultLocale;
  return dictionaries[selected];
}

const dictionaries = {
  en: {
    seo: {
      title: "Filokopi Coffee | Premium Coffee Ecosystem",
      description:
        "Integrated premium coffee ecosystem from Central Java, from farm development to modern roasting and distribution.",
    },
    nav: {
      brand: "Filokopi",
      links: [
        { label: "Home", href: "home" },
        { label: "About", href: "about" },
        { label: "Products", href: "products" },
        { label: "Process", href: "process" },
        { label: "Market", href: "market" },
        { label: "Contact", href: "contact" },
      ],
    },
    hero: {
      eyebrow: "Premium Coffee from Central Java",
      title: "From Farm to Cup, Premium Coffee Redefined",
      subtitle: "Integrated coffee ecosystem from Central Java.",
      ctaPrimary: "Explore Products",
      ctaSecondary: "Partner With Us",
    },
    about: {
      eyebrow: "Company Profile",
      title: "Building a high-value coffee ecosystem from upstream to downstream.",
      p1: "Filokopi is an integrated coffee entity operating from upstream to downstream. We are rooted in the fertile land of Central Java, with a mission to elevate the excellence of Robusta and Arabica from the mountain regions of Central Java.",
      p2: "We do not just sell coffee; we manage the entire ecosystem. From farmer development in plantations, controlled post-harvest processing, to modern roasting techniques that produce premium packaged products.",
      originLabel: "Story of Origin",
      originText:
        "From the mountain slopes of Central Java to the cups of the modern world.",
      highlights: ["upstream to downstream", "Central Java", "premium"],
    },
    visionMission: {
      eyebrow: "Credibility",
      title: "Vision & Mission",
      visionTitle: "Vision",
      visionText:
        "To become the main bridge connecting the purity of Central Java farmers' produce with modern lifestyle through world-class coffee quality.",
      missionPrefix: "Mission",
      missions: [
        "Implementing Direct Trade standards to improve farmer welfare",
        "Ensuring flavor consistency through quality control at every production stage",
        "Delivering an educational and inclusive premium coffee experience",
        "Becoming an educational space to build a complete coffee business ecosystem from upstream to downstream",
      ],
    },
    products: {
      eyebrow: "Product Classification",
      title: "Premium coffee portfolio for commercial and specialty segments.",
      commercial: "Commercial Premium",
      special: "Special Premium",
      commercialItems: ["Robusta", "Excelsa", "Arabica", "House Blend"],
      specialItems: ["Luwak", "Kopi Lanang", "Robusta Wine", "Excelsa Wine", "Arabica Wine"],
    },
    goals: {
      eyebrow: "Project Goals",
      title: "Filokopi Coffee strategic direction",
      items: [
        "End-to-end integration",
        "Quality standardization",
        "Farmer empowerment",
        "Market expansion & education",
      ],
    },
    operations: {
      eyebrow: "Operational System",
      title: "Integrated Operation Timeline",
      stage: "Stage",
      items: ["Upstream (farm)", "Post-harvest", "Roasting", "Packaging", "Customer & analytics"],
    },
    market: {
      eyebrow: "Marketing & Distribution",
      title: "Go-To-Market Strategy",
      channelsTitle: "Channels",
      channels: ["Social media", "B2B & reseller", "Events", "Marketplace"],
      targetTitle: "Target Market",
      target: ["Coffee lovers", "Coffee shops", "Event participants"],
    },
    cta: {
      eyebrow: "Partnership Opportunity",
      title: "Join the Coffee Movement",
      text: "Let's build Indonesian coffee value together through business collaboration, distribution, and market education.",
      primary: "Become Partner",
      secondary: "Contact Us",
    },
    footer: {
      brand: "Filokopi Coffee",
      text: "Integrated coffee ecosystem from Central Java, crafted for modern premium markets.",
      social: "Instagram • LinkedIn • TikTok",
      email: "hello@filokopi.coffee",
    },
  },
  id: {
    seo: {
      title: "Filokopi Coffee | Ekosistem Kopi Premium",
      description:
        "Ekosistem kopi premium terintegrasi dari Jawa Tengah, dari pembinaan kebun hingga roasting modern dan distribusi.",
    },
    nav: {
      brand: "Filokopi",
      links: [
        { label: "Beranda", href: "home" },
        { label: "Tentang", href: "about" },
        { label: "Produk", href: "products" },
        { label: "Proses", href: "process" },
        { label: "Pasar", href: "market" },
        { label: "Kontak", href: "contact" },
      ],
    },
    hero: {
      eyebrow: "Kopi Premium dari Jawa Tengah",
      title: "From Farm to Cup, Premium Coffee Redefined",
      subtitle: "Integrated coffee ecosystem from Central Java",
      ctaPrimary: "Jelajahi Produk",
      ctaSecondary: "Jadi Mitra",
    },
    about: {
      eyebrow: "Profil Perusahaan",
      title: "Membangun ekosistem kopi bernilai tinggi dari hulu ke hilir.",
      p1: "Filokopi adalah entitas kopi terintegrasi yang beroperasi dari hulu ke hilir. Kami lahir dari tanah Jawa Tengah yang subur, membawa misi untuk memperkenalkan keunggulan Robusta dan Arabika khas pegunungan Jawa Tengah ke level yang lebih tinggi.",
      p2: "Kami tidak hanya menjual kopi; kami mengelola seluruh ekosistemnya. Mulai dari pembinaan petani di perkebunan, proses pasca-panen yang terkontrol, hingga teknik penyangraian modern yang menghasilkan produk akhir dalam kemasan premium.",
      originLabel: "Cerita Asal",
      originText: "Dari lereng pegunungan Jawa Tengah menuju cangkir kopi modern dunia.",
      highlights: ["hulu ke hilir", "Jawa Tengah", "premium"],
    },
    visionMission: {
      eyebrow: "Kredibilitas",
      title: "Visi & Misi",
      visionTitle: "Visi",
      visionText:
        "Menjadi jembatan utama yang menghubungkan kemurnian hasil bumi petani Jawa Tengah dengan gaya hidup masyarakat modern melalui kualitas kopi kelas dunia.",
      missionPrefix: "Misi",
      missions: [
        "Menerapkan standar Direct Trade untuk kesejahteraan petani",
        "Menjamin konsistensi rasa melalui kontrol kualitas di setiap tahap produksi",
        "Menghadirkan pengalaman kopi premium yang edukatif dan inklusif",
        "Menjadi ruang edukasi untuk membangun ekosistem bisnis kopi dari hulu sampai hilir",
      ],
    },
    products: {
      eyebrow: "Klasifikasi Produk",
      title: "Portofolio kopi premium untuk segmen komersial dan spesialti.",
      commercial: "Commercial Premium",
      special: "Special Premium",
      commercialItems: ["Robusta", "Excelsa", "Arabica", "House Blend"],
      specialItems: ["Luwak", "Kopi Lanang", "Robusta Wine", "Excelsa Wine", "Arabica Wine"],
    },
    goals: {
      eyebrow: "Tujuan Proyek",
      title: "Arah strategis Filokopi Coffee",
      items: [
        "Integrasi hulu ke hilir",
        "Standardisasi kualitas",
        "Pemberdayaan petani",
        "Ekspansi pasar & edukasi",
      ],
    },
    operations: {
      eyebrow: "Sistem Operasional",
      title: "Timeline Operasi Terintegrasi",
      stage: "Tahap",
      items: ["Hulu (kebun)", "Pasca-panen", "Roasting", "Pengemasan", "Pelanggan & analitik"],
    },
    market: {
      eyebrow: "Marketing & Distribusi",
      title: "Strategi Go-To-Market",
      channelsTitle: "Kanal",
      channels: ["Media sosial", "B2B & reseller", "Event", "Marketplace"],
      targetTitle: "Target Market",
      target: ["Pecinta kopi", "Coffee shop", "Peserta event"],
    },
    cta: {
      eyebrow: "Peluang Kemitraan",
      title: "Join the Coffee Movement",
      text: "Mari membangun nilai kopi Indonesia bersama Filokopi melalui kolaborasi bisnis, distribusi, dan edukasi pasar.",
      primary: "Jadi Mitra",
      secondary: "Hubungi Kami",
    },
    footer: {
      brand: "Filokopi Coffee",
      text: "Ekosistem kopi terintegrasi dari Jawa Tengah untuk pasar premium modern.",
      social: "Instagram • LinkedIn • TikTok",
      email: "hello@filokopi.coffee",
    },
  },
};
