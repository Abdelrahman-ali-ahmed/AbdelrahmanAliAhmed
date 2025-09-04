import { Timestamp } from "firebase/firestore";
import React from "react";

export type ContactData = {
  email: string;
  facebook: string;
  instagram: string;
  linkedin: string;
  phone: string;
  whatsapp: string;
};
export interface HomeData {
  title: { [key: string]: string };
  content: { [key: string]: string };
}
export const localeMap: Record<string, string> = {
  en: "eng",
  ar: "ar",
};
export  interface LinkDoc {
  createdAt: Date;   // Firestore timestamp → convert later
  name: string;
  url: string;
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