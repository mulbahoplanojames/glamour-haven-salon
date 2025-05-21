import { AnimatedSection } from "../animated-section";
import { Clock, MapPin, Star } from "lucide-react";

const quickInfo = [
  {
    id: 1,
    title: "Opening Hours",
    description: "Mon-Sat: 9am - 8pm",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Our Location",
    description: "123 Beauty Street, City",
    icon: <MapPin className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Customer Reviews",
    description: "4.5/5 from 200+ reviews",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
];

const QuickInfo = () => {
  return (
    <section className="bg-primary/5 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickInfo.map((item) => (
            <AnimatedSection
              direction="up"
              delay={0.1}
              className="flex items-center gap-4"
              key={item.id}
            >
              <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
