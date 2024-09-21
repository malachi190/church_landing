import React from "react";
import image1 from "../asset/IMG_4634.JPEG";
import image2 from "../asset/IMG_6326.JPEG";
import { useEffect } from "react";
import AOS from "aos";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section id="gallery" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
          data-aos="fade-up" // Fade in for the title
        >
          Memories of 20 Years
        </h2>
        <p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          data-aos="fade-up" // Fade in for the paragraph
        >
          Take a walk down memory lane with our gallery, highlighting key
          moments of faith and fellowship over the years.
        </p>

        <div
          className="gallery-images flex justify-center gap-6 mb-8 flex-wrap"
          data-aos="fade-up" // Fade in for the gallery images
        >
          {/* Use placeholder images */}
          <img
            src={image1}
            alt="Event 1"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <img
            src={image2}
            alt="Event 2"
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
