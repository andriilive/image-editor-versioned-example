'use client';

import {i18nLanguages} from "@/app/(i18n)";
import {useI18n} from "@/app/(i18n)/I18nContext";

export default function I18nLanguageSwitch() {
  const {language} = useI18n();

  console.log(language);

  return (
    <nav className="language-switch" aria-label="Language Switch">
      {i18nLanguages.map(lang => {

        const isCurrent = lang === language;

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
