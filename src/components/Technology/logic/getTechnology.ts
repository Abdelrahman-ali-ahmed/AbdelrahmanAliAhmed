import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Technology } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";

export async function getTechnology() {
  const t = await getTranslations("technologies");
  const snapshot = await adminDb?.collection("Technologies").get();

  const technologies = snapshot?.docs.map((doc) => {
    const data = doc.data();
    const createdAt = data.createdAt
      ? new Date(data.createdAt._seconds * 1000).toISOString()
      : null;

    return {
      id: doc.id,
      ...data,
      createdAt,
    };
  });
  const techList = JSON.parse(JSON.stringify(technologies)) as Technology[];
  return { data: techList, t };
}
