import Image from "next/image";
import React from "react";
import { AnimatedSection } from "../animated-section";
import { Award, Scissors, Users } from "lucide-react";
import { AnimatedGradientText } from "../animated-gradient-text";

const AboutUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left" delay={0.2}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              About <AnimatedGradientText text="Linda Salon" />
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2010,Prince Salon has been providing premium hair care
              services with a focus on personalized attention and exceptional
              results. Our team of skilled stylists is dedicated to helping you
              look and feel your best.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We believe that great hair starts with understanding your unique
              style, hair type, and lifestyle. That&apos;s why we take the time
              to consult with each client before every service.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Scissors className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Expert Stylists</h4>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Premium Products</h4>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium">Happy Clients</h4>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection
            direction="right"
            delay={0.4}
            className="relative md:h-[500px] h-[300px] rounded-lg overflow-hidden"
          >
            <Image
              src="/bg_2.jpg"
              alt="Salon interior"
              fill
              className="object-cover"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
