// home.jsx
import React from 'react';
import home from "../assets/home1.jpg";

const Home = () => {
  return (
    <div className="font-sans bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center text-white">
        <img
          src={home}// Replace with your image URL
          alt="Hotel"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">YOUR PERFECT STAY AWAITS YOU HERE</h1>
          <p className="text-lg mb-8">
            Discover unparalleled comfort and luxury at our exquisite hotel.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              Book Now
            </button>
            <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      

      {/* Additional Sections (You can add more sections here) */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Featured Rooms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Room Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="https://placeimg.com/640/480/any" // Replace with your image URL
              alt="Room"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Deluxe Suite
              </h3>
              <p className="text-gray-600 mb-4">
                Experience ultimate luxury in our deluxe suites.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Details
              </button>
            </div>
          </div>
          {/* Add more room cards as needed */}
        </div>
      </div>

      
    </div>
  );
};

export default Home;