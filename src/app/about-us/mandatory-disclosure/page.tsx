"use client";

import Image from "next/image";
import HomeNavbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";

export default function MandatoryDisclosurePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <HomeNavbar />

      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[550px] mt-[100px] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_main.png"
            fill
            className="object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite]"
            alt="Mandatory Disclosure Banner"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/90 via-[#111111]/70 to-[#003262]/40 mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 text-center md:text-left">
          <div className="inline-block mb-4 px-4 py-1.5 bg-[#FDB515]/20 backdrop-blur-md border border-[#FDB515]/30 rounded-full">
            <span className="text-[#FDB515] font-semibold tracking-wider text-sm uppercase">Transparency & Trust</span>
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-xl" style={{ fontFamily: 'var(--font-heading)' }}>
            Mandatory Disclosure
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-light">
            All essential information and documents transparently available for our community.
          </p>
        </div>

        {/* Decorative Bottom Wave/Curve */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-20"></div>

      </section>

      {/* Content Section Placeholder */}
      <section className="py-24 md:py-32 px-4 md:px-8 max-w-5xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12 w-full max-w-2xl shadow-sm">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
            Content Managed by Admin Panel
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            The data and documents for the Mandatory Disclosure section will be dynamically populated and managed directly from the administrative dashboard.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
