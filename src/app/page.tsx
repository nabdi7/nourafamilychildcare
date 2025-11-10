import Hero from "@/components/hero/Hero";
import Programs from "@/components/programs/Programs";
import Features from "@/components/features/Feature";
// import Gallery from "@/components/gallery/Gallery";
import GettingStarted from "@/components/gettingStarted/GettingStarted";
// import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Programs />
      <Features /> 
      {/* <Gallery /> */}
      <GettingStarted />
      {/* <Testimonials /> */}
    </main>
  );
}
