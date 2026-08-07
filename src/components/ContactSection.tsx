"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { apiPost } from "@/lib/api";

const initialContactForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialContactForm);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name]) {
      setFieldErrors((prev) => { const next = { ...prev }; delete next[name]; return next; });
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback(null);
    setFieldErrors({});
    setSubmitting(true);

    const result = await apiPost("/api/contact", form);
    setSubmitting(false);

    if (!result.ok) {
      // Map field-level errors from backend
      if (result.errors && result.errors.length > 0) {
        const map: Record<string, string> = {};
        result.errors.forEach((e: any) => { if (e.field) map[e.field] = e.message; });
        setFieldErrors(map);
        setFeedback({ type: "error", text: "Please fix the errors below and try again." });
      } else {
        setFeedback({ type: "error", text: result.message });
      }
      return;
    }

    setForm(initialContactForm);
    setFeedback({
      type: "success",
      text: "✓ Thank you! Your message has been sent. We'll be in touch shortly.",
    });
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-start">

        {/* Left Side: Contact Information */}
        <div className="lg:col-span-4 flex flex-col space-y-6">
          <div>
            <h2 className="heading-lg text-3xl mb-3">Get in Touch</h2>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              We'd love to hear from you. Reach out to us with any questions or inquiries, and our team will get back to you promptly.
            </p>
          </div>

          <div className="space-y-5">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h3 className="heading-md text-xl mb-2">School Address</h3>
                <p className="text-gray-600 font-medium">Birla Heritage International School</p>
                <p className="text-gray-600 mt-1 leading-relaxed">
                  Survey No 813 - 817 Markan, Near Andar Dhala,<br />
                  Siwan, Bihar - 841226
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h3 className="heading-md text-xl mb-2">Contact Numbers</h3>
                <p className="text-gray-600 flex flex-col gap-1">
                  <a href="tel:+919122899149" className="hover:text-[#f97316] transition-colors">+91 9122899149</a>
                  <a href="tel:+917633800196" className="hover:text-[#f97316] transition-colors">+91 7633800196</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-[#f97316]/10 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 className="heading-md text-xl mb-2">Email Address</h3>
                <p className="text-gray-600 flex flex-col gap-1">
                  <a href="mailto:info@birlaheritagesiwan.com" className="hover:text-[#f97316] transition-colors">info@birlaheritagesiwan.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="lg:col-span-8">
          <div className="bg-black rounded-none flex flex-col overflow-hidden relative">

            {/* Subtle glowing aura behind the image (blue to left, green to right) */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/30 to-green-500/20 blur-[100px] pointer-events-none"></div>

            <div className="p-8 md:p-10 w-full flex flex-col items-center relative z-10">

              {/* Background Image Watermark */}
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[150%] h-[150%] relative max-w-[600px] max-h-[600px]">
                  <Image
                    src="/contact_orb.png"
                    alt="Glowing Orb Background"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="relative z-10 w-full flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide uppercase text-center mt-4">
                  GET IN TOUCH
                </h2>
                <p className="text-[#888888] text-[13px] mb-6 text-center max-w-lg">
                  Join the ranks of those who demand the best. Upgrade your experience today!
                </p>

                <form className="flex flex-col gap-3 w-full max-w-2xl mx-auto" onSubmit={onSubmit}>

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <input
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        type="text"
                        placeholder="Your name"
                        className={`w-full bg-black/80 border rounded-none px-3 py-2 text-gray-200 placeholder-[#666666] focus:outline-none transition-all duration-300 text-[14px] backdrop-blur-sm ${fieldErrors.name ? 'border-red-500' : 'border-[#222222] focus:border-[#444444]'
                          }`}
                        required
                      />
                      {fieldErrors.name && <span className="text-red-400 text-[11px] mt-1">{fieldErrors.name}</span>}
                    </div>
                    <div className="flex flex-col">
                      <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        type="email"
                        placeholder="Your email"
                        className={`w-full bg-black/80 border rounded-none px-3 py-2 text-gray-200 placeholder-[#666666] focus:outline-none transition-all duration-300 text-[14px] backdrop-blur-sm ${fieldErrors.email ? 'border-red-500' : 'border-[#222222] focus:border-[#444444]'
                          }`}
                        required
                      />
                      {fieldErrors.email && <span className="text-red-400 text-[11px] mt-1">{fieldErrors.email}</span>}
                    </div>
                  </div>

                  {/* Row 2: Phone */}
                  <div className="flex flex-col">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      type="tel"
                      placeholder="Your phone number (10 digits)"
                      className={`w-full bg-black/80 border rounded-none px-3 py-2 text-gray-200 placeholder-[#666666] focus:outline-none transition-all duration-300 text-[14px] backdrop-blur-sm ${fieldErrors.phone ? 'border-red-500' : 'border-[#222222] focus:border-[#444444]'
                        }`}
                      required
                    />
                    {fieldErrors.phone && <span className="text-red-400 text-[11px] mt-1">{fieldErrors.phone}</span>}
                  </div>

                  {/* Row 3: Message */}
                  <div className="flex flex-col">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      placeholder="Your message (min 10 characters)"
                      rows={3}
                      className={`w-full bg-black/80 border rounded-none px-3 py-2 text-gray-200 placeholder-[#666666] focus:outline-none transition-all duration-300 resize-none text-[14px] backdrop-blur-sm ${fieldErrors.message ? 'border-red-500' : 'border-[#222222] focus:border-[#444444]'
                        }`}
                      required
                    />
                    {fieldErrors.message && <span className="text-red-400 text-[11px] mt-1">{fieldErrors.message}</span>}
                  </div>

                  {feedback && (
                    <p className={`text-center text-sm ${feedback.type === "success" ? "text-green-400" : "text-red-400"}`}>
                      {feedback.text}
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="mt-3 flex justify-center">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="bg-black/90 border border-[#333333] hover:bg-[#111111] hover:border-[#555555] disabled:opacity-60 text-white font-bold py-2.5 px-10 rounded-none transition-all duration-300 text-[12px] tracking-widest uppercase backdrop-blur-sm"
                    >
                      {submitting ? "SENDING..." : "SEND"}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
