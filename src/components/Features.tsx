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
import { FaSmile, FaGlobe, FaMapSigns, FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <div className="lg:flex lg:h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      {/* Left side Image Panel */}
      <div
        className="w-full bg-center bg-cover lg:w-2/5 bg-tour-image"
        style={{ backgroundImage: "url('/assets/sea.jpg')" }}
      />

      {/* Right Side Content */}
      <div className="flex flex-col justify-between w-full lg:w-3/5">
        <div className="p-10 space-y-8 md:p-16">
          <h2 className="text-3xl font-bold text-orange-700 md:text-4xl">
            Why Travel With Eden Isles Escapes?
          </h2>
          <p className="leading-relaxed text-gray-700">
            With a passion for adventure and a love for discovery, we curate
            unforgettable travel experiences. From scenic getaways to cultural
            explorations, we take care of every detail so you can enjoy the
            journey.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2">
            <div className="flex items-center space-x-4">
              <FaGlobe className="text-3xl text-orange-600" />
              <span className="font-medium text-gray-800">
                Worldwide Destinations
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapSigns className="text-3xl text-orange-600" />
              <span className="font-medium text-gray-800">
                Personalized Itineraries
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <FaSmile className="text-3xl text-orange-600" />
              <span className="font-medium text-gray-800">Happy Travelers</span>
            </div>
            <div className="flex items-center space-x-4">
              <FaStar className="text-3xl text-orange-600" />
              <span className="font-medium text-gray-800">
                Top Rated Experiences
              </span>
            </div>
          </div>

          <Button variant="outline" className="mt-6 w-fit">
            Discover More
          </Button>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-2 text-center">
          <div className="py-6 text-white bg-orange-600">
            <h2 className="text-4xl font-bold">10+</h2>
            <p className="text-xs font-medium">Years of Exploring</p>
          </div>
          <div className="py-6 text-orange-800 bg-orange-100">
            <h2 className="text-4xl font-bold">500+</h2>
            <p className="text-xs font-medium">Trips Completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
