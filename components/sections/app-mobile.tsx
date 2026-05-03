"use client"

import { motion } from "framer-motion"
import {
  Fingerprint,
  Bell,
  CreditCard,
  BarChart3,
  MessageCircle,
  Shield,
} from "lucide-react"
import { PremiumButton } from "@/components/ui/premium-button"

const appFeatures = [
  {
    icon: Fingerprint,
    title: "Face ID & Biometria",
    description: "Autenticação instantânea com camadas de proteção militar.",
  },
  {
    icon: BarChart3,
    title: "Investimentos em Tempo Real",
    description: "Gerencie fundos, IPOs e ativos em um único painel.",
  },
  {
    icon: MessageCircle,
    title: "Chat com Concierge",
    description: "Fale com seu consultor dedicado 24/7, direto do app.",
  },
  {
    icon: CreditCard,
    title: "Controle Total do Cartão",
    description: "Bloqueie, desbloqueie e ajuste limites em tempo real.",
  },
  {
    icon: Shield,
    title: "Segurança Quântica",
    description: "Criptografia pós-quântica em cada transação.",
  },
  {
    icon: Bell,
    title: "Notificações Inteligentes",
    description: "Alertas personalizados sobre movimentações e oportunidades.",
  },
]


export function AppMobileSection() {
  return (
    <section id="app" className="relative py-28 md:py-40 bg-black overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-white/[0.015] blur-[100px] pointer-events-none rounded-full" />

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
            App Mobile
          </p>
          <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight tracking-tight text-balance max-w-3xl mx-auto">
            Seu patrimônio inteiro.
            <br />
            <span className="text-white/35">Na palma da mão.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-white/40 mt-6 max-w-xl mx-auto leading-relaxed">
            O app HyperCard foi projetado para quem gerencia fortunas em movimento —
            com a mesma discrição e poder do cartão físico.
          </p>
        </motion.div>

        {/* Content: Features + Phone */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center">

          {/* Left features */}
          <div className="lg:col-span-4 space-y-6">
            {appFeatures.slice(0, 3).map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors duration-300">
                  <feature.icon strokeWidth={1.5} className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-medium text-white mb-1">{feature.title}</h3>
                  <p className="font-sans text-xs text-white/35 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center — Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center relative"
          >
            <div className="relative">
              {/* Phone outer frame */}
              <div className="relative w-[260px] h-[530px] rounded-[44px] border-2 border-white/15 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-2 shadow-2xl shadow-white/[0.03]">
                {/* Inner screen */}
                <div className="w-full h-full rounded-[36px] bg-gradient-to-b from-[#0a0a0a] to-[#050505] overflow-hidden relative">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-2xl z-20" />

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-3 text-[8px] font-mono text-white/30">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-1.5 border border-white/30 rounded-sm relative">
                        <div className="absolute inset-0.5 right-1 bg-white/40 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="px-5 pt-8 space-y-5">
                    {/* Greeting */}
                    <div>
                      <p className="text-[9px] text-white/30 font-sans">Boa noite,</p>
                      <p className="text-sm text-white font-serif tracking-wide">Alexander</p>
                    </div>

                    {/* Balance card */}
                    <div className="rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-4">
                      <p className="text-[8px] uppercase tracking-widest text-white/25 mb-1">Saldo Disponível</p>
                      <p className="text-xl font-serif text-white tracking-tight">R$ 2.847.390<span className="text-white/30">,00</span></p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
                        <span className="text-[8px] text-emerald-400/60 font-sans">+12,4% este mês</span>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { icon: "↑", label: "Enviar" },
                        { icon: "↓", label: "Receber" },
                        { icon: "◈", label: "Investir" },
                        { icon: "⋯", label: "Mais" },
                      ].map((action) => (
                        <div key={action.label} className="flex flex-col items-center gap-1">
                          <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/8 flex items-center justify-center text-white/40 text-xs">
                            {action.icon}
                          </div>
                          <span className="text-[7px] text-white/25 font-sans">{action.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Recent transactions */}
                    <div>
                      <p className="text-[8px] uppercase tracking-widest text-white/20 mb-2">Recentes</p>
                      {[
                        { name: "Four Seasons", amount: "-R$ 4.200", type: "Hospedagem" },
                        { name: "BlackRock Fund", amount: "+R$ 89.100", type: "Rendimento" },
                        { name: "Emirates First", amount: "-R$ 32.800", type: "Viagem" },
                      ].map((tx) => (
                        <div key={tx.name} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <div>
                            <p className="text-[10px] text-white/70 font-sans">{tx.name}</p>
                            <p className="text-[7px] text-white/20">{tx.type}</p>
                          </div>
                          <p className={`text-[10px] font-mono ${tx.amount.startsWith("+") ? "text-emerald-400/50" : "text-white/40"}`}>
                            {tx.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screen shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent pointer-events-none"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>

              

              {/* Ambient glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[400px] bg-white/[0.04] blur-[80px] rounded-full -z-10" />
            </div>
          </motion.div>

          {/* Right features */}
          <div className="lg:col-span-4 space-y-6">
            {appFeatures.slice(3, 6).map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center flex-shrink-0 group-hover:border-white/20 transition-colors duration-300">
                  <feature.icon strokeWidth={1.5} className="w-5 h-5 text-white/50" />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-medium text-white mb-1">{feature.title}</h3>
                  <p className="font-sans text-xs text-white/35 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Store badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20"
        >
          <PremiumButton variant="outline" size="md">
            <svg
              viewBox="0 0 384 512"
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 21.8-88.5 21.8-11.4 0-51.1-19-80.6-18.4-38.5.6-73.5 22.4-93.8 57.7-41.2 71.9-10.5 179.3 29.3 236.4 19.4 28.1 42.5 59.8 72.8 58.7 29-1.1 40-18.5 75-18.5 34.7 0 44.9 18.5 75.3 17.9 31-.5 50.8-28.6 70.1-56.7 22.2-32.4 31.2-63.8 31.7-65.5-.8-.3-61.1-23.4-61.6-93.9zM234.3 90.6C260.6 59 258.1 27.6 257 14.3c-23.5 1.5-51.6 16.5-68.5 36.3-15.6 18.3-25.9 48.2-22.9 76.5 25.4 1.9 51.1-14.7 68.7-36.5z" />
            </svg>
            App Store
          </PremiumButton>
          <PremiumButton variant="outline" size="md">
            <svg
              viewBox="0 0 512 512"
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.2 25.3-21.4 25.3-35.3s-7.3-25.1-26.5-35.5zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
            </svg>
            Google Play
          </PremiumButton>
        </motion.div>
      </div>
    </section>
  )
}
