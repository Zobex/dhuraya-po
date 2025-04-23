import React from "react";

const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-[#3a2a81] to-[#147fc1] overflow-hidden text-white">
      {/* Soft floating blobs */}
      <div className="absolute w-96 h-96 bg-blue-400/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
      <div className="absolute w-72 h-72 bg-pink-300/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />
      {/* Decorative R.png Images */}
      <img
        src="/assets/R.png"
        alt="Decoration"
        className="absolute top-0 right-0 pointer-events-none w-80 h-80 "
        style={{ transform: "rotate(0deg)" }}
      />
      <img
        src="/assets/R.png"
        alt="Decoration"
        className="absolute pointer-events-none -top-16 right-60 w-80 h-80 "
        style={{ transform: "rotate(-16deg)" }}
      />
      {/* Hero content */}
      <div className="flex flex-col w-full h-full pt-40 pb-20 bg-black">
        <div className="absolute z-20 flex flex-col gap-4 text-center transform -translate-x-1/2 left-1/2">
          <h2 className="gap-6 text-2xl font-light sm:text-3xl font-dhivehi md:text-4xl text-white/90 animate-fade-in-down">
            AbaHuram
          </h2>
          <h1 className="text-5xl font-extrabold text-white font-dhivehi sm:text-6xl md:text-7xl drop-shadow-lg animate-fade-in-up">
            qlaTOP ayarud
          </h1>
        </div>
        <div className="flex items-center justify-center h-full px-4 rz-10 top-40">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 p-10 shadow-2xl sm:mt-64 sm:grid-cols-2 bg-white/10 backdrop-blur-xl border-white/20 rounded-3xl">
            {/* Text Section */}
            <div className="flex flex-col justify-center space-y-6 text-center sm:text-left">
              <h2 className="text-3xl font-bold text-white font-dhivehi sm:text-4xl drop-shadow">
                qSamulAdOh utAmuWUlam ikewikew ELug Ahab ihevid
              </h2>
              <p className="text-lg font-light text-white/80 md:text-xl"></p>
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
                src="/assets/maldives-beach.jpg"
                alt="Tropical Maldives Beach"
                className="w-full max-w-sm shadow-md rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
