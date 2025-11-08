import { getDataFunc } from "@/lib/firebase/func/getDataFuction/GetDataServerFunc";
import { KeyServer } from "@/lib/key/keyClient/KeyServer";
import { CV, HomeData } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";

// Cache for server-side data to improve response time
import { cache } from 'react';

const getCachedHomeData = cache(async () => {
  const t = await getTranslations("home");
  const key = await KeyServer();
  
  // Fetch data in parallel for faster response
  const [homeDataResult, linksDataResult] = await Promise.all([
    getDataFunc<HomeData>({ collectionName: "content", docName: "home" }),
    getDataFunc<CV>({ collectionName: "links", where: { field: "value", value: true, operator: "==" }})
  ]);

  return {
    title: homeDataResult.data?.title[key] ?? t("title"),
    content: homeDataResult.data?.content[key] ?? t("subtitle"),
    CVLink: linksDataResult.data? linksDataResult.data[0].url : "",
    t: t,
  };
});

export async function getHome() {
  return getCachedHomeData();
}
