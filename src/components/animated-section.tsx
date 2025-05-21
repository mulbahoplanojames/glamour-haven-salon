"use client";

import type React from "react";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
  distance = 50,
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Determine initial animation properties based on direction
  const getInitialProps = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: distance };
      case "down":
        return { opacity: 0, y: -distance };
      case "left":
        return { opacity: 0, x: distance };
      case "right":
        return { opacity: 0, x: -distance };
      case "none":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: distance };
    }
  };

  // Determine animation properties
  const getAnimateProps = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      case "none":
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start(getAnimateProps());
      setHasAnimated(true);
    }
  }, [controls, inView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialProps()}
      animate={controls}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
