// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   BiSolidMap,
//   BiSolidPhone,
//   BiLogoYoutube,
//   BiLogoFacebook,
// } from "react-icons/bi";
// import { MdEmail } from "react-icons/md";

// const Contact = () => {
//   return (
//     <>
//       <div className="lg:flex lg:h-screen">
//         {/* Left Side Panel  pt-12 pl-24 pr-16 */}
//         <div className="max-w-full lg:w-2/3 bg-[#F5AA0E]">
//           <div className="flex flex-col justify-center p-12 space-y-8 lg:p-36">
//             <h2 className="w-3/4 pb-2 text-3xl font-bold leading-10 tracking-wider text-gray-800 transition-colors scroll-m-20 first:mt-0">
//               Get In Touch
//             </h2>
//             <div className="space-y-8">
//               <Input type="text" placeholder="Name" />
//               <Input type="email" placeholder="Email" />
//               <Textarea placeholder="Type your message here." />
//               <div className="flex justify-end">
//                 <Button variant="outlinewhite">SEND MESSAGE</Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right side Panel */}
//         <div className="flex-col max-w-full lg:flex lg:w-1/3">
//           <div className="flex justify-center w-full gap-5 p-3 text-3xl text-white bg-gray-800 lg:p-6">
//             <span className="cursor-pointer hover:text-red-600">
//               <BiLogoYoutube />
//             </span>
//             <span className="cursor-pointer hover:text-blue-600">
//               <BiLogoFacebook />
//             </span>
//           </div>
//           <div className="flex flex-col gap-4 p-12 text-gray-500 lg:mt-20 lg:p-24">
//             <h2 className="pb-4 text-3xl font-bold leading-10 tracking-wider text-gray-800 transition-colors scroll-m-20 first:mt-0">
//               Reach Us
//             </h2>
//             <div className="flex items-center text-base font-medium tracking-wide cursor-default gap-x-3">
//               <span>
//                 <BiSolidMap />
//               </span>
//               <p>Main Market Phase 2 Ajwa City Sahiwal</p>
//             </div>
//             <div className="flex items-center text-base font-medium tracking-wide cursor-default gap-x-3">
//               <span>
//                 <BiSolidMap />
//               </span>
//               <p>20 K.M. Paijan Stop, Raiwind Road Lahore.</p>
//             </div>
//             <div className="flex items-center text-base font-medium tracking-wide cursor-default gap-x-3">
//               <span>
//                 <BiSolidPhone />
//               </span>
//               <p>+92 323-6854958</p>
//               <br />
//             </div>
//             <div className="flex items-center text-base font-medium tracking-wide cursor-default gap-x-3">
//               <span>
//                 <MdEmail />
//               </span>
//               <p>babafaridconstructiondevel4007@gmail.com</p>
//             </div>
//             <div className="flex gap-4 text-4xl">
//               <span className="cursor-pointer hover:text-red-600">
//                 <BiLogoYoutube />
//               </span>
//               <span className="cursor-pointer hover:text-blue-600">
//                 <BiLogoFacebook />
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <footer className="text-orange-900 border-t border-orange-200 bg-orange-50">
      <div className="grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-700">
            Rayya Tours
          </h3>
          <p className="text-sm text-gray-700">
            Making your travel dreams come true. Discover scenic views, hidden
            gems, and unforgettable adventures with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <Link href="/about" className="hover:text-orange-600">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/explore" className="hover:text-orange-600">
                Explore
              </Link>
            </li>
            <li>
              <Link href="/destinations" className="hover:text-orange-600">
                Destinations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-600" /> +123 456 7890
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-600" /> hello@rayyatours.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 text-lg text-orange-600">
            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="transition-colors hover:text-blue-400"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 text-sm text-center text-gray-500 border-t border-orange-100">
        © {new Date().getFullYear()} Rayya Tours. All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
