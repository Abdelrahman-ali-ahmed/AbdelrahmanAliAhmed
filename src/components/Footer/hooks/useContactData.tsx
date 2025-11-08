"use client";

import { useEffect, useState } from "react";
import { ContactData } from "@/lib/types/types";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { getDataClientFunc } from "@/lib/firebase/func/getDataFuction/GetDataClientFunc";

export default function useContactData() {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const{data}=await getDataClientFunc<ContactData>({collectionName: "content", docName: "contact"});
        if (data) {
          setContactData(data);
        }
      } catch (error) {
        // Error handled silently in production
        if (process.env.NODE_ENV === 'development') {
          console.error("Error fetching contact data:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);
  const socialConfig: Record<
  keyof ContactData,
  { icon: React.ReactNode; buildHref?: (val: string) => string; isAction?: boolean }
> = {
  linkedin: {
    icon: <Linkedin className="h-5 w-5" />,
    buildHref: (v) => (v.includes("linkedin.com") ? v : `https://linkedin.com/in/${v}`),
  },
  gitHub: {
    icon: <Github className="h-5 w-5" />,
    buildHref: (v) => (v.includes("https://github.com/") ? v : `https://${v}`),
  },
  whatsapp: {
    icon: <MessageCircle  className="h-5 w-5" />,
    buildHref: (v) => `https://wa.me/${v.replace(/[^0-9]/g, "")}`,
  },
  phone: { icon: <Phone className="h-5 w-5" />, isAction: true },
  email: {
    icon: <Mail className="h-5 w-5" />,
    buildHref: (v) => `https://mail.google.com/mail/?view=cm&fs=1&to=${v}`,
  },
};

  return { contactData, loading, socialConfig };
}
