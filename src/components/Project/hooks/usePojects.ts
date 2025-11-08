"use client";
import { getDataClientFunc } from "@/lib/firebase/func/getDataFuction/GetDataClientFunc";
import KeyClient from "@/lib/key/keyServer/KeyClient";
import {  Project } from "@/lib/types/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export default function useProjects() {
  const t = useTranslations("projects");
  const [data, setData] = useState<Project[]>([]);
  const [projectType, setProjectType] = useState("all");
  const [loading, setLoading] = useState(true);
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
  const {key:mkey}= KeyClient();
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



  // ✅ Fetch data - optimized with requestIdleCallback
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const {data:test}=await getDataClientFunc<Project>({collectionName: "data",});
        setKey(mkey);
        const categoryOrder = [
          "Next",
          "React + vite",
          "React",
          "Html + js + Css",
          "Html + Css",
        ];

     const projects = ((test ?? []) as Project[])
  .filter((project) => (projectType === "all" ? true : project.category === projectType))
  .sort((a, b) => {
    const orderA = categoryOrder.indexOf(a.category);
    const orderB = categoryOrder.indexOf(b.category);
    if (orderA !== -1 && orderB !== -1 && orderA !== orderB) return orderA - orderB;
    return b.createdAt?.toMillis?.() - a.createdAt?.toMillis?.();
  });


        setData(projects);
      } catch (error) {
        // Error fetching projects - handled silently in production
        if (process.env.NODE_ENV === 'development') {
          console.error("Error fetching projects:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    // Defer data fetching until browser is idle for better initial load
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(fetchData, { timeout: 1000 });
      } else {
        // Fallback: small delay to not block initial render
        setTimeout(fetchData, 100);
      }
    } else {
      fetchData();
    }
  }, [projectType, showAll,mkey]);

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


  return {
    t,
    data,
    projectTypes,
    projectType,
    setProjectType,
    loading,
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
