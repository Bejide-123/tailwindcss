import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { properties } from "../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  // Calculate the exact translate value based on card width + gap
  const cardWidth = 288; // w-72 = 18rem = 288px
  const gap = 24; // gap-6 = 1.5rem = 24px
  const translateX = currentIndex * (cardWidth + gap);

  return (
    <div
      className="container mx-auto py-4 pt-15 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden md:mt-10"
      id="Projects"
    >
      <h1 className="text-2xl font-bold text-center sm:text-4xl md:text-6xl lg:text-7xl mb-2">
        Projects{" "}
        <span className="font-light underline underline-offset-4 decoration-1 decoration-purple-500 decoration-dashed under">
          Completed
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-12 mx-w-80 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous projects"
        >
          <HiArrowLeft />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
          aria-label="Next Project"
        >
          <HiArrowRight />
        </button>
      </div>

      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${translateX}px)`,
          }}
        >
          {properties.map((project, index) => (
            <div
              key={index}
              className="w-72 flex-shrink-0 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.location}</p>
                <p className="text-purple-600 font-bold mt-2">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;