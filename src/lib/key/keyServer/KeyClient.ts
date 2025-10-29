import { localeMap } from "@/lib/types/types";
import { useEffect, useState } from "react";

export default function KeyClient() {
    const [locale, setLocale] = useState ("en");
    const [key, setKey] = useState<"eng" | "ar">("eng");
    useEffect  (() => {
        const browserLocale =
          document.cookie
            .split("; ")
            .find((row) => row.startsWith("NEXT_LOCALE="))
            ?.split("=")[1] ?? "en";
        setLocale(browserLocale);
        const mappedKey = (localeMap[browserLocale] ?? "eng") as "eng" | "ar";
        setKey(mappedKey);
      }, []);
  return key
}
