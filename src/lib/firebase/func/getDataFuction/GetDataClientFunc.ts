import { getDbInstance } from "@/lib/firebase/firebaseClient";
import { GetDataFuncProps } from "@/lib/types/types";
import { collection, doc, getDoc, getDocs,} from "firebase/firestore";

export async function getDataClientFunc<T>(props: { collectionName: string; docName: string }): Promise<{ data: T | null; }>;
export async function getDataClientFunc<T>(props: { collectionName: string }): Promise<{ data: T[] | null; }>;
export async function getDataClientFunc<T>({
  collectionName,
  docName,
}: GetDataFuncProps): Promise<{ data: T | T[] | null }> {
  try {
    // Lazy load Firebase - only initialize when needed
    const db = getDbInstance();
    
    // 🟢 Handle single document
    if (docName) {
      const docRef = doc(db, collectionName, docName);
      const snap = await getDoc(docRef);
      const data = snap.exists() ? (snap.data() as T) : null;
      return { data };
    }

    // 🟢 Handle full collection
    const snap = await getDocs(collection(db, collectionName));
    const data = snap.docs.map((d) => d.data() as T);
    return { data };
  } catch (error) {
    // Error handled silently in production
    if (process.env.NODE_ENV === 'development') {
      console.error("Error in getDataClientFunc:", error);
    }
    return { data: null };
  }
}
