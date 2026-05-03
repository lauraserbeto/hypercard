"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { PremiumButton } from "@/components/ui/premium-button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function InviteModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [step, setStep] = useState(1) // 1: Form, 2: Success

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <Dialog 
      open={open} 
      onOpenChange={(val) => {
        onOpenChange(val)
        if (!val) {
          // Reset after animation finishes
          setTimeout(() => setStep(1), 300)
        }
      }}
    >
      <DialogContent className="bg-black/95 border-white/10 backdrop-blur-2xl text-white sm:max-w-[480px] p-0 overflow-hidden rounded-3xl">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 space-y-8"
            >
              <DialogHeader className="space-y-3">
                <DialogTitle className="font-serif text-3xl md:text-4xl text-center leading-tight">
                  Solicitar <br /> <span className="text-white/40 italic">Acesso Exclusivo</span>
                </DialogTitle>
                <DialogDescription className="text-white/35 text-center font-sans text-[13px] leading-relaxed max-w-[320px] mx-auto">
                  Preencha os dados abaixo para iniciar seu processo de admissão no clube financeiro mais fechado do país.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-sans">Nome Completo</label>
                    <input 
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-sans placeholder:text-white/10 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300"
                      placeholder="Ex: Alexander von Platinum"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-sans">E-mail Corporativo</label>
                    <input 
                      required
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-3.5 text-sm font-sans placeholder:text-white/10 focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all duration-300"
                      placeholder="seu.nome@empresa.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-sans">Renda Estimada</label>
                      <Select defaultValue="50k">
                        <SelectTrigger className="w-full bg-white/[0.03] border-white/10 rounded-2xl h-auto py-3.5 px-5 text-sm font-sans text-white/50 focus:ring-0 focus:border-white/30 transition-all duration-300">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/95 border-white/10 backdrop-blur-xl rounded-2xl text-white">
                          <SelectItem value="50k">Acima de R$ 50k</SelectItem>
                          <SelectItem value="150k">Acima de R$ 150k</SelectItem>
                          <SelectItem value="500k">Acima de R$ 500k</SelectItem>
                          <SelectItem value="hnwi">HNWI / Private</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1 font-sans">Patrimônio</label>
                      <Select defaultValue="10m">
                        <SelectTrigger className="w-full bg-white/[0.03] border-white/10 rounded-2xl h-auto py-3.5 px-5 text-sm font-sans text-white/50 focus:ring-0 focus:border-white/30 transition-all duration-300">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/95 border-white/10 backdrop-blur-xl rounded-2xl text-white">
                          <SelectItem value="10m">Até R$ 10M</SelectItem>
                          <SelectItem value="50m">R$ 10M - R$ 50M</SelectItem>
                          <SelectItem value="50mplus">R$ 50M+</SelectItem>
                          <SelectItem value="family">Family Office</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <PremiumButton type="submit" className="w-full py-5 text-xs shadow-2xl shadow-white/5">
                    Enviar Solicitação
                  </PremiumButton>
                </div>

                <div className="flex items-center justify-center gap-2 pt-2">
                   <div className="w-1 h-1 rounded-full bg-white/20" />
                   <p className="text-[9px] uppercase tracking-[0.2em] text-white/15 font-sans">
                     Processamento por Criptografia Quântica
                   </p>
                   <div className="w-1 h-1 rounded-full bg-white/20" />
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="p-12 md:p-16 flex flex-col items-center text-center space-y-8"
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-white/20 blur-2xl rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                  >
                      <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={1} />
                  </motion.div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-serif text-3xl md:text-4xl text-white">Solicitação em Análise</h3>
                <p className="text-white/40 font-sans text-sm max-w-[320px] mx-auto leading-relaxed">
                    Seu perfil foi encaminhado para nossa mesa de concierge. 
                    Aguarde o contato de um consultor em até 72 horas úteis.
                </p>
              </div>

              <div className="pt-4 w-full">
                <PremiumButton variant="outline" className="w-full py-4 text-[10px]" onClick={() => onOpenChange(false)}>
                  Entendido
                </PremiumButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
