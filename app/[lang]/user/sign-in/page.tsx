import type {LangParams} from "@/app/[lang]/layout";
import SignInForm from "@/components/SignInForm";
import {getTranslations} from "@/lib/i18n";
import {testUser} from "@/lib/utils";

export default async function SignInPage({params}:LangParams) {
  const {lang} = await params;
  const {t, getHref} = getTranslations(lang);

  return (
    <>
      <h1 className="text-2xl font-bold">{t('user.signIn')}</h1>
      <SignInForm redirectUrl={getHref('/user/dashboard')}>
        <>
          <input
            name="email"
            type="email"
            placeholder={testUser.email}
            defaultValue={testUser.email}
            required
            className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
          />
          <input
            name="password"
            type="password"
            defaultValue={testUser.password}
            placeholder={testUser.password}
            required
            className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
          >
            {t('user.signIn')}
          </button>
        </>
      </SignInForm>
    </>
  );
}
