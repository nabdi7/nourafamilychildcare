import { Shield, Heart, Users, Clock } from "lucide-react";
import { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Safe & Secure",
    description:
      "A trusted, child-proofed environment where your little ones are always protected and watched",
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Caring Supervision",
    description:
      "Warm, attentive caregivers who treat every child with love and patience",
  },
  {
    icon: <Users className="w-6 h-6 text-white" />,
    title: "Small Groups",
    description:
      "Low child-to-caregiver ratios ensuring your child gets the attention they deserve",
  },
  {
    icon: <Clock className="w-6 h-6 text-white" />,
    title: "Flexible Hours",
    description:
      "Drop-off and pick-up times that work around your busy schedule",
  },
];
