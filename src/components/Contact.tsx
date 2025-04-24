"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaCheck,
} from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+9607776108");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative w-full bg-blur-lg bg-gradient-to-b from-[#bea5d8] via-[#cdb6e6] to-[#a671db] overflow-hidden text-white">
      <div className="absolute w-80 h-80 bg-purple-200/30 rounded-full blur-3xl top-[-4rem] left-[-4rem]" />
      <div className="absolute w-64 h-64 bg-purple-300/20 rounded-full blur-2xl bottom-[-3rem] right-[-3rem]" />

      {/* Coconut Leaf Bottom Corners */}
      <Image
        src="/assets/R.png"
        alt="Coconut Leaf Left"
        width={150}
        height={150}
        className="absolute -bottom-14 -left-4 blur-sm z-0 rotate-[170deg] pointer-events-none opacity-100 w-80 h-72"
      />
      <Image
        src="/assets/R.png"
        alt="Coconut Leaf Right"
        width={150}
        height={150}
        className="absolute -bottom-14 -right-10 blur-sm z-0 rotate-[90deg] pointer-events-none opacity-100 w-80 h-72"
      />

      <div className="relative z-10 grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-purple-700 font-samee">
            qlaTOP ayarud
          </h3>
          <p className="text-sm text-gray-700">
            Empowering learners and educators. Find resources, expert tutors,
            and guidance to achieve your academic goals.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-right">
          <h4 className="mb-4 text-lg font-semibold font-utheemu text-secondary-foreground">
            ފަސޭހައިން ހޯދާލުމަށް
          </h4>
          <ul className="space-y-2 text-sm font-medium text-purple-800 font-utheemu">
            <li>
              <Link href="/about" className="hover:text-purple-100">
                އިތުރު މަޢުލޫމާތު
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-purple-100">
                ޙިދުމަތްތަށް
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className="hover:text-purple-100 font-utheemu"
              >
                ލިޔުންތަކާ ގުޅުންހުރި
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-100">
                މަޢުލޫމާތު ސާފްކުރުމަށް
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col text-right">
          <h4 className="mb-4 text-lg font-semibold font-utheemu text-secondary-foreground">
            ކޮންޓެކްޓް
          </h4>
          <ul className="flex flex-col justify-end space-y-2 text-sm text-right text-gray-700">
            <li className="flex items-center justify-end w-full gap-2 text-right">
              <a
                href="https://wa.me/9607776108"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-800 transition-colors font-mediu font-utheemu hover:text-purple-100"
                onClick={handleCopy}
              >
                +960 777 6108
              </a>
              {copied && <FaCheck className="ml-1 text-green-500" />}
              <FaPhoneAlt className="text-purple-900  scale-x-[-1]" />
            </li>

            <li className="flex items-center justify-end w-full gap-2 text-right font-utheemu">
              <a
                href="mailto:contact@tutorwriterhub.com"
                className="text-sm font-medium text-purple-800 transition-colors hover:text-purple-100"
              >
                contact@tutorwriterhub.com
              </a>
              <FaEnvelope className="text-purple-900 scale-x-[-1]" />
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col text-right">
          <h4 className="mb-4 text-lg font-semibold font-utheemu text-secondary-foreground">
            {" "}
            އިތުރު މަޢުލޫމާތު ސާފުކުރުމަށް
          </h4>
          <div className="flex items-end justify-end space-x-4 text-lg text-purple-900">
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
      <div className="relative z-10 py-4 text-sm font-medium text-center border-t border-purple-100 font-utheemu text-secondary-foreground">
        © {new Date().getFullYear()} ދުރަޔަ ޕޯޓަލް
      </div>
    </footer>
  );
};

export default Contact;
