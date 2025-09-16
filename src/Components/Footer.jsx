import React from "react";
import { HiHome } from "react-icons/hi";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden text-white"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Brand */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-2xl font-bold tracking-wide flex items-center justify-center md:justify-start gap-2">
            <HiHome
              className="w-8 h-8"
              style={{ fill: "url(#logoGradient)" }}
            />
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
          <p className="text-gray-400 mt-1 mb-2">
            Making luxury living simple and accessible.
          </p>
        </div>

        {/* Company Links */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#Header"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="hover:text-purple-400 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-400 text-sm mt-2">
            Stay updated with our latest offers and news.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-5 mb-2 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} LuxeLiving. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
