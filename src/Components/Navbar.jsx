import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 left-0 w-full z-20 bg-transparent">
      <div className="flex items-center justify-between py-3 px-6 w-full">
        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide flex items-center gap-2">
          <HiHome className="w-8 h-8" style={{ fill: "url(#logoGradient)" }} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            LuxeLiving
          </span>

          <svg width="0" height="0">
            <defs>
              <linearGradient
                id="logoGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </h1>

        {/* Center Links - Hidden on small screens */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-10 font-semibold text-gray-800 text-lg">
            <div className="flex gap-10 font-semibold text-gray-800 text-lg">
              <a href="#Header" className="hover:text-gray-600 transition">
                Home
              </a>
              <a href="#About" className="hover:text-gray-600 transition">
                About
              </a>
              <a href="#Projects" className="hover:text-gray-600 transition">
                Projects
              </a>
              <a
                href="#Testimonials"
                className="hover:text-gray-600 transition"
              >
                Testimonials
              </a>
            </div>
          </div>
        </div>

        {/* SignUp - Hidden on small screens */}
        <div className="hidden md:block">
          <input
            type="button"
            value="SignUp"
            className="py-2 px-6 rounded-full font-semibold text-white 
             bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
             hover:opacity-90 transition"
          />
        </div>

        {/* Hamburger Menu - Visible on small screens */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="w-7 h-7 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <IoMdClose
            className="w-7 h-7 cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <nav className="flex flex-col p-6 gap-6">
          <a
            href="#Header"
            className="text-gray-800 text-lg font-semibold hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            Home
          </a>
          <a
            href="#About"
            className="text-gray-800 text-lg font-semibold hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            About
          </a>
          <a
            href="#Projects"
            className="text-gray-800 text-lg font-semibold hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="text-gray-800 text-lg font-semibold hover:text-purple-600 transition"
            onClick={toggleSidebar}
          >
            Testimonials
          </a>

          <input
            type="button"
            value="SignUp"
            className="py-2 px-6 rounded-full font-semibold text-white 
               bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
               hover:opacity-90 transition mt-4"
            onClick={toggleSidebar}
          />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
