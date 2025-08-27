'use client';

import { useEffect } from 'react';

interface LocaleHandlerProps {
  locale: string;
}

export default function LocaleHandler({ locale }: LocaleHandlerProps) {
  useEffect(() => {
    // Set the HTML lang attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;

      // Set the direction for RTL languages
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    }
  }, [locale]);

  return null;
}
