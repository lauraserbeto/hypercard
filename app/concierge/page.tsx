"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"
import { Plane, Utensils, Ticket, Diamond } from "lucide-react"

const services = [
  { icon: Plane, title: "Aviação & Viagens", desc: "Fretamento de jatos privados, reservas em hotéis ultra-exclusivos e roteiros desenhados sob medida, com benefícios VIP e upgrades garantidos." },
  { icon: Utensils, title: "Gastronomia", desc: "Mesas em restaurantes com estrela Michelin, mesmo naqueles com listas de espera de meses. Chef privado para jantares na sua residência." },
  { icon: Ticket, title: "Acesso & Eventos", desc: "Ingressos de primeira fila para finais esportivas, premières de cinema, desfiles de moda em Milão e eventos fechados a convite." },
  { icon: Diamond, title: "Aquisições Raras", desc: "Acesso a leilões de arte, relógios de edição limitada e veículos de colecionador. Nossa rede global encontra o impossível." },
]

export default function ConciergePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-28 md:pt-44 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/[0.02] blur-[140px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
             <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-6">
              Lifestyle Management
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
              O seu tempo
              <br />
              <span className="text-white/30 italic">elevado à arte.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/40 leading-relaxed max-w-xl mb-12">
              Mais do que atendimento bancário. O Concierge Global HyperCard é uma equipe dedicada de especialistas em lifestyle, operando 24 horas por dia para transformar o impossível em rotina.
            </p>
            
            <div className="inline-block border border-white/10 rounded-full px-6 py-2 bg-white/[0.02]">
              <p className="font-sans text-xs text-white/60 tracking-wider">TEMPO MÉDIO DE RESPOSTA: <span className="text-white font-medium">{'<'} 3 MINUTOS</span></p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <svc.icon className="w-5 h-5 text-white/70" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans text-lg font-medium text-white mb-3">{svc.title}</h3>
                <p className="font-sans text-sm text-white/40 leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
