export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
  hours: {
    text: string;
    details: string;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  company: {
    name: string;
    tagline: string;
    description: string;
  };
  tour: {
    title: string;
    description: string;
  };
  mapUrl: string;
}

export const contactInfo: ContactInfo = {
  address: {
    street: "31428 120th Ct SE",
    city: "Auburn",
    state: "WA",
    zip: "98092",
  },
  phone: "(206) 771-8837",
  email: "Farah.dahiye13@gmail.com",
  hours: {
    text: "Open Daily",
    details: "5am - 9pm",
  },
  social: {
    facebook: "https://www.facebook.com/nourafamilychildcare",
    instagram: "https://www.instagram.com/nourafamilychildcare",
    youtube: "https://www.instagram.com/nourafamilychildcare",
  },
  company: {
    name: "Contact Us",
    tagline: "Get in Touch",
    description:
      "Have questions about our childcare services? Want to schedule a visit? Reach out to us and we'll get back to you as soon as possible.",
  },
  tour: {
    title: "Enroll Now!",
    description: "Call today to secure your child's spot in our program.",
  },
  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5409.444558790754!2d-122.18185039999999!3d47.3197638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549058a2578bb7a1%3A0xb50073973443385f!2s31428%20120th%20Ct%20SE%2C%20Auburn%2C%20WA%2098092!5e0!3m2!1sen!2sus!4v1762640325754!5m2!1sen!2sus",
};
