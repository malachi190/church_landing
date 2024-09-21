import React from "react";
import image from "./../asset/image-2.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CelebrationDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      id="celebration-details"
      className="bg-gray-100 py-8 sm:py-16 px-4 sm:px-6"
    >
      <div
        className="container mx-auto text-center flex flex-col justify-center items-center"
        data-aos="fade-up" 
      >
        <div className="flex flex-col justify-center items-center space-y-4 mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
            Celebrate With Us!
          </h2>
          <p className="text-base sm:text-lg md:text-xl sm:max-w-3xl text-center w-full">
            This year marks an extraordinary 20 years since the founding of
            Higher Ground Assembly. Join us as we celebrate this milestone.
          </p>
        </div>

        {/* Image Wrapper */}
        <div className="w-full flex justify-center items-center px-4 sm:px-5">
          <img
            src={image}
            alt="Anniversary celebration"
            className="w-full md:w-[70vw] h-auto object-cover rounded-lg shadow-lg"
            data-aos="fade-up"
          />
        </div>
      </div>
    </section>
  );
};

export default CelebrationDetails;
