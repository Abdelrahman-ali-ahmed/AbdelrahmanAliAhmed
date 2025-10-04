import { adminDb } from "@/lib/firebase/firebaseAdmin";
import { Technology } from "@/lib/types/types";
import { getTranslations } from "next-intl/server";

export async function  getTechnology() {
          const t = await getTranslations("technologies");
const snapshot = await adminDb?.collection("Technologies").get();

const technologies = snapshot?.docs.map(doc => ({
  id: doc.id,
  ...doc.data()
}));
console.log(technologies);
const techList = technologies as Technology[];

return({data:techList,t:t});

}