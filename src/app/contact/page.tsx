import React from "react";
import Contact from "@/components/contact/Contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Noura Family Childcare in Auburn WA to schedule a visit and discover our exceptional early learning programs and personalized care.",
  openGraph: {
    title: "Contact Us",
    description:
      "Contact Noura Family Childcare in Auburn WA to schedule a visit and discover our exceptional early learning programs and personalized care.",
    type: "website",
    url: "https://nourafamilychildcare.com/contact",
  },
  twitter: {
    title: "Contact Us",
    description:
      "Contact Noura Family Childcare in Auburn WA to schedule a visit and discover our exceptional early learning programs and personalized care.",
  },
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
