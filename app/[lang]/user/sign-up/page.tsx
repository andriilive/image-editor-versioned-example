import type {LangParams} from "@/app/[lang]/layout";
import SignUpForm from "@/components/SignUpForm";
import SignUpFormClient from "@/components/SignUpFormClient";
import {getTranslations} from "@/lib/i18n";
import {generateRandomUser} from "@/lib/utils";

export default async function SignUpPage({params}: LangParams) {
  const {lang} = await params;
  const {t, getHref} = getTranslations(lang);

  return (
    <main className="max-w-md mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">{t('user.signUp')}</h1>
      <SignUpForm lang={lang} />
    </main>
  );
}
