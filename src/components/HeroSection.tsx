import React from "react";
import {
  FaBookOpen,
  FaPenNib,
  FaChalkboardTeacher,
  FaGlobe,
} from "react-icons/fa";

const features = [
  { icon: <FaBookOpen />, label: "ލިޔުންތަށް" },
  { icon: <FaPenNib />, label: "މުޠޯލިޢާ ކުރުމަށް " },
  { icon: <FaChalkboardTeacher />, label: "ކިލާސްތަށް" },
  { icon: <FaGlobe />, label: "ޕަބްލިކޭޝަންސް" },
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
      {/* Decorative Curved Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[160%] h-96 bg-gradient-to-b from-purple-300/40 to-transparent rounded-b-[100%] z-0 blur-md"></div>

      {/* Responsive Leaf Decorations */}
      <img
        src="/assets/R.png"
        alt="Decoration"
        className="absolute top-0 left-0 z-0 w-32 h-32 -rotate-90 opacity-100 pointer-events-none sm:w-40 sm:h-40 md:w-60 md:h-60"
      />
      <img
        src="/assets/R.png"
        alt="Decoration"
        className="absolute top-0 right-0 z-0 w-32 h-32 opacity-100 pointer-events-none sm:w-40 sm:h-40 md:w-60 md:h-60"
      />

      <div className="relative z-10 flex flex-col items-center max-w-6xl px-4 py-20 mx-auto space-y-10 text-center sm:px-6 md:py-24">
        <h1 className="text-3xl leading-tight tracking-tight text-white font-utheemu sm:text-5xl drop-shadow-xl">
          ދިވެހި ލިޔުންތަށް ބެއްލެވުމަށާއި އިތުރުމަޢުލޫމާތު ހޯދާލުމަށް
        </h1>
        <p className="max-w-2xl mx-auto text-base text-purple-200 font-utheemu sm:text-lg md:text-xl">
          !ތިރީގައިވާ ފިތްތަށް ހިޔާރު ކުރަށްވާ
        </p>

        <div className="grid w-full grid-cols-1 gap-6 px-2 sm:grid-cols-2 md:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 transition duration-300 bg-white shadow-lg sm:p-5 rounded-2xl hover:shadow-xl hover:scale-105"
            >
              <div className="mb-3 text-3xl text-purple-600 transition-transform sm:text-4xl group-hover:rotate-6">
                {item.icon}
              </div>
              <span className="text-sm font-semibold text-center text-gray-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <button className="px-6 py-2 font-semibold text-white transition duration-200 shadow-lg sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700">
          އިތުތަށް ބެއްލެވުމަށް
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
