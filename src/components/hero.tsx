import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  image: string;
}

const Hero = ({ title, description, image }: HeroProps) => {
  return (
    <section className=" py-16 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={image ? image : "/placeholder.svg?height=1080&width=1920"}
          alt="Salon interior"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
            {title}
          </h1>
          <p className="text-lg text-white">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
