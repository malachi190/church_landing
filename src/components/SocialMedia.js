import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const SocialMedia = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <section id="social-media" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Follow Us & Stay Connected
        </h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/HigherGroundAssemblyBaltimore/?ref=bookmarks" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <span>|</span>
          <a href="https://www.instagram.com/rccg_hga/" className="text-pink-600 hover:underline">
            Instagram
          </a>
          <span>|</span>
          <a href="https://www.youtube.com/channel/UCnZIMNOOp8fYKGvZ20CaFwA/videos?view_as=subscriber" className="text-red-600 hover:underline">
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
