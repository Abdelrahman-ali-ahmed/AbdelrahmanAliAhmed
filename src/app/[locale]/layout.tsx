import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocaleHandler from "@/components/LocaleHandler";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ✅ Validate locale
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // ✅ Load messages
  const messages = await getMessages();

  // ✅ Return layout with <html> root
  return (
        <NextIntlClientProvider messages={messages}>
          <LocaleHandler locale={locale} />
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
  );
}
