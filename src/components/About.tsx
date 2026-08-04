import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2015", label: "Established" },
  { value: "\"A\"", label: "NAAC Grade" },
  { value: "5+", label: "Programs" },
  { value: "2025", label: "Autonomous" },
];

export default function About() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Top Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-[3px] bg-[#F9C301]"></span>
          <span className="text-[#F9C301] font-bold tracking-[0.25em] text-xs uppercase">About Us</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT — Images */}
          <div className="w-full lg:w-[48%] flex-shrink-0 relative">

            {/* Main Image */}
            <div className="relative w-full h-[420px] md:h-[480px]">
              <Image
                src="/about_main.png"
                fill
                alt="Bhagwan Aadinath College Campus"
                className="object-cover"
                priority
              />
              {/* Yellow accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#F9C301]"></div>
            </div>

            {/* Floating small image */}
            <div className="absolute bottom-[-28px] right-[-12px] md:right-[-24px] w-[44%] shadow-2xl border-4 border-white hidden sm:block">
              <div className="relative w-full h-[160px]">
                <Image
                  src="/about_small.png"
                  fill
                  alt="Students collaborating"
                  className="object-cover"
                />
              </div>
              <div className="bg-[#111111] px-4 py-3">
                <p className="text-white text-[13px] font-semibold leading-tight">Exploring Science<br />Through Discovery</p>
              </div>
            </div>

            {/* Media Controls */}
            <div className="absolute bottom-0 left-0 bg-white shadow-xl px-5 py-3 flex items-center gap-4 border-t-2 border-[#F9C301]">
              <button className="text-[#111111] hover:text-[#F9C301] transition-colors" aria-label="Previous">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="15,4 7,12 15,20" /></svg>
              </button>
              <button className="text-[#111111] hover:text-[#F9C301] transition-colors" aria-label="Next">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><polygon points="9,4 17,12 9,20" /></svg>
              </button>
              <div className="w-px h-4 bg-gray-300"></div>
              <button className="text-[#111111] hover:text-[#F9C301] transition-colors" aria-label="Pause">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
              </button>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="w-full lg:w-[52%] pt-0 lg:pt-2 pb-8">

            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#111111] leading-[1.15] mb-5">
              Bhagwan Aadinath College<br />Of <span className="text-[#F9C301]">Education</span>
            </h2>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-3">
              Bhagwan Aadinath College of Education aims to being a marvellous change in the field of teacher education. Active, smart, well equipped teachers enriched with knowledge of all modern teaching techniques are going to be the product of this institute.
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-7">
              The College is situated amongst agricultural fields, in a serene and inspiring environment. Established in 2015, run under the Digambar Jain Education Welfayar Society, it is a Minority Institution accredited with <strong className="text-[#111111]">"A" Grade by NAAC</strong> and declared Autonomous by UGC in 2025. It offers courses like B.A., B.Sc., B.Com., B.Ed., and B.P.Ed., recognised by UGC 12B & 2f & NCTE.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4 mb-8 border-t border-b border-gray-100 py-5">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#111111]">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-widest text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="#"
                className="bg-[#F9C301] hover:bg-[#E0B001] text-[#111111] font-bold px-7 py-3.5 inline-flex items-center gap-2 transition-colors shadow uppercase text-sm tracking-widest"
              >
                Discover More <span className="text-base">→</span>
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-[#0a0a0a] flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F9C301] font-semibold text-xs uppercase tracking-wider">Call Now</p>
                  <p className="text-[#0a0a0a] font-extrabold text-lg leading-tight">+91 9415508353</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
