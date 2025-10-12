'use client';
import React, {  useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

import { ContactData } from "@/lib/types/types";
import useContactData from "./hooks/useContactData";

export default function Footer() {
   const t = useTranslations("footer");
  const { contactData, loading,socialConfig } = useContactData();
  const [showPhone, setShowPhone] = useState(false);
  if (loading || !contactData) return null;

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
