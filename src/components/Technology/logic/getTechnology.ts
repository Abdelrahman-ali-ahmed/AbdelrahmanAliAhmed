import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Technology } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";

export async function getTechnology() {
  const t = await getTranslations("technologies");
  const snapshot = await adminDb?.collection("Technologies").get();

  const technologies = snapshot?.docs.map((doc) => {
    const data = doc.data();

    // ✅ Convert Firestore Timestamp to plain JS Date or string
    const createdAt = data.createdAt
      ? new Date(data.createdAt._seconds * 1000).toISOString()
      : null;

    return {
      id: doc.id,
      ...data,
      createdAt,
    };
  });

  // ✅ Deep clone so it's plain JSON-safe for the client
  const techList = JSON.parse(JSON.stringify(technologies)) as Technology[];

  return { data: techList, t };
}
