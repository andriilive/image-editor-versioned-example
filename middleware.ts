import {NextRequest, NextResponse} from "next/server";
import {match} from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = [
  'en',
  'cs',
];

let defaultLocale = locales[0];

const getLocale = (request : NextRequest) => {
  let negotiator = new Negotiator({
    headers: Object.fromEntries(request.headers),
  })
  let languages = negotiator.languages()
  // Match the best locale (may be 'en-US', 'cs-CZ', etc.)
  const matched = match(languages, locales, defaultLocale)
  // Always return the base language only (e.g., 'en', 'cs')
  const base = matched.split('-')[0]

  if (!defaultLocale) {
    defaultLocale = locales[0]
  }

  return locales.includes(base) ? base : defaultLocale
}

// Get the preferred locale, similar to the above or using a library

export function middleware(request : NextRequest) {
  // Check if there is any supported locale in the pathname
  const {pathname} = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request); // will be 'en' or 'cs' only
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
