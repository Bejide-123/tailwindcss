import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex flex-col w-full overflow-hidden"
      style={{ backgroundImage: "url('/House 8.jpg')" }}
      id="Header"
    >
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center px-8 py-16">
        <h2 className="text-4xl font-bold mb-4 text-white text-center sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-10">
          Explore Homes that fit your dreams
        </h2>
        <p className="mb-8 text-2xl text-white text-center">
          Find your perfect home with our expert real estate services.
        </p>
        <div className="flex gap-6">
          <a
            href="#Projects"
            className="px-8 py-3 bg-transparent rounded-full border-2 border-purple-500 text-white text-lg font-semibold hover:backdrop-blur-[2px]"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 
             hover:opacity-90 transition text-white rounded-full text-lg font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
