"use client"

import { motion } from "framer-motion"
import {
  Phone,
  Globe,
  Shield,
  TrendingUp,
  BarChart3,
  Lock,
} from "lucide-react"
import { BentoCard } from "@/components/ui/bento-card"
import { features } from "@/data/content"

const iconMap: Record<string, React.ComponentType<{ strokeWidth?: number; className?: string }>> = {
  Phone,
  Globe,
  Shield,
  TrendingUp,
  BarChart3,
  Lock,
}

export function FeaturesSection() {
  return (
    <section id="soluções" className="relative py-28 md:py-40 bg-black overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
            Diferenciais
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight tracking-tight text-balance max-w-2xl">
            Construído para quem não aceita o segundo lugar.
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Large card — Concierge (2x2) */}
          <BentoCard
            className="md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[400px] flex flex-col justify-between"
            glowingEdge
            delay={0}
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center">
                <Phone strokeWidth={1.5} className="w-5 h-5 text-white/60" />
              </div>
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/20 border border-white/10 px-2 py-1 rounded-full">
                24 / 7
              </span>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-5xl text-white mb-3 tracking-tight">
                {features[0].title}
              </h3>
              <p className="font-sans text-sm text-white/45 leading-relaxed max-w-sm">
                {features[0].description}
              </p>
            </div>
            {/* Decorative image strip */}
            <div className="mt-8 relative h-24 rounded-xl overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center px-6 gap-3 overflow-hidden">
                {["Reservas", "Emergências", "Eventos VIP", "Viagens", "Concierge"].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[9px] uppercase tracking-widest text-white/30 border border-white/8 rounded-full px-4 py-1.5 whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Row 1 & 2 small cards (fills Col 3) */}
          {features.slice(1, 3).map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <BentoCard key={feature.id} glowingEdge delay={0.1 * (i + 1)}>
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center mb-4">
                  <Icon strokeWidth={1.5} className="w-4 h-4 text-white/50" />
                </div>
                <h3 className="font-sans text-base font-medium text-white mb-2">
                  {feature.title}
                </h3>
                <p className="font-sans text-xs text-white/40 leading-relaxed">
                  {feature.description}
                </p>
              </BentoCard>
            )
          })}

          {/* Row 3 cards (3 columns) */}
          
          {/* Card 4 - Limite Sem Teto */}
          <BentoCard glowingEdge delay={0.3}>
            <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center mb-4">
              <TrendingUp strokeWidth={1.5} className="w-4 h-4 text-white/50" />
            </div>
            <h3 className="font-sans text-base font-medium text-white mb-2">
              {features[3].title}
            </h3>
            <p className="font-sans text-xs text-white/40 leading-relaxed">
              {features[3].description}
            </p>
          </BentoCard>

          {/* Card 5 - Investimentos Exclusivos (Adjusted to 1 column) */}
          <BentoCard glowingEdge delay={0.4}>
            <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center mb-4">
              <BarChart3 strokeWidth={1.5} className="w-4 h-4 text-white/50" />
            </div>
            <h3 className="font-sans text-base font-medium text-white mb-2">
              {features[4].title}
            </h3>
            <p className="font-sans text-xs text-white/40 leading-relaxed mb-4">
              {features[4].description}
            </p>
            {/* Micro chart decoration */}
            <div className="flex items-end gap-1 flex-shrink-0 h-8">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.05 }}
                  className="w-1.5 rounded-t-sm bg-white/15"
                />
              ))}
            </div>
          </BentoCard>

          {/* Card 6 - Privacidade Absoluta */}
          <BentoCard glowingEdge delay={0.5}>
            <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center mb-4">
              <Lock strokeWidth={1.5} className="w-4 h-4 text-white/50" />
            </div>
            <h3 className="font-sans text-base font-medium text-white mb-2">
              {features[5].title}
            </h3>
            <p className="font-sans text-xs text-white/40 leading-relaxed">
              {features[5].description}
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
