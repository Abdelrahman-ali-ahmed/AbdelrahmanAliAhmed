import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Link } from '@/i18n/routing';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/themeToggle";

export default function AboutPage() {
  const t = useTranslations('about');
  const tNav = useTranslations('navigation');

  return (
    <div className="min-h-screen mt-18 bg-white dark:bg-black text-black dark:text-white">
      
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('subtitle')}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto mb-12">
            <p className="text-lg leading-relaxed mb-8">
              {t('description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Mission</h3>
                <p>{t('mission')}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Vision</h3>
                <p>{t('vision')}</p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-8">{t('values.title')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-semibold">{t('values.creativity')}</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-semibold">{t('values.integrity')}</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h4 className="font-semibold">{t('values.excellence')}</h4>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h4 className="font-semibold">{t('values.collaboration')}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/">
              <Button variant="outline" className="mr-4">
                ← {tNav('home')}
              </Button>
            </Link>
            <Link href="/contact">
              <Button>
                {tNav('contact')} →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
