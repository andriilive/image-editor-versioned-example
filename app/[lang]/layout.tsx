import {i18n, type I18nSupportedLang} from "@/app/(i18n)";
import {I18nContextProvider} from "@/app/(i18n)/I18nContext";
import I18nLanguageSwitch from "@/app/(i18n)/I18nLanguageSwitch";
import type {PropsWithChildren} from "react";

export default async function HomeLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{ lang: I18nSupportedLang }>
}>) {
  const {lang} = await params;

  console.log(lang)

  return (
    <I18nContextProvider defaultLanguage={lang}>
      <I18nLanguageSwitch/>
      {children}
    </I18nContextProvider>
  );
}
