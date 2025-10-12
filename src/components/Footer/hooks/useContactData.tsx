"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase/firebaseClient";
import { doc, getDoc, FirestoreDataConverter } from "firebase/firestore";
import { ContactData } from "@/lib/types/types";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

// Firestore converter
const contactConverter: FirestoreDataConverter<ContactData> = {
  toFirestore: (data: ContactData) => data,
  fromFirestore: (snap) => snap.data() as ContactData,
};
 

export default function useContactData() {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const docRef = doc(db, "content", "contact").withConverter(contactConverter);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setContactData(docSnap.data());
        }
      } catch (error) {
        console.error("Error fetching contact data:", error);
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
    buildHref: (v) => (v.includes("github.com") ? v : `https://github.com/${v}`),
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
