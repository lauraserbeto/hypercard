"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"
import { PremiumButton } from "@/components/ui/premium-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { useModals } from "@/components/providers/modal-provider"
import {
  Shield,
  Fingerprint,
  Wifi,
  Gem,
  Zap,
  Eye,
  Check,
  X,
  Crown,
} from "lucide-react"

const techSpecs = [
  { icon: Gem, label: "Material", value: "Tungstênio Maciço — 18.7g", detail: "O metal mais denso usado em cartões financeiros. Cada cartão é usinado individualmente a partir de um bloco sólido." },
  { icon: Fingerprint, label: "Biometria", value: "Sensor Capacitivo Integrado", detail: "Autenticação por impressão digital diretamente no cartão. Funciona sem bateria, alimentado pelo terminal." },
  { icon: Wifi, label: "Conectividade", value: "NFC + Tap to Pay + EMV", detail: "Pagamento por aproximação com chip EMV de última geração. Compatible com Apple Pay e Google Pay." },
  { icon: Shield, label: "Segurança", value: "Criptografia Pós-Quântica", detail: "Protocolo CRYSTALS-Kyber para proteção contra ataques de computadores quânticos. Certificação PCI DSS Level 1." },
  { icon: Zap, label: "Processamento", value: "< 300ms por Transação", detail: "Microprocessador dedicado de 32 bits com co-processador criptográfico. Aprovação em menos de 300 milissegundos." },
  { icon: Eye, label: "Privacidade", value: "Dados Zero-Knowledge", detail: "Arquitetura Zero-Knowledge Proof: nem nós temos acesso aos detalhes das suas transações. Apenas você." },
]

const editions = [
  {
    name: "Platinum Edition",
    tagline: "Para quem está ascendendo.",
    gradient: "from-[#c0c0c0] via-[#e8e8e8] to-[#a0a0a0]",
    borderColor: "border-white/20",
    features: ["Limite até R$ 500k", "Concierge 12/7", "Priority Pass Select", "Segurança Quântica", "App HyperCard"],
    recommended: false,
  },
  {
    name: "Black Edition",
    tagline: "O padrão HyperCard.",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0a0a0a]",
    borderColor: "border-white/30",
    features: ["Limite Personalizado", "Concierge 24/7", "Priority Pass Ilimitado", "Segurança Quântica", "Investimentos Exclusivos", "Tungstênio Maciço"],
    recommended: true,
  },
  {
    name: "Gold Reserve",
    tagline: "Para patrimônios extraordinários.",
    gradient: "from-[#b8860b] via-[#daa520] to-[#8b6914]",
    borderColor: "border-yellow-500/20",
    features: ["Limite Sem Teto", "Concierge Dedicado", "Jato Privado On-Demand", "Family Office Integrado", "Mesa de Operações", "Tungstênio + Ouro 24k"],
    recommended: false,
  },
]

const comparison = [
  { feature: "Material do Cartão", hyper: "Tungstênio Maciço", others: "Plástico / Metal fino" },
  { feature: "Biometria Integrada", hyper: true, others: false },
  { feature: "Segurança Quântica", hyper: true, others: false },
  { feature: "Concierge 24/7", hyper: true, others: "Horário comercial" },
  { feature: "Priority Pass", hyper: "Ilimitado", others: "Limitado" },
  { feature: "Investimentos Exclusivos", hyper: true, others: false },
  { feature: "Limite Personalizado", hyper: true, others: "Pré-definido" },
  { feature: "Processamento", hyper: "< 300ms", others: "1-3 segundos" },
]

export function CartaoContent() {
  const { openInviteModal } = useModals()
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-white/[0.025] blur-[140px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-6">
                O Cartão
              </p>
              <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
                18.7 gramas
                <br />
                <span className="text-white/30 italic">de poder absoluto.</span>
              </h1>
              <p className="font-sans text-base text-white/40 leading-relaxed max-w-md mb-10">
                Usinado em tungstênio maciço. Protegido por criptografia quântica.
                Equipado com biometria integrada. Cada detalhe foi projetado para
                quem não aceita o ordinário.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PremiumButton size="lg" onClick={openInviteModal}>Solicitar o Seu</PremiumButton>
                <PremiumButton variant="outline" size="lg" onClick={() => document.getElementById("editions")?.scrollIntoView({ behavior: "smooth" })}>
                  Ver Edições
                </PremiumButton>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex justify-center"
            >
              <AnimatedCard size="lg" interactive />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="relative py-28 md:py-40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
              Especificações Técnicas
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Engenharia além do <span className="text-white/30">convencional.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techSpecs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 hover:border-white/15 transition-colors duration-400 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                    <spec.icon strokeWidth={1.5} className="w-5 h-5 text-white/50" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/25 block">{spec.label}</span>
                    <span className="font-sans text-sm font-medium text-white">{spec.value}</span>
                  </div>
                </div>
                <p className="font-sans text-xs text-white/35 leading-relaxed">{spec.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Editions */}
      <section id="editions" className="relative py-28 md:py-40 border-t border-white/5">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-white/[0.015] blur-[100px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
              Edições
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Escolha seu <span className="text-white/30">nível.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {editions.map((edition, i) => (
              <motion.div
                key={edition.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative rounded-2xl border bg-white/[0.02] p-8 flex flex-col ${
                  edition.recommended
                    ? "border-white/20 ring-1 ring-white/10"
                    : "border-white/8"
                } hover:border-white/20 transition-colors duration-400`}
              >
                {edition.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white text-black px-4 py-1 rounded-full">
                    <Crown className="w-3 h-3" />
                    <span className="font-sans text-[9px] uppercase tracking-widest font-bold">Recomendado</span>
                  </div>
                )}

                {/* Card preview bar */}
                <div className={`h-2 w-full rounded-full bg-gradient-to-r ${edition.gradient} mb-8 opacity-60`} />

                <h3 className="font-serif text-2xl text-white mb-1">{edition.name}</h3>
                <p className="font-sans text-xs text-white/35 mb-8">{edition.tagline}</p>

                <ul className="space-y-3 flex-1">
                  {edition.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white/50" />
                      </div>
                      <span className="font-sans text-sm text-white/60">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <PremiumButton
                    variant={edition.recommended ? "primary" : "outline"}
                    className="w-full"
                    onClick={openInviteModal}
                  >
                    Solicitar {edition.name.split(" ")[0]}
                  </PremiumButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-28 md:py-40 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
              Comparativo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Por que HyperCard é <span className="text-white/30">incomparável.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="grid grid-cols-3 gap-0 bg-white/[0.04] border-b border-white/8">
              <div className="p-5">
                <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">Recurso</span>
              </div>
              <div className="p-5 text-center border-l border-white/8">
                <span className="font-serif text-sm text-white">HyperCard</span>
              </div>
              <div className="p-5 text-center border-l border-white/8">
                <span className="font-sans text-[10px] uppercase tracking-widest text-white/20">Outros</span>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 gap-0 border-b border-white/5 last:border-0 ${
                  i % 2 === 0 ? "bg-white/[0.01]" : ""
                }`}
              >
                <div className="p-5">
                  <span className="font-sans text-sm text-white/60">{row.feature}</span>
                </div>
                <div className="p-5 text-center border-l border-white/5 flex items-center justify-center">
                  {typeof row.hyper === "boolean" ? (
                    row.hyper ? (
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    ) : (
                      <X className="w-4 h-4 text-white/20" />
                    )
                  ) : (
                    <span className="font-mono text-sm text-white/80">{row.hyper}</span>
                  )}
                </div>
                <div className="p-5 text-center border-l border-white/5 flex items-center justify-center">
                  {typeof row.others === "boolean" ? (
                    row.others ? (
                      <Check className="w-4 h-4 text-white/30" />
                    ) : (
                      <X className="w-4 h-4 text-white/15" />
                    )
                  ) : (
                    <span className="font-sans text-xs text-white/30">{row.others}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
