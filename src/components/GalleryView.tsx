"use client";

import React, { useState, useEffect } from 'react';
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
  },
  {
    id: 11,
    title: "Computer Lab",
    category: "Campus",
    src: "/creative_college_bg.png",
  },
  {
    id: 12,
    title: "Playground Fun",
    category: "Student's Corner",
    src: "/WhatsApp Image 2024-12-21 at 17_07_edite.avif",
  },
  {
    id: 13,
    title: "Transport Facility",
    category: "Campus",
    src: "/event_bihar_1_1785832999825.png",
  },
  {
    id: 14,
    title: "Music Class",
    category: "Student's Corner",
    src: "/about_small.png",
  },
  {
    id: 15,
    title: "Medical Checkup",
    category: "Campus",
    src: "/event_bihar_2_1785833010076.png",
  },
  {
    id: 16,
    title: "Dance Performance",
    category: "Student's Corner",
    src: "/event_bihar_3_1785833022146.png",
  },
  {
    id: 17,
    title: "Robotics Club",
    category: "Student's Corner",
    src: "/test_student_1_1785833398588.png",
  },
  {
    id: 18,
    title: "Debate Competition",
    category: "Student's Corner",
    src: "/about_main.png",
  },
  {
    id: 19,
    title: "Green Campus",
    category: "Campus",
    src: "/event_bihar_4_1785833035313.png",
  },
  {
    id: 20,
    title: "Swimming Pool",
    category: "Campus",
    src: "/a30a8a_1dd13b7e94a54436908f58a57951ea45~mv2.avif",
  }
];

export default function GalleryView({ initialFilter = 'All' }: { initialFilter?: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset pagination when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [initialFilter]);

  const categories = [
    { name: 'All', path: '/gallery' },
    { name: 'Campus', path: '/gallery/campus' },
    { name: "Student's Corner", path: '/gallery/students-corner' }
  ];

  const filteredItems = initialFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === initialFilter);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
      <div className="w-full bg-[#003262] py-5 md:py-7 flex items-center justify-center">
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
                  ? 'bg-[#003262] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-[#003262] border border-gray-200'
                }`}
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Grid Layout & Pagination Wrapper */}
        <div className="flex flex-col min-h-[600px]">
          {/* Strict 3-Column Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paginatedItems.map((item) => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 bg-white flex flex-col"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="relative w-full aspect-[4/3] bg-gray-100">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    unoptimized
                  />
                </div>

                {/* Gradient Overlay & Title on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003262]/90 via-[#003262]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#FDB515] font-semibold text-sm uppercase tracking-wider mb-1">
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
            <div className="text-center py-20 flex-1 flex items-center justify-center">
              <h3 className="text-2xl font-semibold text-gray-500">No images found for this category.</h3>
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-gray-200">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[#003262] hover:text-white hover:border-[#003262] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full font-medium transition-colors ${
                      currentPage === i + 1 
                        ? 'bg-[#003262] text-white shadow-md' 
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-[#003262] hover:text-white hover:border-[#003262] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-600 disabled:hover:border-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          )}
        </div>
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
