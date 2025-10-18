import {getTranslations, type I18nAnyKey, type I18nLocale} from "@/lib/i18n";
import Link from "next/link";

const navItems: {
  href: string;
  labelKey: I18nAnyKey;
}[] = [
  {
    href: '/',
    labelKey: 'homepage.title'
  },
  {
    href: '/user',
    labelKey: 'user.title'
  },
]

export default function Nav({lang}: { lang: I18nLocale }) {
  const {t, getHref} = getTranslations(lang);
  return (
    <nav className="space-x-2 p-1">
      {navItems.map(({href, labelKey}) => (
        <Link href={getHref(href)} key={href} className="underline">
          {t(labelKey)}
        </Link>
      ))}
    </nav>
  )

}
