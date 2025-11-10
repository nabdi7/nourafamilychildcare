import React from "react";
import { Calendar, FileText, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const GettingStarted = () => {
  const steps = [
    {
      number: "01",
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule a Tour",
      description:
        "Visit our facility, meet our caring staff, and see where your child will learn and play.",
      action: "Book a Tour",
      link: "/contact",
      color: "purple",
    },
    {
      number: "02",
      icon: <FileText className="w-8 h-8" />,
      title: "Complete Application",
      description:
        "Fill out our simple enrollment form with your child's information and program preferences.",
      action: "Get Started",
      link: "/contact",
      color: "orange",
    },
    {
      number: "03",
      icon: <Heart className="w-8 h-8" />,
      title: "Welcome to Our Family",
      description:
        "Join our family and watch your child thrive in a nurturing, engaging environment.",
      action: "Learn More",
      link: "/about",
      color: "purple",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-100 rounded-full opacity-40 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <p className="text-orange-500 font-medium mb-2 text-sm uppercase tracking-wider">
            ENROLLMENT PROCESS
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Getting Started is Easy
          </h2>
          {/* <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our family in three simple steps and give your child the best
            start in their learning journey.
          </p> */}
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop: horizontal line */}
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-orange-300" />
                  {/* Mobile: vertical line */}
                  <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-purple-300 to-orange-300" />
                </>
              )}

              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
                {/* Step Number */}
                {/* <div
                  className={`absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white shadow-lg ${
                    step.color === "purple"
                      ? "bg-gradient-to-br from-purple-500 to-purple-600"
                      : "bg-gradient-to-br from-orange-500 to-orange-600"
                  }`}
                >
                  {step.number}
                </div> */}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    step.color === "purple"
                      ? "bg-purple-100 text-purple-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Action Link */}
                <Link
                  href={step.link}
                  className={`inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${
                    step.color === "purple"
                      ? "text-purple-600 hover:text-purple-700"
                      : "text-orange-600 hover:text-orange-700"
                  }`}
                >
                  {step.action}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full"
              style={{ marginRight: "-96px", marginTop: "-96px" }}
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full"
              style={{ marginLeft: "-96px", marginBottom: "-96px" }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Join Our Family?
              </h3>
              <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
                Don&apos;t wait! Spots fill up quickly. Contact us today to
                secure your child&apos;s place in our nurturing learning
                environment.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-4 rounded-full hover:bg-purple-50 transition font-bold shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 transition font-bold shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
