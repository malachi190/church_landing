import React from "react";

const PrayerRequests = () => {
  return (
    <section id="prayer-requests" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
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
        {/* <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Donate</h3>
          <p className="text-lg text-gray-600 mb-4">
            Help us continue our mission for the next [X] years by supporting
            our outreach programs and ministry efforts.
          </p>
          <button className="bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
            Donate Now
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default PrayerRequests;
