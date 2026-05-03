"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    interest: "general",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          interest: "general",
          message: "",
        });
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-ink-950">
            Name <span className="text-signal-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`mt-2 w-full rounded-xl border ${
              errors.name ? "border-red-500" : "border-ink-950/12"
            } bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-signal-500 focus:ring-2 focus:ring-signal-500/20`}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-ink-950">
            Phone <span className="text-signal-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`mt-2 w-full rounded-xl border ${
              errors.phone ? "border-red-500" : "border-ink-950/12"
            } bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-signal-500 focus:ring-2 focus:ring-signal-500/20`}
            placeholder="+91 94180 00309"
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-ink-950">
            Email <span className="text-ink-600">(optional)</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`mt-2 w-full rounded-xl border ${
              errors.email ? "border-red-500" : "border-ink-950/12"
            } bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-signal-500 focus:ring-2 focus:ring-signal-500/20`}
            placeholder="your@email.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-ink-950">
            Product Interest
          </label>
          <select
            id="interest"
            value={formData.interest}
            onChange={(e) => handleChange("interest", e.target.value)}
            className="mt-2 w-full rounded-xl border border-ink-950/12 bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-signal-500 focus:ring-2 focus:ring-signal-500/20"
          >
            <option value="general">General Inquiry</option>
            <option value="switchgear">Switchgear & Wiring</option>
            <option value="lighting">Lighting & Fans</option>
            <option value="conduits">Conduits & Fixtures</option>
            <option value="bulk">Bulk/Project Supply</option>
            <option value="catalog">Catalog Request</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-ink-950">
          Message <span className="text-signal-500">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          className={`mt-2 w-full rounded-xl border ${
            errors.message ? "border-red-500" : "border-ink-950/12"
          } bg-white px-4 py-3 text-sm text-ink-950 outline-none transition focus:border-signal-500 focus:ring-2 focus:ring-signal-500/20`}
          placeholder="Tell us about your requirement, preferred brands, quantity, or any specific questions..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-50 px-4 py-3 text-sm text-green-800"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <p>Thank you! We'll get back to you within 24 hours.</p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p>Something went wrong. Please try WhatsApp or call us directly.</p>
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="h-4 w-4" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-ink-600">
        We typically respond within 24 hours during business hours (Mon-Sat, 9AM-7PM IST)
      </p>
    </form>
  );
}
