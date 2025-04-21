import React from "react";

const HomeHero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/assets/milaidhoo.jpg')" }} // replace with your image path
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 text-center text-white sm:px-8 md:px-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="flex flex-col text-4xl font-extrabold leading-tight text-orange-100 border-none shadow-lg sm:text-5xl md:text-6xl animate-pulse">
            Explore the World with Us
            <span className="text-orange-600">COMING SOON</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-50">
            Discover new destinations, exclusive travel deals, and unforgettable
            experiences.
          </p>
          <a
            href="/explore"
            className="inline-block px-8 py-3 text-lg font-semibold text-white transition-all transform bg-orange-700 rounded-lg shadow-lg hover:bg-orange-800 hover:scale-105 hover:shadow-xl hover:animate-pulse"
          >
            Start Your Adventure
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
