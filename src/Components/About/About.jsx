import React from "react";

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are passionate about providing delicious food with the best
            service, ensuring you have a fantastic experience every time.
          </p>
        </div>

        {/* Image and Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src="oo.jpg" // Replace with your image
              alt="About Us"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-base text-gray-600">
              We strive to serve the finest quality food with a friendly and
              welcoming atmosphere. Our mission is to make every customer feel
              special, ensuring they return for another amazing meal!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
