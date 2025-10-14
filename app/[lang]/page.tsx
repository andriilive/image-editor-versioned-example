import {i18n, type I18nSupportedLang} from "@/app/(i18n)";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: I18nSupportedLang }>
}) {
  const {lang} = await params;
  const {t} = i18n(lang);

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
