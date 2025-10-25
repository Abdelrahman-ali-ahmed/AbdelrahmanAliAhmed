"use client";

import { db } from "@/lib/firebase/firebaseClient";
import { localeMap, Project } from "@/lib/types/types";
import { collection, getDocs, FirestoreDataConverter, query, orderBy } from "firebase/firestore";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function useProjects() {
  const t = useTranslations("projects");
  const [data, setData] = useState<Project[]>([]);
  const [projectType, setProjectType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [locale, setLocale] = useState("en");
  const [key, setKey] = useState<"eng" | "ar">("eng");
  const [showAll, setShowAll] = useState(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(3);
  const[projectsPage,setProjectPage]=useState<Project[][]>([[]]);

  // ✅ Media queries (booleans)
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  // ✅ Determine device type
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop");

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

  // ✅ Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const browserLocale =
          document.cookie
            .split("; ")
            .find((row) => row.startsWith("NEXT_LOCALE="))
            ?.split("=")[1] ?? "en";

        setLocale(browserLocale);
        const mappedKey = (localeMap[browserLocale] ?? "eng") as "eng" | "ar";
        setKey(mappedKey);

        const colRef = collection(db, "data").withConverter(projectConverter);
        const q = query(colRef, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);

        const categoryOrder = [
          "Next",
          "React + vite",
          "React",
          "Html + js + Css",
          "Html + Css",
        ];

        const projects = snapshot.docs
          .map((doc) => ({ ...doc.data(), id: doc.id }))
          .filter((project) => (projectType === "all" ? true : project.category === projectType))
          .sort((a, b) => {
            const orderA = categoryOrder.indexOf(a.category);
            const orderB = categoryOrder.indexOf(b.category);
            if (orderA !== -1 && orderB !== -1 && orderA !== orderB) return orderA - orderB;
            return b.createdAt?.toMillis?.() - a.createdAt?.toMillis?.();
          });

        setData(projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectType, showAll]);

  // ✅ Detect device type and adjust pagination
  useEffect(() => {
    if (isMobile) {
      setDeviceType("mobile");
      setProjectsPerPage(3);
    } else if (isTablet) {
      setDeviceType("tablet");
      setProjectsPerPage(6);
    } else if (isDesktop) {
      setDeviceType("desktop");
      setProjectsPerPage(8);
    }
  }, [isMobile, isTablet, isDesktop]);

useEffect(() => {
  if (!data.length) return;

  const pages: Project[][] = [];
  for (let i = 0; i < data.length; i += projectsPerPage) {
    pages.push(data.slice(i, i + projectsPerPage));
  }

  setProjectPage(pages);
  setTotalPages(pages.length);
}, [data, projectsPerPage]);

console.log(projectsPage);


  return {
    t,
    data,
    projectTypes,
    projectType,
    setProjectType,
    loading,
    locale,
    key,
    showAll,
    setShowAll,
    projectsPage,
    setPage,
    deviceType,
    page,
    totalPages,
  };
}
