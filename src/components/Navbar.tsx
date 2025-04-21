"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-orange-500 shadow-md">
      <div className="container flex items-center justify-between px-6 py-0 mx-auto text-white">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/assets/logo.png"
            alt="Eden Isles Escape logo"
            width={130}
            height={130}
            className="rounded-full"
          />
          <span className="text-2xl font-bold md:text-3xl">
            Eden Isles Escapes
          </span>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden space-x-6 text-sm font-medium md:flex">
          <li>
            <Link href="/" className="hover:text-orange-100">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-100">
              About
            </Link>
          </li>
          <li>
            <Link href="/explore" className="hover:text-orange-100">
              Packages
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-orange-100">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium text-white hover:text-orange-800">
            <li>
              <Link
                href="/"
                className="hover:text-orange-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-orange-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="hover:text-orange-100"
                onClick={() => setIsOpen(false)}
              >
                Packages
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-orange-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
