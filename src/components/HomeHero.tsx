import React from "react";

const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#7bdef0] to-[#4b1248] overflow-hidden text-white">
      {/* Soft floating blobs */}
      <div className="absolute w-96 h-96 bg-teal-400/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
      <div className="absolute w-72 h-72 bg-pink-300/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />

      {/* Hero content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 p-10 shadow-2xl sm:grid-cols-2 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-6 text-center sm:text-left">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-md">
              Discover Tropical Bliss 🌴
            </h1>
            <p className="text-lg font-light text-white/80 md:text-xl">
              Escape to paradise with our tropical lectures and
              discussions—relax, learn, and grow in paradise.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row sm:justify-start">
              <a
                href="/lectures"
                className="px-6 py-2 font-semibold text-white transition bg-teal-500 rounded-full shadow hover:bg-teal-600"
              >
                Explore Lectures
              </a>
              <a
                href="/about"
                className="px-6 py-2 font-medium text-white transition border rounded-full border-white/30 hover:bg-white/10"
              >
                Meet Us
              </a>
            </div>
          </div>

          {/* Image / Tropical Illustration */}
          <div className="flex items-center justify-center">
            <img
              src="/assets/maldives-beach.jpg" // Replace with your tropical beach image
              alt="Tropical Maldives Beach"
              className="w-full max-w-sm shadow-md rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
