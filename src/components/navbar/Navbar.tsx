"use client";
import React from "react";
// import { TreePine } from "lucide-react";
import Menu from "../menu/Menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-6 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Noura Family Childcare Logo"
                width={48}
                height={48}
                className="w-24 h-24"
              />{" "}
            </Link>
            {/* <Link href="/" className="text-xl font-bold text-purple-600">
              Noura Family Childcare
            </Link> */}
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              About Us
            </Link>
            <Link
              href="/programs"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              Programs
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition"
            >
              Register Now
            </Link>
          </div>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
