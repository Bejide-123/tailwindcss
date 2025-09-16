import React from "react";
import { testimonials } from "../assets/assets";
import { FaUserCircle } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div
      className="container mx-auto py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h1 className="text-2xl font-bold text-center sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-4">
        Customer{" "}
        <span className="font-light underline underline-offset-4 decoration-1 decoration-purple-500 decoration-dashed under">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 sm:mb-10 md:mb-12 max-w-xs sm:max-w-md md:max-w-lg mx-auto text-sm sm:text-base">
        Real Stories from Those Who Found Homes With Us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-items-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] sm:max-w-none shadow-md rounded-lg p-4 sm:p-5 md:p-6 bg-gray-50 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-3 sm:mb-4 flex-col">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-purple-200 mb-2"
              />
              <div className="text-center">
                <h2 className="text-sm sm:text-base font-semibold">{testimonial.name}</h2>
                <p className="text-purple-500 text-xs sm:text-sm">{testimonial.role}</p>
              </div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xs sm:text-sm ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">
              {testimonial.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;