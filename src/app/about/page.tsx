import React from "react";
import AboutPage from "@/components/about/AboutPage";

export const metadata = {
  title: "About Us",
  description:
    "Learn about our warm, family-focused childcare in Auburn WA. We provide exceptional early learning with experienced, caring educators in a nurturing home environment where every child thrives.",
  openGraph: {
    title: "About Us",
    description:
      "Learn about our warm, family-focused childcare in Auburn WA. We provide exceptional early learning with experienced, caring educators in a nurturing home environment.",
    type: "website",
    url: "https://nourafamilychildcare.com/about",
  },
  twitter: {
    title: "About Us",
    description:
      "Learn about our warm, family-focused childcare in Auburn WA. Exceptional early learning with experienced, caring educators in a nurturing home environment.",
  },
};

const page = () => {
  return (
    <div>
      <AboutPage />
    </div>
  );
};

export default page;
