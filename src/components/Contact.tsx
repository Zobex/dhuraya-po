"use client";
import React, { useState } from "react";
import Link from "next/link";
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
    <footer className="text-orange-900 border-t border-orange-200 bg-orange-50">
      <div className="grid grid-cols-1 gap-10 px-6 py-12 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="mb-4 text-xl font-bold text-orange-700">
            Eden Isles Escapes
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
        {/* Contact Info */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            {/* <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleCopy}
            >
              <FaPhoneAlt className="text-orange-600" />
              <span className="transition-colors hover:text-orange-600">
                +960 777 6108
              </span>
              {copied && <FaCheck className="ml-1 text-green-500" />}
            </li> */}
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-orange-600" />
              <a
                href="https://wa.me/9607776108"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-orange-600"
                onClick={handleCopy}
              >
                +960 777 6108
              </a>
              {copied && <FaCheck className="ml-1 text-green-500" />}
            </li>

            <li className="flex items-center gap-2">
              <FaEnvelope className="text-orange-600" />
              <a
                href="mailto:res@edenislesescapes.com"
                className="transition-colors hover:text-orange-600"
              >
                res@edenislesescapes.com
              </a>
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
        © {new Date().getFullYear()} Eden Isles Escapes Tours. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Contact;
