import { Phone, Mail, MapPin } from "lucide-react";

export interface QuickLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  icon: React.ReactNode;
  text: string;
  type: "phone" | "email" | "location";
}

export interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export const quickLinks: QuickLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  // { href: "/gallery", label: "Our Gallery" },
  // { href: "/testimonials", label: "Testimonials" },
  // { href: "/parent", label: "Parent Resources" },
  { href: "/contact", label: "Contact Us" },
];

export const contactInfo: ContactInfo[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    text: "(206) 771-8837",
    type: "phone",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    text: "farah.dahiye13@gmail.com",
    type: "email",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    text: "31428 120th Ct SE, Auburn, WA",
    type: "location",
  },
];

export const businessHours = {
  days: "We're Open Daily",
  hours: "24 hours",
};

export const companyInfo = {
  name: "Noura Family Childcare",
  tagline: "A safe, loving space where your child is cared for like family.",
  copyright: "Noura Family Childcare",
  developer: {
    name: "QD Web Designs",
    url: "https://www.qdwebdesigns.com/",
  },
};
