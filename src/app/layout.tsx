import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

// ✅ Main body font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// ✅ Optional secondary fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelrahman Ali Ahmed",
  description: "Frontend Developer.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
      style={{ colorScheme: "light dark" }} // ✅ prevents color mode CLS
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
