import {getTranslations, type I18nLocale} from "@/lib/i18n";
import type {SearchParams} from "next/dist/server/request/search-params";

type Props = {
  params: Promise<{ lang: I18nLocale }>;
  searchParams: Promise<SearchParams>
}

export default async function Page({params}: Props) {
  const {lang} = await params;
  const {t} = getTranslations(lang);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold text-center sm:text-left">
          {t('homepage.welcome')}
        </h1>
        <p>
          {t('homepage.fallback')}
        </p>
      </main>
    </div>
  );
}
