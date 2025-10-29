import { adminDb } from "../../firebaseAdmin";

type Operator = "==" | "!=" | ">" | "<" | ">=" | "<=";

interface GetDataFuncProps {
  collectionName: string;
  docName?: string;
  where?: { field: string; value: boolean; operator: Operator };
  
}

// ✅ Overloads
export async function getDataFunc<T>(props: { collectionName: string; docName: string }): Promise<{ data: T | null; }>;
export async function getDataFunc<T>(props: { collectionName: string }): Promise<{ data: T[] | null; }>;
export async function getDataFunc<T>(props: { collectionName: string; where: { field: string; value: boolean; operator: Operator } }): Promise<{ data: T[] | null;  }>;

// ✅ Implementation
export async function getDataFunc<T>({ collectionName, docName, where }: GetDataFuncProps): Promise<{ data: T | T[] | null;  }> {


  // 🟢 Handle WHERE queries first
  if (where?.field && where?.operator && where?.value !== undefined) {
    const colRef = adminDb?.collection(collectionName);
    const snap = colRef ? await colRef.where(where.field, where.operator, where.value).get() : null;
    const data = snap ? (snap.docs.map((doc) => doc.data() as T) as T[]) : null;
    return { data};
  }

  // 🟢 Handle single document
  if (docName && docName.trim() !== "") {
    const docRef = adminDb?.collection(collectionName).doc(docName);
    const snap = docRef ? await docRef.get() : null;
    const data = snap?.exists ? (snap.data() as T) : null;
    return { data };
  }

  // 🟢 Handle full collection
  const colRef = adminDb?.collection(collectionName);
  const snap = colRef ? await colRef.get() : null;
  const data = snap ? (snap.docs.map((doc) => doc.data() as T) as T[]) : null;
  return { data };
}
