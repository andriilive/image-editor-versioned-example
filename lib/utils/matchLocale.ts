import {defaultLocale, locales} from "@/lib/i18n";
import {match} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import {NextRequest} from "next/server";

export const matchLocale = (request: NextRequest) => {
  const negotiator = new Negotiator({
    headers: Object.fromEntries(request.headers),
  })
  const languages = negotiator.languages()
  // Match the best locale (may be 'en-US', 'cs-CZ', etc.)
  const matched = match(languages, locales, defaultLocale)
  // Always return the base language only (e.g., 'en', 'cs')
  const base = matched.split('-')[0]

  return locales.includes(base) ? base : defaultLocale
}
