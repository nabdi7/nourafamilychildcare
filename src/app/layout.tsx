import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Noura Family Childcare | Trusted Family Childcare in Auburn WA",
    template: "%s | Noura Family Childcare",
  },
  description:
    "Warm, nurturing family childcare in Auburn WA for infants, toddlers, and preschoolers. Trusted family childcare with flexible scheduling and personalized attention.",
  keywords: [
    "childcare",
    "daycare",
    "family childcare",
    "early childhood education",
    "preschool",
    "infant care",
    "toddler care",
    "auburn childcare",
    "auburn wa daycare",
    "licensed daycare",
    "home-based childcare",
    "family daycare auburn",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  authors: [
    {
      name: "Noura Family Childcare",
      url: "https://nourafamilychildcare.com",
    },
  ],
  creator: "Noura Family Childcare",
  publisher: "Noura Family Childcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Noura Family Childcare | Trusted Family Childcare in Auburn WA",
    description:
      "Warm, nurturing family childcare in Auburn WA for infants, toddlers, and preschoolers. Trusted family childcare with flexible scheduling and personalized attention.",
    type: "website",
    siteName: "Noura Family Childcare",
    url: "https://nourafamilychildcare.com",
    locale: "en_US",
    images: [
      {
        url: "https://nourafamilychildcare.com/img6.jpg",
        width: 500,
        height: 500,
        alt: "Noura Family Childcare - Nurturing family childcare in Auburn WA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noura Family Childcare | Trusted Childcare in Auburn WA",
    description:
      "Warm, nurturing family childcare in Auburn WA for infants, toddlers, and preschoolers. Trusted family childcare with flexible scheduling and personalized attention.",
    images: ["https://nourafamilychildcare.com/img6.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
