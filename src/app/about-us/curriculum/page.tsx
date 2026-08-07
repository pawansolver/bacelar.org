"use client";

import Image from "next/image";
import HomeNavbar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <HomeNavbar />

      {/* Hero Section */}
      <section className="relative w-full h-[350px] md:h-[500px] mt-[120px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about_main.png"
            fill
            className="object-cover object-center"
            alt="Curriculum Banner"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-orange-900/10"></div>
        </div>

        {/* Teal Bottom Bar */}
        <div className="relative z-10 w-full bg-[#489196]/95 backdrop-blur-sm py-4 md:py-6 flex items-center justify-center shadow-lg">
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
            Curriculum
          </h1>
        </div>
        
        {/* Floating Contact Tab */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
          <a
            href="/contact-us"
            className="bg-[#de5c6c] hover:bg-[#c94555] transition-colors text-white font-bold text-xs tracking-widest py-4 px-2 rounded-l-md shadow-md flex items-center justify-center"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            CONTACT
          </a>
        </div>
      </section>

      {/* Section 1: Welcome to BOMIS */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-6">
        <div className="text-center mb-10">
          <h2 className="heading-xl text-3xl md:text-5xl inline-block relative max-w-5xl">
            Welcome to BOMIS
          </h2>
        </div>
          <div className="bg-[#fff0f3] p-8 md:p-12 shadow-sm border border-[#ffe3e8]">
            <div className="text-gray-700 text-base md:text-lg leading-relaxed flex flex-col gap-4 text-justify font-medium">
              <p>
                Birla Open Minds International School - CBSE School (BOMIS), offers a comprehensive solution for education that envelops the individual's learning period right from the formative early years to K-12 schooling.
              </p>
              <p>
                Birla Open Minds International School - CBSE School (BOMIS) encompasses wide-ranging interests in the sphere of high quality education with dedication to excellence.
              </p>
              <p>
                Today, Birla Edutech Limited has a close-knit network of academicians, researchers and professionals. We focus on providing contemporary and world-class education for NURTURING INDIAS TOMORROW.
              </p>
              <p>
                The Birla Open Minds International School - CBSE School provide a nurturing environment wherein young children feel loved, cared, secured, respected and valued. The school focuses on 4 C's: Care, Co-operation, Collaboration and Courtesy. We believe that today's children are tomorrow's leaders!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CBSE */}
      <section className="py-16 md:py-20 px-4 md:px-8 max-w-6xl mx-auto w-full">
        <div className="flex flex-col gap-6">
        <div className="text-center mb-10">
          <h2 className="heading-xl text-3xl md:text-5xl inline-block relative max-w-5xl">
            CBSE
          </h2>
        </div>
          <div className="bg-[#fff0f3] p-8 md:p-12 shadow-sm border border-[#ffe3e8]">
            <div className="text-gray-700 text-base md:text-lg leading-relaxed text-justify font-medium">
              <p>
                Welcome to Birla Open Minds International School, Siwan, a school for CBSE students. Our programs are designed to enhance the academic and personal development of our students. We provide a supportive and stimulating environment for students to learn and grow. We offer a wide range of programs to meet the needs and interests of our students. Our programs include academic subjects such as Math, Science, and English, as well as extracurricular activities such as sports, music, and art. Our experienced and dedicated teachers work closely with our students to help them achieve their full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
