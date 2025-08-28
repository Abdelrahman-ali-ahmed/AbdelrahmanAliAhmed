'use client';

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { db } from "../../lib/firebase/firebaseClient";
import { doc, getDoc, FirestoreDataConverter } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import { ContactData } from "@/lib/types/types";

// ✅ Firestore Converter for ContactData
const contactConverter: FirestoreDataConverter<ContactData> = {
  toFirestore: (data: ContactData) => data,
  fromFirestore: (snap) => snap.data() as ContactData,
};

const socialConfig: Record<
  keyof ContactData,
  { icon: React.ReactNode; buildHref?: (val: string) => string; isAction?: boolean }
> = {
  facebook: { icon: <Facebook className="h-5 w-5" />, buildHref: (v) => v },
  instagram: { icon: <Instagram className="h-5 w-5" />, buildHref: (v) => v },
  linkedin: { icon: <Linkedin className="h-5 w-5" />, buildHref: (v) => v },
  whatsapp: {
    icon: <MessageCircle className="h-5 w-5" />,
    buildHref: (v) => `https://wa.me/${v.replace(/[^0-9]/g, "")}`,
  },
  phone: { icon: <Phone className="h-5 w-5" />, isAction: true },
  email: {
    icon: <Mail className="h-5 w-5" />,
    buildHref: (v) => `https://mail.google.com/mail/?view=cm&fs=1&to=${v}`,
  },
};

export default function Footer() {
  const t = useTranslations("footer");
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [showPhone, setShowPhone] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "content", "contact").withConverter(contactConverter);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContactData(docSnap.data()); // now strongly typed 🎉
      }
    };
    fetchData();
  }, []);

  if (!contactData) return null;

  return (
    <footer className="bg-white dark:bg-black border-t border-border px-4 py-6 mt-auto  ">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-3 mb-4">
          {Object.entries(socialConfig).map(([key, { icon, buildHref, isAction }]) => {
            const val = contactData[key as keyof ContactData];
            if (!val) return null;

            if (isAction && key === "phone") {
              return (
                <Button
                  key={key}
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => setShowPhone((p) => !p)}
                >
                  {icon}
                </Button>
              );
            }

            const href = buildHref ? buildHref(val) : val;
            return (
              <Button
                key={key}
                variant="outline"
                size="icon"
                className="rounded-full"
                asChild
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </Button>
            );
          })}
        </div>

        {showPhone && (
          <p className="text-sm font-medium text-primary mb-2">
            📞 {contactData.phone}
          </p>
        )}

        <p className="text-muted-foreground text-sm">{t("copyright")}</p>
      </div>
    </footer>
  );
}
