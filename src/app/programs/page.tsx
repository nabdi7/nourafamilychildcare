import React from "react";
import ProgramsPage from "@/components/programs/ProgramsPage";

export const metadata = {
  title: "Our Programs",
  description:
    "Age-appropriate early learning programs for infants to preschoolers at Noura Family Childcare in Auburn WA. Nurturing home environment with flexible scheduling.",
  openGraph: {
    title: "Our Programs",
    description:
      "Age-appropriate early learning programs for infants to preschoolers at Noura Family Childcare in Auburn WA. Nurturing home environment with flexible scheduling.",
    type: "website",
    url: "https://nourafamilychildcare.com/programs",
  },
  twitter: {
    title: "Our Programs",
    description:
      "Age-appropriate early learning programs for infants to preschoolers at Noura Family Childcare in Auburn WA. Nurturing home environment with flexible scheduling.",
  },
};

const page = () => {
  return (
    <div>
      <ProgramsPage />
    </div>
  );
};

export default page;
