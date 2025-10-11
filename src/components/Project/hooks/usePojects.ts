"use client";

import { db } from "@/lib/firebase/firebaseClient";
import { localeMap, Project } from "@/lib/types/types";
import { collection, getDocs, FirestoreDataConverter } from "firebase/firestore";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function useProjects() {
  const t = useTranslations("projects");
  const [data, setData] = useState<Project[]>([]);
  const [projectType, setProjectType] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [locale, setLocale] = useState<string>("en");
  const [key, setKey] = useState<"eng" | "ar">("eng");

  const projectTypes = [
    "all",
    "React",
    "Html + Css",
    "React + vite",
    "Next",
    "Html + js + Css",
  ];

  const projectConverter: FirestoreDataConverter<Project> = {
    toFirestore: (project: Project) => project,
    fromFirestore: (snap) => snap.data() as Project,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Get the locale from the browser (client-side)
        const browserLocale =
          document.cookie
            .split("; ")
            .find((row) => row.startsWith("NEXT_LOCALE="))
            ?.split("=")[1] ?? "en";

        setLocale(browserLocale);
        const mappedKey = (localeMap[browserLocale] ?? "eng") as "eng" | "ar";
        setKey(mappedKey);

        const colRef = collection(db, "data").withConverter(projectConverter);
        const snapshot = await getDocs(colRef);

     const projects = snapshot.docs.map((doc) => {
  const data = doc.data();
  return { ...data, id: doc.id }; 
}).filter((project)=> {
            if (projectType === "all") return true;
            return project.category === projectType;
        });

        setData(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectType]);

  return { t, data, projectTypes, projectType, setProjectType, loading, locale, key };
}
