"use client";

import {signOut, useSession} from "@/lib/auth-client";
import {getTranslations, type I18nLocale} from "@/lib/i18n";
import {useParams, useRouter} from "next/navigation";
import {useEffect} from "react";

export default function DashboardPage() {
  const router = useRouter();
  const {lang} = useParams();
  const {data: session, isPending} = useSession();
  const {t, getHref} = getTranslations(lang as I18nLocale);

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(getHref('/user/sign-in'));
    }
  }, [
    isPending,
    session,
    router
  ]);

  if (isPending)
    return <p className="text-center mt-8 text-white">Loading...</p>;
  if (!session?.user)
    return <p className="text-center mt-8 text-white">Redirecting...</p>;

  //add-start: destructure user from session
  const {user} = session;

  return (
    <>
      <h1 className="text-2xl font-bold">{t('user.dashboard')}</h1>

      <div className="bg-gray-50">
        {Object.entries(user).map(([key, value]) => (
          <div key={key} className="flex justify-between p-4 border-b">
            <span className="font-medium text-gray-700">{key}</span>
            <span className="text-gray-900">{String(value)}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => signOut()}
        className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
      >
        {t('user.signOut')}
      </button>
    </>
  );
}
