"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { InviteModal } from "@/components/sections/invite-modal"

type ModalContextType = {
  openInviteModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isInviteOpen, setIsInviteOpen] = useState(false)

  return (
    <ModalContext.Provider value={{ openInviteModal: () => setIsInviteOpen(true) }}>
      {children}
      <InviteModal open={isInviteOpen} onOpenChange={setIsInviteOpen} />
    </ModalContext.Provider>
  )
}

export const useModals = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider")
  }
  return context
}
