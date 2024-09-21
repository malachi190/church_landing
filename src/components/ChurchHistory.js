import React from "react";
import image from "../asset/IMG_0020.JPEG";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ChurchHistory = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <section id="church-history" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
          data-aos="fade-up"
        >
          Our Journey Through the Years
        </h2>

        <div className="w-full items-center justify-center flex mt-10">
          {/* Use flex-col for small screens and flex-row for medium and above */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-20">
            <div className="sm:max-w-xl" data-aos="fade-right">
              <img
                src={image}
                alt=""
                className="w-full object-contain rounded-lg shadow-lg"
              />
            </div>
            <p
              className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
              data-aos="fade-left"
            >
              Since our founding in 2004, Higher Ground Assembly has been a
              pillar of faith and hope in our community. What began as a small
              gathering of believers has flourished into a vibrant congregation,
              touching countless lives both locally and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChurchHistory;
