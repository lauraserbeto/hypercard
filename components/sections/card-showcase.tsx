"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { AnimatedCard } from "@/components/ui/animated-card"

const cardSpecs = [
  { label: "Material", value: "Tungstênio Maciço", side: "left", top: "15%" },
  { label: "Biometria", value: "Impressão Digital", side: "left", top: "45%" },
  { label: "Conectividade", value: "NFC + Tap to Pay", side: "left", top: "73%" },
  { label: "Limite", value: "Personalizado", side: "right", top: "15%" },
  { label: "Suporte", value: "Concierge 24/7", side: "right", top: "45%" },
  { label: "Segurança", value: "Cripto Quântica", side: "right", top: "73%" },
]

export function CardShowcaseSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [40, 0, -40])

  return (
    <section
      ref={ref}
      id="o-cartão"
      className="relative py-28 md:py-40 bg-black overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
            O Artefato
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight tracking-tight text-balance max-w-2xl mx-auto">
            Engenharia de precisão.
            <br />
            <span className="text-white/35">Em cada detalhe.</span>
          </h2>
        </motion.div>

        {/* Card + specs layout */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
          {/* Left specs */}
          <div className="hidden md:flex flex-col gap-8 w-52 flex-shrink-0">
            {cardSpecs
              .filter((s) => s.side === "left")
              .map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
                  className="flex flex-col items-end text-right"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 mb-0.5">
                    {spec.label}
                  </span>
                  <span className="font-mono text-xs text-white/65">{spec.value}</span>
                  {/* Connector line */}
                  <div className="mt-2 w-full h-px bg-white/8" />
                </motion.div>
              ))}
          </div>

          {/* Card center — Animated 3D Card */}
          <div className="relative mx-0 md:mx-12 flex-shrink-0">
            <motion.div
              style={{ y: cardY }}
            >
              <AnimatedCard size="md" interactive />
            </motion.div>

            {/* Mobile specs below card */}
            <div className="md:hidden mt-10 grid grid-cols-2 gap-4">
              {cardSpecs.map((spec) => (
                <div key={spec.label} className="border border-white/8 rounded-xl p-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/25 block mb-1">
                    {spec.label}
                  </span>
                  <span className="font-mono text-xs text-white/65">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right specs */}
          <div className="hidden md:flex flex-col gap-8 w-52 flex-shrink-0">
            {cardSpecs
              .filter((s) => s.side === "right")
              .map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
                  className="flex flex-col items-start text-left"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/25 mb-0.5">
                    {spec.label}
                  </span>
                  <span className="font-mono text-xs text-white/65">{spec.value}</span>
                  <div className="mt-2 w-full h-px bg-white/8" />
                </motion.div>
              ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center font-serif text-xl md:text-2xl text-white/20 mt-20 italic"
        >
          &ldquo;Um cartão que pesa tanto quanto suas conquistas.&rdquo;
        </motion.p>
      </div>
    </section>
  )
}

