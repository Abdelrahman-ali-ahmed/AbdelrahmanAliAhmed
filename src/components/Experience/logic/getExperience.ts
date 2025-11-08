import { getDataFunc } from '@/lib/firebase/func/getDataFuction/GetDataServerFunc';
import { KeyServer } from '@/lib/key/keyClient/KeyServer';
import { TrainingExperience } from '@/lib/types/types';
import { getTranslations } from 'next-intl/server';

import { cache } from 'react';

const getCachedExperience = cache(async () => {
  const [t, key, experiencesResult] = await Promise.all([
    getTranslations("experience"),
    KeyServer(),
    getDataFunc<TrainingExperience>({collectionName: "Experiences"})
  ]);
  
  const sortedExperiences = (experiencesResult.data ?? []).sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
  );
  
  return { data: sortedExperiences, t, key };
});

export default async function getExperience() {
  return getCachedExperience();
}
