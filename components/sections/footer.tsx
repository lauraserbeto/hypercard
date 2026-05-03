"use client"

import { motion } from "framer-motion"
import { PremiumButton } from "@/components/ui/premium-button"
import { useModals } from "@/components/providers/modal-provider"
import Link from "next/link"

const footerLinks = {
  Produto: [
    { label: "Benefícios", href: "/#soluções" },
    { label: "O Cartão", href: "/cartao" },
    { label: "App Mobile", href: "/#app" },
    { label: "Segurança", href: "/seguranca" },
  ],
  Empresa: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Carreiras", href: "/carreiras" },
    { label: "Contato", href: "/contato" },
  ],
  Legal: [
    { label: "Termos e Privacidade", href: "/legal" },
    { label: "Compliance", href: "/compliance" },
  ],
  Atendimento: [
    { label: "Concierge Global", href: "/concierge" },
    { label: "Dúvidas Frequentes", href: "/#faq" },
  ],
}

export function PremiumFooter() {
  const { openInviteModal } = useModals()
  return (
    <footer>
      {/* CTA Band - Dark */}
      <div className="bg-black border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <div className="text-center md:text-left">
              <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight tracking-tight text-balance mb-4">
                Pronto para elevar
                <br />
                <span className="text-white/35">seu padrão financeiro?</span>
              </h2>
              <p className="font-sans text-sm text-white/40 max-w-md leading-relaxed">
                Junte-se a um círculo seleto de membros que exigem o melhor — e recebem.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <PremiumButton size="lg" onClick={openInviteModal}>Solicitar Convite</PremiumButton>
              <span className="font-sans text-[10px] uppercase tracking-widest text-white/20">
                Vagas limitadas
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Light */}
      <div className="bg-stone-50 text-stone-900">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-8">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between gap-12 pb-12 border-b border-stone-200">
            {/* Brand */}
            <div className="flex-shrink-0">
              <Link href="/" className="font-serif text-2xl text-stone-900 tracking-wider mb-3 block">
                HYPER<span className="text-stone-400">CARD</span>
              </Link>
              <p className="font-sans text-xs text-stone-400 leading-relaxed max-w-[200px]">
                Serviços financeiros exclusivos para quem define o padrão.
              </p>

              {/* Regulatory badges */}
              <div className="flex items-center gap-3 mt-6">
                {["BACEN", "ISO 27001", "PCI DSS"].map((badge) => (
                  <span
                    key={badge}
                    className="font-mono text-[8px] uppercase tracking-widest text-stone-400 border border-stone-300 px-2 py-1 rounded"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Links grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <p className="font-sans text-[10px] uppercase tracking-widest text-stone-400 mb-4">
                    {category}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="font-sans text-xs text-stone-500 hover:text-stone-900 transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
            <p className="font-sans text-xs text-stone-400">
              &copy; {new Date().getFullYear()} HyperCard Serviços Financeiros S.A. Todos os direitos reservados.
            </p>
            <p className="font-sans text-[10px] text-stone-400 text-center md:text-right leading-relaxed max-w-md">
              HyperCard não é um banco. Os serviços são operados em parceria com instituições financeiras regulamentadas pelo Banco Central do Brasil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
