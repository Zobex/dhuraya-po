import React from "react";
import {
  FaUmbrellaBeach,
  FaMapMarkedAlt,
  FaHiking,
  FaCameraRetro,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-br from-orange-100 to-yellow-50">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold leading-tight text-orange-700">
            Welcome to Eden Isles Escapes Tours
          </h1>
          <p className="text-lg text-orange-900">
            Let’s turn your dream vacation into reality. Explore the world with
            unforgettable journeys, curated just for you.
          </p>
          <button className="px-6 py-3 mt-4 text-white transition duration-200 bg-orange-600 rounded-lg shadow hover:bg-orange-700">
            Explore Packages
          </button>
        </div>

        {/* Right Icons Grid */}
        <div className="grid grid-cols-2 gap-6 text-orange-700">
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105">
            <FaUmbrellaBeach className="mb-2 text-4xl" />
            <span className="text-sm font-medium">Beach Getaways</span>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105">
            <FaMapMarkedAlt className="mb-2 text-4xl" />
            <span className="text-sm font-medium">Guided Tours</span>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105">
            <FaHiking className="mb-2 text-4xl" />
            <span className="text-sm font-medium">Adventure Trails</span>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105">
            <FaCameraRetro className="mb-2 text-4xl" />
            <span className="text-sm font-medium">Photo Tours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
