import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 px-6 py-4 text-white bg-orange-500 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo and Site Title */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png" // Make sure this exists in your /public folder
            alt="Eden Isles Escape logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">Eden Isles Escape</span>
        </Link>

        {/* Nav Links */}
        <ul className="flex space-x-6">
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
    </nav>
  );
}
