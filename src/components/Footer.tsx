"use client";
import Link from "next/link";
import Image from "next/image";

const menuLinks = [
  { name: "Home", submenu: [] },
  { name: "Academics", submenu: ["Programme", "Academic Staff", "Administrative Records", "Fee Structure", "Facilities", "Students 2025-26", "Academic Cal 2025-26", "UP Praman"] },
  { name: "Student", submenu: ["Admission", "Program Fee", "Exam Form", "Result"] },
  { name: "Committee", submenu: [] },
  { name: "IQAC", submenu: [] },
  { name: "Affiliation", submenu: [] },
  { name: "RTI", submenu: [] },
  { name: "Contact Us", submenu: [] },
  { name: "Library", submenu: [] },
  { name: "ITEP", submenu: ["Itep Staff Perticular", "FDR", "Form A", "Mandatory Disclosure"] },
  { name: "NAAC", submenu: ["IIQA", "SSR", "AQAR 2021-22", "AQAR 2022-23", "AQAR 2023-24", "NAAC Certificate", "NAAC Quality Profile"] },
  { name: "NIRF", submenu: ["Department Of Science", "Department Of Art", "Department Of Commerce"] },
];

const quickLinks = ["Apply", "Visit", "Calendar", "Parent Zone", "Student Login"];

const footerImages = [
  "/footerimage/1.png",
  "/footerimage/2.png",
  "/footerimage/3.png",
  "/footerimage/9.png",
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-white">

      {/* Main Footer Body */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_220px] gap-12 lg:gap-10">

        {/* Col 1: Logo + About */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="block w-fit">
            <Image
              src="/logo (1).png"
              alt="Bhagwan Aadinath College Logo"
              width={260}
              height={90}
              className="h-20 w-auto object-contain object-left"
              priority
            />
          </Link>
          <p className="text-gray-400 text-[14px] leading-relaxed">
            Bhagwan Aadinath College of Education aims to being a marvellous change in the field of teacher education. Active, smart, well equipped teachers enriched with knowledge of all modern teaching techniques are going to be the product of Bhagwan Aadinath College of Education.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-3 text-gray-400 text-[13.5px] font-medium">
              <div className="bg-[#F9C301] rounded flex items-center justify-center w-7 h-7 flex-shrink-0 text-[#111]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <span>+91 9453675775, +91 8545844444</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 text-[13.5px] font-medium">
              <div className="bg-[#F9C301] rounded flex items-center justify-center w-7 h-7 flex-shrink-0 text-[#111]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <span>bhagwanaadinath686@gmail.com</span>
            </div>
            <div className="flex items-start gap-3 text-gray-400 text-[13.5px] font-medium">
              <div className="bg-[#F9C301] rounded flex items-center justify-center w-7 h-7 flex-shrink-0 text-[#111]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <span className="mt-1">Jhansi Road, Maharra Lalitpur-284403</span>
            </div>
          </div>
          {/* Social */}
          <div className="flex items-center gap-3 mt-2">
            <Link href="#" className="w-9 h-9 flex items-center justify-center border border-white/15 rounded hover:border-[#F9C301] hover:text-[#F9C301] text-gray-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 flex items-center justify-center border border-white/15 rounded hover:border-[#F9C301] hover:text-[#F9C301] text-gray-400 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </Link>
            <Link href="#" className="w-9 h-9 flex items-center justify-center border border-white/15 rounded hover:border-[#F9C301] hover:text-[#F9C301] text-gray-400 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111"/></svg>
            </Link>
          </div>
        </div>

        {/* Col 2: Navigation with hover submenus — same as Navbar */}
        <div>
          <h4 className="text-white font-bold text-[15px] uppercase tracking-[0.18em] mb-6 flex items-center gap-3">
            <span className="block w-5 h-[2px] bg-[#F9C301]"></span>
            Navigation
          </h4>
          <div className="flex flex-col gap-3">
            {menuLinks.map((link) => (
              <div key={link.name} className="group relative w-fit">
                <Link
                  href="#"
                  className="text-gray-400 text-[13.5px] font-medium hover:text-[#F9C301] transition-colors flex items-center gap-2"
                >
                  <span className="block w-1 h-1 rounded-full bg-[#F9C301] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                  {link.name}
                  {link.submenu.length > 0 && (
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"/>
                    </svg>
                  )}
                </Link>
                {/* Hover Submenu — same mechanism as Navbar */}
                {link.submenu.length > 0 && (
                  <div className="absolute left-0 top-full z-50 pt-1 hidden group-hover:block">
                    <div className="bg-[#1a1a1a] border-t-[3px] border-[#F9C301] shadow-xl min-w-[220px]">
                      {link.submenu.map((sub, idx) => (
                        <Link
                          key={sub}
                          href="#"
                          className={`block text-white text-[13px] font-normal py-2.5 px-5 hover:bg-[#2a2a2a] hover:text-[#F9C301] transition-colors ${idx !== link.submenu.length - 1 ? "border-b border-white/10" : ""}`}
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-[15px] uppercase tracking-[0.18em] mb-6 flex items-center gap-3">
            <span className="block w-5 h-[2px] bg-[#F9C301]"></span>
            Quick Links
          </h4>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-gray-400 text-[13.5px] font-medium hover:text-[#F9C301] transition-colors flex items-center gap-2 group w-fit"
              >
                <span className="block w-1 h-1 rounded-full bg-[#F9C301] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></span>
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4: Gallery Images stacked on main axis */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-bold text-[15px] uppercase tracking-[0.18em] mb-2 flex items-center gap-3">
            <span className="block w-5 h-[2px] bg-[#F9C301]"></span>
            Gallery
          </h4>
          {footerImages.map((src, idx) => (
            <div key={idx} className="relative w-full h-[86px] overflow-hidden group border border-white/10 hover:border-[#F9C301] transition-colors bg-white rounded-md p-2">
              <Image
                src={src}
                alt={`Gallery Logo ${idx + 1}`}
                fill
                className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-500 text-[13.5px]">
            © Copyright {new Date().getFullYear()} All rights reserved by <span className="text-[#F9C301] font-medium">Nighwan Technology Private Limited</span>
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 text-[13px] hover:text-[#F9C301] transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 text-[13px] hover:text-[#F9C301] transition-colors">Terms of Use</Link>
            <Link href="#" className="text-gray-500 text-[13px] hover:text-[#F9C301] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
