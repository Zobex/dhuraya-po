import React from "react";
import {
  FaBookOpen,
  FaPenNib,
  FaChalkboardTeacher,
  FaGlobe,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full px-6 py-20 bg-gradient-to-t from-purple-300 via-background to-purple-200">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left Content */}

        {/* Right Icons Grid */}
        <div className="grid grid-cols-2 gap-6 text-purple-700">
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105 hover:shadow-lg">
            <FaBookOpen className="mb-2 text-4xl" />
            <span className="text-sm font-semibold">
              އުގެނުމަށް ބޭނުންކުރެވިދާނެ ލިޔުންތަށް
            </span>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105 hover:shadow-lg">
            <FaPenNib className="mb-2 text-4xl" />
            <span className="text-sm font-semibold">
              ލިޔުމުގެ ވަށްޓަފާޅި ކުރިއެރުވުމަށް
            </span>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105 hover:shadow-lg">
            <FaChalkboardTeacher className="mb-2 text-4xl" />
            <span className="text-sm font-semibold">ކިލާސްތަށް</span>
          </div>
          <div className="flex flex-col items-center p-6 transition-all bg-white shadow rounded-2xl hover:scale-105 hover:shadow-lg">
            <FaGlobe className="mb-2 text-4xl" />
            <span className="text-sm font-semibold">އާއްމު</span>
          </div>
        </div>
        <div className="space-y-6 text-center md:text-right">
          <h1 className="text-base font-extrabold leading-tight text-purple-800 md:text-2xl">
            ކިލާސްތަކުގައި ބައިވެރިވުމަށާއި އެހެނިހެން ދިވެހި އާޓިކަލްތަށް
            ބައްލަވާ ލެއްވުމަށް
          </h1>
          <p className="text-lg text-purple-700 md:text-xl">
            !ތިރީގައިވާ ފިތް ހިޔާރު ކުރައްވާ
          </p>
          <button className="px-6 py-3 mt-4 text-white transition duration-200 bg-purple-600 rounded-lg shadow hover:bg-purple-700">
            އިތުތަށް ބެއްލެވުމަށް
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
