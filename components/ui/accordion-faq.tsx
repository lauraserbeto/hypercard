"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface AccordionFAQProps {
  items: FAQItem[]
  className?: string
  dark?: boolean
}

export function AccordionFAQ({ items, className, dark = true }: AccordionFAQProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className={cn("divide-y", dark ? "divide-white/8" : "divide-black/10", className)}>
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className={cn(
              "w-full flex items-start justify-between gap-6 py-6 text-left transition-colors duration-200 cursor-pointer",
              dark
                ? "text-white/80 hover:text-white"
                : "text-black/70 hover:text-black"
            )}
            aria-expanded={openId === item.id}
          >
            <span
              className={cn(
                "font-sans text-base leading-relaxed",
                dark ? "text-white/85" : "text-black/85"
              )}
            >
              {item.question}
            </span>
            <motion.span
              animate={{ rotate: openId === item.id ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className={cn(
                "flex-shrink-0 mt-0.5 w-5 h-5",
                dark ? "text-white/40" : "text-black/40"
              )}
            >
              <Plus strokeWidth={1.5} className="w-5 h-5" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openId === item.id && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden"
              >
                <p
                  className={cn(
                    "pb-6 font-sans text-sm leading-relaxed",
                    dark ? "text-white/50" : "text-black/55"
                  )}
                >
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
