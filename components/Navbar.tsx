"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          hasScrolled
            ? "bg-[#0A192F]/80 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                to="top"
                smooth={true}
                duration={500}
                className="text-2xl font-bold cursor-pointer font-logo"
              >
                <span className="text-[#00BFFF]">c</span>
                <span className="text-[#E6F1FF]">Furky</span>
                <span className="text-[#00BFFF]">cl</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-300 hover:text-[#00BFFF] transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://github.com/furkycl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF]"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com/in/furkycl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00BFFF]"
              >
                <FaLinkedin size={22} />
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isNavOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-[#0A192F] z-40 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-3xl text-gray-300 hover:text-[#00BFFF] transition-colors cursor-pointer"
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
