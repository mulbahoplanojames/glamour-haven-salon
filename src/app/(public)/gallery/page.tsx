"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { galleryImages } from "@/data/data";
import ClientTransformation from "./_component/client-transformation";
import Hero from "@/components/hero";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Group images by category
  const categories = [...new Set(galleryImages.map((img) => img.category))];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main>
      <Hero
        title="Our Gallery"
        description="Browse through our portfolio of transformations and get inspired
              for your next visit. Our skilled stylists have created these
              stunning looks for our satisfied clients."
        image="/bg_1.jpg"
      />

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue={categories[0]} className="w-full">
            <TabsList className=" flex flex-wrap justify-center mb-12 mx-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-lg px-6"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    {category} Gallery
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {category === "Haircuts" &&
                      "Explore our collection of precision cuts tailored to enhance each client's unique features and style."}
                    {category === "Coloring" &&
                      "From subtle highlights to bold transformations, see how our color services bring vibrancy and dimension to our clients' hair."}
                    {category === "Styling" &&
                      "Browse our styling work for special occasions, photoshoots, and everyday elegance."}
                    {category === "Treatments" &&
                      "Witness the transformative results of our specialized hair treatments designed to restore and rejuvenate."}
                  </p>
                </div>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {galleryImages
                    .filter((img) => img.category === category)
                    .map((img) => (
                      <motion.div
                        key={img.id}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                        variants={item}
                        onClick={() => setSelectedImage(img.src)}
                      >
                        <Image
                          src={img.src || "/placeholder.svg"}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <p className="text-white font-medium">{img.alt}</p>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <ClientTransformation />
      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4   "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[30rem] w-full mb-4 overflow-scroll"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              width={1200}
              height={800}
              className="object-contain w-full h-full"
            />
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
