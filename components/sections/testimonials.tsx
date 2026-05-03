"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { testimonials } from "@/data/content"
import { MapPin } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative py-28 md:py-40 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-white/[0.015] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
            Membros
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight tracking-tight text-balance max-w-xl">
            O que dizem os que escolheram mais.
          </h2>
        </motion.div>

        {/* Testimonials grid — clean, no image strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              className="relative rounded-2xl border border-white/8 bg-white/[0.02] p-7 flex flex-col justify-between gap-6 group hover:border-white/15 transition-colors duration-400"
            >
              {/* Quote */}
              <div>
                <span className="font-serif text-4xl text-white/10 leading-none block mb-4">
                  &ldquo;
                </span>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/10">
                  <Image
                    src={t.avatar}
                    alt={t.author}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans text-sm font-medium text-white/80 truncate">
                    {t.author}
                  </p>
                  <p className="font-sans text-[11px] text-white/35 truncate">{t.role}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <MapPin strokeWidth={1} className="w-3 h-3 text-white/20" />
                  <span className="font-mono text-[9px] text-white/20 whitespace-nowrap">
                    {t.location.split(",")[0]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
