"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Admissions",
      subMenu: [
        { name: "Admission Enquiry", href: "/admissions" },
        { name: "Admission Process", href: "/admission-process" },
      ],
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      {/* Top info bar */}
      <div className={`absolute top-0 left-0 right-0 z-30 w-full h-10 flex overflow-hidden ${montserrat.className}`}>
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
        <div className="bg-[#126b59] flex-1 px-4 md:px-8 flex items-center justify-between text-white overflow-hidden">
          <div className="flex items-center gap-4 h-full w-full overflow-hidden">
            <Link href="#" className="text-[13px] md:text-sm font-medium hover:text-[#F9A826] whitespace-nowrap shrink-0 transition-colors">Admin Login</Link>
            <div className="w-[1px] h-4 bg-black/40 shrink-0"></div>
            <div className="flex-1 overflow-hidden relative flex items-center h-full">
              <div className="whitespace-nowrap text-[13px] w-full animate-marquee inline-block">
                Important announcement or latest news updates goes here.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 h-full pl-4 shrink-0">
            <div className="w-[1px] h-4 bg-white/30 hidden md:block"></div>
            <a href="tel:+919122899149" className="flex items-center gap-2 text-[13px] md:text-sm font-medium hover:text-[#F9A826] whitespace-nowrap transition-colors">
              <svg className="w-4 h-4 text-[#F9A826]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              +91 9122899149
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 w-full transition-all duration-300 bg-white ${montserrat.className} ${
          scrolled
            ? "top-0 shadow-md py-3"
            : "top-10 shadow-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline shrink-0">
            <Image
              src="/modern-school-logo-featuring-stylized-book-icon-symbolizing-education-learning-sleek-design-graduation-cap-315282989.webp"
              alt="Birla Heritage Siwan Logo"
              width={500}
              height={160}
              className="h-14 md:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-6">
            {navLinks.map((item) =>
              item.subMenu ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-1 px-2 py-2.5 rounded-lg text-[15px] font-semibold text-gray-800 hover:text-[#f97316] transition-colors duration-200" style={{fontFamily:'var(--font-heading)'}}>
                    {item.name}
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50 min-w-[220px]">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                      {item.subMenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center gap-3 px-5 py-3 text-[15px] font-medium text-gray-700 hover:text-[#f97316] hover:bg-orange-50 transition-all duration-150 no-underline"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                   key={item.name}
                   href={item.href!}
                   className="px-2 py-2.5 rounded-lg text-[15px] font-semibold text-gray-800 hover:text-[#f97316] transition-colors duration-200 no-underline"
                   style={{fontFamily:'var(--font-heading)'}}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/admissions"
              className="btn-primary px-6 py-2.5 text-[15px] whitespace-nowrap no-underline"
            >
              Admissions
            </Link>
          </div>

          {/* Mobile: simple hamburger that links to a page or just shows key links */}
          <div className="lg:hidden flex items-center gap-2">
            <Link href="/admissions" className="btn-primary text-sm px-4 py-2 no-underline">
              Admissions
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
