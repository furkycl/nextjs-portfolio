"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      toast.success("Message sent successfully!");
      (event.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-[#0A192F]">
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#E6F1FF] mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, feel free to drop a message.
          I&apos;ll get back to you!
        </p>

        <motion.form
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full bg-[#112240] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] transition"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full bg-[#112240] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] transition"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full bg-[#112240] border border-gray-600 rounded-md p-3 text-white focus:ring-2 focus:ring-[#00BFFF] focus:border-[#00BFFF] transition"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-[#00BFFF] text-[#0A192F] rounded-md font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
