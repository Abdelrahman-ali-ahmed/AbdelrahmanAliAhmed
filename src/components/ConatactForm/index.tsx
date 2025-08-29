"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    brandName: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const params = new URLSearchParams(formData).toString(); // convert to query string
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyestfzQwd3sq0b1zeVRYbG9ff7RpQ9xHaJIcrPUr5v9ShglUj1npmoK8nGxClCEwek/exec?" +
          params,
        {
          method: "POST",
        }
      );

      const result = await response.json();
      if (result.success) {
        setSuccess("Form submitted successfully ✅ (ID: " + result.id + ")");
        setFormData({ name: "", email: "", number: "", brandName: "", message: "" }); // reset form
      } else {
        setSuccess("❌ Failed: " + result.error);
      }
    } catch (error) {
      setSuccess("❌ Error: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="number"
        placeholder="Number"
        value={formData.number}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        name="brandName"
        placeholder="Brand Name"
        value={formData.brandName}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>

      {success && <p>{success}</p>}
    </form>
  );
}
