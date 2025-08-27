import { Button } from "@/components/ui/button";
import ClientWrapper from "@/components/ClientWrapper";
import { getTranslations } from "next-intl/server";

export default async function Home() {
 const t = await getTranslations("home");

  return (
    <ClientWrapper>
      <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl px-4">
          

            <div className="max-w-4xl text-center space-y-10 px-4 mx-auto">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                {t('description')}
              </p>

              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="px-8 py-3">
                  {t('cta')}
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3">
                  {t('learnMore')}
                </Button>
              </div>

              <div className="mt-16">
                <h2 className="text-3xl font-semibold mb-8">{t('features.title')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3">{t('features.feature1.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('features.feature1.description')}</p>
                  </div>
                  <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3">{t('features.feature2.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('features.feature2.description')}</p>
                  </div>
                  <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-3">{t('features.feature3.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{t('features.feature3.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientWrapper>
  );
}
