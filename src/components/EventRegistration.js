import React from "react";

const EventRegistration = () => {
  return (
    <section id="event-registration" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Register for Our Anniversary Events!
        </h2>
        <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6">
          <div className="text-left">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Name:
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Contact Information:
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <div className="text-left">
            <label className="block text-gray-700 text-lg font-semibold mb-2">
              Select Event(s):
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option>Event 1</option>
              <option>Event 2</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EventRegistration;
