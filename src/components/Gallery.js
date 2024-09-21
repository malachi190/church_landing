import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Memories of 10 Years
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Take a walk down memory lane with our gallery, highlighting key
          moments of faith and fellowship over the years.
        </p>
        <div className="gallery-images flex justify-center gap-6 mb-8 flex-wrap">
          {/* Use placeholder images */}
          <img
            src="https://via.placeholder.com/300"
            alt="Event 1"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <img
            src="https://via.placeholder.com/300"
            alt="Event 2"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-600">
          Have a cherished memory?{" "}
          <a
            href="#"
            className="text-purple-700 font-semibold underline hover:text-purple-500"
          >
            Share it with us!
          </a>
        </p>
      </div>
    </section>
  );
};

export default Gallery;
