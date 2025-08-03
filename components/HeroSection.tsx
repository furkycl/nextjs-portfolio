"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const titles = [
  "a Software Engineer",
  "a Full Stack Developer.",
  "a Prompt Engineer.",
  "a Digital Nomad.",
  "I build digital experiences.",
];

const textVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A192F] text-center overflow-hidden">
      <div className="p-4">
        <p className="text-[#00BFFF] text-lg md:text-xl mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#E6F1FF] mb-2">
          [Furkan YÜCEL]
        </h1>

        <AnimatePresence mode="wait">
          <motion.h2
            key={titles[index]}
            variants={textVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-3xl md:text-5xl font-bold text-gray-400 h-16 flex items-center justify-center"
          >
            {titles[index]}
          </motion.h2>
        </AnimatePresence>

        <div className="mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-[#00BFFF] text-[#00BFFF] rounded-md mr-4 hover:bg-[#00BFFF] hover:text-[#0A192F] transition-colors duration-300"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[#00BFFF] text-[#0A192F] rounded-md font-bold hover:opacity-90 transition-opacity duration-300"
          >
            Get In Touch
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
