import React from "react";
import { AnimatedSection } from "../animated-section";
import { AnimatedGradientText } from "../animated-gradient-text";
import { Button } from "../ui/button";
import Link from "next/link";
import ServiceCard from "../service-card";
import services from "@/data/services.json";

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Our <AnimatedGradientText text="Services" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From classic cuts to the latest trends, our expert stylists are here
            to transform your look.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <AnimatedSection
              key={service.id}
              direction="up"
              delay={0.1 * (index + 1)}
            >
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection
          direction="up"
          delay={0.5}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedServices;
