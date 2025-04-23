// import React from "react";
// import { Button } from "@/components/ui/button";

// const Features = () => {
//   return (
//     <div className="lg:flex lg:h-screen">
//       {/* Left side Panel */}
//       <div className="flex flex-col items-baseline object-cover max-w-full py-40 bg-cover lg:w-2/5 lg:p-12 bg-detail-image"></div>

//       {/* Right Side Panel  */}
//       <div className="max-w-full lg:w-3/5">
//         <div className="flex flex-col p-12 lg:pt-12 lg:px-24">
//           <h2 className="w-full pb-2 text-3xl font-bold leading-10 tracking-wide text-gray-800 transition-colors scroll-m-20 lg:text-4xl lg:w-3/4 first:mt-4">
//             We Value Your Trust & Build Your Dream Since 2014
//           </h2>
//           <div className="flex-row gap-8 mt-6 lg:flex lg:mt-16">
//             <div>
//               <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-700 font-normal text-justify tracking-wide">
//                 We deliver value over mony and make trusted clients.We Value
//                 Your Trust & Build Your Dreams. We deliver value over mony and
//                 make trusted clients.We Value Your Trust & Build Your Dreams.
//               </p>
//             </div>
//             <div>
//               <p className="leading-7 [&:not(:first-child)]:mt-2 mb-6 text-gray-700 font-normal text-justify tracking-wide">
//                 We deliver value over mony and make trusted clients.We Value
//                 Your Trust & Build Your Dreams. We deliver value over mony and
//                 make trusted clients.We Value Your Trust & Build Your Dreams.
//               </p>
//               <Button variant="outline">LEARN MORE</Button>
//             </div>
//           </div>
//         </div>
//         <div className="flex lg:mt-[115px]">
//           <div className="flex flex-col justify-center items-center bg-[#F5AA0E] text-gray-800 p-5 flex-auto">
//             <h2 className="pb-2 text-3xl font-bold leading-10 tracking-wide transition-colors scroll-m-20 first:mt-0">
//               09
//             </h2>
//             <h3 className="text-xs font-medium leading-6 tracking-wide transition-colors scroll-m-20 first:mt-0">
//               YEARS ESTABLISHED
//             </h3>
//           </div>
//           <div className="flex flex-col items-center justify-center flex-auto p-5 text-gray-300 bg-black">
//             <h2 className="pb-2 text-3xl font-bold leading-10 tracking-wider transition-colors scroll-m-20 first:mt-0">
//               175+
//             </h2>
//             <h3 className="text-xs leading-6 tracking-wider transition-colors scroll-m-20 font-font-medium first:mt-0">
//               PROJECTS
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Features;

import React from "react";
import { Button } from "@/components/ui/button";
import { FaSmile, FaGlobe, FaChalkboardTeacher, FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <div className="lg:flex lg:h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Left side Image Panel */}

      {/* Right Side Content */}
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
        style={{ backgroundImage: "url('/assets/dad.png')" }}
      />
    </div>
  );
};

export default Features;
