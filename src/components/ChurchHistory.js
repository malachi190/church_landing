import React from "react";
import image from "../asset/IMG_0020.JPEG";

const ChurchHistory = () => {
  return (
    <section id="church-history" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Our Journey Through the Years
        </h2>
        <div className="w-full items-center justify-center flex mt-10">
          <div className="justify-between items-center flex space-x-20 md:flex-row flex-col">
            <div className="sm:max-w-xl">
              <img
                src={image}
                alt=""
                className="w-full object-contain rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto md:mt-0 mt-10">
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
