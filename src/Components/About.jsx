import React from "react";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      {" "}
      <h1 className="text-2xl font-bold text-center sm:text-4xl md:text-6xl lg:text-7xl mb-2">
        {" "}
        About{" "}
        <span className="font-light underline underline-offset-4 decoration-1 decoration-purple-500 decoration-dashed under">
          {" "}
          Our Brand{" "}
        </span>{" "}
      </h1>{" "}
      <p className="text-center tracking-tighter text-gray-600 mb-8 mt-4 max-w-xl text-sm sm:text-base md:text-lg">
        {" "}
        We create high-quality, stylish products designed to inspire and last —
        blending style and innovation with care in every detail.{" "}
      </p>{" "}
      <div className="flex flex-col sm:flex-row sm:items-stretch items-center sm:gap-8 md:gap-20 w-full">
        {/* left: image (40%) */}
        <div className="sm:basis-2/5 w-full">
          <img
            src={assets.House1}
            alt=""
            className="w-full h-64 md:h-80 lg:h-96 rounded-2xl shadow-xl"
          />
        </div>

        {/* right: content (60%) */}
        <div className="sm:basis-3/5 flex flex-col justify-between mt-6 sm:mt-0 text-gray-600 min-w-0">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
            <div>
              <p className="text-xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          <p className="mt-6 text-gray-600 max-w-2xl">
            With over a decade of expertise, we’ve built a reputation for
            delivering high-quality projects. Our focus on innovation and
            customer satisfaction drives every milestone.
          </p>

          <button className="mt-5 px-4 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition self-center sm:self-start">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
