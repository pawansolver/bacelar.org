"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const heroSlides = [
  {
    image: "/vcimage/vc.2.jpeg",
    subtitle: "BUNDELKHAND UNIVERSITY VC",
    title: "Meeting With VC\nBundelkhand University\nJhansi",
    desc: "Meeting with VC Bundelkhand University Jhansi"
  },
  {
    image: "/vcimage/vc image.jpeg",
    subtitle: "PRIZE DISTRIBUTION",
    title: "Prize Distribution",
    desc: "Prize Distribution"
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Auto-slide every 5 seconds
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      {/* Background Images Slider */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out z-0 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image 
            src={slide.image} 
            alt={`Hero background ${idx + 1}`}
            fill
            className="object-cover object-center"
            priority={idx === 0}
          />
        </div>
      ))}

      {/* Dark Overlay for Text Readability */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%), linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 30%)'
        }}
      ></div>

      {/* Navbar (includes overlay menu) */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-12 h-full flex flex-col pt-32 pb-20">
        <div className="mt-auto mb-auto max-w-2xl transition-all duration-700 transform translate-y-0 opacity-100">
          
          {/* Subtitle with Icon (Line Removed) */}
          <div className="flex items-center gap-3 text-[#F9C301] font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            {heroSlides[current].subtitle}
          </div>

          {/* Main Title */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-bold tracking-tight drop-shadow-lg whitespace-pre-line">
            {heroSlides[current].title}
          </h1>
          
          {/* Small Description */}
          <p className="text-white/90 text-base md:text-lg mt-6 font-medium drop-shadow-md">
            {heroSlides[current].desc}
          </p>

        </div>
        
        {/* Slider Indicators */}
        <div className="flex gap-3 mt-auto">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-10 bg-[#F9C301]" : "w-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
}
