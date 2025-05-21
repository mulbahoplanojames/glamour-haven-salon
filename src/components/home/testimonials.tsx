import React from "react";
import { AnimatedSection } from "../animated-section";
import { AnimatedGradientText } from "../animated-gradient-text";
import TestimonialCarousel from "./testimonial-carousel";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our <AnimatedGradientText text="Clients Say" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about their experience.
          </p>
        </AnimatedSection>
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
