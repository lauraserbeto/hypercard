"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const baseClasses =
      "relative inline-flex items-center justify-center font-sans font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer select-none overflow-hidden"

    const variantClasses = {
      primary:
        "bg-white text-black hover:bg-white/90 active:scale-[0.98]",
      outline:
        "border border-white/20 text-white/90 hover:border-white/60 hover:text-white hover:bg-white/5",
      ghost:
        "text-white/60 hover:text-white hover:bg-white/5",
    }

    const sizeClasses = {
      sm: "text-[10px] px-5 py-2.5 rounded-full",
      md: "text-[11px] px-8 py-3.5 rounded-full",
      lg: "text-[12px] px-10 py-4 rounded-full",
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        {variant === "primary" && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </motion.button>
    )
  }
)

PremiumButton.displayName = "PremiumButton"

export { PremiumButton }
