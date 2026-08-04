"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";

const content = [
  {
    title: "Research Facilities",
    description: "To develop research facilities in Teacher Education, fostering an environment of continuous learning, inquiry, and academic excellence.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative">
        <Image
          src="/obj_research_1785831334762.png"
          fill
          className="h-full w-full object-cover"
          alt="Research Facilities"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    ),
  },
  {
    title: "Innovative Courses",
    description: "To find out ways and means to identify innovative courses in Teacher Education, keeping pace with modern pedagogical advancements.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative">
        <Image
          src="/obj_courses_1785831347955.png"
          fill
          className="h-full w-full object-cover"
          alt="Innovative Courses"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    ),
  },
  {
    title: "Academic Distinction",
    description: "To institute degrees and other academic distinction in Teacher Education approved by NCTE, ensuring high standards of educational qualification.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative">
        <Image
          src="/obj_graduation_1785831358808.png"
          fill
          className="h-full w-full object-cover"
          alt="Academic Distinction"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    ),
  },
  {
    title: "Quality Standardisation",
    description: "To promote quality in Teacher Education and to standardize the system of operation, maintaining consistency and excellence in all academic endeavors.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white relative">
        <Image
          src="/obj_quality_1785831369236.png"
          fill
          className="h-full w-full object-cover"
          alt="Quality Standards"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    ),
  },
  {
    title: "Social Needs & Awareness",
    description: "To promote an awareness and understanding of the social needs of the country in the students and teachers and prepare them for fulfilling such needs.",
    content: (
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom_right,#F9C301,#E0B001)] text-black relative p-8 text-center">
        <div className="mb-6">
            <svg className="w-16 h-16 opacity-80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </div>
        <h3 className="text-3xl font-extrabold mb-4 text-[#111111]">Ready to make an impact?</h3>
        <p className="text-[#111111]/80 font-medium mb-8 max-w-xs">Join our community and become an educator who shapes the future.</p>
        <Link href="#" className="bg-[#111111] text-[#F9C301] px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-[13px] hover:bg-black transition-colors shadow-xl">
            Apply Now →
        </Link>
      </div>
    ),
  },
];

export default function ObjectivesSection() {
  return (
    <section className="w-full py-24 bg-[#fffdf5] relative overflow-hidden flex flex-col items-center border-t border-black/5">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] mb-5 tracking-tight">
          Our <span className="text-[#F9C301]">Objectives</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl font-medium">
          We are committed to excellence in Teacher Education, guided by clear principles and a vision to shape the future of our nation.
        </p>
      </div>
      
      <div className="w-full px-4 md:px-8 max-w-[90rem]">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
