"use client";
import React, { useEffect, useState } from "react";
import AboutSection1 from "@/components/AboutSection1";
import ContactSection from "@/components/ContactSection";
import Intro from "@/components/Intro";
import Intro1 from "@/components/Intro1";
import ProjectsSection from "@/components/ProjectSection";
import ExperienceSection2 from "@/components/ExperienceSection2";
import ExperienceCard from "@/components/ExperienceCard";
import Education from "@/components/Education";
import PreloaderWrapper from "@/components/Preloader";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    let pageLoaded = false;
    let gifPlayed = false;

    const handlePageLoad = () => {
      pageLoaded = true;
      if (gifPlayed) setLoading(false);
    };

    if (document.readyState === "complete") {
      // Agar page already load ho chuka hai
      pageLoaded = true;
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    // GIF at least 4 sec tak chale
    const gifTimer = setTimeout(() => {
      gifPlayed = true;
      if (pageLoaded) setLoading(false);
    }, 6800);

    // ✅ Cleanup fix
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handlePageLoad);
      clearTimeout(gifTimer);
    };
  }, []);

  // 🌀 Loader dikhao jab tak GIF + page dono complete na ho
  if (loading) return <PreloaderWrapper />;

  return (
    <div>
      <Navbar/>
      <Intro />
      <Intro1 />
      <Skill />

      <main className="bg-[#121212]  text-white">
        {isMobile ? (
          <div className="flex flex-col w-full">
            <div className="w-full">
              <ExperienceCard />
            </div>
            <div className="w-full mt-8">
              <Education />
            </div>
          </div>
        ) : (
          <ExperienceSection2 />
        )}
      </main>

      <AboutSection1 />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </div>
  );
}
