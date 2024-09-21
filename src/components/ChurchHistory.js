import React from "react";

const ChurchHistory = () => {
  return (
    <section id="church-history" className="bg-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Our Journey Through the Years
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Since our founding in [Year], [Church Name] has been a pillar of faith
          and hope in our community. What began as a small gathering of
          believers has flourished into a vibrant congregation, touching
          countless lives both locally and beyond.
        </p>
        <ul className="text-left list-disc list-inside text-gray-700 max-w-2xl mx-auto">
          <li className="mb-2">
            <strong>[Year 1]:</strong> Church founded
          </li>
          <li className="mb-2">
            <strong>[Key milestone]:</strong> Expansion of ministry, etc.
          </li>
          <li className="mb-2">
            <strong>[Present day]:</strong> Celebrating growth and ongoing
            mission.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChurchHistory;
