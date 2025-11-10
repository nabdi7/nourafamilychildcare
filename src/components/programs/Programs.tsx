import React from "react";
import { programs } from "./index";

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 pb-10">
        <div className="mb-20">
          <p className="text-orange-500 font-medium mb-2 text-sm uppercase tracking-wider">
            PROGRAMS
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Learning Paths
          </h2>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* First large card */}
          <div className="md:col-span-7 bg-gradient-to-br from-purple-500 to-purple-600 p-10 rounded-3xl text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="mb-6">{programs[0].icon}</div>
              <h3 className="text-xl font-bold mb-2">{programs[0].title}</h3>
              <p className="text-purple-100 font-medium mb-3 text-sm">
                {programs[0].age}
              </p>
              <p className="text-white/90">{programs[0].description}</p>
            </div>
          </div>

          {/* Second card */}
          <div className="md:col-span-5 bg-orange-500 p-10 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <div className="mb-6">{programs[1].icon}</div>
              <h3 className="text-xl font-bold mb-2">{programs[1].title}</h3>
              <p className="text-orange-100 font-medium mb-3 text-sm">
                {programs[1].age}
              </p>
              <p className="text-white/90">{programs[1].description}</p>
            </div>
          </div>

          {/* Third card */}
          <div className="md:col-span-5 bg-gray-900 p-10 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-white opacity-5 rounded-full translate-x-1/2" />
            <div className="relative z-10">
              <div className="mb-6">{programs[2].icon}</div>
              <h3 className="text-xl font-bold mb-2">{programs[2].title}</h3>
              <p className="text-gray-400 font-medium mb-3 text-sm">
                {programs[2].age}
              </p>
              <p className="text-gray-300">{programs[2].description}</p>
            </div>
          </div>

          {/* Fourth large card */}
          <div className="md:col-span-7 bg-gradient-to-br from-orange-400 to-orange-500 p-10 rounded-3xl text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="mb-6">{programs[3].icon}</div>
              <h3 className="text-xl font-bold mb-2">{programs[3].title}</h3>
              <p className="text-orange-100 font-medium mb-3 text-sm">
                {programs[3].age}
              </p>
              <p className="text-white/90">{programs[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
