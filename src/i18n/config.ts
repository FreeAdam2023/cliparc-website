export const locales = [
  'en',
  'zh-Hans',
  'zh-Hant',
  'ja',
  'ko',
  'es',
  'fr',
  'de',
  'it',
  'pt-BR',
  'ru',
  'ar',
  'hi',
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  'en': 'English',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'it': 'Italiano',
  'pt-BR': 'Português',
  'ru': 'Русский',
  'ar': 'العربية',
  'hi': 'हिन्दी',
};

// For hreflang tags - map our locale codes to standard language codes
export const hreflangMap: Record<Locale, string> = {
  'en': 'en',
  'zh-Hans': 'zh-Hans',
  'zh-Hant': 'zh-Hant',
  'ja': 'ja',
  'ko': 'ko',
  'es': 'es',
  'fr': 'fr',
  'de': 'de',
  'it': 'it',
  'pt-BR': 'pt-BR',
  'ru': 'ru',
  'ar': 'ar',
  'hi': 'hi',
};
