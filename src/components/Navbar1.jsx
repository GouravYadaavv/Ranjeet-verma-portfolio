"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full md:w-[90%] top-0 md:top-4 left-1/2 -translate-x-1/2  backdrop-blur-md shadow-md rounded-none md:rounded-2xl border-b-1 md:border-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-[#2e2e2e]">
          Ranjeet Verma.
        </Link>

        {/* Middle: Nav Links (Visible only on md+) */}
        <ul className="hidden md:flex space-x-8 text-black font-regular text-2xl ml-50">
          <li>
            <Link href="#about" className="hover:text-gray-700 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-gray-700 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-gray-700 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right: Resume Button */}
        <div className="hidden md:block">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="bg-white border-1 border-[#919191]  px-5 py-2 rounded-full  transition text-[#919191] hover:text-black hover:border-black"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="text-xl md:hidden bg-white/95 backdrop-blur-md shadow-md px-6 py-4 space-y-4 text-black  font-medium rounded-b-2xl">
          <Link
            href="#about"
            className="block hover:text-blue-600 transition px-3"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block hover:text-blue-600 transition px-3"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block hover:text-blue-600 transition px-3"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="block text-center text-[#919191] border-2 border-[#919191] px-4 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
}
