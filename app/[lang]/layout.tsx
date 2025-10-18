import I18nLanguageSwitch from "@/components/I18nLanguageSwitch";
import {type I18nLocale, locales} from "@/lib/i18n";
import type {Metadata, ResolvingMetadata} from "next";
import type {PropsWithChildren} from "react";

import {Geist, Geist_Mono} from "next/font/google";
import './../globals.css';

type Props = PropsWithChildren<{
  params: Promise<{ lang: I18nLocale }>
}>;

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

export async function generateMetadata(
  {params}: { params: Promise<{ lang: I18nLocale }> },
  parent: ResolvingMetadata,
) : Promise<Metadata> {
  const {lang} = await params;

  const titles: Record<I18nLocale, string> = {
    en: 'App EN',
    cs: 'App CS',
  };

  console.log(parent);

  return {
    title: titles[lang],
    description: 'A Next.js application with internationalization support.',
  };
}

export default async function Layout({children, params,}: Props) {
  const {lang} = await params;

  return (
    <html lang={lang}>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <I18nLanguageSwitch currentLang={lang}/>
      {children}
    </body>
    </html>
  );
}
