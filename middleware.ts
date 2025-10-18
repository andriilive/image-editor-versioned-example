import {defaultLocale, locales} from "@/lib/i18n";
import {matchLocale} from "@/lib/utils/matchLocale";
import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  // 301 redirect for all /en, /en/, or /en/anything to / or /anything
  if (pathname === '/en' || pathname === '/en/') {
    request.nextUrl.pathname = '/';
    return NextResponse.redirect(request.nextUrl, 301);
  }
  if (pathname.startsWith('/en/')) {
    // Remove '/en' prefix
    request.nextUrl.pathname = pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(request.nextUrl, 301);
  }

  // Check if the pathname is exactly '/'
  if (pathname === '/') {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(request.nextUrl);
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    const locale = matchLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.rewrite(request.nextUrl);
  }

  return;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next), API routes (api), public files (e.g. favicon.ico) etc.
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
}

