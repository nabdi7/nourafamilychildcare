import { Baby, Users, Star, Sun } from "lucide-react";
import { ReactNode } from "react";

export interface Program {
  icon: ReactNode;
  title: string;
  age: string;
  description: string;
}

export const programs: Program[] = [
  {
    icon: <Baby className="w-10 h-10 text-white" />,
    title: "Toddlers",
    age: "Ages 12-36 months",
    description:
      "Loving care with safe play spaces, naptime routines, and attentive supervision.",
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    title: "Preschool Age",
    age: "Ages 3-4",
    description:
      "Group playtime, snack breaks, and plenty of fun in a safe, watchful environment.",
  },
  {
    icon: <Star className="w-10 h-10 text-white" />,
    title: "Pre-K Age",
    age: "Ages 4-5",
    description:
      "Active play, outdoor time, and creative activities with caring supervision.",
  },
  {
    icon: <Sun className="w-10 h-10 text-white" />,
    title: "Kindergarten Age",
    age: "Ages 5-6",
    description:
      "Energetic play, group games, and structured activities in a fun, safe space.",
  },
];
