"use client";

import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white text-black py-16 md:py-30 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Form & Socials */}
        <div className="max-w-lg w-full">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full p-4 bg-white border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 bg-white border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="How can I help?*"
                className="w-full p-4 bg-white border border-black text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                required
              ></textarea>
            </div>

            {/* Submit Button + Socials */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
              <button
                type="submit"
                className="w-full sm:w-auto bg-black text-white font-bold py-4 px-10 text-lg hover:bg-gray-800 transition-colors duration-300 rounded-md"
              >
                Get In Touch
              </button>

              {/* Social Icons */}
              <div className="flex space-x-3 sm:space-x-4 h-[calc(1rem+1rem+2*16px)]">
                <a
                  href="https://www.instagram.com/_ranjeet.verma_ux"
                  target="_blank"
                  aria-label="Instagram"
                  className="w-15 h-full flex items-center justify-center rounded-md border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>

                <a
                  href="https://www.behance.net/ranjeetkumarverma88"
                  target="_blank"
                  aria-label="Behance"
                  className="w-15 h-full flex items-center justify-center rounded-md border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaBehance className="text-xl" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ranjeet-kumar-verma-66a866278/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="w-15 h-full flex items-center justify-center rounded-md border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn className="text-xl" />
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column: Text Content */}
        <div className="md:sticky md:top-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">
            Let's{" "}
            <span className="font-black text-white [-webkit-text-stroke:1px_#5100ff] md:[-webkit-text-stroke:2px_#5100ff] tracking-tight leading-none relative z-10 inline-block">
              talk
            </span>{" "}
            for
          </h2>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mt-1 md:mt-2 text-[#5100ff]">
            Something special
          </h1>

          {/* Typing Animation */}
          <div className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed h-[90px]">
            <TypeAnimation
              sequence={[
                "I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Email + Phone with Icons */}
          <div className="mt-10 space-y-4">
            
            {/* Email */}
            <a
              href="mailto:ranjeetkumarverma8811@gmail.com"
              className="text-xl sm:text-2xl font-bold flex items-center space-x-3 hover:text-gray-700 transition-colors"
            >
              <FaEnvelope className="text-[#5100ff]" />
              <span>ranjeetkumarverma8811@gmail.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+916205508988"
              className="text-xl sm:text-2xl font-bold flex items-center space-x-3 hover:text-gray-700 transition-colors"
            >
              <FaPhoneAlt className="text-[#5100ff]" />
              <span>+91 6205508988</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
