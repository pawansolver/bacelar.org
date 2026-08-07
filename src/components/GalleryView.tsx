"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HomeNavbar from '@/components/HomeNavbar';
import Footer from '@/components/Footer';

// Define the gallery items
const galleryItems = [
  {
    id: 1,
    title: "School Building",
    category: "Campus",
    src: "/creative_college_bg.png",
  },
  {
    id: 2,
    title: "Annual Sports Day",
    category: "Student's Corner",
    src: "/WhatsApp Image 2024-12-21 at 17_07_edite.avif",
  },
  {
    id: 3,
    title: "Cultural Event",
    category: "Campus",
    src: "/event_bihar_1_1785832999825.png",
  },
  {
    id: 4,
    title: "Students in Library",
    category: "Student's Corner",
    src: "/about_small.png",
  },
  {
    id: 5,
    title: "Science Exhibition",
    category: "Campus",
    src: "/event_bihar_2_1785833010076.png",
  },
  {
    id: 6,
    title: "Prize Distribution",
    category: "Campus",
    src: "/event_bihar_3_1785833022146.png",
  },
  {
    id: 7,
    title: "Student Activities",
    category: "Student's Corner",
    src: "/test_student_1_1785833398588.png",
  },
  {
    id: 8,
    title: "Art & Craft Seminar",
    category: "Student's Corner",
    src: "/about_main.png",
  },
  {
    id: 9,
    title: "Guest Lecture",
    category: "Campus",
    src: "/event_bihar_4_1785833035313.png",
  },
  {
    id: 10,
    title: "Modern Classrooms",
    category: "Campus",
    src: "/a30a8a_1dd13b7e94a54436908f58a57951ea45~mv2.avif",
  }
];

export default function GalleryView({ initialFilter = 'All' }: { initialFilter?: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { name: 'All', path: '/gallery' },
    { name: 'Campus', path: '/gallery/campus' },
    { name: "Student's Corner", path: '/gallery/students-corner' }
  ];

  const filteredItems = initialFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === initialFilter);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col pt-[136px]">
      <HomeNavbar />

      {/* Hero Image Banner */}
      <section className="relative w-full h-[40vh] md:h-[55vh]">
        <Image
          src="/creative_college_bg.png"
          alt="Gallery Campus Banner"
          fill
          className="object-cover object-center"
          priority
          unoptimized
        />
      </section>

      {/* Title Bar */}
      <div className="w-full bg-[#4B8C86] py-5 md:py-7 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide shadow-sm" style={{ fontFamily: 'var(--font-heading)' }}>
          Photo Gallery
        </h1>
      </div>

      {/* Gallery Content */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto w-full flex-1">

        {/* Filtering Tabs - Now Using Next.js Links */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-16">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.path}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 text-sm md:text-base no-underline ${initialFilter === cat.name
                  ? 'bg-[#126b59] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#126b59] border border-gray-200'
                }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 bg-white"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative w-full h-auto aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  unoptimized
                />
              </div>

              {/* Gradient Overlay & Title on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#312e81]/90 via-[#312e81]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#F9A826] font-semibold text-sm uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-500">No images found for this category.</h3>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm px-4">

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>

          {/* Full Image */}
          <div className="relative w-full max-w-5xl aspect-video md:aspect-[16/9] animate-zoom-in">
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Click Outside to Close */}
          <div
            className="absolute inset-0 z-[-1]"
            onClick={() => setSelectedImage(null)}
          ></div>
        </div>
      )}

      <Footer />

      {/* Basic Keyframe for Lightbox Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes zoom-in {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out forwards;
        }
      `}} />
    </main>
  );
}
