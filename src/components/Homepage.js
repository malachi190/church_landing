import React from "react";
import logo from "../asset/logo-new.png";
import image from "../asset/image-2.jpeg";

const Homepage = () => {
  return (
    <section id="homepage" className="relative bg-white px-6 text-center md:h-[70vh]">
      {/* Content */}
      <div className="relative z-10 flex justify-center items-center py-4">
        <img
          src={logo}
          className="w-[120px] h-[50px] sm:w-[150px] sm:h-[60px]" // Responsive logo size
          alt="Higher Ground Assembly Logo"
        />
      </div>
      <div className="relative z-10 py-8 sm:py-16 mt-[3rem]">
        <h1 className="text-3xl sm:text-4xl lg:text-[5.5rem] font-bold text-[#4c145a] mb-4 sm:mb-8">
          Higher Ground Assembly
        </h1>
        <h3 className="text-xl sm:text-3xl text-[#4c145a] space-y-10 sm:mb-3">Celebrates 20 Years of Faith, Love, and Community!</h3>
        <p className="text-base sm:text-lg lg:text-xl text-black max-w-xl sm:max-w-3xl mx-auto">
          Welcome to Higher Ground Assembly's 20th Anniversary Celebration! We
          are beyond blessed to have you join us as we reflect on 10 years of
          God’s grace, worship, and service to our community.
        </p>
        {/* <button className="bg-purple-700 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-600 transition duration-300">
      Explore our journey of faith
    </button> */}
      </div>
    </section>
  );
};

export default Homepage;
