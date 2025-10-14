import i18nEnJson from '@/lib/i18n/en.json'
import i18nCsJson from '@/lib/i18n/cs.json'

export const i18nLanguages = [
  'en',
  'cs'
] as const;

export const I18N_FALLBACK_LANG = i18nLanguages[0];

export type I18nSupportedLang = (typeof i18nLanguages)[number];

type I18nEnKey = keyof typeof i18nEnJson;
type I18nCsKey = keyof typeof i18nCsJson;

type I18nAnyKey = I18nEnKey | I18nCsKey;

function getString(key: I18nAnyKey, lang: I18nSupportedLang = I18N_FALLBACK_LANG): string {

  const languagesMap : Record<I18nSupportedLang, Record<any, any>> = {
    [I18N_FALLBACK_LANG]: i18nEnJson,
    'cs': i18nEnJson,
  }

  return languagesMap[lang][key] || i18nEnJson[key as I18nEnKey] as string || key + ' not found in defaults';
}

export const i18n = (lang: I18nSupportedLang = I18N_FALLBACK_LANG) => {
  return {
    getString: (key: I18nAnyKey) => getString(key, lang),
    getLang: () => lang,
  }
}
