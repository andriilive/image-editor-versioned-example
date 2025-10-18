import I18nLanguageSwitch from "@/components/I18nLanguageSwitch";
import Nav from "@/components/Nav";
import {getTranslations, type I18nLocale, locales} from "@/lib/i18n";
import type {Metadata} from "next";
import type {PropsWithChildren} from "react";

import packageJson from "@/package.json";
import {Geist, Geist_Mono} from "next/font/google";
import '@/app/globals.css';

const {description: packageDescription} = packageJson;

export type LangParam = { lang: I18nLocale }
export type LangParams = { params: Promise<LangParam> };

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({lang}));
}

export async function generateMetadata({params}: LangParams): Promise<Metadata> {
  const {lang} = await params;
  const {t} = getTranslations(lang);

  return {
    title: t('metadata.title'),
    description: packageDescription
  };
}

export default async function Layout({children, params}: PropsWithChildren<LangParams>) {
  const {lang} = await params;

  return (
    <html lang={lang}>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}>
      <I18nLanguageSwitch currentLang={lang}/>
      <aside className="border-t border-b text-xs">
        <Nav lang={lang}/>
      </aside>
      <main className="p-1 py-4">
        {children}
      </main>
    </body>
    </html>
  );
}
