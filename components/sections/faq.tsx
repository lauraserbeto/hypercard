"use client"

import { motion } from "framer-motion"
import { AccordionFAQ } from "@/components/ui/accordion-faq"
import { faqs } from "@/data/content"
import { PremiumButton } from "@/components/ui/premium-button"

export function FAQSection() {
  return (
    <section id="faq" className="relative py-28 md:py-40 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-white/[0.015] blur-[100px] pointer-events-none rounded-full -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Header + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-start md:sticky md:top-28 self-start"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
              Perguntas Frequentes
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight text-balance mb-6">
              Tudo que você precisa saber.
            </h2>
            <p className="font-sans text-sm text-white/40 leading-relaxed mb-10 max-w-xs">
              Ainda tem dúvidas? Nossa equipe de onboarding está disponível para
              uma conversa personalizada e confidencial.
            </p>
            <PremiumButton variant="outline" size="md" className="w-fit">
              Falar com Especialista
            </PremiumButton>

            {/* Decorative divider */}
            <div className="mt-16 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/8" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/20">
                Hyper Card
              </span>
              <div className="h-px flex-1 bg-white/8" />
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <AccordionFAQ items={faqs} dark={true} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
