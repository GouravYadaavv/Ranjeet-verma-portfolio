import Image from "next/image";
import Link from "next/link";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "IRCTC Rail Connet app",
      description:
        "Redesigning India's largest railway booking app to make travel planning faster, clearer, and more human.",
      borderBox: "/Border (3).png",
      icon: "/ranjeet-project1.png",
      link: "https://www.behance.net/gallery/236433997/IRCTC-Rail-Connect-App-Redesign-UXUI-Case-Study-",
    },
    {
      id: 2,
      title: "Dharastha",
      description:
        "A digital solution designed to bring transparency and ease to the land registration process.",
      borderBox: "/Border (3).png",
      icon: "/ranjeet-project2.png",
      link: "https://www.behance.net/gallery/225922221/DHARASTHA-Land-Registration-App-UXUI-Case-Study-",
    },
    {
      id: 3,
      title: "Silver Sand",
      description:
        "Redesign the Resort Experiences, A digital transform UX & Smart Technology.",
      borderBox: "/Border (3).png",
      icon: "/ranjeet-project3.png",
      link: "https://www.behance.net/gallery/226275993/Rededign-the-Resort-Experience-UXUI-Case-Study-",
    },
    {
      id: 4,
      title: "The Presents",
      description:
        "“Crafted the complete brand identity for The Presents — a modern gifting sanctuary rooted in timeless design, meaning, and minimal luxury.”",
      borderBox: "/Border (3).png",
      icon: "/ranjeet-project4.png",
      link: "https://www.behance.net/gallery/236688273/The-Presents-Branding-Project-2025-Visual-Identity",
    },
    {
      id: 5,
      title: "Creative Post",
      description:
        "A series of curated social media designs built to inspire, engage, and resonate.",
      borderBox: "/Border (3).png",
      icon: "/ranjeet-project5.png",
      link: "https://www.behance.net/gallery/221897853/SOCIAL-MEDIA-POST-CREATIVE",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="max-w-6xl mx-auto px-4 py-10 md:py-0 md:mt-10 "
      >
        <h2 className="text-5xl font-bold mb-8 text-center text-black">
          <span className="font-light">My</span>{" "}
          <span className="font-bold">Projects</span>
        </h2>

        {/* 🔹 UPPER GRID (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-16 md:py-10">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-auto relative bg-[#d9d9d9] hover:shadow-[5px_5px_0px_0px_gray] shadow-2xl text-black">
                <img
                  src={project.borderBox}
                  alt={project.title}
                  className="w-full h-full"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 mt-2 md:mt-4">
                  {project.icon && (
                    <div className="mb-4 bg-white   flex items-center justify-center">
                      <img
                        src={project.icon}
                        alt={project.title}
                        className="w-auto h-full object-contain  hover:scale-104 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="w-full mb-4">
                    <h3 className="text-xl font-semibold text-left">
                      {project.title}
                    </h3>
                    <p className="text-sm mt-2 text-left">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 🔹 LOWER GRID (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {projects.slice(3).map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block relative rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-auto relative bg-[#d9d9d9] hover:shadow-[10px_10px_0px_0px_gray] shadow-2xl text-black">
                <img
                  src={project.borderBox}
                  alt={project.title}
                  className="w-full h-full"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 mt-2 md:mt-8">
                  {project.icon && (
                    <div
                      className={`mb-4  bg-white 
                      }`}
                    >
                      <img
                        src={project.icon}
                        alt={project.title}
                        className="w-auto h-full object-contain  hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="w-full mb-4 md:mb-8">
                    <h3 className="text-xl font-semibold text-left">
                      {project.title}
                    </h3>
                    <p className="text-sm mt-2 text-left">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Projects section khatam hone ke baad SVG button */}
        <div className="flex justify-start  mt-10">
          <Link target="_blank" href="https://www.behance.net/ranjeetkumarverma88">
            <div className="relative w-60 h-10 floating-button">
              <Image
                src="/List item.svg" // 👈 aapka SVG button
                alt="Scroll Down"
                fill
                className="object-contain"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Decorative Line */}
      <div className="relative mt-10  h-2 sm:h-8 w-[80%] left-[10%]">
        <Image
          src="/Vector 32.png"
          alt="Decorative border"
          fill
          className="object-contain"
        />
      </div>
    </>
  );
}
