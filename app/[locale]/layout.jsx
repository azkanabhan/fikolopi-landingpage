import { defaultLocale, getDictionary, isValidLocale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }) {
  const locale = isValidLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
  };
}

export default function LocaleLayout({ children, params }) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  return children;
}
