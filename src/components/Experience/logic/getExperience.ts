import { getDataFunc } from '@/lib/firebase/func/getDataFuction/GetDataFunc';
import { KeyServer } from '@/lib/key/keyClient/KeyServer';
import { TrainingExperience } from '@/lib/types/types';
import { getTranslations } from 'next-intl/server';

export default async function getExperience() {
  const t = await getTranslations("experience");
  const { data: experiences } = await getDataFunc<TrainingExperience>({collectionName: "Experiences",});
  const key=await KeyServer();
  const sortedExperiences = (experiences ?? []).sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());
  return { data: sortedExperiences, t, key };
}
