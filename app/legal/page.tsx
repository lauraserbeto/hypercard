"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"

export default function LegalPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-28 md:pt-44 md:pb-40">
        <div className="max-w-4xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
             <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/35 mb-6">
              Legal
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
              Termos e
              <br />
              <span className="text-white/30 italic">Privacidade.</span>
            </h1>
            <p className="font-sans text-base text-white/40 leading-relaxed mb-16">
              Última atualização: Outubro de 2025
            </p>
          </motion.div>

          <div className="prose prose-invert prose-stone max-w-none">
            <h2 className="font-serif text-2xl text-white mb-4">1. Privacidade Zero-Knowledge</h2>
            <p className="font-sans text-white/60 mb-8 leading-relaxed">
              A HyperCard adota uma arquitetura de privacidade Zero-Knowledge. Isso significa que nossos sistemas são projetados para não reter dados além do estritamente necessário para o cumprimento regulatório. Não vendemos, compartilhamos ou alugamos informações de nossos membros. Acreditamos que a privacidade é um direito fundamental, não um benefício.
            </p>

            <h2 className="font-serif text-2xl text-white mb-4">2. Coleta de Dados</h2>
            <p className="font-sans text-white/60 mb-8 leading-relaxed">
              Os dados coletados durante o onboarding são armazenados em clusters air-gapped com criptografia pós-quântica. O acesso interno é rigorosamente auditado e limitado a um comitê de compliance sênior. 
            </p>

            <h2 className="font-serif text-2xl text-white mb-4">3. Termos de Prestação de Serviço</h2>
            <p className="font-sans text-white/60 mb-8 leading-relaxed">
              O uso do HyperCard está condicionado à adesão aos nossos padrões de conduta e à conformidade com as regulamentações vigentes de combate à lavagem de dinheiro (AML) e conheça-seu-cliente (KYC). A instituição reserva-se o direito de revogar o convite de membros que violem as políticas de integridade.
            </p>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
