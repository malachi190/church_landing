import React from "react";
import logo from "../asset/logo-new.png";
import image from "../asset/image-2.jpeg";

const Homepage = () => {
  return (
    <section id="homepage" className="relative bg-white px-6 text-center hero">
      {/* RGBA Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center py-4">
        <img
          src={logo}
          className="w-[120px] h-[50px] sm:w-[150px] sm:h-[60px]" // Responsive logo size
          alt="Higher Ground Assembly Logo"
        />
      </div>
      <div className="relative z-10 py-8 sm:py-16 mt-[4rem] sm:mt-[8rem] lg:mt-[10rem]">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Higher Ground Assembly Celebrates 20 Years of Faith, Love, and
          Community!
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-white mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
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
