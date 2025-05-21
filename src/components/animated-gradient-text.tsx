"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientTextProps {
  text: string
  className?: string
  from?: string
  to?: string
  animate?: boolean
  duration?: number
}

export function AnimatedGradientText({
  text,
  className,
  from = "from-primary",
  to = "to-primary/70",
  animate = true,
  duration = 3,
}: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={cn("bg-gradient-to-r bg-clip-text text-transparent", from, to, className)}
      initial={animate ? { backgroundPosition: "0% 50%" } : undefined}
      animate={
        animate
          ? {
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }
          : undefined
      }
      transition={
        animate
          ? {
              duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }
          : undefined
      }
      style={{ backgroundSize: animate ? "200% 200%" : undefined }}
    >
      {text}
    </motion.span>
  )
}

