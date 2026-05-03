"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"
import { CheckCircle2 } from "lucide-react"

const certifications = [
  { name: "BACEN", desc: "Regulamentado pelo Banco Central do Brasil como Instituição de Pagamento." },
  { name: "ISO 27001", desc: "Certificação internacional de gestão de segurança da informação." },
  { name: "PCI DSS Nível 1", desc: "O mais alto padrão de segurança para o processamento de cartões de crédito." },
  { name: "SOC 2 Type II", desc: "Auditoria independente de controles de segurança, disponibilidade e confidencialidade." },
]

export default function CompliancePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-28 md:pt-44 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
             <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-6">
              Compliance
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
              Confiança
              <br />
              <span className="text-white/30 italic">auditável.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/40 leading-relaxed max-w-xl">
              Nossa operação de elite requer o mais rigoroso nível de conformidade do mercado. Operamos sob os mais rígidos padrões internacionais de segurança e regulação.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-5xl">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-2xl text-white mb-2">{cert.name}</h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
