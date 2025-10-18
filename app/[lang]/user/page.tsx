import type {PageProps} from "@/app/[lang]/page";
import {getTranslations, type I18nAnyKey} from "@/lib/i18n";
import Link from "next/link";

const userActions : {
  href: string;
  labelKey: I18nAnyKey;
}[] = [
  {
    href: '/user/sign-in',
    labelKey: 'user.signIn'
  },
  {
    href: '/user/sign-up',
    labelKey: 'user.signUp'
  },
]

export default async function Page({params}: PageProps) {
  const {lang} = await params;
  const {t, getHref} = getTranslations(lang);

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
        {t('user.title')}
      </h1>
      <div>
        {userActions.map(({href, labelKey}) => (
          <Link href={getHref(href)} key={href} className="block underline my-2">
            {t(labelKey)}
          </Link>
        ))}
      </div>
    </>
  );
}
