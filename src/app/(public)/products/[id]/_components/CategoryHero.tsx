import { CategoryHeroProps } from "@/types/types";
import Image from "next/image";

export const CategoryHero = ({
  title,
  description,
  image,
  cta,
}: CategoryHeroProps) => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-4 pt-28 pb-12 md:pb-20 md:pt-32 relative ">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">{description}</p>
          <a
            href="#shop"
            className="inline-block bg-white text-black font-medium px-8 py-3 rounded-md text-center hover:bg-gray-100 transition-colors"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
};
