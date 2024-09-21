import React from "react";

const SocialMedia = () => {
  return (
    <section id="social-media" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Follow Us & Stay Connected
        </h2>
        <div className="flex justify-center space-x-4">
          <a href="[Facebook Link]" className="text-blue-600 hover:underline">
            Facebook
          </a>
          <span>|</span>
          <a href="[Instagram Link]" className="text-pink-600 hover:underline">
            Instagram
          </a>
          <span>|</span>
          <a href="[YouTube Link]" className="text-red-600 hover:underline">
            YouTube
          </a>
          <span>|</span>
          <a href="[Twitter Link]" className="text-blue-400 hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
