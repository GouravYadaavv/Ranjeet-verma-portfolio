"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-black text-center">
      {/* Center Image */}
      <div className="relative w-[268px] h-[261px]  mb-0 float-animation ">
        <Image
          src="/Untitled_Artwork-2 1.svg" // 👈 apni image 'public' folder me rakho
          alt="Ranjeet Verma"
          fill
          className=""
        />
      </div>

      {/* Name PNG */}
      <div className="relative w-[135px] h-[22px] mb-2 ">
        <Image
          src="/Ranjeet Verma.svg"
          alt="Ranjeet Verma"
          fill
          className="object-contain scale-120"
        />
      </div>

      {/* Profession PNG */}
      <div className="relative w-[236px] h-[36px] mt-2">
        <Image
          src="/Ui Designer.svg"
          alt="UI/UX Designer"
          fill
          className="object-contain scale-120"
        />
      </div>

      {/* Optional: Add subtle animation */}
      {/* <div className="mt-10 animate-bounce text-gray-500 text-sm">
        ↓ Scroll Down
      </div> */}
    </section>
  );
}
