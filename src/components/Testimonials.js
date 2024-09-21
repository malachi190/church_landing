import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Church, Our Family
        </h2>
        <blockquote className="text-lg md:text-xl text-gray-600 italic mb-8 max-w-2xl mx-auto">
          <p>
            "I’ve been a part of [Church Name] for [X] years, and this church is
            truly my second family..."
          </p>
          <footer className="text-gray-500 mt-4">- John Doe</footer>
        </blockquote>
        <p className="text-lg text-gray-600">
          Have a story to share?{" "}
          <a
            href="#"
            className="text-purple-700 font-semibold underline hover:text-purple-500"
          >
            Submit your testimony!
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
