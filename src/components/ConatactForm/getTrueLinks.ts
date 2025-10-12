import {  getDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase/firebaseClient";
import { LinkDoc } from "@/lib/types/types";

export async function getTrueLinks(): Promise<LinkDoc | null> {
  const ref = doc(db, "messageLink", "link");
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) return null;
  return snapshot.data() as LinkDoc;
}
  