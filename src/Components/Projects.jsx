import React, { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { properties } from "../assets/assets";
import { FaBed, FaBath, FaTag, FaHome } from "react-icons/fa";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);       // slider index
  const [showModal, setShowModal] = useState(false);         // modal visibility
  const [selectedIndex, setSelectedIndex] = useState(null);  // which property is shown in modal
  const [galleryIndex, setGalleryIndex] = useState(0);       // which image in the modal gallery

  // slider navigation (wraps around)
  const nextProject = () => {
    setCurrentIndex((prev) => (prev >= properties.length - 1 ? 0 : prev + 1));
  };
  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  // dimensions used for pixel-perfect translate
  const cardWidth = 288; // w-72 = 18rem = 288px
  const gap = 24;        // gap-6 = 1.5rem = 24px
  const translateX = currentIndex * (cardWidth + gap);

  // open modal for clicked card
  const openModal = (index) => {
    setSelectedIndex(index);
    setGalleryIndex(0);
    setShowModal(true);
  };

  // close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedIndex(null);
    setGalleryIndex(0);
  };

  // close modal with Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="container mx-auto py-4 pt-15 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden md:mt-10"
      id="Projects"
    >
      <h1 className="text-2xl font-bold text-center sm:text-4xl md:text-6xl lg:text-7xl mb-2">
        Projects{" "}
        <span className="font-light underline underline-offset-4 decoration-1 decoration-purple-500 decoration-dashed">
          Completed
        </span>
      </h1>

      <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
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
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {properties.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="w-72 flex-shrink-0 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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

      {/* Modal */}
      {showModal && selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white relative rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            role="dialog"
            aria-modal="true"
            aria-labelledby="property-title"
          >
            {/* Close button (on the card itself) */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 bg-white/80 hover:bg-white p-1 rounded-full shadow text-gray-600 hover:text-black"
              aria-label="Close"
            >
              <IoMdClose size={20} />
            </button>

            {/* Selected property */}
            {properties[selectedIndex] && (
              <>
                {/* Image gallery */}
                <div className="mb-4">
                  <img
                    src={
                      properties[selectedIndex].images?.[galleryIndex] ||
                      properties[selectedIndex].image
                    }
                    alt={properties[selectedIndex].title}
                    className="w-full h-64 object-cover rounded-md"
                  />

                  {/* Thumbnails */}
                  <div className="flex gap-2 mt-3 overflow-x-auto">
                    {(properties[selectedIndex].images || [properties[selectedIndex].image]).map(
                      (src, i) => (
                        <button
                          key={i}
                          onClick={() => setGalleryIndex(i)}
                          className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border ${
                            i === galleryIndex ? "border-purple-600" : "border-gray-200"
                          }`}
                          aria-label={`Show image ${i + 1}`}
                        >
                          <img src={src} alt={`${properties[selectedIndex].title} ${i + 1}`} className="w-full h-full object-cover" />
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Text details */}
                <h2 id="property-title" className="text-2xl font-bold mb-2">
                  {properties[selectedIndex].title}
                </h2>
                <p className="text-gray-600 mb-2">{properties[selectedIndex].location}</p>
                <p className="text-purple-600 font-bold mb-4">{properties[selectedIndex].price}</p>

                {/* Description */}
                <p className="text-gray-700 mb-4">
                  {properties[selectedIndex].description || "No description available."}
                </p>

                {/* Quick facts */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
                  <div><FaBed /> Bedrooms: <strong>{properties[selectedIndex].bedrooms}</strong></div>
                  <div><FaBath /> Bathrooms: <strong>{properties[selectedIndex].bathrooms}</strong></div>
                  <div><FaHome /> Type: <strong>{properties[selectedIndex].propertyType}</strong></div>
                  <div><FaTag/> Status: <strong>{properties[selectedIndex].status}</strong></div>
                </div>

                {/* Actions (aligned to the right) */}
                <div className="flex justify-end gap-3 mt-3">
                  <button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200">
                    Add to Wishlist
                  </button>
                  <button className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700">
                    {properties[selectedIndex].status?.toLowerCase().includes("rent") ? "Book Viewing" : "Enquire"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
