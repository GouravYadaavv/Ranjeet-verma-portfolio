
"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#434343] text-white py-4 px-6  flex flex-col md:flex-row justify-between items-center text-sm">
      {/* Right Side */}
      <div className="mt-2 md:mt-0 text-center md:text-right text-white text-2xl font-regular relative sm:left-15">
        Ranjeet Verma
      </div>


      {/* Left Side */}
      <div className="text-center md:text-left">
        <p className="sm:text-xl text-xs">@2025–26 Personal</p>
        <p className="relative sm:right-15 text-md sm:text-xl">
          Designed by Ranjeet Verma
        </p>
      </div>
    </footer>
  );
}
