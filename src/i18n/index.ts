import { Locale, locales, defaultLocale } from './config';

// Import all translations
import en from './translations/en.json';
import zhHans from './translations/zh-Hans.json';
import zhHant from './translations/zh-Hant.json';
import ja from './translations/ja.json';
import ko from './translations/ko.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import de from './translations/de.json';
import it from './translations/it.json';
import ptBR from './translations/pt-BR.json';
import ru from './translations/ru.json';
import ar from './translations/ar.json';
import hi from './translations/hi.json';

const translations: Record<Locale, typeof en> = {
  'en': en,
  'zh-Hans': zhHans,
  'zh-Hant': zhHant,
  'ja': ja,
  'ko': ko,
  'es': es,
  'fr': fr,
  'de': de,
  'it': it,
  'pt-BR': ptBR,
  'ru': ru,
  'ar': ar,
  'hi': hi,
};

export function getTranslation(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export { locales, defaultLocale, type Locale } from './config';
export { localeNames, hreflangMap } from './config';
