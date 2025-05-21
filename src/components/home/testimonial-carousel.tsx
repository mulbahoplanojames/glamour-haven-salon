"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrent((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                      src={
                        testimonials[current].avatar ||
                        "/placeholder.svg?height=100&width=100"
                      }
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center mb-6">
                  <Quote className="h-8 w-8 text-primary/40" />
                </div>
                <p className="text-lg md:text-xl italic mb-6">
                  {testimonials[current].text}
                </p>
                <div>
                  <h4 className="font-semibold">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].service}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? "bg-primary w-4" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={next}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
