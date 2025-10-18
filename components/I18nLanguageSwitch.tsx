import {type I18nLocale, locales} from "@/lib/i18n";

export default function I18nLanguageSwitch({
  currentLang,
}: {
  currentLang: I18nLocale
}) {
  return (
    <nav className="language-switch" aria-label="Language Switch">
      {locales.map(lang => {

        const isCurrent = lang === currentLang;

        return (
          <a key={'lang' + lang}
             href={`/${lang}`}
             className={['underline', isCurrent ? 'font-bold' : ''].join(' ')}
             aria-current={isCurrent ? 'page' : undefined}
          >
            {lang}
          </a>
        )
      }      )}
    </nav>
  )
}
