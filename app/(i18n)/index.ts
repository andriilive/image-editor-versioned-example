import i18nEnJson from '@/app/(i18n)/i18nJson/en.json'
import i18nCsJson from '@/app/(i18n)/i18nJson/cs.json'

export const i18nLanguages = [
  'en',
  'cs',
] as const;

export const I18N_FALLBACK_LANG = i18nLanguages[0];

export type I18nSupportedLang = (typeof i18nLanguages)[number];

type I18nEnKey = keyof typeof i18nEnJson;
type I18nCsKey = keyof typeof i18nCsJson;

type I18nAnyKey = I18nEnKey | I18nCsKey;

function getString(key: I18nAnyKey, lang: I18nSupportedLang = I18N_FALLBACK_LANG): string {

  const languagesMap : Record<I18nSupportedLang, Record<any, any>> = {
    'en': i18nEnJson,
    'cs': i18nCsJson,
  }

  return languagesMap[lang][key] || languagesMap.en[key] || key + ' not found in defaults';
}

export const i18n = (lang: I18nSupportedLang = I18N_FALLBACK_LANG) => {
  return {
    t: (key: I18nAnyKey) => getString(key, lang),
    getLang: () => lang,
  }
}
