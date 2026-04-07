import type { Metadata } from "next";
import { locales, hreflangMap, type Locale } from "@/i18n";

export const BASE_URL = "https://cliparc.net";
export const APP_ID = "6758186311";

// Map locale to App Store country code
const appStoreCountryMap: Record<string, string> = {
  en: "us",
  "zh-Hans": "cn",
  "zh-Hant": "tw",
  ja: "jp",
  ko: "kr",
  es: "es",
  fr: "fr",
  de: "de",
  it: "it",
  "pt-BR": "br",
  ru: "ru",
  ar: "sa",
  hi: "in",
};

export function getAppStoreUrl(locale?: string): string {
  const country = locale ? appStoreCountryMap[locale] || "us" : "us";
  return `https://apps.apple.com/${country}/app/cliparc/id${APP_ID}?mt=12`;
}

export function getCanonicalUrl(path: string, locale?: string): string {
  if (!locale || locale === "en") {
    return `${BASE_URL}${path}`;
  }
  return `${BASE_URL}/${locale}${path}`;
}

export function getHreflangAlternates(path: string): Record<string, string> {
  const alternates: Record<string, string> = {
    "x-default": `${BASE_URL}${path}`,
  };
  for (const locale of locales) {
    const lang = hreflangMap[locale];
    if (locale === "en") {
      alternates[lang] = `${BASE_URL}${path}`;
    } else {
      alternates[lang] = `${BASE_URL}/${locale}${path}`;
    }
  }
  return alternates;
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale?: string;
}): Metadata {
  const canonical = getCanonicalUrl(path, locale);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getHreflangAlternates(path),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: "ClipArc",
      locale: locale || "en",
      alternateLocale: locales.filter((l) => l !== (locale || "en")),
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "ClipArc - Smart Clipboard Manager for macOS",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}
