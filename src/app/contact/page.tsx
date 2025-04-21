"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    message: "Hi, I would like to know more about the tours.", // Default message
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = () => {
    const phone = "9609778879"; // Maldives number without +
    const text = `Hi, I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen text-orange-900 bg-orange-50">
      <div className="max-w-3xl px-4 py-16 mx-auto">
        <h1 className="mb-4 text-4xl font-bold text-center">Chat With Us</h1>
        <p className="mb-10 text-center text-gray-700">
          Fill in your name and message to start a WhatsApp chat with our team.
        </p>

        <div className="p-6 space-y-6 bg-white shadow-md rounded-xl">
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            onClick={handleWhatsApp}
            className="w-full py-2 font-semibold text-white transition bg-green-600 rounded-md hover:bg-green-700"
          >
            Send via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
