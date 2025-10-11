import { collection, query, where, getDocs, Timestamp } from "firebase/firestore";
import { db } from "../../lib/firebase/firebaseClient";
import { LinkDoc } from "@/lib/types/types";

export async function getTrueLinks(): Promise<LinkDoc | null> {
  // Path: /messageLink/messageLink/link
  const q = query(
    collection(db, "messageLink", "messageLink", "link"),
    where("value", "==", true)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  const data = doc.data() as LinkDoc;

  return {
    ...data,
  };
}
