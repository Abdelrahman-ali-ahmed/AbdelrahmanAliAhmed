import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../lib/firebase/firebaseClient";
import { LinkDoc } from "@/lib/types/types";
// put interface in a types file or same file

export async function getTrueLinks(): Promise<LinkDoc | null> {
  const snapshot = await getDocs(
    query(collection(db, "links"), where("value", "==", true))
  );

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  const data = doc.data() as LinkDoc;

  // ✅ Convert Firestore timestamp to JS Date
  return {
    ...data,
    createdAt: (data.createdAt as unknown as Timestamp).toDate(),
  };
}
