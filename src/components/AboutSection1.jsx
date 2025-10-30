import Image from "next/image";

// Chhote paragraphs ka full text
const paragraphs = [
  "I'm not here just to design — I'm here to translate ideas into experiences.",
  "I'm Ranjeet Verma, a designer who moves between craft and code, culture and minimalism, logic and emotion.",
  "My work lives at the intersection of stories and systems — where a product can carry heritage, and an interface can feel like a conversation.",
  "From giving an organic voice to Sattuz and GutNut, to shaping interior identities with Denotation Design, and bringing history alive through Heritage for Children, every project I touch is an experiment in meaning.",
  "I don't design to impress — I design to connect. To make someone pause, feel, or remember.",
];

const AboutSection1 = () => {
  return (
    <>
      <section id="about" className="w-full bg-white text-black py-16 px-5 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative w-full p-4">
            <Image
              src="/Profile Pic[2].png"
              alt="Sketch illustration of Ranjeet Verma"
              width={632}
              height={646}
              className="w-full h-auto object-contain relative"
            />
            <div>
              {/* <Image
                src="/Border (1).png"
                alt="Decorative border"
                fill
                className="absolute w-full h-auto scale-90"
              /> */}
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="w-full">
            <h2 className="text-5xl font-bold mb-10">
              <span className="font-light">About </span>
              <span className="font-bold">Me</span>
            </h2>

            <div className="space-y-2 text-gray-700 text-lg md:text-xl leading-relaxed">
              {paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="relative w-[80%] left-[10%]  h-2 md:h-8">
        <Image
          src="/Vector 32.png"
          alt="Decorative border"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
};

export default AboutSection1;
