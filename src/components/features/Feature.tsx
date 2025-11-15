import React from "react";
import Image from "next/image";
import Link from "next/link";
import { features } from "./index";

const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-purple-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 pb-8">
        {/* Header */}
        <div className="mb-20">
          <p className="text-orange-500 font-medium mb-2 text-sm uppercase tracking-wider">
            WHY CHOOSE US
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            {" "}
            What Makes Us Special
          </h2>
        </div>

        {/* Features Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-3xl hover:shadow-xl transition-shadow border border-purple-100"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-purple-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Completely Redesigned */}
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Image - Takes 3 columns */}
            <div className="md:col-span-3">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img1.jpg"
                  width={800}
                  height={500}
                  alt="Daycare facility"
                  className="w-full h-full object-cover"
                />
                {/* Overlay badge */}
                <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                  <p className="text-purple-600 font-bold">
                    Award Winning Care
                  </p>
                </div>
              </div>
            </div>

            {/* Content - Takes 2 columns */}
            <div className="md:col-span-2 flex flex-col justify-center bg-white rounded-3xl p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Come Visit Us
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience our warm, welcoming space where children thrive. See
                our programs in action and meet our caring team.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block text-center bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition font-semibold shadow-lg"
                >
                  Book Your Visit
                </Link>
                <p className="text-center text-sm text-gray-500">
                  Tours available Monday - Friday
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
