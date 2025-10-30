import { getDataFunc } from "@/lib/firebase/func/getDataFuction/GetDataServerFunc";
import { Technology } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";

export async function getTechnology() {
  const t = await getTranslations("technologies");
  const { data } = await getDataFunc<Technology>({collectionName: "Technologies",});
  const techList = data?.map((item: Technology) => {
    const createdAt = item.createdAt? typeof(item.createdAt) === "object" ? item.createdAt.toDate().toISOString(): item.createdAt : null;
    return { ...item, createdAt };
  });
  return {  data: techList ?? [], t };
}
