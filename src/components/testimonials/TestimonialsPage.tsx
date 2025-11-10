import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "./index";

const TestimonialsPage = () => {
  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
      <div className="container mx-auto px-6 pb-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-6">
            <span className="text-purple-600 font-medium">Our Reviews</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            What Parents Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our happy parents!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-bold text-gray-800">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
