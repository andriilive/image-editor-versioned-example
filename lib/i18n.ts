import i18nEnJson from '@/i18n/en.json'
import i18nCsJson from '@/i18n/cs.json'

type I18nEnKey = keyof typeof i18nEnJson;
type I18nCsKey = keyof typeof i18nCsJson;

const locales = [
  'en',
  'cs',
];

const defaultLocale = locales[0];

export type I18nLocale = (typeof locales)[number];

export type I18nAnyKey = I18nEnKey | I18nCsKey;

export const languagesMap: Record<I18nLocale, Record<string, string>> = {
  en: i18nEnJson,
  cs: i18nCsJson,
}

function getString(key: I18nAnyKey, lang: I18nLocale = defaultLocale): string {

  const dictionary = languagesMap[lang];
  if (key in dictionary) {
    return dictionary[key as keyof typeof dictionary];
  }
  const defaultDictionary = languagesMap[defaultLocale];
  return defaultDictionary[key as keyof typeof defaultDictionary] || String('key not found ' + key);
}


function getHref(href: string, lang: I18nLocale = defaultLocale): string {
  if (lang === defaultLocale) {
    return href;
  }
  return `/${lang}${href}`;
}

const getTranslations = (lang: I18nLocale = defaultLocale) => {
  return {
    t: (key: I18nAnyKey) => getString(key, lang),
    getHref: (href: string)=> getHref(href, lang),
  }
}

const transformUrlWithLocale = (url: string, lang: I18nLocale = defaultLocale): string => {
  if (lang === defaultLocale) {
    return url;
  }
  return `/${lang}${url}`;
}

export {locales, defaultLocale, getTranslations};
