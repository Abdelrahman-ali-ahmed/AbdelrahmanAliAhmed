import { adminDb } from '@/lib/firebase/firebaseAdmin';
import { localeMap, TrainingExperience } from '@/lib/types/types';
import { getTranslations } from 'next-intl/server';
import { cookies } from 'next/headers';
import React from 'react'

export default async function getExperience() {
    const t = await getTranslations("experience");
const cookieStore = await cookies(); // ✅ await here
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en"; 
const key = localeMap[locale] ?? "eng";
const docRef = adminDb?.collection("Experiences");
const snap = docRef ? await docRef.get() : null;
const data: TrainingExperience[] | null = snap?.docs.map(doc => doc.data()) as TrainingExperience[];
  const sortedExperiences = [...data].sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
  );

  return {data:sortedExperiences,t:t,key:key};
}
