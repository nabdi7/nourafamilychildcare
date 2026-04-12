import React from "react";
import Link from "next/link";
import Image from "next/image";
import { quickLinks, contactInfo, businessHours, companyInfo } from "./index";

const Footer = () => {
  const getContactLink = (type: string, text: string) => {
    switch (type) {
      case "phone":
        return `tel:${text.replace(/\D/g, "")}`;
      case "email":
        return `mailto:${text}`;
      case "location":
        return `https://maps.app.goo.gl/Rx4vy9bu4vnesadw6`;
      default:
        return "#";
    }
  };

  return (
    <footer className="relative overflow-hidden bg-purple-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Noura Family Childcare Logo"
                  width={64}
                  height={64}
                  className="w-24 h-24"
                />
              </Link>
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              {companyInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-orange-500 transition-colors inline-flex items-center group font-medium"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all mr-0 group-hover:mr-2" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 group"
                >
                  <div className="mt-1 text-text-gray-400">{info.icon}</div>
                  <a
                    href={getContactLink(info.type, info.text)}
                    className="hover:text-orange-500 transition-colors font-medium"
                    target={info.type === "location" ? "_blank" : undefined}
                    rel={
                      info.type === "location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="max-w-fit">
            <h3 className="text-lg font-bold mb-6 text-gray-900">
              We&apos;re Open Daily
            </h3>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200">
              <p className="text-gray-700 mb-2 font-medium">
                {businessHours.days}
              </p>
              <p className="text-orange-500 font-bold text-lg">5am - 9pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
  <div className="flex justify-center items-center">
    <p className="text-gray-700 font-medium text-center">
      &copy; {new Date().getFullYear()} {companyInfo.copyright}. All
      rights reserved.
    </p>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
