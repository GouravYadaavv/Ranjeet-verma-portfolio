"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function StickyParallaxSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Parallax pages={1} style={{ height: "100%" }}>
        {/* Sticky Background Layer */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1 }} // sticky from start to end of section
          speed={0}
        >
          <div
            className="h-screen w-full bg-black bg-center"
        
          >
            {/* Optional overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        </ParallaxLayer>

        {/* Scrollable Content */}
        <ParallaxLayer offset={0} speed={1}>
          <div className="h-screen w-full flex flex-col items-center justify-center text-center text-white px-6">
            {/* My Expression */}
            <h1 className="text-5xl font-bold mb-4">Mera Expression</h1>
            <p className="max-w-xl mb-16">
              Main apni creativity aur emotions ke through apne ideas express
              karta hoon. Har kaam ek journey hai jisme failures aur small
              victories dono shamil hain.
            </p>

            {/* My Education */}
            <h1 className="text-5xl font-bold mb-4">Meri Education</h1>
            <p className="max-w-xl">
              Siksha sirf classroom tak simit nahi hai. Main real-world
              experiences aur challenges se seekhta hoon, aur har skill apni
              foundation strong banati hai.
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </section>
  );
}
