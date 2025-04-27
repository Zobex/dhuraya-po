"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Define prop types for NavLink component
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if link is active
  const isActive = (path: string): boolean => {
    return pathname === path;
  };

  // Link component with active state handling
  const NavLink = ({ href, children }: NavLinkProps) => {
    const active = isActive(href);
    return (
      <Link
        href={href}
        className={`transition ${
          active
            ? "text-purple-400 font-extrabold"
            : "text-white hover:text-purple-300"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    );
  };

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
        <ul className="hidden gap-6 text-sm font-bold md:flex">
          <li>
            <NavLink href="/">ފުރަތަމަ ޞަފްޙާ</NavLink>
          </li>
          <li>
            <NavLink href="/contact">އިތުރު މަޢުލޫމާތު</NavLink>
          </li>
          <li>
            <NavLink href="/ehenihen">އެހެނިހެން</NavLink>
          </li>
          <li>
            <NavLink href="/ithuru-masahkai">ފިއްތާލައިގެން ލިބޭ</NavLink>
          </li>
          <li>
            <NavLink href="/biography">ބައޮގްރަފީ</NavLink>
          </li>
          <li>
            <NavLink href="/dharivarunge-masahkai">
              ދަރިވަރުންގެ މަސައްކަތް
            </NavLink>
          </li>
          <li>
            <NavLink href="/dheyha">ދޭހަ</NavLink>
          </li>
          <li>
            <NavLink href="/samaasa-adhabu">ސަމާސާއަދަބު</NavLink>
          </li>
          <li>
            <NavLink href="/drama">ޑުރާމާ</NavLink>
          </li>
          <li>
            <NavLink href="/dhathuru-naama">ދަތުރުނާމަ</NavLink>
          </li>
          <li>
            <NavLink href="/vaahaka">ވާހަކަ</NavLink>
          </li>
          <li>
            <NavLink href="/lhen">ޅެން</NavLink>
          </li>
          <li>
            <NavLink href="/mazumoonu">މަޒުމޫނު</NavLink>
          </li>
          <li>
            <NavLink href="/table-content">ބަނޑޭރިގަށޑު</NavLink>
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
          <ul className="flex flex-col gap-4 text-sm font-medium text-right">
            <li>
              <NavLink href="/">ފުރަތަމަ ޞަފްޙާ</NavLink>
            </li>
            <li>
              <NavLink href="/contact">އިތުރު މަޢުލޫމާތު</NavLink>
            </li>

            <li>
              <NavLink href="/ehenihen">އެހެނިހެން</NavLink>
            </li>
            <li>
              <NavLink href="/ithuru-masahkai">ފިއްތާލައިގެން ލިބޭ</NavLink>
            </li>
            <li>
              <NavLink href="/biography">ބައޮގްރަފީ</NavLink>
            </li>
            <li>
              <NavLink href="/dharivraunge-masahkai">
                ދަރިވަރުންގެ މަސައްކަތް
              </NavLink>
            </li>
            <li>
              <NavLink href="/dheyha">ދޭހަ</NavLink>
            </li>
            <li>
              <NavLink href="/samaasa-adhabu">ސަމާސާއަދަބު</NavLink>
            </li>
            <li>
              <NavLink href="/drama">ޑުރާމާ</NavLink>
            </li>
            <li>
              <NavLink href="/dhathuru-naame">ދަތުރުނާމަ</NavLink>
            </li>
            <li>
              <NavLink href="/vaahaka">ވާހަކަ</NavLink>
            </li>
            <li>
              <NavLink href="/lhen">ޅެން</NavLink>
            </li>
            <li>
              <NavLink href="/mazumoonu">މަޒުމޫނު</NavLink>
            </li>
            <li>
              <NavLink href="/table-content">ބަނޑޭރިގަށޑު</NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
