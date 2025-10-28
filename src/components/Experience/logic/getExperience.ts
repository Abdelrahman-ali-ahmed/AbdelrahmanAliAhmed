import { getDataFunc } from '@/lib/firebase/func/getDataFuction/GetDataFunc';
import { TrainingExperience } from '@/lib/types/types';
import { getTranslations } from 'next-intl/server';

export default async function getExperience() {
  const t = await getTranslations("experience");
  const { data: experiences, key } = await getDataFunc<TrainingExperience>({collectionName: "Experiences",});
  const sortedExperiences = (experiences ?? []).sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
  return { data: sortedExperiences, t, key };
}
