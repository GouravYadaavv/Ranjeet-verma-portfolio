"use client";

import Image from "next/image";
import React from "react";

const educationData = [
  {
    border: "/Borderexp1.png",
    logo: "/Edlogo1.png",
    degree: "Bachelor of Design (B.Des)",
    institution: "National Institute Of Fashion Technology",
    location: "Patna, Bihar India",
    date: "2022 - 2026",
  },
  {
    border: "/Borderexp1.png",
    logo: "/Edlogo2.png",
    degree: "Intermediate",
    institution: "Guru Gobind Singh Public School, Chas",
    location: "Bokaro, Jharkhand",
    date: "2019 - 2021",
  },
  {
    border: "/Borderexp1.png",
    logo: "/Edlogo2.png",
    degree: "Secondary",
    institution: "Guru Gobind Singh Public School, Chas",
    location: "Bokaro, Jharkhand",
    date: "2019",
  },
];

const Education = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4  text-white overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-semibold mb-12 tracking-wide text-center">
        <span className="font-light">My</span>{" "}
        <span className="font-bold text-[#ffffff]">Education</span>
      </h1>

      <div className="flex flex-col items-center gap-10 w-full">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative w-[95%] sm:w-[90%] md:w-[80%] mx-auto p-6 sm:p-8 md:p-10 rounded-lg overflow-hidden"
          >
            {/* Background Border Image */}
            <Image
              src={edu.border}
              alt="border"
              fill
              className="object-fill pointer-events-none select-none opacity-100"
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col sm:flex-row justify-between sm:items-center gap-6 sm:gap-10">
              {/* Left Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
                {/* Logo */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src={edu.logo}
                    alt={edu.degree}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                {/* Text Info */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                    {edu.degree}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300">
                    {edu.institution}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {edu.location}
                  </p>
                </div>
              </div>

              {/* Right Section - Date */}
              <div className="text-center sm:text-right">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">
                  {edu.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
