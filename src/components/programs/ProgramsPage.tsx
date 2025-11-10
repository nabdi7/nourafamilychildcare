import React from "react";
import {
  Baby,
  Smile,
  Sparkles,
  Zap,
  Star,
  Clock,
  Sunrise,
  Sunset,
} from "lucide-react";

const ProgramsPage = () => {
  const programs = [
    {
      icon: <Baby className="w-8 h-8 text-purple-600" />,
      title: "Toddlers",
      age: "Ages 12-36 months",
      description:
        "Loving care with safe play spaces, naptime routines, and attentive supervision.",
      features: [
        "Diaper changes & potty training support",
        "Safe play areas & toys",
        "Structured nap times",
        "Daily parent updates",
      ],
    },
    {
      icon: <Smile className="w-8 h-8 text-purple-600" />,
      title: "Preschool Age",
      age: "Ages 3-4",
      description:
        "Group playtime, snack breaks, and plenty of fun in a safe, watchful environment.",
      features: [
        "Supervised group play",
        "Outdoor playtime",
        "Healthy snacks provided",
        "Rest & quiet time",
      ],
    },
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Pre-K Age",
      age: "Ages 4-5",
      description:
        "Active play, outdoor time, and creative activities with caring supervision.",
      features: [
        "Arts & crafts activities",
        "Indoor & outdoor play",
        "Nutritious meals & snacks",
        "Social play with peers",
      ],
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      title: "Kindergarten Age",
      age: "Ages 5-6",
      description:
        "Energetic play, group games, and structured activities in a fun, safe space.",
      features: [
        "Before & after school care",
        "Homework help available",
        "Active play & games",
        "Healthy snacks",
      ],
    },
  ];

  return (
    <div className="bg-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      <section className="py-20">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center px-4 mb-6">
            <p className="text-orange-500 font-medium mb-2 text-sm uppercase tracking-wider">
              OUR PROGRAMS
            </p>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Programs for All Ages
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality care tailored to each age group. We provide a safe,
              nurturing environment where your child can play, rest, and feel at
              home while you&apos;re at work.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-purple-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-sm">
                      {program.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {program.title}
                      </h2>
                      <p className="text-purple-600 font-semibold">
                        {program.age}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-5 text-lg">
                    {program.description}
                  </p>
                  <div className="bg-purple-50 p-5 rounded-2xl">
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-purple-100 p-1 rounded-full mt-0.5">
                            <Star className="w-4 h-4 text-purple-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Daily Care Schedule
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Open daily from 5:00 AM to 9:00 PM with flexible drop-off and
              pick-up times to fit your schedule. Your child will enjoy a
              structured day with playtime, meals, and rest.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className=" bg-purple-50 p-8 rounded-3xl border">
              <div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="flex items-start gap-6 p-6 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-purple-100 overflow-hidden">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <Sunrise className="w-8 h-8 text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Morning Session
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <span className="text-lg font-bold text-gray-800">
                          5:00 AM - 1:00 PM
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Breakfast, morning play, outdoor activities, snacks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 p-6 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-purple-100 overflow-hidden">
                    <div className="bg-white p-4 rounded-xl shadow-sm">
                      <Sunset className="w-8 h-8 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Afternoon Session
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 text-purple-500" />
                        <span className="text-lg font-bold text-gray-800">
                          1:00 PM - 9:00 PM
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Lunch, naptime, afternoon play, dinner, evening
                        activities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-6 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-purple-100 overflow-hidden">
                  <Clock className="w-6 h-6 text-gray-700" />
                  <p className="text-gray-800 font-semibold text-lg">
                    Flexible drop-off and pick-up times available during our
                    operating hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
