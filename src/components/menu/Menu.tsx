import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-purple-100 rounded-lg transition"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-purple-600" />
        ) : (
          <MenuIcon className="w-6 h-6 text-purple-600" />
        )}
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
        fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        z-50
      `}
      >
        <div className="flex flex-col h-full">
          {/* Close button for mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-4 flex justify-end"
          >
            <X className="w-6 h-6 text-purple-600" />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 p-6">
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 transition px-4 py-2 rounded-lg hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-gray-600 hover:text-purple-600 transition px-4 py-2 rounded-lg hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </Link>
            {/* <Link
              href="/gallery"
              className="text-gray-600 hover:text-purple-600 transition px-4 py-2 rounded-lg hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              Our Gallery
            </Link>
            <Link
              href="/testimonials"
              className="text-gray-600 hover:text-purple-600 transition px-4 py-2 rounded-lg hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link> */}
            <Link
              href="/contact"
              className="text-gray-600 hover:text-purple-600 transition px-4 py-2 rounded-lg hover:bg-purple-50"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Menu;
