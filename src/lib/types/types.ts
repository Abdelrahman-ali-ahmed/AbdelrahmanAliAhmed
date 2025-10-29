import { Timestamp } from "firebase/firestore";
import React from "react";

export type ContactData = {
  email: string;
  gitHub: string;    // can be a URL or "github.com/username"
  linkedin: string;  // can be an email, profile handle, or full URL
  phone: string;     // local format e.g. "01157538463"
  whatsapp: string;  // same as phone (you may keep international format if available)
};
export interface HomeData {
  title: { [key: string]: string };
  content: { [key: string]: string };
  }
  export const localeMap: Record<string, string> = {
    en: "eng",
    ar: "ar",
  };
export type Technology = {
  publicId: string;
  name: string;
  logo: string;
  createdAt: Timestamp|string|null; 
};
export  interface LinkDoc {
  createdAt: Date;   // Firestore timestamp → convert later
  name: string;
  link: string;
  value: boolean;
}
export interface Service {
  title: {en:string,ar:string};
  description: {en:string,ar:string};
  icon: React.ReactElement; // JSX element
  colorClass: string; // Tailwind class like "border-pink-500"
  details: {en:string,ar:string};
}
export interface ServiceCardProps {
  service: Service;
  delay: number;
  lang: 'en' | 'ar';
  onClick: (service: Service) => void;
}
export interface Customer {
  id: string;
  logo: string;
  name: {
    ar: string;
    eng: string;
  };
  publicId: string;
  createdAt: Timestamp; // or FirebaseFirestore.Timestamp if using admin
}
export  interface Project {
  id: string;
  createdAt: Timestamp;
  title: { ar: string; eng: string };
  content: { ar: string; eng: string };
  imageUrl: string;
  liveLink: string;
  src: string;
  category: string;
}
export interface TrainingExperience {
  name: string;
  field: string;
  place: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
}
export interface CV {
  url: string;
  name: string;
}