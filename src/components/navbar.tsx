import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-1/2 bg-black/60 rounded-3xl border border-white/10 shadow-lg z-50">
      {/* Inner flex container for links and logo */}
      <div className="flex justify-between items-center py-2 px-6">
        {/* Left Links - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex space-x-4 jura-font">
          <a
            href="#"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            ACHIEVE
          </a>
        </div>

        {/* Centered Logo */}
        <div className="text-white text-2xl font-bold">
          <Image
            src="/logo.png"
            alt="YourLogo"
            width={88} // Adjust width as needed
            height={48} // Adjust height as needed
            priority // Ensures faster loading of logo
          />
        </div>

        {/* Right Links - Hidden on mobile, visible on medium screens and up */}
        <div className="hidden md:flex space-x-4 jura-font">
          <a
            href="#"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            YOUR PIE
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            FAQ
          </a>
        </div>

        {/* Hamburger Menu Icon - Visible on mobile, hidden on medium screens and up */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Animated with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Start slightly above and invisible
            animate={{ opacity: 1, y: 0 }} // Animate to fully visible and in place
            exit={{ opacity: 0, y: -20 }} // Animate out by moving up and fading out
            transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth transition
            className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3"
          >
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base jura-font font-medium"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base jura-font font-medium"
            >
              ACHIEVE
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base jura-font font-medium"
            >
              YOUR PIE
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:text-white px-3 py-2 rounded-md text-base jura-font font-medium"
            >
              FAQ
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
