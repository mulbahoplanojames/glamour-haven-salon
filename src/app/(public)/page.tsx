import AboutUs from "@/components/home/about-us";
import FeaturedServices from "@/components/home/featured-services";
import HomeHero from "@/components/home/HomeHero";
import QuickInfo from "@/components/home/quick-info";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <QuickInfo />
      <AboutUs />
      <FeaturedServices />
      <Testimonials />
      <WhyChooseUs />
    </>
  );
}
