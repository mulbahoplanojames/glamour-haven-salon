import React from "react";
import { AnimatedSection } from "../animated-section";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <AnimatedSection direction="up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready for a New Look?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-white">
            Book your appointment today and let our expert stylists transform
            your hair.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="transition-all duration-300 transform hover:scale-105 text-black"
          >
            <Link href="/booking">Book Now</Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTA;
