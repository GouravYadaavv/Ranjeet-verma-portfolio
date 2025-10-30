export default function Intro1() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-5 md:px-9 py-3 md:py-7 bg-white text-gray-900 gap-0 md:gap-2">
      {/* Left Text - 30% */}
      <div className="md:w-[30%] mb-4 md:mb-8">
        <h2 className="text-xl  font-medium tracking-wide">
          Welcome to my creative journey!
        </h2>
      </div>

      {/* Spacer / Gap */}
      {/* <div className="md:w-[5%]" /> */}

      {/* Right Text - 55% */}
      <div className="md:w-[55%] text-lg  leading-relaxed text-left md:text-right">
        I'm a passionate UX/UI designer, currently shaping my skills through a
        transformative journey at NIFT. With a passion for creative,
        intuitive, and engaging user experiences, I craft solutions to solve
        real-world design challenges.
      </div>

    </section>
  );
}
