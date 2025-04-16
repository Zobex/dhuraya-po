// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 px-6 py-4 text-white bg-orange-500 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-2xl font-bold">My Website</h1>
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
            <Link href="/contact" className="hover:text-orange-100">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
