"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"

const positions = [
  { title: "Senior Quant Developer", dept: "Engenharia", location: "São Paulo / Remoto" },
  { title: "Concierge Executivo Sênior", dept: "Atendimento", location: "Lisboa, Portugal" },
  { title: "Especialista em Criptografia Quântica", dept: "Segurança", location: "Remoto Global" },
  { title: "Diretor de Operações (Family Office)", dept: "Wealth Management", location: "São Paulo" },
]

export default function CarreirasPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-28 md:pt-44 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
             <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-6">
              Carreiras
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
              Junte-se aos
              <br />
              <span className="text-white/30 italic">arquitetos.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/40 leading-relaxed max-w-xl">
              Procuramos mentes excepcionais que não se contentam com o estado atual da indústria financeira. Se você busca excelência sem concessões, seu lugar é aqui.
            </p>
          </motion.div>

          <div className="mt-24 max-w-4xl">
            <h2 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Vagas Abertas</h2>
            <div className="flex flex-col">
              {positions.map((pos, i) => (
                <motion.div
                  key={pos.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-white/10 hover:border-white/30 transition-colors cursor-pointer"
                >
                  <div>
                    <h3 className="font-sans text-lg text-white mb-1 group-hover:text-white/80 transition-colors">{pos.title}</h3>
                    <p className="font-sans text-sm text-white/40">{pos.dept}</p>
                  </div>
                  <div className="mt-3 md:mt-0 flex items-center justify-between md:justify-end md:w-1/3">
                    <span className="font-sans text-sm text-white/50">{pos.location}</span>
                    <span className="font-sans text-xs uppercase tracking-widest text-white/30 group-hover:text-white transition-colors ml-4 md:hidden">Candidatar-se &rarr;</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="font-sans text-sm text-white/30 mt-12">
              Não encontrou a vaga ideal? Envie seu currículo para <span className="text-white/60">talentos@hypercard.com</span>
            </p>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
