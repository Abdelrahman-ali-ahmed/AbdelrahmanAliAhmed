"use client";
import Loader from "../Loader";
import useContactForm from "./useContactForm";

import { focusInputColorDark, focusInputColorLight, gradientColor, gradientTextColor, hoverCardColorGlassDark, hoverCardColorGlassLight } from "../Color";
// Import network background for glass effect


export default function ContactForm() {
  const { t, formData, loading, success, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
  <div className="mx-auto px-6 relative z-10">
    {/* Glass Card with Hover Effect */}
    <div
      className={`max-w-4xl mx-auto rounded-2xl p-8 md:p-12 lg:p-16
                  bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-2xl
                  border border-white/20 dark:border-white/10 hover:scale-105
                  transition-all duration-300 
                  ${hoverCardColorGlassLight} ${hoverCardColorGlassDark}`}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className={`text-3xl md:text-5xl font-extrabold mb-4 ${gradientTextColor}`}>
          {t("title")}
        </h2>
        <p className="text-lg text-black dark:text-white max-w-2xl mx-auto mb-2">
          {t("fillForm")}
        </p>
      </div>

      {/* Form */}
      {loading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder={t("name")}
              value={formData.name}
              onChange={handleChange}
              aria-label={t("name")}
              className={`w-full rounded-lg py-3 px-4
                text-black dark:text-white bg-white/20 dark:bg-white/10
                placeholder:text-gray-600 dark:placeholder:text-gray-400
                focus:outline-none focus:ring-4 ${focusInputColorLight} ${focusInputColorDark}
                transition-all duration-300`}
              required
            />

            {/* Number */}
            <input
              type="tel"
              name="number"
              placeholder={t("number")}
              value={formData.number}
              onChange={handleChange}
              aria-label={t("number")}
              className={`w-full rounded-lg py-3 px-4
                text-black dark:text-white bg-white/20 dark:bg-white/10
                placeholder:text-gray-600 dark:placeholder:text-gray-400
                focus:outline-none focus:ring-4 ${focusInputColorLight} ${focusInputColorDark}
                transition-all duration-300`}
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            aria-label={t("email")}
            className={`w-full rounded-lg py-3 px-4
              text-black dark:text-white bg-white/20 dark:bg-white/10
              placeholder:text-gray-600 dark:placeholder:text-gray-400
              focus:outline-none focus:ring-4 ${focusInputColorLight} ${focusInputColorDark}
              transition-all duration-300`}
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder={t("message")}
            value={formData.message}
            onChange={handleChange}
            aria-label={t("message")}
            rows={4}
            className={`w-full rounded-lg py-3 px-4 resize-none
              text-black dark:text-white bg-white/20 dark:bg-white/10
              placeholder:text-gray-600 dark:placeholder:text-gray-400
              focus:outline-none focus:ring-4 ${focusInputColorLight} ${focusInputColorDark}
              transition-all duration-300`}
          />

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto ${gradientColor} text-white font-bold text-lg 
                py-3 px-12 rounded-full hover:opacity-90 transition duration-300`}
            >
              {loading ? t("submitting") : t("submit")}
            </button>
          </div>
        </form>
      )}

      {/* Success Message */}
      {success && (
        <div className="fixed top-18 right-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in">
          {success}
        </div>
      )}
    </div>
  </div>
</section>


  );
}
