import { BASE_URL, APP_ID, getAppStoreUrl } from "./metadata";

export function getSoftwareApplicationJsonLd(locale?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ClipArc",
    description:
      "Smart Clipboard Manager for macOS. Intelligent content detection, fuzzy search, and seamless paste across all your apps.",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS 14.0+",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free",
    },
    screenshot: `${BASE_URL}/screenshot.webp`,
    image: `${BASE_URL}/icon.png`,
    url: BASE_URL,
    installUrl: getAppStoreUrl(locale),
    author: {
      "@type": "Organization",
      name: "Versegates",
      url: "https://versegates.com",
    },
    aggregateRating: undefined,
    featureList: [
      "Clipboard history up to 500 items",
      "10+ content type detection",
      "Global hotkey (Cmd+Shift+V)",
      "Fuzzy search with smart ranking",
      "Three paste modes",
      "Screenshot auto-capture",
      "Privacy first - all data stored locally",
      "13 languages supported",
      "Native macOS design",
    ],
    inLanguage: [
      "en",
      "zh-Hans",
      "zh-Hant",
      "ja",
      "ko",
      "es",
      "fr",
      "de",
      "it",
      "pt-BR",
      "ru",
      "ar",
      "hi",
    ],
  };
}

export function getFaqJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
