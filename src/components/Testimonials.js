import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="testimonials" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-primary mb-6"
          data-aos="fade-up" // Fade in animation for the heading
        >
          Our Church, Our Family
        </h2>

        <blockquote
          className="text-lg md:text-xl text-gray-600 italic mb-8 max-w-2xl mx-auto"
          data-aos="fade-up" // Fade in for the quote
          data-aos-delay="200" // Delay for a smooth transition
        >
          <p>
            "I’ve been a part of Higher Ground Assembly for 5 years, and this
            church is truly my second family..."
          </p>
          <footer className="text-gray-500 mt-4">- John Doe</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
