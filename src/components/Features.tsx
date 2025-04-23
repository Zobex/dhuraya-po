import React from "react";
import { Button } from "@/components/ui/button";
import { FaSmile, FaGlobe, FaChalkboardTeacher, FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <div className="lg:flex lg:h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="flex flex-col justify-between w-full lg:w-3/5">
        <div className="p-10 space-y-8 md:p-16">
          <h2 className="text-3xl font-bold text-right text-purple-800 md:text-4xl">
            އަލީ މުނީޒް
          </h2>
          <p className="leading-relaxed text-right text-gray-700">
            ދިވެހިބަސް ކިޔަވައިދިނުމުގެ ދާއިރާއިން ޢަލީ މުނީޒު (އަޅުގަނޑު)
            އެންމެ ޝައުގުވެރިވަނީ ދޭހައަށެވެ. އެކަމަކު ލިޔުންތެރިކަމަށް ވެސް
            އޮތް ޝައުގު ކުޑައެއްނޫނެވެ. އެހެންވެ އަމިއްލަ ބުލޮގެއް ހިންގަމެއެވެ.
            ބުލޮގުގެ ލިޔުންތައް ހިއްސާކުރަން ފޭސްބުކު ސަފުހާއެއް ހިންގަމެއެވެ.
            ސާނަވީއާއި މަތީ ސާނަވީއަށް ދިވެހިބަސް ކިޔަވައިދިނުމުގެ ސައްބީސް
            އަހަރުގެ ދިގު މާޒީއެއް އެބައޮތެވެ. ހާޒިރުކޮށްގެންނާއި
            ދާދިވަރުކޮށެވެ. މި ވަގުތު، އަޅުގަނޑަކީ ނޮޅިވަރަމު ސުކޫލުގައި
            ދިވެހިބަސް ކިޔަވައިދޭ މުދައްރިސެކެވެ
          </p>

          <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2">
            <div className="flex items-center space-x-4">
              <FaGlobe className="text-3xl text-purple-600" />
              <span className="font-medium text-gray-800">
                Global Learning Access
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaChalkboardTeacher className="text-3xl text-purple-600" />
              <span className="font-medium text-gray-800">Expert Tutors</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaSmile className="text-3xl text-purple-600" />
              <span className="font-medium text-gray-800">
                Student Satisfaction
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaStar className="text-3xl text-purple-600" />
              <span className="font-medium text-gray-800">
                5-Star Rated Content
              </span>
            </div>
          </div>

          <Button
            variant="outline"
            className="mt-6 text-purple-700 border-purple-500 w-fit hover:bg-purple-100"
          >
            Explore Features
          </Button>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 text-center">
          <div className="py-6 text-white bg-purple-700">
            <h2 className="text-4xl font-bold">10K+</h2>
            <p className="text-xs font-medium">Lessons Delivered</p>
          </div>
          <div className="py-6 text-purple-800 bg-purple-100">
            <h2 className="text-4xl font-bold">4.9★</h2>
            <p className="text-xs font-medium">Average Rating</p>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-center bg-no-repeat bg-cover lg:w-2/5 filter grayscale"
        style={{ backgroundImage: "url('/assets/dady.png')" }}
      />
    </div>
  );
};

export default Features;
