import { getDataFunc } from "@/lib/firebase/func/getDataFuction/GetDataServerFunc";
import { KeyServer } from "@/lib/key/keyClient/KeyServer";
import { CV, HomeData } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";

export async function getPosts() {
const t = await getTranslations("home");
const {data}=await getDataFunc <HomeData>({ collectionName: "content", docName: "home" });
const key=await KeyServer();
const { data: linksData } = await getDataFunc<CV>({ collectionName: "links",where: { field: "value", value: true, operator: "==" }});
  return {
    title: data?.title[key] ?? t("title"),
    content: data?.content[key] ?? t("subtitle"),
    CVLink:linksData? linksData[0].url :  "",
    t:t,
 };
}
