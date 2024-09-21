import React from "react";
import { useEffect } from "react";
import AOS from "aos";

const PrayerRequests = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="prayer-requests" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Send Us Your Prayer Requests
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We invite you to share your prayer requests with us, and our pastoral
          team will lift your needs in prayer.
        </p>
        <button className="bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors mb-8">
          Submit Prayer Request
        </button>
      </div>
    </section>
  );
};

export default PrayerRequests;
