"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/sections/navbar"
import { PremiumFooter } from "@/components/sections/footer"

const offices = [
  { city: "São Paulo", address: "Av. Brigadeiro Faria Lima, 3477 - 18º Andar", phone: "+55 11 4000-0000" },
  { city: "Nova York", address: "One World Trade Center - Suite 45A", phone: "+1 212 555-0198" },
  { city: "Londres", address: "1 Canada Square, Canary Wharf - Floor 32", phone: "+44 20 7123-4567" },
]

export default function ContatoPage() {
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
              Contato Institucional
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight mb-8">
              Fale com a
              <br />
              <span className="text-white/30 italic">diretoria.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-white/40 leading-relaxed max-w-xl">
              Para assuntos corporativos, imprensa e parcerias institucionais. Se você é membro, utilize o canal seguro do Concierge no aplicativo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24 max-w-5xl">
            {/* Contact Info */}
            <div>
              <h2 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Canais de Atendimento</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-sans text-sm text-white/60 mb-1">Imprensa e Relações Públicas</p>
                  <p className="font-sans text-lg text-white">press@hypercard.com</p>
                </div>
                <div>
                  <p className="font-sans text-sm text-white/60 mb-1">Parcerias B2B</p>
                  <p className="font-sans text-lg text-white">partners@hypercard.com</p>
                </div>
                <div>
                  <p className="font-sans text-sm text-white/60 mb-1">Recursos Humanos</p>
                  <p className="font-sans text-lg text-white">talentos@hypercard.com</p>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div>
              <h2 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-8 border-b border-white/10 pb-4">Nossos Escritórios</h2>
              <div className="space-y-8">
                {offices.map((office) => (
                  <div key={office.city}>
                    <h3 className="font-serif text-2xl text-white mb-2">{office.city}</h3>
                    <p className="font-sans text-sm text-white/50 mb-1">{office.address}</p>
                    <p className="font-sans text-sm text-white/30">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PremiumFooter />
    </main>
  )
}
