import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Our Church, Our Family
        </h2>
        <blockquote className="text-lg md:text-xl text-gray-600 italic mb-8 max-w-2xl mx-auto">
          <p>
            "I’ve been a part of Higher Ground Assembly for 5 years, and this church is
            truly my second family..."
          </p>
          <footer className="text-gray-500 mt-4">- John Doe</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
