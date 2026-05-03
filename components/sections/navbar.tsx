"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { PremiumButton } from "@/components/ui/premium-button"
import { useModals } from "@/components/providers/modal-provider"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Soluções", href: "/#soluções" },
  { label: "O Cartão", href: "/cartao" },
  { label: "Sobre Nós", href: "/sobre" },
]

export function Navbar() {
  const { openInviteModal } = useModals()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const pathname = usePathname()

  // Track scroll for background blur
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 40))
    return () => unsub()
  }, [scrollY])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  return (
    <>
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/10"
        style={{ opacity: borderOpacity }}
      />
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="font-serif text-xl text-white tracking-wider"
          >
            HYPER<span className="text-white/40">CARD</span>
          </Link>
        </motion.div>

        {/* Nav Links - Desktop */}
        <motion.ul
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`font-sans text-[11px] uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? "text-white" : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </motion.ul>

        {/* Actions (CTA + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Esconde o CTA em telas muito pequenas (abaixo de 360px) para caber o hamburger, mas mantém em telas mobile normais se quiser */}
            <div className="hidden sm:block">
              <PremiumButton size="sm" onClick={openInviteModal}>Solicitar Convite</PremiumButton>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden flex items-center justify-center text-white/80 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </nav>
    </motion.header>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl md:hidden flex flex-col"
        >
          {/* Header inside menu */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-xl text-white tracking-wider"
            >
              HYPER<span className="text-white/40">CARD</span>
            </Link>
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10 px-6">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-3xl tracking-wide transition-colors ${
                      isActive ? "text-white" : "text-white/40 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + navItems.length * 0.1 }}
              className="mt-8 w-full max-w-[240px]"
            >
              <PremiumButton 
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false)
                  openInviteModal()
                }}
              >
                Solicitar Convite
              </PremiumButton>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
