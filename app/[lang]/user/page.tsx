import type {LangParams} from "@/app/[lang]/layout";
import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";
import {getTranslations, type I18nAnyKey} from "@/lib/i18n";
import Link from "next/link";

export type UserPageProps = LangParams & {
  searchParams: Promise<{
    q?: string;
  }>
}

const queryActions = [
  'signUp',
  'signIn'
];

export default async function Page({params, searchParams}: UserPageProps) {
  const {lang} = await params;
  const {t, getHref} = getTranslations(lang);

  const {q} = await searchParams;

  const isSignUp = q === 'signUp';
  const isSignIn = q === 'signIn';

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
        {t('user.title')}
      </h1>
      <aside className="text-xs flex space-x-2">
        {queryActions.map((actionLabel) => (
          <Link href={getHref(`/user?q=${actionLabel}`)} key={actionLabel} className="block underline my-2">
            {t(`user.${actionLabel}` as I18nAnyKey)}
          </Link>
        ))}
      </aside>
      {isSignIn && <SignInForm lang={lang}/>}
      {isSignUp && <SignUpForm lang={lang}/>}
    </>
  );
}
