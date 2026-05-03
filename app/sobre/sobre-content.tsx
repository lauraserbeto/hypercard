"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"
import { PremiumButton } from "@/components/ui/premium-button"
import { useModals } from "@/components/providers/modal-provider"
import Image from "next/image"
import {
  Eye,
  Lock,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react"

const timeline = [
  { year: "2018", title: "A Visão Nasce", description: "Um grupo de ex-executivos da Goldman Sachs e JP Morgan se reúne em São Paulo com uma ideia: criar um serviço financeiro verdadeiramente exclusivo para o mercado latino-americano." },
  { year: "2019", title: "Primeiros 100 Membros", description: "Lançamento privado apenas por convite. Os 100 primeiros membros incluem CEOs de Fortune 500 e fundadores de unicórnios brasileiros." },
  { year: "2021", title: "Expansão Global", description: "Abertura de operações em 48 países. Parcerias estratégicas com Visa Infinite e redes de lounges executivos internacionais." },
  { year: "2023", title: "Segurança Quântica", description: "Primeira fintech na América Latina a implementar criptografia pós-quântica (CRYSTALS-Kyber) em todas as transações." },
  { year: "2025", title: "R$ 2,4 Trilhões", description: "Marco histórico: patrimônio sob gestão ultrapassa R$ 2,4 trilhões, consolidando o HyperCard como referência global em serviços premium." },
]

const values = [
  { icon: Eye, title: "Discrição", description: "Operamos na sombra para que nossos membros brilhem. Nenhum dado é compartilhado, nenhum nome é revelado." },
  { icon: Sparkles, title: "Excelência", description: "Cada interação é calibrada para superar expectativas. Do concierge ao app, cada pixel é intencional." },
  { icon: Zap, title: "Inovação", description: "Investimos em tecnologia que não existe em bancos tradicionais. Segurança quântica, IA preditiva, biometria avançada." },
  { icon: Target, title: "Precisão", description: "Decisões baseadas em dados, serviços sob medida. Nada genérico, tudo personalizado ao seu perfil." },
  { icon: Lock, title: "Integridade", description: "Regulamentados pelo BACEN, certificados ISO 27001 e PCI DSS. Compliance não é negociável." },
  { icon: Users, title: "Exclusividade", description: "Não somos para todos — e isso é intencional. Selecionamos membros que compartilham nossos valores." },
]

const team = [
  { name: "Eduardo Valente", role: "CEO & Fundador", desc: "Ex-Goldman Sachs. 20 anos em Private Banking.", image: "/images/team/eduardo.png" },
  { name: "Marina Torres", role: "CTO", desc: "Ex-Google DeepMind. PhD em Criptografia Quântica.", image: "/images/team/marina.png" },
  { name: "Rafael Drummond", role: "CFO", desc: "Ex-JP Morgan. Especialista em Family Offices.", image: "/images/team/rafael.png" },
  { name: "Isabela Monteiro", role: "COO", desc: "Ex-McKinsey. Operações em 48 países.", image: "/images/team/isabela.png" },
  { name: "Thiago Nascimento", role: "Head de Concierge", desc: "Ex-Aman Resorts. Experiência de luxo global.", image: "/images/team/thiago.png" },
  { name: "Camila Araújo", role: "Head de Compliance", desc: "Ex-Banco Central. Regulamentação e segurança.", image: "/images/team/camila.png" },
]

export function SobreContent() {
  const { openInviteModal } = useModals()
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero — Manifesto */}
      <section className="relative pt-32 pb-28 md:pt-44 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] blur-[140px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-6">
              Sobre Nós
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
              Não construímos
              <br />
              um banco.
              <br />
              <span className="text-white/30 italic">Construímos um padrão.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/40 leading-relaxed max-w-xl">
              O HyperCard nasceu da frustração com o sistema financeiro tradicional —
              onde fortunas bilionárias são tratadas com a mesma indiferença de uma conta
              corrente comum. Criamos algo diferente.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "2018", label: "Fundação" },
              { value: "2.400+", label: "Membros Ativos" },
              { value: "48", label: "Países" },
              { value: "R$ 2,4T", label: "Patrimônio Sob Gestão" },
            ].map((stat, i) => (
              <div key={stat.label} className="border-t border-white/10 pt-4">
                <p className="font-serif text-3xl md:text-4xl text-white tracking-tight">{stat.value}</p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-white/30 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
              Nossa Trajetória
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Marcos que definiram <span className="text-white/30">o caminho.</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/8 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-0 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-mono text-sm text-white/20 block mb-2">{item.year}</span>
                  <h3 className="font-serif text-xl md:text-2xl text-white mb-3">{item.title}</h3>
                  <p className="font-sans text-sm text-white/40 leading-relaxed">{item.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-1 md:-translate-x-1/2 w-3 h-3 rounded-full border-2 border-white/20 bg-black" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-28 md:py-40 border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-white/[0.015] blur-[100px] pointer-events-none rounded-full" />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-4">
              Nossos Valores
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              O que nos <span className="text-white/30">move.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 hover:border-white/15 transition-colors duration-400 group"
              >
                <div className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center mb-5 group-hover:border-white/20 transition-colors">
                  <value.icon strokeWidth={1.5} className="w-5 h-5 text-white/50" />
                </div>
                <h3 className="font-sans text-base font-medium text-white mb-2">{value.title}</h3>
                <p className="font-sans text-xs text-white/40 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Editorial — where values become visible */}
      <section className="relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/20 mb-8"
          >
            O Universo HyperCard
          </motion.p>

          {/* Asymmetric editorial grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">

            {/* Left — tall hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[520px] group"
            >
              <Image
                src="/images/lifestyle-executive.jpg"
                alt="Executivo HyperCard"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 mb-1">Lifestyle</p>
                <p className="font-serif text-xl text-white leading-snug max-w-xs">
                  Decisões que moldam<br />o mercado.
                </p>
              </div>
            </motion.div>

            {/* Right — two stacked images */}
            <div className="md:col-span-5 flex flex-col gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] md:h-[248px] group"
              >
                <Image
                  src="/images/lifestyle-travel.jpg"
                  alt="Viagem HyperCard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 mb-0.5">Global</p>
                  <p className="font-serif text-base text-white">48 países, sem fronteiras.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] md:h-[248px] group"
              >
                <Image
                  src="/images/lifestyle-dining.jpg"
                  alt="Experiência gastronômica HyperCard"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 mb-0.5">Experiência</p>
                  <p className="font-serif text-base text-white">O melhor de cada momento.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
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
              Liderança
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Os arquitetos do <span className="text-white/30">impossível.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl border border-white/8 bg-white/[0.02] p-7 hover:border-white/15 transition-colors duration-400 group"
              >
                {/* Professional Portrait */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-white/20 transition-colors duration-400">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-sans text-base font-medium text-white mb-0.5">{person.name}</h3>
                <p className="font-sans text-[11px] text-white/30 mb-3">{person.role}</p>
                <p className="font-sans text-xs text-white/40 leading-relaxed">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <PremiumFooter />
    </main>
  )
}
