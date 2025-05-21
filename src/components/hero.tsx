import { HeroBackgroundBeamsWithCollision } from "./ui/hero-background-beams-with-collision";

interface HeroProps {
  title: string;
  description: string;
}

const Hero = ({ title, description }: HeroProps) => {
  return (
    <HeroBackgroundBeamsWithCollision>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 ">
            {title}
          </h1>
          <p className="text-lg ">{description}</p>
        </div>
      </div>
    </HeroBackgroundBeamsWithCollision>
  );
};

export default Hero;
