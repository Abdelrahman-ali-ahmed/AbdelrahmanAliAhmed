import { getDataFunc } from "@/lib/firebase/func/getDataFuction/GetDataServerFunc";
import { Technology } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";

import { cache } from 'react';

const getCachedTechnology = cache(async () => {
  const [t, techResult] = await Promise.all([
    getTranslations("technologies"),
    getDataFunc<Technology>({collectionName: "Technologies"})
  ]);
  
  const techList = techResult.data?.map((item: Technology) => {
    const createdAt = item.createdAt? typeof(item.createdAt) === "object" ? item.createdAt.toDate().toISOString(): item.createdAt : null;
    return { ...item, createdAt };
  });
  
  return { data: techList ?? [], t };
});

export async function getTechnology() {
  return getCachedTechnology();
}
