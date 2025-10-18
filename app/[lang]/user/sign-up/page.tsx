import type {LangParams} from "@/app/[lang]/layout";
import SignUpForm from "@/components/SignUpForm";
import {getTranslations} from "@/lib/i18n";

export default async function SignUpPage({params}: LangParams) {
  const {lang} = await params;
  const {t, getHref} = getTranslations(lang);

  return (
    <main className="max-w-md mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Sign Up</h1>
      <SignUpForm redirectUrl={getHref('/user/dashboard')}>
        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={8}
          className="w-full rounded-md bg-neutral-900 border border-neutral-700 px-3 py-2"
        />
        <button
          type="submit"
          className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
        >
          {t('user.signUp')}
        </button>
      </SignUpForm>
    </main>
  );
}
