import {type I18nLocale, locales} from "@/lib/i18n";
import Link from "next/link";

type Props = { currentLang: I18nLocale }

export default function I18nLanguageSwitch({currentLang}: Props) {
  return (
    <nav className="border-b p-1 space-x-2 text-xs" aria-label="Language Switch">
      {locales.map(lang => {

        const isCurrent = lang === currentLang;
        const href = lang === 'en' ? '/' : `/${lang}`;

        return (
          <Link
            key={'lang-switch-' + lang}
            href={href}
            className={`underline` + (isCurrent ? ' font-bold' : '')}
            aria-current={isCurrent ? 'page' : undefined}
          >
            {lang}
          </Link>
        )
      })}
    </nav>
  )
}
