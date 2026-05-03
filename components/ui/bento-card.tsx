"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  glowingEdge?: boolean
  delay?: number
}

export function BentoCard({
  children,
  className,
  glowingEdge = false,
  delay = 0,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "relative rounded-2xl border border-white/8 bg-white/[0.03] p-6 overflow-hidden group",
        "backdrop-blur-sm",
        glowingEdge && "hover:border-white/20 transition-colors duration-500",
        className
      )}
    >
      {glowingEdge && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)",
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
