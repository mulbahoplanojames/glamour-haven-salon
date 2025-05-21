import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

const users = [
  {
    id: 1,
    image: "/clients/testimo1.jpg",
    name: "John Doe",
  },
  {
    id: 2,
    image: "/clients/testimo2.jpg",
    name: "Jane Doe",
  },
  {
    id: 3,
    image: "/clients/testimo3.jpg",
    name: "John Doe",
  },
  {
    id: 4,
    image: "/clients/testimo4.jpg",
    name: "Jane Doe",
  },
];

const HomeHero = () => {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <div className="absolute inset-0 bg-grid-white/10  [mask-image:linear-gradient(to_bottom,transparent,black)] dark:bg-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 ring-2 ring-primary rounded-full bg-white/20 text-sm font-medium backdrop-blur-sm">
                The Ultimate Learning Experience
              </div>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Unleash Your Inner Glow with Personalized Styles and Luxurious
                Care at Glamour Haven
              </h1>
              <p className="text-lg md:text-base  max-w-xl">
                At Glamour Haven, we believe beauty is personal — and your style
                should be too. From precision cuts and vibrant color to flawless
                makeup and rejuvenating treatments, our expert stylists are here
                to bring your vision to life. Step into a relaxing, luxurious
                space where creativity meets care, and leave feeling confident,
                refreshed, and unapologetically you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 dark:text-black"
                >
                  <Link href="/booking">Book Appointment</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className=" text-primary hover:bg-white/80 bg-white dark:bg-neutral-900 dark:text-white"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {users.map((user) => (
                    <div
                      key={user.id}
                      className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center border-2 border-primary relative"
                    >
                      <Image
                        src={user.image}
                        alt={user.name}
                        className="rounded-full object-contain"
                        width={32}
                        height={32}
                      />
                    </div>
                  ))}
                </div>
                <span>Join 50+ learners today</span>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10 z-10 rounded-lg"></div>
              <Image
                src="/bridal.jpg"
                alt="Bridal Hair and Makeup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
};

export default HomeHero;
