import React from "react";
import { AnimatedSection } from "../animated-section";
import { AnimatedGradientText } from "../animated-gradient-text";
import { Award, Clock, Scissors, Users } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Skilled Perfessionals",
    description:
      "Our stylists undergo continuous training to stay current with the latest techniques and trends.",
    icon: <Scissors className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "We use only premium, salon-grade products that are gentle on your hair and the environment.",
    icon: <Award className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Convenient Booking",
    description:
      "Our online booking system makes it easy to schedule appointments at your convenience.",
  },
  {
    id: 4,
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Personalized Service",
    description:
      "We take the time to understand your needs and preferences for a truly customized experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Why Choose <AnimatedGradientText text="Linda Salon" />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing an exceptional experience from the
            moment you walk through our doors.
          </p>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <AnimatedSection
              key={item.title}
              direction="up"
              delay={0.1 * (index + 1)}
              className="bg-background p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
