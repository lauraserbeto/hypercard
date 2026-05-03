"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { PremiumButton } from "@/components/ui/premium-button"
import { ArrowDown } from "lucide-react"
import { HeroCardFan } from "@/components/ui/hero-card-fan"
import { useModals } from "@/components/providers/modal-provider"

export function HeroSection() {
  const { openInviteModal } = useModals()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const cardY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const cardRotate = useTransform(scrollYProgress, [0, 1], [0, 8])
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pb-10"
    >
      {/* Radial glow background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.025] blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-white/[0.015] blur-[80px]" />
      </motion.div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center text-center px-6 pt-16 md:pt-20 pb-4 md:pb-0"
      >
        

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight text-balance max-w-5xl"
        >
          Finanças para quem
          <br />
          <span className="text-white/40">define o padrão.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 font-sans text-base md:text-lg text-white/45 max-w-xl leading-relaxed"
        >
          Um clube financeiro fechado para executivos, empresários e investidores
          de alta renda que exigem mais do que um banco comum oferece.
        </motion.p>

        
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 flex flex-wrap justify-center gap-x-12 gap-y-4"
        >
          {[
            { value: "R$ 2,4T+", label: "em ativos" },
            { value: "48 países", label: "de atuação" },
            { value: "< 3 min", label: "resposta concierge" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="font-serif text-2xl text-white">{stat.value}</span>
              <span className="font-sans text-[10px] uppercase tracking-widest text-white/35">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Hero Card Fan — 3 cards fanned out */}
      <motion.div
        style={{ y: cardY, rotate: cardRotate, scale: cardScale, opacity }}
        className="relative z-10 mt-4 md:mt-8 flex items-center justify-center"
      >
        <HeroCardFan />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown strokeWidth={1} className="w-5 h-5 text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}

