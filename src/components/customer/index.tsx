import { adminDb } from '@/lib/firebase/firebaseAdmin';
import { Customer, localeMap } from '@/lib/types/types';
import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import Image from 'next/image';
import React from 'react';


export default async function CustomerComponent() {
  // i18n
  const t = await getTranslations('customers');
  const cookieStore = await cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value ?? 'en';
  const key = (localeMap[locale] ?? 'eng') as 'ar' | 'eng';

  // Firestore fetch
  const docRef = adminDb?.collection('customers');
  const snap = docRef ? await docRef.get() : null;

  const customers: Customer[] =
    snap?.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Customer)
    ) ?? [];


  return (
    <section className="py-12 container relative">
  <div className="mx-6 flex flex-col items-center">
    {/* Title */}
    <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[#30C59B] to-[#00A3FF] bg-clip-text text-transparent ">
      {t("customers_title")} ({customers.length})
    </h2>

    {/* Cards Grid */}
    <div className="w-full flex justify-center mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="reveal card-glow rounded-2xl overflow-hidden cursor-pointer group"
          >
            <div
              className="p-[2px] rounded-2xl
                         bg-gray-300 dark:bg-gray-700
                         group-hover:bg-gradient-to-r from-[#30C59B] to-[#00A3FF]
                         transition-all duration-300"
            >
              <div className="bg-white dark:bg-[#0a0f1a] rounded-2xl overflow-hidden">
                {/* Image */}
                <div className="w-full h-60 overflow-hidden">
                  <Image
                    src={customer.logo}
                    alt={customer.name[key]}
                    width={300}
                    height={240}
                    className="w-full h-full object-cover block
                               transform group-hover:scale-110
                               transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {customer.name[key]}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


  );
}
