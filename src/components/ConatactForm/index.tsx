"use client";

import Loader from "../Loader";
import useContactForm from "./useContactForm";
export default function ContactForm() {
  const {
    t,
    formData,
    loading,
    success,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-6">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 w-full max-w-lg relative transition-all duration-300">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          {t("title")} {/* Contact Us */}
        </h2>
 {loading? <div className="flex items-center justify-center"> <Loader /> </div>:(<form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
            aria-label={t("name")}
          />
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
            aria-label={t("email")}
          />
          <input
            type="tel"
            name="number"
            placeholder={t("number")}
            value={formData.number}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
            aria-label={t("number")}
          />
          <input
            type="text"
            name="brandName"
            placeholder={t("brandName")}
            value={formData.brandName}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
            aria-label={t("brandName")}
          />
          <textarea
            name="message"
            placeholder={t("message")}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 w-full rounded focus:ring-2 focus:ring-blue-500"
            aria-label={t("message")}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            {loading ? t("submitting") : t("submit")}
          </button>
        </form>)}
        {success && (
          <div className="fixed top-18 right-2  bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
            {success}
          </div>
        )}
      </div>
    </div>
  );
}
