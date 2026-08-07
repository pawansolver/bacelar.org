import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    title: "Career Counseling Workshop 2024",
    date: "16 June, 2024",
    time: "10.00AM - 04.00PM",
    location: "College Auditorium",
    description: "An interactive session guiding students on various career paths and professional opportunities available after graduation.",
    image: "/event_bihar_1_1785832999825.png"
  },
  {
    id: 2,
    title: "Annual Cultural Fest - Dance Performance",
    date: "20 June, 2024",
    time: "11.00AM - 05.00PM",
    location: "Main Campus Stage",
    description: "Join us for a spectacular display of talent as our students perform traditional and contemporary dances.",
    image: "/event_bihar_2_1785833010076.png"
  },
  {
    id: 3,
    title: "Freshers Welcome Celebration",
    date: "25 June, 2024",
    time: "10.00AM - 04.00PM",
    location: "College Courtyard",
    description: "A warm welcoming event for our new batch of students to familiarize themselves with the college culture and faculty.",
    image: "/event_bihar_3_1785833022146.png"
  },
  {
    id: 4,
    title: "Educational Seminar & Guest Lecture",
    date: "02 July, 2024",
    time: "09.30AM - 01.30PM",
    location: "Seminar Hall",
    description: "Expert guest lecturers sharing invaluable insights on modern educational methodologies and academic excellence.",
    image: "/event_bihar_4_1785833035313.png"
  }
];

export default function EventsSection() {
  const featuredEvent = events[0];
  const listEvents = events.slice(1);

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-6 h-[3px] bg-[#F9C301]"></span>
              <span className="text-[#F9C301] font-bold tracking-[0.2em] text-[12px] uppercase">Events</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
              Our Upcoming <span className="text-[#F9C301]">Events</span>
            </h2>
          </div>
          <Link href="#" className="bg-gray-100 hover:bg-gray-200 text-[#111111] px-7 py-3 rounded-full font-bold text-[13px] uppercase tracking-wider transition-colors border border-gray-200">
            All Events
          </Link>
        </div>

        {/* Content Flow (SS 1 Style) */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* Left: Featured Event */}
          <Link href="#" className="group lg:w-7/12 relative h-[400px] lg:h-[480px] rounded-none overflow-hidden block shadow-xl border border-gray-100">
            <Image
              src={featuredEvent.image}
              alt={featuredEvent.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent"></div>

            {/* Featured Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full">
              {/* Event Meta */}
              <div className="flex flex-wrap items-center gap-4 text-white/90 text-sm font-semibold mb-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#F9C301]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {featuredEvent.date}
                </span>
                <span className="hidden sm:inline text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#F9C301]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  {featuredEvent.time}
                </span>
                <span className="hidden sm:inline text-white/40">•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#F9C301]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  {featuredEvent.location}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white text-3xl md:text-4xl font-extrabold group-hover:text-[#F9C301] transition-colors leading-tight mb-3">
                {featuredEvent.title}
              </h3>

              {/* Description & Action */}
              <p className="text-gray-300 text-[15px] max-w-xl mb-6 line-clamp-2">
                {featuredEvent.description}
              </p>
              <div className="flex items-center gap-2 text-[#F9C301] font-bold text-sm tracking-widest uppercase">
                Join Event
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          </Link>

          {/* Right: List of Events */}
          <div className="lg:w-5/12 flex flex-col justify-between gap-3">
            {listEvents.map((event) => (
              <Link href="#" key={event.id} className="group flex flex-col sm:flex-row gap-4 p-3 rounded-none hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md">
                {/* Thumbnail */}
                <div className="w-full sm:w-32 h-48 sm:h-28 relative rounded-none overflow-hidden flex-shrink-0">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-[#111111]/60 text-[11.5px] font-bold mb-2 uppercase tracking-wide">
                    <span className="text-[#F9C301] flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>{event.date}</span>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>{event.time}</span>
                  </div>

                  <h4 className="text-[19px] font-bold text-[#111111] group-hover:text-[#F9C301] transition-colors leading-tight mb-2">
                    {event.title}
                  </h4>

                  <p className="text-gray-500 text-[12px] line-clamp-2 mb-2">
                    {event.description}
                  </p>

                  <span className="text-[#111111] font-bold text-[13px] group-hover:underline flex items-center gap-1.5 uppercase tracking-wide">
                    Read More
                    <svg className="w-3.5 h-3.5 text-[#F9C301]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
