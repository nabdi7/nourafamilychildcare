"use client";
import emailjs from "@emailjs/browser";
import React, { useState, useRef, FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquare,
  Send,
} from "lucide-react";
import { contactInfo } from "./index";
interface ContactFormState {
  formSubmitted: boolean;
  contactMessage: string;
  user_name: string;
  user_email: string;
  user_phone: string;
  message: string;
}

const Contact = () => {
  const [
    {
      formSubmitted,
      // contactMessage,
      user_name,
      user_email,
      user_phone,
      message,
    },
    setState,
  ] = useState<ContactFormState>({
    formSubmitted: false,
    contactMessage: "",
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);
  console.log("Service ID:", process.env.NEXT_PUBLIC_APP_SERVICE_ID);
  console.log("Template ID:", process.env.NEXT_PUBLIC_APP_TEMPLATE_ID);
  console.log("User ID:", process.env.NEXT_PUBLIC_APP_USER_ID);
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID ?? "",
        formRef.current!,
        process.env.NEXT_PUBLIC_APP_USER_ID ?? ""
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setState((prevState) => ({
            ...prevState,
            formSubmitted: true,
            contactMessage: "We got your message. Thanks!",
          }));
          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              contactMessage: "",
              user_name: "",
              user_phone: "",
              user_email: "",
              message: "",
              formSubmitted: false,
            }));
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div className="bg-purple-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob pointer-events-none" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 pointer-events-none" />
      </div>
      <section className="py-20">
        <div className="container mx-auto px-6 pb-8">
          <div className="text-center mb-16">
            <div className="px-4 mb-6">
              <span className="text-orange-500 font-medium mb-2 text-sm uppercase tracking-wider">
                {contactInfo.company.name}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {contactInfo.company.tagline}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {contactInfo.company.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-2xl border border-purple-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-20 blur-3xl" />

                <div className="relative z-10">
                  <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-6"
                  >
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition" />
                        <input
                          type="text"
                          name="user_name"
                          value={user_name}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              user_name: e.target.value,
                            }))
                          }
                          required
                          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition" />
                          <input
                            type="email"
                            name="user_email"
                            value={user_email}
                            onChange={(e) =>
                              setState((prevState) => ({
                                ...prevState,
                                user_email: e.target.value,
                              }))
                            }
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition outline-none"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition" />
                          <input
                            type="tel"
                            name="user_phone"
                            value={user_phone}
                            onChange={(e) =>
                              setState((prevState) => ({
                                ...prevState,
                                user_phone: e.target.value,
                              }))
                            }
                            required
                            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-focus-within:text-purple-600 transition" />
                        <textarea
                          name="message"
                          value={message}
                          onChange={(e) =>
                            setState((prevState) => ({
                              ...prevState,
                              message: e.target.value,
                            }))
                          }
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition outline-none resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-purple-800 transition transform hover:scale-105 hover:shadow-xl font-semibold flex items-center justify-center gap-2 group"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                    </button>
                    {formSubmitted && (
                      <div className="bg-green-50 border-2 border-green-200 text-green-700 px-6 py-4 rounded-xl text-center font-medium animate-pulse">
                        ✓ Success! We&apos;ll get back to you shortly.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full"
                  style={{ marginRight: "-64px", marginTop: "-64px" }}
                />
                <div
                  className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full"
                  style={{ marginLeft: "-64px", marginBottom: "-64px" }}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">
                    Contact Information
                  </h3>
                  <p className="text-purple-100 mb-8">
                    Reach out to us through any of these.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Address</div>
                        <a
                          href={`https://maps.app.goo.gl/Rx4vy9bu4vnesadw6`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-100 hover:text-white transition leading-relaxed"
                        >
                          {contactInfo.address.street},{" "}
                          {contactInfo.address.city} {contactInfo.address.state}{" "}
                          {contactInfo.address.zip}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Call Us</div>
                        <a
                          href={`tel:${contactInfo.phone.replace(
                            /[^0-9]/g,
                            ""
                          )}`}
                          className="text-purple-100 hover:text-white transition text-lg font-medium"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-purple-100 hover:text-white transition break-all"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">Business Hours</div>
                        <div className="text-purple-100 leading-relaxed">
                          {contactInfo.hours.text}
                          <br />
                          {contactInfo.hours.details}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

      <section className="container mx-auto px-6 py-8">
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            title="Najah Family Childcare Location"
            className="w-full h-96"
            src={contactInfo.mapUrl}
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>

      <section className="py-20 bg-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
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
              <h2 className="text-4xl font-bold mb-4">
                {contactInfo.tour.title}
              </h2>
              <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
                {contactInfo.tour.description}
              </p>
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-10 py-4 rounded-full hover:bg-purple-50 transition font-bold shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
