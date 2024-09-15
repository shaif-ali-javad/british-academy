import BackgroundGradientDemo0 from "@/components/featured-services0";
import BackgroundGradientDemo1 from "@/components/featured-services1";
import BackgroundGradientDemo3 from "@/components/featured-services3";
import HeroSection0 from "@/components/heroSection0";
import HeroSection1 from "@/components/heroSection1";
// import Image from "next/image";
// import Whychoosus from "@/components/WhyChoosUs"
import { InfiniteMovingCardsDemo } from "@/components/TestimonalCards";
import CardHoverEffectDemo0 from "@/components/UpcomingWebinars0";
// import Instructors from "@/components/Experts";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection0/>
    <BackgroundGradientDemo0/>
    {/* <Whychoosus/> */}
    <InfiniteMovingCardsDemo/>
    {/* <CardHoverEffectDemo0/> */}
    <BackgroundGradientDemo3/>
    <BackgroundGradientDemo1/>
    <HeroSection1/>
    {/* <Instructors/> */}
    </main>
  );
}
