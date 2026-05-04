"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
  requestType: string;
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
    contactMethod: "phone",
    requestType: "general",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  function validateField(field: keyof FormData, value: string): string | undefined {
    switch (field) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        break;
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[+]?[\d\s-()]{10,}$/.test(value)) return "Please enter a valid phone number";
        break;
      case "email":
        if (value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        break;
    }
    return undefined;
  }

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    (["name", "phone", "email", "message"] as const).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
    });

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
          contactMethod: "phone",
          requestType: "general",
          message: "",
        });
        setErrors({});
        setTouched({});
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

    // Real-time validation for touched fields
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  }

  function handleBlur(field: keyof FormData) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-signal-500">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            className={errors.name && touched.name ? "border-red-500" : ""}
            placeholder="Your full name"
          />
          {errors.name && touched.name && (
            <p className="text-xs text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Phone <span className="text-signal-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            className={errors.phone && touched.phone ? "border-red-500" : ""}
            placeholder="+91 94180 00309"
          />
          {errors.phone && touched.phone && (
            <p className="text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-ink-600">(optional)</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={errors.email && touched.email ? "border-red-500" : ""}
            placeholder="your@email.com"
          />
          {errors.email && touched.email && (
            <p className="text-xs text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactMethod">Preferred Contact Method</Label>
          <Select
            value={formData.contactMethod}
            onValueChange={(value) => handleChange("contactMethod", value)}
          >
            <SelectTrigger id="contactMethod">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="phone">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Call
                </div>
              </SelectItem>
              <SelectItem value="email">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </div>
              </SelectItem>
              <SelectItem value="whatsapp">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="requestType">Request Type</Label>
        <Select
          value={formData.requestType}
          onValueChange={(value) => handleChange("requestType", value)}
        >
          <SelectTrigger id="requestType">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General Inquiry</SelectItem>
            <SelectItem value="quote">Request Quote</SelectItem>
            <SelectItem value="bulk">Bulk Order</SelectItem>
            <SelectItem value="technical">Technical Support</SelectItem>
            <SelectItem value="catalog">Catalog Request</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-signal-500">*</span>
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onBlur={() => handleBlur("message")}
          className={errors.message && touched.message ? "border-red-500" : ""}
          rows={5}
          placeholder="Tell us about your requirement, preferred brands, quantity, or any specific questions..."
        />
        {errors.message && touched.message && (
          <p className="text-xs text-red-600">{errors.message}</p>
        )}
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

      <Button
        type="submit"
        disabled={isSubmitting}
        className="button-primary w-full"
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
      </Button>

      <p className="text-center text-xs text-ink-600">
        We typically respond within 24 hours during business hours (Mon-Sat, 9AM-7PM IST)
      </p>
    </form>
  );
}
