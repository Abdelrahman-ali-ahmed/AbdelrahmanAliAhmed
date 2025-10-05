import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { localeMap } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";
import { cookies } from "next/headers";

export async function getProjects() {
  const t = await getTranslations("services");
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";
  const key = (localeMap[locale] ?? "eng") as "eng" | "ar"; // ✅ fixed

  const snap = await adminDb?.collection("data").get();

  const data = snap?.docs.map((doc) => {
    const raw = doc?.data();

    return {
      id: doc.id,
      ...raw,
      createdAt: raw.createdAt?.toDate?.().toISOString() ?? null,
      updatedAt: raw.updatedAt?.toDate?.().toISOString() ?? null,
    };
  });

  const safeData = JSON.parse(JSON.stringify(data));
  return { t, key, data: safeData };
}
