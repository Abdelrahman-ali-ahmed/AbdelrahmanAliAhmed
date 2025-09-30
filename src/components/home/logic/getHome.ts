import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { HomeData, localeMap } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";

export async function getPosts() {
      const t = await getTranslations("home");
  const cookieStore = await cookies(); // ✅ await here
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en"; 
  const key = localeMap[locale] ?? "eng";
const docRef = adminDb?.collection("content").doc("home");
const snap = docRef ? await docRef.get() : null;
const data: HomeData | null = snap?.exists ? (snap.data() as HomeData) : null;

  return {
    title: data?.title[key] ?? t("title"),
    content: data?.content[key] ?? t("subtitle"),
 };
}
