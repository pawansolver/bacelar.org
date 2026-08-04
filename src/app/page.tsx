"use client";

import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="w-full min-h-screen font-sans bg-white">
      <HeroSection />
      <About />
      <StatsSection />
      <CoursesSection />
      <ObjectivesSection />
      <EventsSection />
      <TestimonialsSection />
      <Footer />
      <ChatWidget />
    </main>
  );
}
