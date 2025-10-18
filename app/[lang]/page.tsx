import type {LangParams} from "@/app/[lang]/layout";
import {defaultLocale, getTranslations, locales} from "@/lib/i18n";
import type {Metadata, ResolvingMetadata} from "next";
import type {SearchParams} from "next/dist/server/request/search-params";

type PageProps = LangParams & {
  searchParams: Promise<SearchParams>
}

export async function generateMetadata({params}: LangParams, _parent: ResolvingMetadata): Promise<Metadata> {
  const {lang: _lang} = await params;
  const {title, description} = await _parent;

  return {
    title,
    description,
    alternates: {
      languages: locales.reduce((acc, locale) => {
        acc[locale] = locale === defaultLocale ? '/' : `/${locale}`;
        return acc;
      }, {} as Record<string, string>),
    }
  };
}

export default async function Page({params}: PageProps) {
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
