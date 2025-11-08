import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ✅ Main body font - optimized for performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Abdelrahman Ali Ahmed - Frontend Developer",
  description: "Frontend Developer Portfolio. Expert in React, Next.js, and modern web technologies.",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Developer", "Portfolio"],
  authors: [{ name: "Abdelrahman Ali Ahmed" }],
  creator: "Abdelrahman Ali Ahmed",
  ...(process.env.NEXT_PUBLIC_SITE_URL && {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  }),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Abdelrahman Ali Ahmed Portfolio",
    title: "Abdelrahman Ali Ahmed - Frontend Developer",
    description: "Frontend Developer Portfolio. Expert in React, Next.js, and modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Ali Ahmed - Frontend Developer",
    description: "Frontend Developer Portfolio. Expert in React, Next.js, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/x-icon", sizes: "16x16" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
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
      className={inter.variable}
      style={{ colorScheme: "light dark" }} // ✅ prevents color mode CLS
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-black text-black dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
