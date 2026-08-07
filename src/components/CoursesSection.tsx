import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    id: 1,
    badge: "Degree",
    durationText: "3yrs Degree Program",
    title: "Bachelor of Arts (B.A.)",
    description: "Subject:- Hindi, English, Sanskrit, History, Political Science, History, Home Science, Education, Physical Education",
    seats: "60 Seats / Subject",
    fee: "₹ 4500/Y",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "Degree",
    durationText: "3yrs Degree Program",
    title: "Bachelor of Science (B.Sc.)",
    description: "Degree Program (Semester wise).",
    seats: "60 Seats",
    fee: "₹ 5500/Y",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    badge: "Degree",
    durationText: "3yrs Degree Program",
    title: "Bachelor of Commerce (B.Com)",
    description: "Degree Program (Semester wise).",
    seats: "60 Seats",
    fee: "₹ 5000/Y",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    badge: "Degree",
    durationText: "2yrs Degree Program",
    title: "Bachelor of Education (B.Ed.)",
    description: "Degree Program",
    seats: "200 Seats",
    fee: "₹ 51,250/Y",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    badge: "Degree",
    durationText: "2yrs Degree Program",
    title: "Bachelor of Physical Education (B.P.Ed)",
    description: "Degree Program (Semester wise)",
    seats: "100 Seats",
    fee: "₹ 42,600/Y",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    badge: "Diploma",
    durationText: "2yrs Diploma",
    title: "Diploma in Elementary Education (D.El.Ed.)",
    description: "Diploma (Semester wise)",
    seats: "100 Seats",
    fee: "₹ 41,000/Y",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    badge: "Degree",
    durationText: "4 yrs Degree Program",
    title: "Integrated Teacher Education Programme B.A.B.Ed.",
    description: "Degree Program (Semester wise)",
    seats: "50 Seats",
    fee: "₹ 40,000/Y",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    badge: "Degree",
    durationText: "4 yrs Degree Program",
    title: "Integrated Teacher Education Programme B.Sc.B.Ed.",
    description: "Degree Program (Semester wise)",
    seats: "50 Seats",
    fee: "₹ 40,000/Y",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=600&auto=format&fit=crop",
  }
];

export default function CoursesSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#111111] relative overflow-hidden">
      
      {/* Background Grid Pattern (SS 2 style) */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      {/* Top fade gradient to blend grid smoothly */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#111111] to-transparent z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-14 max-w-2xl">
          <h2 className="heading-xl text-4xl md:text-5xl mb-5 tracking-tight" style={{color:'#ffffff'}}>
            Let's Check Our Courses
          </h2>
          <p className="text-gray-400 text-[16px] md:text-lg leading-relaxed">
            Discover insightful programs and expert guidance from our seasoned faculty team to elevate your knowledge and build a strong career foundation.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {courses.map((course) => (
            <Link href="#" key={course.id} className="group flex flex-col bg-[#141414] rounded-none overflow-hidden border border-white/10 hover:border-[#F9C301]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl">
              
              {/* Image Section */}
              <div className="relative w-full h-[180px] overflow-hidden bg-gray-900">
                <Image 
                  src={course.image}
                  fill
                  alt={course.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4 bg-[#F9C301] text-[#111111] text-[11px] font-bold px-3 py-1.5 rounded-none flex items-center gap-1.5 shadow-md">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                  {course.badge}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                
                {/* Duration / Type */}
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-4 h-4 text-[#F9C301]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span className="text-[#F9C301] font-semibold text-[13px] tracking-wide uppercase">
                    {course.durationText}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#F9C301] transition-colors leading-tight">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-[13.5px] leading-relaxed mb-5 flex-1 line-clamp-3">
                  {course.description}
                </p>

                {/* Footer Data (Seats & Fee) */}
                <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                   <div className="flex items-center gap-2 text-gray-400 text-[13px]">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                     <span className="font-medium">{course.seats}</span>
                   </div>
                   <div className="bg-[#F9C301]/10 border border-[#F9C301]/30 px-2.5 py-1 rounded-none text-[#F9C301] font-bold text-[12px]">
                     {course.fee}
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
