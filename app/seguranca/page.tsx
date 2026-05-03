"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"
import { PremiumButton } from "@/components/ui/premium-button"
import { useModals } from "@/components/providers/modal-provider"
import { Shield, Lock, EyeOff, Server } from "lucide-react"

const securityFeatures = [
  { icon: Shield, title: "Criptografia Pós-Quântica", desc: "A primeira fintech da América Latina a implementar algoritmos CRYSTALS-Kyber para proteger transações contra computadores quânticos." },
  { icon: Lock, title: "Isolamento de Dados", desc: "Sua identidade e seus fundos residem em clusters de servidores fisicamente separados e air-gapped." },
  { icon: EyeOff, title: "Privacidade Zero-Knowledge", desc: "Não compartilhamos, vendemos ou monetizamos seus dados. Nossa receita vem exclusivamente de assinaturas, não de suas informações." },
  { icon: Server, title: "Redundância Global", desc: "Nós espelhamos nossa infraestrutura em 4 continentes, garantindo 99.999% de uptime mesmo em cenários de crise." },
]

export default function SegurancaPage() {
  const { openInviteModal } = useModals()
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-28 md:pt-44 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/[0.03] blur-[140px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
             <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-6">
              Infraestrutura
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
              Segurança em
              <br />
              <span className="text-white/30 italic">Nível de Estado.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/40 leading-relaxed max-w-xl">
              Quando se gerencia o patrimônio dos arquitetos do mercado, padrões bancários tradicionais são insuficientes. Nossa infraestrutura foi desenhada assumindo que sistemas atuais já foram comprometidos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
            {securityFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <feat.icon strokeWidth={1} className="w-8 h-8 text-white/50 mb-6" />
                <h3 className="font-sans text-lg font-medium text-white mb-3">{feat.title}</h3>
                <p className="font-sans text-sm text-white/40 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <PremiumFooter />
    </main>
  )
}
