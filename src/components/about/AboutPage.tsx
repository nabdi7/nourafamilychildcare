import React from "react";
import Image from "next/image";
import {
  FileText,
  Download,
  Shield,
  Sparkles,
  Heart,
  Star,
  Clock,
} from "lucide-react";

const AboutPage = () => {
  const downloads = [
    {
      title: "Application Form",
      description:
        "Download our application form to begin the enrollment process",
      icon: <FileText className="w-6 h-6" />,
      href: "/application.pdf",
    },
    {
      title: "Parent Handbook",
      description: "View our comprehensive guide for parents",
      icon: <FileText className="w-6 h-6" />,
      href: "/parenthandbook.pdf",
    },
    {
      title: "Childcare Agreement",
      description: "Read and sign our childcare agreement",
      icon: <FileText className="w-6 h-6" />,
      href: "/childcareAgreement.pdf",
    },
    {
      title: "Immunization",
      description: "Learn about our immunization requirements",
      icon: <FileText className="w-6 h-6" />,
      href: "/immunization.pdf",
    },
  ];

  const coreValues = [
    {
      title: "Trust & Safety",
      description:
        "Your child's safety is our top priority. We provide a secure, monitored environment where you can feel confident your little one is protected.",
      icon: <Shield className="w-8 h-8" />,
      color: "purple",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Flexible Care",
      description:
        "We understand busy schedules. Our flexible hours and accommodating approach work around your family's needs.",
      icon: <Clock className="w-8 h-8" />,
      color: "pink",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      title: "Loving Attention",
      description:
        "Every child receives personalized care and genuine affection. We treat your children like they're part of our own family.",
      icon: <Heart className="w-8 h-8" />,
      color: "orange",
      gradient: "from-orange-500 to-orange-600",
    },
  ];

  const stats = [
    {
      number: "100%",
      label: "Safety Record",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      number: "5★",
      label: "Parent Rating",
      icon: <Star className="w-5 h-5" />,
    },
    {
      number: "Daily",
      label: "Learning Activities",
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      number: "24/7",
      label: "Parent Support",
      icon: <Heart className="w-5 h-5" />,
    },
  ];

  return (
    <div className="bg-purple-50 ">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none" />
      </div>
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse" />
          <div
            className="absolute top-40 right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-6 pb-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <div className="mb-6">
                <span className="text-orange-500 font-medium mb-2 text-sm uppercase tracking-wider">
                  About Us
                </span>
              </div>

              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Safe Care, Loving Environment{" "}
              </h2>

              <p className="text-gray-600 mb-6">
                At Noura Family Childcare, we provide a warm, safe space where
                your children are cared for with the same love and attention we
                give our own. Our home-style environment helps little ones feel
                comfortable and happy throughout the day.
              </p>

              <p className="text-gray-600 mb-8">
                We understand that choosing childcare is a big decision.
                That&apos;s why we focus on building trust with families through
                reliable, attentive care. Your child will enjoy supervised
                playtime, nutritious meals, and plenty of activities in a clean,
                secure setting.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {stat.number}
                      </span>
                      <div className="text-purple-600">{stat.icon}</div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative order-2 md:order-1">
              <Image
                src="/img2.jpg"
                width={500}
                height={400}
                alt="Children playing"
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <div className="relative my-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-purple-50 px-4">
            <div className="flex space-x-4 items-center">
              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <div className="h-4 w-4 rounded-full bg-purple-600"></div>
              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
              <div className="h-2 w-2 rounded-full bg-purple-400"></div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The values that guide our approach to caring for your children
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{value.icon}</div>
                    </div>

                    <div
                      className={`absolute -top-2 -right-2 w-8 h-8 bg-${value.color}-200 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-300`}
                    ></div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Important Documents
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download these essential documents to get started with Noura
              Family Childcare
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {downloads.map((item, index) => (
              <div
                key={index}
                className="block bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
