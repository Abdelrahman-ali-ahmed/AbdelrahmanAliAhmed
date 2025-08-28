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