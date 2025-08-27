# Marketing Agency - Multilingual Website

A modern, multilingual marketing agency website built with Next.js 15, next-intl, and Tailwind CSS. Features internationalization support for English, Spanish, French, and Arabic.

## 🌍 Internationalization Features

- **4 Languages Supported**: English (en), Spanish (es), French (fr), Arabic (ar)
- **Automatic Locale Detection**: Based on browser preferences and URL
- **RTL Support**: Full right-to-left layout support for Arabic
- **SEO-Friendly URLs**: Localized pathnames for better SEO
- **Language Switcher**: Easy language switching with flag indicators

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-specific pages
│   │   ├── layout.tsx     # Internationalized layout
│   │   ├── page.tsx       # Home page
│   │   └── about/         # About page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── ui/                # Reusable UI components
│   ├── LanguageSwitcher.tsx
│   └── themeToggle.tsx
├── i18n/
│   ├── request.ts         # next-intl configuration
│   └── routing.ts         # Routing configuration
├── lib/
│   └── redux/             # Redux store setup
└── middleware.ts          # Locale detection middleware

messages/
├── en.json               # English translations
├── es.json               # Spanish translations
├── fr.json               # French translations
└── ar.json               # Arabic translations
```

## 🌐 Supported Languages

| Language | Code | Flag | Direction |
|----------|------|------|-----------|
| English  | en   | 🇺🇸   | LTR       |
| Spanish  | es   | 🇪🇸   | LTR       |
| French   | fr   | 🇫🇷   | LTR       |
| Arabic   | ar   | 🇸🇦   | RTL       |

## 📝 Adding New Translations

1. Add your translation keys to all language files in the `messages/` directory
2. Use the `useTranslations` hook in your components:

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');

  return <h1>{t('title')}</h1>;
}
```

## 🔧 Configuration

### Adding a New Language

1. Add the locale to `src/i18n/routing.ts`:
```typescript
locales: ['en', 'es', 'fr', 'ar', 'de'], // Add 'de' for German
```

2. Create a new message file: `messages/de.json`

3. Update the language switcher in `src/components/LanguageSwitcher.tsx`

### Customizing Routes

Edit `src/i18n/routing.ts` to customize localized pathnames:

```typescript
pathnames: {
  '/': '/',
  '/about': {
    en: '/about',
    es: '/acerca-de',
    fr: '/a-propos',
    ar: '/حول'
  }
}
```

## 🎨 Features

- **Dark/Light Mode**: Theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with shadcn/ui components
- **Redux Integration**: State management ready for complex applications
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Internationalization**: next-intl
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **State Management**: Redux Toolkit
- **Theme**: next-themes
- **Icons**: Lucide React, React Icons
- **Language**: TypeScript

## 📱 URL Structure

The application uses the following URL structure:

- `/` - Redirects to default locale (English)
- `/en` - English version
- `/es` - Spanish version
- `/fr` - French version
- `/ar` - Arabic version
- `/en/about` - English about page
- `/es/acerca-de` - Spanish about page (localized URL)

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For other deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
