"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const PreloaderWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [gifLoaded, setGifLoaded] = useState(false);
  const [gifSrc, setGifSrc] = useState("");

  useEffect(() => {
    // 🔹 Har refresh pe naya GIF URL banega (cache bust)
    setGifSrc(`/Preloader.gif?v=${Date.now()}`);
  }, []);

  useEffect(() => {
    if (gifLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 7800); // 🕒 GIF ka duration (ms)
      return () => clearTimeout(timer);
    }
  }, [gifLoaded]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="preloader"
            className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          >
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.03 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {gifSrc && (
                <Image
                  src={gifSrc}
                  alt="Loading..."
                  width={400}
                  height={400}
                  className="object-contain w-[370px] md:w-[400px] lg:w-[700px] h-auto"
                  onLoad={() => setGifLoaded(true)} // 🔹 GIF load hone ke baad timer start
                  unoptimized
                  priority
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isVisible && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PreloaderWrapper;
