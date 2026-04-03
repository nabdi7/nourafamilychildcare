import React from "react";
import Image from "next/image";
// import { Sparkles, Users, Award } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-purple-50">
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-40 h-40 bg-orange-200 rounded-full opacity-40 animate-pulse" />
        <div className="absolute bottom-32 left-20 w-56 h-56 bg-purple-200 rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-orange-100 rounded-full opacity-50" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center py-20 ">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Where Dreams
              <span className="block text-purple-600">Grow Big</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A safe, engaging environment where children discover their
              potential through creative play and meaningful connections.
            </p>

            {/* Feature cards */}
            {/* <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-white p-4 rounded-2xl shadow-md text-center">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Expert Staff
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-md text-center">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Licensed Care
                </p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-md text-center">
                <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Fun Learning
                </p>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap pt-4">
              <Link
                href="/contact"
                className="bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl inline-block text-center font-semibold"
              >
                Enroll Today
              </Link>
              <Link
                href="/programs"
                className="bg-white text-purple-600 px-10 py-4 rounded-full hover:bg-purple-50 transition-all border-2 border-purple-600 inline-block text-center font-semibold"
              >
                Our Programs
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative">
              <div className="bg-purple-600 rounded-3xl overflow-hidden shadow-2xl transform rotate-3">
                <Image
                  src="/img2.jpg"
                  width={600}
                  height={700}
                  alt="Happy children learning"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Overlapping accent card */}
              {/* <div className="absolute -bottom-8 -left-8 bg-orange-500 rounded-3xl p-8 shadow-xl transform -rotate-3">
                <div className="text-white">
                  <p className="text-4xl font-bold">500+</p>
                  <p className="text-lg">Happy Families</p>
                </div>
              </div> */}

              {/* Floating badge */}
              {/* <div className="absolute -top-6 -right-6 bg-white rounded-full p-6 shadow-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">15+</p>
                  <p className="text-sm text-gray-600">Years</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
