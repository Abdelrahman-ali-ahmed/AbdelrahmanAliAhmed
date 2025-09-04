"use client";

import Loader from "../Loader";
import useContactForm from "./useContactForm";

export default function ContactForm() {
  const { t, formData, loading, success, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="glass-effect rounded-2xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto bg-white/10 backdrop-blur-md shadow-2xl transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 reveal bg-gradient-to-r from-[#30C59B] to-[#00A3FF] bg-clip-text text-transparent">
              {t("title")} {/* Contact Us */}
            </h2>
            <p className="text-lg text-black dark:text-white max-w-2xl mx-auto mb-2 reveal" style={{ transitionDelay: "150ms" }}>
              {/* Add a description if needed */}
             {t("fillForm")}
            </p>
            <p className="text-sm text-gray-500 reveal" style={{ transitionDelay: "200ms" }}>
              Ibda Digital - التسويق الرقمي
            </p>
          </div>

          {/* Form */}
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
                <input
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  value={formData.name}
                  onChange={handleChange}
                  aria-label={t("name")}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  required
                />
                <input
                  type="tel"
                  name="number"
                  placeholder={t("number")}
                  value={formData.number}
                  onChange={handleChange}
                  aria-label={t("number")}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  required
                />
              </div>
              <div className="reveal">
                <input
                  type="email"
                  name="email"
                  placeholder={t("email")}
                  value={formData.email}
                  onChange={handleChange}
                  aria-label={t("email")}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                  required
                />
              </div>
              <div className="reveal">
                <input
                  type="text"
                  name="brandName"
                  placeholder={t("brandName")}
                  value={formData.brandName}
                  onChange={handleChange}
                  aria-label={t("brandName")}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>
              <div className="reveal">
                <textarea
                  name="message"
                  placeholder={t("message")}
                  value={formData.message}
                  onChange={handleChange}
                  aria-label={t("message")}
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                />
              </div>
              <div className="text-center reveal">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto  bg-gradient-to-r from-[#30C59B] to-[#00A3FF] text-white font-bold text-lg py-3 px-12 rounded-full hover:opacity-90 transition"
                >
                  {loading ? t("submitting") : t("submit")}
                </button>
              </div>
            </form>
          )}

          {/* Success message */}
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
