import { localeMap } from "@/lib/types/types";
import { cookies } from "next/headers";

export async function KeyServer(){
    const cookieStore = await cookies();
      const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";
      const key = localeMap[locale] ?? "eng";
      return key;

}