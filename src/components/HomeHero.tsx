import React from "react";

const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video.mp4" type="video/mp4" />
        {/* Fallback text if the video doesn't load */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 text-center text-white sm:px-8 md:px-16">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight text-orange-100 shadow-lg sm:text-5xl md:text-6xl animate-pulse">
            Explore the World with Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-orange-50">
            Discover new destinations, exclusive travel deals, and unforgettable
            experiences.
          </p>
          <a
            href="#explore"
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
