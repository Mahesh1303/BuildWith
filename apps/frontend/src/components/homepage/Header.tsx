"use client";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-gray-900 font-display">
              BuildWith
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-900 hover:text-gray-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
