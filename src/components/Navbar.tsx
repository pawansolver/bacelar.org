"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- TOP HEADER BAR --- */}
      <div className="absolute top-0 left-0 right-0 z-30 w-full h-10 flex overflow-hidden font-sans">
        {/* Left Orange Section */}
        <div className="bg-[#F9A826] px-4 md:px-8 flex items-center gap-2 md:gap-3 shrink-0">
          <span className="text-white font-medium text-[13px] md:text-sm whitespace-nowrap hidden md:inline">Follow Us:</span>
          <span className="text-white font-medium text-[13px] md:text-sm whitespace-nowrap md:hidden">Follow:</span>
          <Link href="#" className="bg-[#126b59] text-white p-1 rounded-full hover:opacity-80 transition-opacity flex items-center justify-center w-6 h-6">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </Link>
          <Link href="#" className="bg-[#126b59] text-white p-1 rounded-full hover:opacity-80 transition-opacity flex items-center justify-center w-6 h-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </Link>
        </div>

        {/* Right Green Section */}
        <div className="bg-[#126b59] flex-1 px-4 md:px-8 flex items-center justify-between text-white overflow-hidden">
          <div className="flex items-center gap-4 h-full w-full overflow-hidden">
            <Link href="#" className="text-[13px] md:text-sm font-medium hover:text-[#F9A826] whitespace-nowrap shrink-0 transition-colors">Admin Login</Link>
            <div className="w-[1px] h-4 bg-black/40 shrink-0"></div>
            
            {/* Scrolling Marquee for long text */}
            <div className="flex-1 overflow-hidden relative flex items-center h-full">
              <div className="whitespace-nowrap text-[13px] w-full animate-marquee inline-block">
                Important announcement or latest news updates goes here.
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 h-full pl-4 shrink-0 bg-[#126b59] z-10 relative">
            <div className="w-[1px] h-4 bg-white/30 hidden md:block"></div>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-[13px] md:text-sm font-medium hover:text-[#F9A826] whitespace-nowrap transition-colors">
              <svg className="w-4 h-4 text-[#F9A826]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              +91 9876543210
            </a>
          </div>
        </div>
      </div>

      <header className="absolute top-10 left-0 right-0 z-20 w-full px-8 md:px-12 py-6 flex justify-between items-center">
        {/* Logo area */}
        <Link href="/" className="flex items-center no-underline">
          <Image
            src="/modern-school-logo-featuring-stylized-book-icon-symbolizing-education-learning-sleek-design-graduation-cap-315282989.webp"
            alt="Birla Heritage Siwan Logo"
            width={500}
            height={160}
            className="h-16 md:h-26 w-auto object-contain drop-shadow-lg"
            priority
          />
        </Link>

        {/* Right Nav / Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/10 backdrop-blur-md rounded-full px-1 border border-white/20 shadow-sm mr-4">
            <Link href="#" className="text-white text-[15px] font-semibold px-6 py-2.5 rounded-full transition-colors hover:bg-white/15">Apply</Link>
            <Link href="#" className="text-white text-[15px] font-semibold px-6 py-2.5 rounded-full transition-colors hover:bg-white/15">Visit</Link>
            <Link href="#" className="text-white text-[15px] font-semibold px-6 py-2.5 rounded-full transition-colors hover:bg-white/15">Calendar</Link>
            <Link href="#" className="text-white text-[15px] font-semibold px-6 py-2.5 rounded-full transition-colors hover:bg-white/15">Parent Zone</Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 bg-[#F9C301] hover:bg-[#E0B001] text-black border-none px-6 py-3 rounded-full text-[15px] font-bold cursor-pointer transition-all active:scale-95 shadow-md"
          >
            Menu
            <svg width="14" height="14" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="2" r="1.5" />
              <circle cx="2" cy="10" r="1.5" />
              <circle cx="10" cy="10" r="1.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* --- MENU OVERLAY --- */}
      <div
        className={`fixed inset-0 w-full h-[100dvh] flex z-40 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Left Side: Creative College Background */}
        <div className="hidden md:block md:w-[45%] h-full relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/creative_college_bg.png')" }}
          ></div>
          {/* Creative Gradient Overlay for a seamless blend */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-[#111111]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]"></div>

          {/* Decorative Text */}
          <div className="absolute bottom-16 left-12 right-12 z-10 border-l-4 border-[#F9C301] pl-6">
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-3 drop-shadow-md tracking-tight">Explore Your <br /><span className="text-[#F9C301]">Creativity</span></h2>
            <p className="text-white/90 text-lg font-medium drop-shadow-sm max-w-sm">Discover programs designed to inspire innovation and empower the next generation of leaders.</p>
          </div>
        </div>

        {/* Right Side: Menu Content */}
        <div className="w-full md:w-[55%] h-full bg-[#111111] flex flex-col relative shadow-[-10px_0_30px_rgba(0,0,0,0.3)]">
          {/* Header Bar */}
          <div className="w-full px-8 md:px-12 py-8 flex flex-col">
            <div className="flex justify-between items-start">
              {/* Links */}
              <div className="hidden sm:flex gap-8 mt-2">
                <Link href="#" className="text-white text-[15px] font-semibold hover:text-[#F9C301] transition-colors">Apply</Link>
                <Link href="#" className="text-white text-[15px] font-semibold hover:text-[#F9C301] transition-colors">Visit</Link>
                <Link href="#" className="text-white text-[15px] font-semibold hover:text-[#F9C301] transition-colors">Calendar</Link>
                <Link href="#" className="text-white text-[15px] font-semibold hover:text-[#F9C301] transition-colors">Parent Zone</Link>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 bg-[#F9C301] hover:bg-[#E0B001] text-black border-none px-6 py-2.5 rounded-full text-[15px] font-bold cursor-pointer transition-all active:scale-95 shadow-md ml-auto"
              >
                Close
                <svg width="12" height="12" viewBox="0 0 12 12" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="2" r="1.5" />
                  <circle cx="2" cy="10" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                </svg>
              </button>
            </div>

            {/* Search */}
            <div className="mt-8">
              <button className="flex items-center gap-2 text-[#F9C301] hover:text-[#E0B001] font-medium transition-colors text-[17px]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Main Menu Links */}
          <div className="flex-1 px-8 md:px-12 py-8 overflow-y-auto flex flex-col gap-5 pb-32">
            {[
              { name: 'Home' },
              { name: 'Academics', submenu: ['Programme', 'Academic Staff', 'Administrative Records', 'Fee Structure', 'Facilities', 'Students 2025-26', 'Academic Cal 2025-26', 'UP Praman'] },
              { name: 'Student', submenu: ['Admission', 'Program Fee', 'Exam Form', 'Result'] },
              { name: 'Committee' },
              { name: 'IQAC' },
              { name: 'Affiliation' },
              { name: 'RTI' },
              { name: 'Contact Us' },
              { name: 'Library' },
              { name: 'ITEP', submenu: ['Itep Staff Perticular', 'FDR', 'Form A', 'Mandatory Disclosure'] },
              { name: 'NAAC', submenu: ['IIQA', 'SSR', 'AQAR 2021-22', 'AQAR 2022-23', 'AQAR 2023-24', 'NAAC Certificate', 'NAAC Quality Profile'] },
              { name: 'NIRF', submenu: ['Department Of Science', 'Department Of Art', 'Department Of Commerce'] },
            ].map((item) => (
              <div key={item.name} className="group flex flex-col w-fit relative">
                <Link href="#" className="flex items-center gap-2 text-white text-lg md:text-xl font-semibold tracking-wide group-hover:text-[#F9C301] transition-colors no-underline w-fit">
                  {item.name}
                  {item.submenu && (
                    <svg className="w-5 h-5 stroke-[2.5px] mt-0.5 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Smooth expanding submenu using CSS grid transition */}
                {item.submenu && (
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <div className="flex flex-col mt-2 bg-[#1a1a1a] border-t-[3px] border-[#F9C301] shadow-lg w-max min-w-[260px] max-w-sm">
                        {item.submenu.map((subItem, idx) => (
                          <Link
                            key={subItem}
                            href="#"
                            className={`text-white text-[16px] font-normal py-3 px-6 hover:bg-[#2a2a2a] transition-colors no-underline ${idx !== item.submenu!.length - 1 ? 'border-b border-white/10' : ''}`}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Student Login Button */}
            <Link href="#" className="mt-4 bg-[#F9C301] hover:bg-[#E0B001] text-[#111111] font-bold text-[17px] px-8 py-3 rounded-full transition-colors w-fit shadow-md">
              Student Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
