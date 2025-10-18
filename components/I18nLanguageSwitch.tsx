import {type I18nLocale, locales} from "@/lib/i18n";
import Link from "next/link";

type Props = { currentLang: I18nLocale }

export default function I18nLanguageSwitch({currentLang}: Props) {
  return (
    <nav className="language-switch" aria-label="Language Switch">
      {locales.map(lang => {

        const isCurrent = lang === currentLang;

        return (
          <Link key={'lang-switch-' + lang}
                href={`/${lang}`}
                className={[
                  'underline',
                  isCurrent ? 'font-bold' : ''
                ].join(' ')}
                aria-current={isCurrent ? 'page' : undefined}
          >
            {lang}
          </Link>
        )
      })}
    </nav>
  )
}
