"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import HomeNavbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function ContactUsPage() {

  return (
    <main className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <HomeNavbar />

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[500px] mt-[120px] flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_main.png"
            fill
            className="object-cover"
            alt="School Campus"
            priority
          />
          <div className="absolute inset-0 bg-orange-900/10"></div>
        </div>

        {/* Teal Bottom Bar */}
        <div className="relative z-10 w-full bg-[#489196]/95 backdrop-blur-sm py-4 md:py-6 flex items-center justify-center shadow-lg">
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      <ContactSection />

      {/* Full Width Map Section */}
      <section className="w-full relative h-[450px] md:h-[600px] mt-0">
        {/* Full width Map Embed */}
        <iframe
          src="https://maps.google.com/maps?q=Birla%20Heritage%20International%20School%20Siwan&hl=en&z=15&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>

        {/* Overlay Card on the right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-16 lg:right-32 bg-white/95 p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.15)] max-w-[400px] w-full text-center flex flex-col items-center z-10 hidden sm:flex border border-gray-100">
          <div className="mb-6 text-[#222]">
            {/* Building Icon */}
            <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7H22L12 2ZM2 9V22H5V9H2ZM19 9V22H22V9H19ZM7 9V22H10V9H7ZM14 9V22H17V9H14Z" />
              <path d="M0 22H24V24H0V22Z" />
            </svg>
          </div>
          <h3 className="text-[22px] font-bold text-[#111] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Birla Heritage School</h3>
          <div className="text-gray-600 text-[15px] leading-relaxed mb-8">
            <p>Survey No 813 - 817 Markan,</p>
            <p>Near Andar Dhala,</p>
            <p>Siwan, Bihar - 841226</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-700 font-medium text-[15px]">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <a href="tel:+919122899149" className="hover:text-blue-600 transition-colors">+91 9122899149</a>
            <span className="mx-1 text-gray-400">/</span>
            <a href="tel:+917633800196" className="hover:text-blue-600 transition-colors">7633800196</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
