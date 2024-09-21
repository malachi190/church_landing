import React from "react";
import image from './../asset/image-2.jpeg'

const CelebrationDetails = () => {
  return (
    <section id="celebration-details" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Celebrate With Us!
        </h2>
        <div className="w-full flex justify-center items-center">
          <div className="flex items-center justify-between gap-x-[5rem]">
            <div className="px-5">
              <img src={image} className="h-[350px]" alt=""/>
            </div>
            <div className="ml-6">
              <p className="text-lg md:text-2xl text-gray-600 text-start mb-8 max-w-2xl mx-auto">
                This year marks an extraordinary 20 years since the founding of
                Higher Ground Assembly. Join us as we celebrate this milestone
                with heartfelt events that honor our past, celebrate our
                present, and cast vision for the future.
              </p>
              <ul className="text-left list-disc list-inside text-gray-700 max-w-2xl mx-auto">
                <li className="mb-2">
                  <strong className="text-xl">Date:</strong> 
                  <span className="mx-2 text-lg">Oct 1st to Nov 2nd, 2024</span>
                </li>
                <li className="mb-2">
                  <strong className="text-xl">Location:</strong> 
                  <span className="mx-2 text-lg">2021 Lord Baltimore Drive, Windsor Mill, MD 21244</span>
                </li>
                <li className="mb-2">
                  <strong className="text-xl">Special Guests:</strong> 
                  <span className="mx-2 text-lg">
                    Minister Bidemi Oloba, 
                    Minister Lawrence Deconvenant, Minister Eniola Olusaga,
                    Minister Lillian Nneji, and others.
                  </span>
                </li>
                {/* <li className="mt-4">
            <a
              href="[Link to registration form]"
              className="text-purple-700 font-semibold underline hover:text-purple-500 transition duration-300"
            >
              RSVP Here
            </a>
          </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationDetails;
