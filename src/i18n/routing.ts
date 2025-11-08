import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es', 'fr', 'ar'],

  // Used when no locale matches
  defaultLocale: 'en',
  localeDetection: false ,
  // The `pathnames` object holds pairs of internal and
  // external paths. Based on the locale, the external
  // paths are rewritten to the shared, internal ones.
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be provided for all locales
    '/': '/',
    '/about': {
      en: '/about',
      es: '/acerca-de',
      fr: '/a-propos',
      ar: '/حول'
    },
    '/services': {
      en: '/services',
      es: '/servicios',
      fr: '/services',
      ar: '/خدمات'
    },
    '/contact': {
      en: '/contact',
      es: '/contacto',
      fr: '/contact',
      ar: '/اتصال'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
