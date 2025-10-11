import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getTrueLinks } from "./getTrueLinks";

export default function useContactForm() {
  const t = useTranslations("contact"); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(null);
  if (!formData.name || !formData.email || !formData.message) {
    setSuccess(t("validationError")); 
    setLoading(false);
    return;
  }

  try {
    const link  = await getTrueLinks();

    if ( !link?.url) {
      throw new Error("No valid link found in Firestore");
    }

    const params = new URLSearchParams(formData).toString();
    const response = await fetch(`${link.url}?${params}`, {
      method: "POST",
    });

    const result = await response.json();
    if (result.success) {
      setSuccess(t("success"));
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    } else {
      setSuccess(t("failed") + ": " + result.error);
    }
  } catch (error) {
    setSuccess(t("error") + ": " + (error as Error).message);
  } finally {
    setLoading(false);
  }
};
  // ✅ Auto hide popup after 3s
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return {
    t,
    formData,
    loading,
    success,
    handleChange,
    handleSubmit,
  };
}
