import React from "react";
import TestimonialsPage from "@/components/testimonials/TestimonialsPage";

export const metadata = {
  title: "Testimonials",
  description:
    "Hear from families who trust Noura Family Childcare. Read parent testimonials about our caring educators and exceptional early learning programs.",
  openGraph: {
    title: "Testimonials",
    description:
      "Hear from families who trust Noura Family Childcare. Read parent testimonials about our caring educators and exceptional early learning programs.",
    type: "website",
    url: "https://nourafamilychildcare.com/testimonials",
  },
  twitter: {
    title: "Testimonials",
    description:
      "Hear from families who trust Noura Family Childcare. Read parent testimonials about our caring educators and exceptional early learning programs.",
  },
};

const page = () => {
  return (
    <div>
      <TestimonialsPage />
    </div>
  );
};

export default page;
