// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b backdrop-blur-lg border-white/20">
//       <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-3">
//           <Image
//             src="/assets/logo.png"
//             alt="Lacture logo"
//             width={52}
//             height={52}
//           />
//           <span className="text-lg font-extrabold tracking-wide text-white font-samee drop-shadow-md">
//             ayarud
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <ul className="hidden gap-6 text-sm font-bold text-white md:flex">
//           <li>
//             <Link href="/" className="transition hover:text-purple-300">
//               ފުރަތަމަ ޞަފްޙާ
//             </Link>
//           </li>
//           <li>
//             <Link href="/about" className="transition hover:text-purple-300">
//               އިތުރު މަޢުލޫމާތު
//             </Link>
//           </li>
//           <li>
//             <Link href="/lectures" className="transition hover:text-purple-300">
//               ފިލާވަޅުތަށް
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" className="transition hover:text-purple-300">
//               ވާހަކަ ދައްކާލުމަށް
//             </Link>
//           </li>
//         </ul>

//         {/* Mobile Toggle */}
//         <button
//           className="text-white md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="px-6 pt-2 pb-4 border-t md:hidden backdrop-blur-lg bg-white/10 border-white/10">
//           <ul className="flex flex-col gap-4 text-sm font-medium text-right text-white">
//             <li className="hover:font-extrabold">
//               <Link href="/" onClick={() => setIsOpen(false)}>
//                 ފުރަތަމަ ޞަފްޙާ
//               </Link>
//             </li>
//             <li className="hover:font-extrabold">
//               <Link href="/about" onClick={() => setIsOpen(false)}>
//                 އިތުރު މަޢުލޫމާތު
//               </Link>
//             </li>
//             <li className="hover:font-extrabold">
//               <Link href="/lectures" onClick={() => setIsOpen(false)}>
//                 ފިލާވަޅުތަށް
//               </Link>
//             </li>
//             <li className="hover:font-extrabold">
//               <Link href="/contact" onClick={() => setIsOpen(false)}>
//                 ވާހަކަ ދައްކާލުމަށް
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b shadow-md bg-gradient-to-r from-gray-600/30 via-gray-800/40 to-gray-900/40 backdrop-blur-md backdrop-saturate-200 border-white/20">
      <div className="flex items-center justify-between px-6 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Lacture logo"
            width={52}
            height={52}
          />
          <span className="text-lg font-extrabold tracking-wide text-white font-samee drop-shadow-md">
            ayarud
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden gap-6 text-sm font-bold text-white md:flex">
          <li>
            <Link href="/" className="transition hover:text-purple-300">
              ފުރަތަމަ ޞަފްޙާ
            </Link>
          </li>
          <li>
            <Link href="/about" className="transition hover:text-purple-300">
              އިތުރު މަޢުލޫމާތު
            </Link>
          </li>
          <li>
            <Link href="/lesson" className="transition hover:text-purple-300">
              ފިލާވަޅުތަށް
            </Link>
          </li>
          <li>
            <Link href="/contact" className="transition hover:text-purple-300">
              ވާހަކަ ދައްކާލުމަށް
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-6 pt-2 pb-4 border-t md:hidden backdrop-blur-md bg-white-900/20 border-white/10">
          <ul className="flex flex-col gap-4 text-sm font-medium text-right text-white">
            <li className="hover:font-extrabold">
              <Link href="/" onClick={() => setIsOpen(false)}>
                ފުރަތަމަ ޞަފްޙާ
              </Link>
            </li>
            <li className="hover:font-extrabold">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                އިތުރު މަޢުލޫމާތު
              </Link>
            </li>
            <li className="hover:font-extrabold">
              <Link href="/lesson" onClick={() => setIsOpen(false)}>
                ފިލާވަޅުތަށް
              </Link>
            </li>
            <li className="hover:font-extrabold">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                ވާހަކަ ދައްކާލުމަށް
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
